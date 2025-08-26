"use client";
import GitHubButton from "react-github-btn";

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center shadow-sm">
              <svg
                className="h-5 w-5 text-white"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect
                  x="4"
                  y="10"
                  width="3"
                  height="8"
                  rx="1"
                  fill="currentColor"
                />
                <rect
                  x="10"
                  y="6"
                  width="3"
                  height="12"
                  rx="1"
                  fill="currentColor"
                />
                <rect
                  x="16"
                  y="12"
                  width="3"
                  height="6"
                  rx="1"
                  fill="currentColor"
                />
                <path
                  d="M4 8l4 3 3-3 5 4 4-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Resume Analyzer
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Features
            </a>
            <GitHubButton
              href="https://github.com/LakshitAgarwal/Resume-JD-Reviewer"
              data-color-scheme="light: light;"
              data-icon="octicon-star"
              data-size="large"
              data-show-count="true"
              aria-label="Star LakshitAgarwal/Resume-JD-Reviewer on GitHub"
            >
              Star
            </GitHubButton>
          </nav>
        </div>
      </div>
    </header>
  );
}
