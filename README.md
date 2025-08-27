# 🚀 Resume Analysis Tool 

This is a web application that helps users analyze their resumes against specific job descriptions using Google's Gemini AI model. It extracts text from uploaded resumes (PDF or DOCX) and job descriptions, then leverages the AI to provide an overall summary, highlight key strengths, and suggest improvements. This tool aims to provide valuable insights to job seekers, helping them tailor their resumes for specific roles and increase their chances of landing interviews.

## ✨ Key Features

- **Resume and Job Description Upload:** Users can upload their resume (PDF or DOCX format) and provide a job description either by pasting text or uploading a file.
- **Automated Text Extraction:** The application automatically extracts text from uploaded files, handling both PDF and DOCX formats.
- **Overall Summary:** Generates a concise summary of the resume's alignment with the job description.
- **Key Strengths Identification:** Highlights the key strengths of the resume based on the job description requirements.
- **Improvement Suggestions:** Provides actionable suggestions for improving the resume, including specific areas and examples.
- **User-Friendly Interface:** Offers a clean and intuitive interface for easy navigation and use.

## 🛠️ Tech Stack

- **Frontend:**
    - React
    - Next.js
    - Tailwind CSS
    - TypeScript
- **Backend:**
    - Next.js API Routes
    - Node.js
- **AI:**
    - Google Gemini via `@google/generative-ai`
- **File Parsing:**
    - `pdf2json` (for PDF extraction)
    - `mammoth` (for DOCX extraction)
- **Build Tools:**
    - npm or yarn
    - TypeScript compiler
- **Other:**
    - `next/font/google` (for Google Fonts)

## 📦 Getting Started

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn
- Google Gemini API key (set as environment variable `GEMINI_API_KEY`)

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository_url>
    cd <repository_directory>
    ```

2.  Install dependencies:

    ```bash
    npm install  # or yarn install
    ```

3.  Set up environment variables:

    Create a `.env.local` file in the root directory and add your Google Gemini API key:

    ```
    GEMINI_API_KEY=YOUR_GEMINI_API_KEY
    ```

### Running Locally

1.  Start the development server:

    ```bash
    npm run dev  # or yarn dev
    ```

2.  Open your browser and navigate to `http://localhost:3000`.

## 💻 Usage

1.  Upload your resume in PDF or DOCX format, or paste the text.
2.  Provide the job description by either pasting the text or uploading a file.
3.  Click the "Analyze" button.
4.  View the analysis results, including the overall summary, key strengths, and improvement suggestions.

## 📂 Project Structure

```
├── app
│   ├── api
│   │   └── getData
│   │       └── route.ts
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── forms
│   │   ├── FileUpload.tsx
│   │   └── JobDescriptionInput.tsx
│   └── home
│       └── resultComponent.tsx
├── lib
│   └── constants.js
├── next.config.js
├── public
│   └── ...
├── styles
│   └── globals.css
├── tsconfig.json
└── README.md
```

## 📸 Screenshots

(Screenshots will be added here)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with clear and concise messages.
4.  Submit a pull request.


## 📬 Contact

If you have any questions or suggestions, please feel free to contact me at [lakshit7811@gmail.com](mailto:lakshit7811@gmail.com).

## 💖 Thanks Message

Thank you for checking out this project! I hope it helps you in your job search. Your feedback and contributions are highly appreciated.

This is written by [readme.ai](https://readme-generator-phi.vercel.app/) - Generate stunning READMEs effortlessly.
