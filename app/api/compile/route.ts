import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  console.log("=== API Route Hit ===");
  try {
    const { latexCode } = await req.json();
    console.log("=== JSON Parsed Successfully ===");

    console.log("LaTeX code length:", latexCode?.length);
    console.log("LaTeX code preview:", latexCode?.substring(0, 500) + "...");
    console.log("LaTeX code full:", latexCode); // Log full code to see issues

    const res = await axios.post(
      process.env.LATEX_COMPILER_URL + "/compile",
      { latexCode },
      {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 30000, // 30 second timeout
      }
    );

    return NextResponse.json({
      message: "Success",
      data: res.data,
    });
    /* eslint-disable @typescript-eslint/no-explicit-any */
  } catch (error: any) {
    console.log("Full error:", error);
    console.log("Error response:", error.response?.data);
    console.log("Error status:", error.response?.status);

    return NextResponse.json(
      {
        message: "Error",
        error: error.message,
        statusCode: error.response?.status,
        responseData: error.response?.data,
      },
      { status: 500 }
    );
  }
}
