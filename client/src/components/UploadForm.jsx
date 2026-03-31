import { useState, useRef } from "react";
import { analyzeResume } from "../services/api";

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Data Analyst",
  "UI/UX Designer",
  "Data Scientist",
  "Data Engineer",
];

const UploadForm = ({ setResult, setLoading, loading }) => {
  const [file, setFile] = useState(null);
  const [role, setRole] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  const handleSubmit = async () => {
    if (!file || !role) {
      alert("Please upload a resume and select a role");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);
    formData.append("role", role);

    try {
      setLoading(true);
      const res = await analyzeResume(formData);
      setResult(res.data.analysis);
    } catch (err) {
      alert("Analysis failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile.type === "application/pdf") {
        setFile(droppedFile);
      } else {
        alert("Please upload a PDF file.");
      }
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const removeFile = (e) => {
    e.stopPropagation();
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <>
      {/* Role Tags (Dribbble-style pill selectors) */}
      <div className="role-tags">
        <span className="role-tags__label">Select Role</span>
        {roles.map((r) => (
          <button
            key={r}
            className={`role-tag ${role === r ? "role-tag--active" : ""}`}
            onClick={() => setRole(r)}
            type="button"
          >
            {r}
          </button>
        ))}
      </div>

      {/* Upload Card */}
      <div className="upload-card">
        <div className="upload-card__header">
          <div className="upload-card__icon">📄</div>
          <div>
            <div className="upload-card__title">Upload Resume</div>
            <div className="upload-card__subtitle">
              PDF format supported &middot; Max 10MB
            </div>
          </div>
        </div>

        {/* Dropzone */}
        <div
          className={`dropzone ${dragActive ? "dropzone--active" : ""} ${
            file ? "dropzone--has-file" : ""
          }`}
          onClick={() => fileInputRef.current?.click()}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            id="resume-upload"
          />
          {file ? (
            <div className="dropzone__file-info">
              <span className="file-icon">📎</span>
              {file.name}
              <button
                className="dropzone__file-remove"
                onClick={removeFile}
                type="button"
                aria-label="Remove file"
              >
                ✕
              </button>
            </div>
          ) : (
            <>
              <span className="dropzone__icon">☁️</span>
              <p className="dropzone__text">
                Drag & drop your resume or <span>browse files</span>
              </p>
              <p className="dropzone__hint">Supports PDF files</p>
            </>
          )}
        </div>

        {/* Hidden select for accessibility — role is selected via tags */}
        <div className="role-select-wrapper" style={{ display: "none" }}>
          <label htmlFor="role-select">Target Role</label>
          <select
            id="role-select"
            className="role-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select Role</option>
            {roles.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        {/* Analyze Button */}
        <button
          className="analyze-btn"
          onClick={handleSubmit}
          disabled={loading || !file || !role}
          id="analyze-button"
        >
          <span className="analyze-btn__text">
            {loading ? (
              <>
                <div className="spinner"></div>
                Analyzing...
              </>
            ) : (
              <>
                ✦ Analyze Resume
              </>
            )}
          </span>
        </button>
      </div>
    </>
  );
};

export default UploadForm;
