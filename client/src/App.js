import { useState } from "react";
import UploadForm from "./components/UploadForm";
import ResultCard from "./components/ResultCard";
import "./App.css";

function App() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="container">
      <h1>ResumeIQ</h1>
      <p>AI-powered Career Readiness Checker</p>

      <UploadForm setResult={setResult} setLoading={setLoading} />

      {loading && <p>Analyzing resume...</p>}

      <ResultCard result={result} />
    </div>
  );
}

export default App;
