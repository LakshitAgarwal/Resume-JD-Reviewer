import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { latexCode } = await req.json();
    const res = await axios.post(
      process.env.LATEX_COMPILER_URL + "/compile",
      { latexCode }
    );

    return NextResponse.json({
      message: "Success",
      data: res.data,
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
