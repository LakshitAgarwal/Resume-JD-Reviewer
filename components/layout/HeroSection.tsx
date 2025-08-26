export default function HeroSection() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 pt-16 pb-12">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-4 flex justify-center ">
          <span className="relative inline-flex items-center gap-2 rounded-full p-[1px] bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 shadow-[0_0_30px_rgba(79,70,229,0.35)]">
            <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600/20 via-indigo-500/20 to-purple-600/20 blur-md"></span>
            <span className="relative inline-flex items-center rounded-full bg-white/90 px-3 py-1 pl-4 text-xs font-semibold text-indigo-700 backdrop-blur">
              
              <span>AI‑Powered Matching</span>
              <svg
                className="h-3.5 w-3.5 text-indigo-600"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2l.867 5.2L18 8l-5.133 1.8L12 15l-.867-5.2L6 8l5.133-1.8L12 2z" />
              </svg>
            </span>
          </span>
        </div>
        <h2 className="text-5xl mt-10 md:text-6xl py-2 font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-6">
          Match Your Resume To Any JD
        </h2>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Upload your resume and a job description. We score the match,
          highlight your strengths, and generate tailored improvements to boost
          your chances.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 mb-12">
          <div className="flex items-center space-x-2">
            <div className="relative w-4 h-4">
              <span className="absolute inset-0 rounded-full bg-green-400/30 animate-ping"></span>
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
            </div>
            <span className="font-medium text-gray-700">JD Match Score</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="relative w-4 h-4">
              <span className="absolute inset-0 rounded-full bg-blue-400/30 animate-ping"></span>
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
            </div>
            <span className="font-medium text-gray-700">
              Tailored Improvements
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="relative w-4 h-4">
              <span className="absolute inset-0 rounded-full bg-purple-400/30 animate-ping"></span>
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 shadow-[0_0_8px_rgba(168,85,247,0.6)]"></span>
            </div>
            <span className="font-medium text-gray-700">
              ATS‑Friendly Suggestions
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
