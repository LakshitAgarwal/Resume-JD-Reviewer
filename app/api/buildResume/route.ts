import { resumePrompt } from "@/lib/constants";
import { model } from "@/lib/geminiInitialisation";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const resumeBasicInfo = await req.json();
    const result = await model.generateContent(resumePrompt(resumeBasicInfo));

    // Clean up the response to remove any markdown formatting
    let latexCode = result.response.text();
    // Remove markdown code blocks if present
    latexCode = latexCode.replace(/```latex\n?/g, "");
    latexCode = latexCode.replace(/```\n?$/g, "");
    latexCode = latexCode.trim();

    return NextResponse.json({
      message: "Success",
      data: latexCode,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Error",
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
