/* eslint-disable @typescript-eslint/no-explicit-any */
export default function ResultComponent({ data }: { data: any }) {
  if (!data) return null;

  const { overallSummary, keyStrengths, improvementSuggestions } = data;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">
          Analysis Complete
        </h2>
        <p className="text-gray-600">
          Here is how your resume matches the job description
        </p>
      </div>

      {/* Summary Card */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
          <h3 className="text-xl font-semibold text-white flex items-center">
            <svg
              className="w-6 h-6 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Overall Assessment
          </h3>
        </div>
        <div className="p-8">
          <p className="text-gray-700 leading-relaxed text-lg">
            {overallSummary}
          </p>
        </div>
      </div>

      {/* Strengths Card */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-6">
          <h3 className="text-xl font-semibold text-white flex items-center">
            <svg
              className="w-6 h-6 mr-3"
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
            Key Strengths
          </h3>
        </div>
        <div className="p-8">
          <div className="grid gap-4">
            {keyStrengths.map((strength: string, index: number) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg border border-green-200"
              >
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 leading-relaxed">{strength}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Improvement Suggestions Card */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-orange-600 to-red-600 px-8 py-6">
          <h3 className="text-xl font-semibold text-white flex items-center">
            <svg
              className="w-6 h-6 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Improvement Suggestions
          </h3>
        </div>
        <div className="p-8">
          <div className="space-y-6">
            {improvementSuggestions.map((suggestion: any, index: number) => (
              <div
                key={index}
                className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex-1 space-y-3">
                      <div>
                        <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                          {suggestion.area}
                        </span>
                        <p className="text-gray-700 leading-relaxed">
                          {suggestion.suggestion}
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border-l-4 border-orange-400">
                        <p className="text-sm font-medium text-gray-600 mb-1">
                          Example:
                        </p>
                        <p className="text-gray-700 italic leading-relaxed">
                          {suggestion.example}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="text-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105"
        >
          Analyze Another Resume
        </button>
      </div>
    </div>
  );
}
