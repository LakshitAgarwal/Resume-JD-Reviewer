/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextRequest, NextResponse } from "next/server";
import PDFParser from "pdf2json";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Google AI client correctly
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

async function getPDFText(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const pdfParser = new PDFParser();

    pdfParser.on("pdfParser_dataError", (errData: any) => {
      reject(new Error(errData.parserError));
    });

    pdfParser.on("pdfParser_dataReady", (pdfData: any) => {
      let text = "";
      pdfData.Pages.forEach((page: any) => {
        page.Texts.forEach((textItem: any) => {
          textItem.R.forEach((run: any) => {
            text += decodeURIComponent(run.T);
          });
        });
        text += " ";
      });
      resolve(text.trim());
    });

    // Convert File to Buffer for pdf2json
    file
      .arrayBuffer()
      .then((arrayBuffer) => {
        const buffer = Buffer.from(arrayBuffer);
        pdfParser.parseBuffer(buffer);
      })
      .catch(reject);
  });
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const resume = formData.get("resume");
    const jobDescriptionText = formData.get("jobDescriptionText") as string;
    const jobDescriptionFile = formData.get("jobDescriptionFile");

    const resumeText = resume instanceof File ? await getPDFText(resume) : "";
    const jdText =
      jobDescriptionFile instanceof File
        ? await getPDFText(jobDescriptionFile)
        : jobDescriptionText || "";

    const prompt = `
  You are an elite technical recruiter and career coach, specializing in placing top-tier talent at FAANG-level companies. You have a razor-sharp eye for detail and an expert understanding of how to align a resume with a job description for maximum impact. Your feedback is critical, direct, and incredibly valuable.

Your task is to conduct a rigorous analysis of the following resume against the provided job description. Base your entire analysis STRICTLY on the text provided.

---RESUME START---
${resumeText}
---RESUME END---

---JOB DESCRIPTION START---
${jdText}
---JOB DESCRIPTION END---

Now, perform the analysis and return a single, clean JSON object with the following structure and nothing else. Do not include any introductory text or markdown formatting.

Your JSON object must contain these keys:

1.  **"matchScore"**: An integer from 0 to 100 representing the resume's alignment with the job description, based on skills, years of experience, and responsibilities.

2.  **"overallSummary"**: A concise, professional summary (2-3 sentences) of the candidate's fit, as if you were presenting them to a hiring manager.

3.  **"keyStrengths"**: An array of strings. Each string should highlight a specific strength from the resume that directly maps to a key requirement in the job description.

4.  **"improvementSuggestions"**: This is the most critical part. Provide an array of JSON objects, where each object identifies a specific area for improvement. Each object must have three keys:
    * **"area"**: The type of issue (e.g., "Missing Keyword", "Weak Action Verb", "Lacks Quantification", "Vague Responsibility").
    * **"suggestion"**: A highly specific, actionable suggestion for the user. For example, "Your experience with 'developing APIs' could be strengthened by using a more impactful verb like 'Architected' or 'Engineered'.
    * **"example"**: A rewritten version of a resume bullet point or a new bullet point the user could add. For example, "Change 'Worked on a project to improve speed' to 'Increased API response time by 15% by implementing a caching layer'."

Example for "improvementSuggestions":
[
  {
    "area": "Missing Keyword",
    "suggestion": "The job description explicitly mentions 'TypeScript', which is not listed in your skills or projects. If you have this experience, it's crucial to add it.",
    "example": "Add 'TypeScript' to your skills section."
  },
  {
    "area": "Lacks Quantification",
    "suggestion": "Your bullet point about managing a system is good, but lacks impact. Add a metric to show the scale of your work.",
    "example": "Rewrite 'Managed the user authentication system' to 'Owned and maintained the user authentication system, serving over 50,000 active users.'"
  }
]

    """
    `;

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
    });
    const result = await model.generateContent(prompt);
    const response = result.response;
    const responseText = response.text();

    // Clean the response in case the model wraps it in markdown
    const cleanedJsonText = responseText.replace(/```json\n?|\n?```/g, "");
    const analysisResult = JSON.parse(cleanedJsonText);

    return NextResponse.json({
      message: "Success",
      data: analysisResult,
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { message: "Error", error: (error as Error).message },
      { status: 500 }
    );
  }
}
