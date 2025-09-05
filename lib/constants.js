export const prompt = (resumeText, jdText) => `
You are an elite technical recruiter and career coach, specializing in placing top-tier talent at FAANG-level companies. You have a razor-sharp eye for detail and an expert understanding of how to align a resume with a job description for maximum impact. Your feedback is critical, direct, and incredibly valuable.

Your task is to conduct a rigorous analysis of the following resume against the provided job description. Base your entire analysis STRICTLY on the text provided.

---RESUME START---
${resumeText}
---RESUME END---

---JOB DESCRIPTION START---
${jdText}
---JOB DESCRIPTION END---

Now, perform the analysis and return a single, clean JSON object with the following structure and nothing else. Do not include any introductory text or markdown formatting.

Your JSON object must contain these keys:

1.  **"overallSummary"**: A concise, professional summary (2-3 sentences) of the candidate's fit, as if you were presenting them to a hiring manager.

2.  **"keyStrengths"**: An array of strings. Each string should highlight a specific strength from the resume that directly maps to a key requirement in the job description.

3.  **"improvementSuggestions"**: This is the most critical part. Provide an array of JSON objects, where each object identifies a specific area for improvement. Each object must have three keys:
  * **"area"**: The type of issue (e.g., "Missing Keyword", "Weak Action Verb", "Lacks Quantification", "Vague Responsibility").
  * **"suggestion"**: A highly specific, actionable suggestion for the user. For example, "Your experience with 'developing APIs' could be strengthened by using a more impactful verb like 'Architected' or 'Engineered'.
  * **"example"**: A rewritten version of a resume bullet point or a new bullet point the user could add. For example, "Change 'Worked on a project to improve speed' to 'Increased API response time by 15% by implementing a caching layer'."

Example for "improvementSuggestions":
[
{
  "area": "Missing Keyword",
  "suggestion": "The job description explicitly mentions 'TypeScript', which is not listed in your skills or projects. If you have this experience, it's crucial to add it.",
  "example": "Add 'TypeScript' to your skills section."
},
{
  "area": "Lacks Quantification",
  "suggestion": "Your bullet point about managing a system is good, but lacks impact. Add a metric to show the scale of your work.",
  "example": "Rewrite 'Managed the user authentication system' to 'Owned and maintained the user authentication system, serving over 50,000 active users.'"
}
]

  """
  `;

export const resumePrompt = (resumeBasicInfo) => `
You are an elite technical recruiter and career coach. Your task is to generate a LaTeX resume using the provided user data.

CRITICAL INSTRUCTIONS:
1. Use ONLY the data provided in the RESUME BASIC INFO section below
2. Replace ALL placeholder content with actual user data
3. If a field is missing or empty, skip that section entirely - DO NOT create empty sections
4. DO NOT include any section headings (Education, Experience, Projects, Technical Skills) if there is no data for that section
5. If skills field is empty or missing, DO NOT include Technical Skills section at all
6. Return ONLY the LaTeX code - no markdown blocks, no explanations, no backticks
7. Do NOT include \`\`\`latex or \`\`\` in your response

FORMATTING REQUIREMENTS (ONLY if data exists):
8. For any description fields (job description, project description), break them into bullet points using \\resumeItem{} commands
9. In descriptions, identify and bold important technical terms, technologies, frameworks, metrics, and achievements using \\textbf{} LaTeX command
10. For project links, format the project heading as: {\\textbf{ProjectName} $|$ \\emph{Technologies}}{Date} and then add a separate \\resumeItem{} at the END of each project's description with the links formatted as: \\textbf{Links:} \\href{link}{\\underline{Live Demo}} $|$ \\href{githublink}{\\underline{GitHub}}
11. ONLY if skills data exists: Combine ALL skills (both technical skills and general skills) into ONE "Technical Skills" section only. Do NOT create separate "Skills" section
12. ONLY if skills data exists: In the Technical Skills section, categorize them into appropriate subsections like:
    - Languages: Programming languages (e.g., Python, JavaScript, Java)
    - Frameworks: Web frameworks, libraries (e.g., React, Flask, Django)
    - Developer Tools: IDEs, version control, deployment tools (e.g., Git, Docker, VS Code)
    - Databases: Database systems (e.g., PostgreSQL, MongoDB, MySQL)
    - Technologies: Other technical skills (e.g., AWS, Kubernetes, REST APIs)
    - Soft Skills: Communication, leadership, problem-solving skills
13. Parse comma-separated skills and group them logically (only if skills provided)
14. Use proper LaTeX formatting for dates, company names, and project titles
15. when you are putting the profile links in the heading, use the following format: \\href{actuallink}{\\underline{PlatformName}} where the text should ONLY be the platform name (e.g., GitHub, LinkedIn, LeetCode) and the link should be the actual URL. Do NOT show the full URL as text.

---RESUME BASIC INFO START---
${JSON.stringify(resumeBasicInfo, null, 2)}
---RESUME BASIC INFO END---

this is the template for the resume:

%-------------------------
% Resume in Latex
% Author : Jake Gutierrez
% Based off of: https://github.com/sb2nov/resume
% License : MIT
%------------------------

\\documentclass[letterpaper,11pt]{article}

\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{verbatim}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage[english]{babel}
\\usepackage{tabularx}
\\input{glyphtounicode}


%----------FONT OPTIONS----------
% sans-serif
% \\usepackage[sfdefault]{FiraSans}
% \\usepackage[sfdefault]{roboto}
% \\usepackage[sfdefault]{noto-sans}
% \\usepackage[default]{sourcesanspro}

% serif
% \\usepackage{CormorantGaramond}
% \\usepackage{charter}


\\pagestyle{fancy}
\\fancyhf{} % clear all header and footer fields
\\fancyfoot{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}

% Adjust margins
\\addtolength{\\oddsidemargin}{-0.5in}
\\addtolength{\\evensidemargin}{-0.5in}
\\addtolength{\\textwidth}{1in}
\\addtolength{\\topmargin}{-.5in}
\\addtolength{\\textheight}{1.0in}

\\urlstyle{same}

\\raggedbottom
\\raggedright
\\setlength{\\tabcolsep}{0in}

% Sections formatting
\\titleformat{\\section}{
  \\vspace{-10pt}\\scshape\\raggedright\\large
}{}{0em}{}[\\color{black}\\titlerule \\vspace{-5pt}]

% Ensure that generate pdf is machine readable/ATS parsable
\\pdfgentounicode=1

%-------------------------
% Custom commands
\\newcommand{\\resumeItem}[1]{
  \\item\\small{
    #1 \\vspace{-2pt}
  }
}

\\newcommand{\\resumeSubheading}[4]{
  \\vspace{-4pt}\\item
    \\begin{tabular*}{0.97\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
      \\textbf{#1} & #2 \\\\
      \\textit{\\small#3} & \\textit{\\small #4} \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeSubSubheading}[2]{
    \\item
    \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
      \\textit{\\small#1} & \\textit{\\small #2} \\\\
    \\end{tabular*}\\vspace{-6pt}
}

\\newcommand{\\resumeProjectHeading}[2]{
    \\item
    \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
      \\small#1 & #2 \\\\
    \\end{tabular*}\\vspace{-6pt}
}

\\newcommand{\\resumeSubItem}[1]{\\resumeItem{#1}\\vspace{-4pt}}

\\renewcommand\\labelitemii{$\\vcenter{\\hbox{\\tiny$\\bullet$}}}

\\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=0.15in, label={}]}
\\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}
\\newcommand{\\resumeItemListStart}{\\begin{itemize}}
\\newcommand{\\resumeItemListEnd}{\\end{itemize}\\vspace{-8pt}}

%-------------------------------------------
%%%%%%  RESUME STARTS HERE  %%%%%%%%%%%%%%%%%%%%%%%%%%%%


\\begin{document}

%----------HEADING----------
% \\begin{tabular*}{\\textwidth}{l@{\\extracolsep{\\fill}}r}
%   \\textbf{\\href{http://sourabhbajaj.com/}{\\Large Sourabh Bajaj}} & Email : \\href{mailto:sourabh@sourabhbajaj.com}{sourabh@sourabhbajaj.com}\\\\
%   \\href{http://sourabhbajaj.com/}{http://www.sourabhbajaj.com} & Mobile : +1-123-456-7890 \\\\
% \\end{tabular*}

\\begin{center}
    \\textbf{\\Huge \\scshape Lakshit Agarwal} \\\\ \\vspace{1pt}
    \\small (+91) 9511517845 $|$ \\href{mailto:lakshit7811@gmail.com}{\\underline{lakshit7811@gmail.com}} $|$ 
    \\href{https://www.linkedin.com/in/lakshit-agarwal-6082b9216/}{\\underline{linkedin/lakshit-agarwal}} $|$
    \\href{https://github.com/LakshitAgarwal}{\\underline{github/LakshitAgarwal}}
\\end{center}

% -----------EXPERIENCE-----------
\\section{Experience}
  \\resumeSubHeadingListStart

\\resumeSubheading
  {\\textbf{Paytm} $|$ \\emph{Go, SQL, TypeScript, JavaScript, React}}{June 2025 -- Present}
  {Fullstack Developer Intern}{Noida}
  \\resumeItemListStart
    \\resumeItem{Developed \\textbf{logging and monitoring} tools using the \\textbf{ELK Stack} (Elasticsearch, Logstash, Kibana) to track user activity and system performance in lending applications.}
    \\resumeItem{Built \\textbf{dynamic forms} using React, TypeScript, and React Query for platform setup, and \\textbf{integrated backend APIs} to display complex data clearly in the UI.}
     \\resumeItem{Improved development speed by adding \\textbf{local API mocks}, and updating old code to match new business needs.}
  \\resumeItemListEnd
    \\resumeSubHeadingListEnd



% % -----------Multiple Positions Heading-----------
% %    \\resumeSubSubheading
% %     {Software Engineer I}{Oct 2014 - Sep 2016}
% %     \\resumeItemListStart
% %        \\resumeItem{Apache Beam}
% %          {Apache Beam is a unified model for defining both batch and streaming data-parallel processing pipelines}
% %     \\resumeItemListEnd
% %    \\resumeSubHeadingListEnd
% %-------------------------------------------

%     \\resumeSubheading
%       {Information Technology Support Specialist}{Sep. 2018 -- Present}
%       {Southwestern University}{Georgetown, TX}
%       \\resumeItemListStart
%         \\resumeItem{Communicate with managers to set up campus computers used on campus}
%         \\resumeItem{Assess and troubleshoot computer problems brought by students, faculty and staff}
%         \\resumeItem{Maintain upkeep of computers, classroom equipment, and 200 printers across campus}
%     \\resumeItemListEnd

%     \\resumeSubheading
%       {Artificial Intelligence Research Assistant}{May 2019 -- July 2019}
%       {Southwestern University}{Georgetown, TX}
%       \\resumeItemListStart
%         \\resumeItem{Explored methods to generate video game dungeons based off of \\emph{The Legend of Zelda}}
%         \\resumeItem{Developed a game in Java to test the generated dungeons}
%         \\resumeItem{Contributed 50K+ lines of code to an established codebase via Git}
%         \\resumeItem{Conducted  a human subject study to determine which video game dungeon generation technique is enjoyable}
%         \\resumeItem{Wrote an 8-page paper and gave multiple presentations on-campus}
%         \\resumeItem{Presented virtually to the World Conference on Computational Intelligence}
%       \\resumeItemListEnd

%   \\resumeSubHeadingListEnd


%-----------PROJECTS-----------
\\section{Projects}
\\resumeSubHeadingListStart
    \\resumeProjectHeading
        {\\textbf{Readme.ai - AI-Powered Automation Tool} $|$ \\emph{Next.js, TypeScript, Node.js, LangChain, Python}}{June 2025}
        \\resumeItemListStart
            \\resumeItem{
Architected \\textbf{full-stack SaaS application} with \\textbf{multi-agent AI pipeline} using \\textbf{LangChain/LangGraph} to auto-generate professional READMEs from GitHub repos, gaining {\\textbf{1000+ users within one week of launch}}.}
            \\resumeItem{
Built intelligent 3-stage workflow (\\textbf{file selection → summarization → markdown generation}) achieving \\textbf{90\\%+ accuracy} with real-time streaming updates and \\textbf{50-70 second} processing times.}
            \\resumeItem{Engineered production system with TypeScript/Express.js backend, Next.js frontend, \\textbf{multi-LLM provider} support (Gemini, Groq), and enterprise-grade fallback mechanisms.}
           \\resumeItem{\\textbf{Github}: \\href{https://github.com/LakshitAgarwal/readme-generator}{\\underline{github/readme-gen}} \\textbar{} \\textbf{Live}: \\href{https://readme-generator-phi.vercel.app/}{\\underline{Readme.ai}}}

        \\resumeItemListEnd

              \\resumeProjectHeading
          {\\textbf{Freedemy} $|$ \\emph{EJS, NodeJS, HTML, Tailwind}}{May 2023}
          \\resumeItemListStart
            \\resumeItem{Developed the front end of Freedemy, a dynamic platform that curates and displays \\textbf{free Udemy courses} by \\textbf{scraping real-time data from third-party sources}, making quality education easily accessible.}
            \\resumeItem{Implemented a \\textbf{web scraping system} to \\textbf{automatically fetch and update course data}, ensuring the content stays fresh and relevant for users.}
           \\resumeItem{\\textbf{Github}: \\href{https://github.com/LakshitAgarwal/Freedemy}{\\underline{github/freedemy}} \\textbar{} \\textbf{Live}: \\href{https://freedemy.onrender.com/}{\\underline{Freedemy}}}

          \\resumeItemListEnd
   

    \\resumeProjectHeading
          {\\textbf{Yapp - Realtime Chat App} $|$\\emph{ReactJS, WebSockets, Zustand, Express MongoDB, HTML, Tailwind}}{April 2025}
          
          \\resumeItemListStart
            \\resumeItem{Built a full-stack \\textbf{real-time chat} application (Yapp) using the \\textbf{MERN} stack, with \\textbf{WebSocket} integration for instant messaging and \\textbf{Zustand} for efficient client-side state management.}
            \\resumeItem{Implemented secure \\textbf{JWT-based authentication} using \\textbf{HTTP-only cookies} with proper \\textbf{CORS} and \\textbf{CSRF} considerations.}
            \\resumeItem{Designed and deployed a \\textbf{responsive, theme-switchable UI }using Tailwind CSS and DaisyUI.}
           \\resumeItem{\\textbf{Github}: \\href{https://github.com/LakshitAgarwal/Yapp}{\\underline{github/yapp}} \\textbar{} \\textbf{Live}: \\href{https://app.socialmorph.co/}{\\underline{Yapp}}}

        \\resumeItemListEnd


          
    \\resumeSubHeadingListEnd

\\section*{Achievements}

\\resumeItemListStart
\\resumeItem{Achieved \\textbf{9\\textsuperscript{th}} rank out of 250+ teams in the \\textbf{2023 Smart BU Hackathon}.}
  \\resumeItem{Secured \\textbf{19\\textsuperscript{th}} rank out of 410+ teams in the \\textbf{2024 Smart BU Hackathon}, a qualification round for the Smart India Hackathon.}
  
\\resumeItemListEnd

%-----------PROGRAMMING SKILLS-----------
\\section{Technical Skills}
\\begin{itemize}[leftmargin=0.15in, label={}]
    \\small{\\item{
        \\textbf{Languages}{: JavaScript, Java, TypeScript, Python, C++, SQL (PostgreSQL), HTML, CSS} \\\\
        \\textbf{Frameworks}{: Next.js, React, FastAPI, Node.js, Express.js, Mongoose, Prisma, Redux} \\\\
        \\textbf{Tools \\& Technologies}{: Git, GitHub, Docker, Kubernetes, Jenkins, MongoDB, MySQL, PostgreSQL} \\\\
        \\textbf{DevOps \\& Cloud}{: CI/CD, AWS (EC2, S3, Lambda), GCP,} \\\\
        \\textbf{CS Core}{: DBMS, Operating Systems, OOP, Design Thinking} \\\\
        
    }}
\\end{itemize}


%-----------EDUCATION-----------
\\section{Education}
  \\resumeSubHeadingListStart
    \\resumeSubheading
          {Bennett University}{Greater Noida, U.P.}
      {Bachelor of Technology in Computer Science (CGPA: 8.8)}{Sept. 2022 -- May 2026}
    \\resumeSubheading
      {Jesus And Mary Sr. Sec. School}{Bikaner, Rajasthan}
      {Class XII - CBSE (89\\%)}{April 2021 -- May 2022}
    \\resumeSubheading
      {Jesus And Mary Sr. Sec. School}{Bikaner, Rajasthan}
      {Class X - CBSE (95\\%)}{April 2019 -- May 2020}
  \\resumeSubHeadingListEnd






%-------------------------------------------

\\section*{Extra Curricular}

\\resumeItemListStart
  \\resumeItem{Served as \\textbf{Tech Head} of the \\textbf{ACM Student Chapter}, where I led a team of developers and organised multiple high-impact technical events that attracted strong engagement from \\textbf{300+ participants}, significantly enhancing the chapter's outreach.}
 % \\resumeItem{Organised multiple high-impact technical and gamified events that attracted strong engagement from \\textbf{300+ participants}, significantly enhancing the chapter's outreach.}
 %  \\resumeItem{Previously contributed as a \\textbf{Tech Team Member} for one year, supporting the execution of workshops, hackathons, and other technical events.}
\\resumeItemListEnd

\\end{document}

`;
