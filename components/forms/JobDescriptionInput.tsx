import { useRef } from "react";

interface JobDescriptionInputProps {
  inputType: "file" | "text";
  onInputTypeChange: (type: "file" | "text") => void;
  textValue: string;
  onTextChange: (value: string) => void;
  file: File | null;
  onFileChange: (file: File | null) => void;
  dragActive: boolean;
  onDrag: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
}

export default function JobDescriptionInput({
  inputType,
  onInputTypeChange,
  textValue,
  onTextChange,
  file,
  onFileChange,
  dragActive,
  onDrag,
  onDrop,
}: JobDescriptionInputProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="space-y-4">
      <label className="block text-lg font-semibold text-gray-900">
        Job Description <span className="text-red-500">*</span>
      </label>

      {/* Toggle Tabs */}
      <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 mb-6">
        <button
          type="button"
          onClick={() => {
            onInputTypeChange("file");
            onTextChange("");
          }}
          className={`flex-1 py-3 px-4 cursor-pointer rounded-md text-sm font-medium transition-colors ${
            inputType === "file"
              ? "bg-white text-blue-600 shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Upload File
        </button>
        <button
          type="button"
          onClick={() => {
            onInputTypeChange("text");
            onFileChange(null);
          }}
          className={`flex-1 py-3 px-4 cursor-pointer rounded-md text-sm font-medium transition-colors ${
            inputType === "text"
              ? "bg-white text-blue-600 shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Paste Text
        </button>
      </div>

      {/* Conditional Input Based on Toggle */}
      {inputType === "text" ? (
        /* Text Input */
        <div className="space-y-3">
          <textarea
            value={textValue}
            onChange={(e) => {
              onTextChange(e.target.value);
              onFileChange(null);
            }}
            placeholder="Paste the job description here..."
            rows={8}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-sm text-gray-800 placeholder-gray-500 shadow-sm"
          />
        </div>
      ) : (
        /* File Upload */
        <div className="space-y-3">
          <div
            className={`relative border-2 border-dashed rounded-xl p-8 transition-all duration-200 ${
              file
                ? "border-green-500 bg-green-50"
                : "border-gray-300 hover:border-gray-400"
            }`}
            onDragEnter={onDrag}
            onDragLeave={onDrag}
            onDragOver={onDrag}
            onDrop={onDrop}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.docx,.doc"
              onChange={(e) => {
                onFileChange(e.target.files?.[0] || null);
                onTextChange("");
              }}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="text-center">
              {file ? (
                <div className="space-y-2">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-green-700 font-medium">{file.name}</p>
                  <p className="text-sm text-green-600">
                    File uploaded successfully
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                    <svg
                      className="w-8 h-8 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-800 font-medium">
                    Drop your job description here or click to browse
                  </p>
                  <p className="text-sm text-gray-600">
                    Supports PDF, DOC, DOCX files
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
