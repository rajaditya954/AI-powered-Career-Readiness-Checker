import { useState } from "react";
import UploadForm from "./components/UploadForm";
import ResultCard from "./components/ResultCard";
import "./App.css";

function App() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="app">
      {/* Animated background orbs */}
      <div className="bg-orbs">
        <div className="orb orb--1"></div>
        <div className="orb orb--2"></div>
        <div className="orb orb--3"></div>
      </div>

      <div className="main-container">
        {/* Navbar */}
        <nav className="navbar">
          <div className="navbar__brand">
            <div className="navbar__logo">R</div>
            <span className="navbar__title">ResumeIQ</span>
          </div>
          <span className="navbar__badge">✦ AI Powered</span>
        </nav>

        {/* Hero */}
        <section className="hero">
          <h1 className="hero__title">
            Analyze your resume with <span>AI-powered insights</span>
          </h1>
          <p className="hero__subtitle">
            Upload your resume and get instant, intelligent feedback on your
            career readiness. Powered by Gemini AI to help you land your dream role.
          </p>
        </section>

        {/* Upload Form */}
        <UploadForm setResult={setResult} setLoading={setLoading} loading={loading} />

        {/* Loading State */}
        {loading && (
          <div className="loading-state">
            <div className="loading-state__content">
              <div className="spinner"></div>
              <div className="loading-bar">
                <div className="loading-bar__fill"></div>
              </div>
              <p className="loading-state__text">
                <span>Analyzing</span> your resume with Gemini AI...
              </p>
            </div>
          </div>
        )}

        {/* Results */}
        <ResultCard result={result} />

        {/* Footer */}
        <footer className="footer">
          Built with <span>♥</span> by ResumeIQ &middot; Powered by Gemini AI
        </footer>
      </div>
    </div>
  );
}

export default App;
