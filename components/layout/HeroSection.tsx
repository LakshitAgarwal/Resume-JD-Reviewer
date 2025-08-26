export default function HeroSection() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 pt-16 pb-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-6">
          AI-Powered Resume Analysis
        </h2>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Get instant, professional feedback on how well your resume matches any
          job description. Powered by advanced AI to help you land your dream
          job.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 mb-12">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Instant Analysis</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>AI-Powered</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span>Professional Insights</span>
          </div>
        </div>
      </div>
    </section>
  );
}
