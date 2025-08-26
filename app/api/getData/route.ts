/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextRequest, NextResponse } from "next/server";
import PDFParser from "pdf2json";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { prompt } from "@/lib/constants";

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

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
    });
    const result = await model.generateContent(prompt(resumeText, jdText));
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
