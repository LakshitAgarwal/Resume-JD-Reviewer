// "use client";
import axios from "axios";

export default function PreviewButton({ latexCode }: { latexCode: string }) {
  const handlePreview = async (latexCode: string) => {
    try {
      console.log("Sending LaTeX code:", latexCode);
      const res = await axios.post("/api/compile", { latexCode });
      console.log(res.data);
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  return (
    <button
      onClick={() => handlePreview(latexCode)}
      className="aesthetic-button px-10 py-4 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Preview
    </button>
  );
}
