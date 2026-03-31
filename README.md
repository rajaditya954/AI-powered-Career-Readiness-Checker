# ResumeIQ: AI-Powered Career Readiness Checker

ResumeIQ is a premium, full-stack web application that leverages Google's Gemini AI to analyze resumes and provide actionable career readiness insights. Built with a modern, high-performance tech stack and a stunning dark-themed UI.

## 🚀 Features

- **AI-Powered Analysis**: Deep scan of resumes using Gemini 1.5 Flash for ATS scoring, skill gap analysis, and tailored recommendations.
- **Premium UI/UX**: Modern dark-mode interface with glassmorphism effects, smooth animations, and responsive design.
- **Multi-Format Support**: Upload resumes in PDF or Word (.docx) formats.
- **Real-Time Processing**: Instant feedback with interactive charts and structured results.
- **Security First**: Best practices for API key management and file handling.

## 🛠️ Tech Stack

- **Frontend**: React.js, Lucide Icons, Framer Motion
- **Backend**: Node.js, Express.js
- **AI Engine**: Google Gemini 1.5 Flash (Generative AI)
- **Parsing**: `pdf-parse`, `mammoth` (for .docx)
- **Styling**: Vanilla CSS3 (Custom Design System)

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/rajaditya954/AI-powered-Career-Readiness-Checker.git
   cd AI-powered-Career-Readiness-Checker
   ```

2. **Backend Setup**:
   ```bash
   cd server
   npm install
   ```
   Create a `.env` file in the `server` directory:
   ```env
   PORT=5000
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

3. **Frontend Setup**:
   ```bash
   cd ../client
   npm install
   ```

## 🚥 Quick Start

1. **Start Backend**:
   ```bash
   cd server
   npm start
   ```

2. **Start Frontend**:
   ```bash
   cd client
   npm start
   ```

3. **Open Browser**:
   Navigate to `http://localhost:3000`

## 📄 License

MIT
