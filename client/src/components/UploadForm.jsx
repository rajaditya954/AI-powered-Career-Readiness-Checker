import { useState } from "react";
import { analyzeResume } from "../services/api";

const UploadForm = ({ setResult, setLoading }) => {
    const [file, setFile] = useState(null);
    const [role, setRole] = useState("");

    const handleSubmit = async () => {
        if (!file || !role) {
            alert("Please upload resume and select role");
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
            alert("Analysis failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="card">
            <h2>Upload Resume</h2>

            <input
                type="file"
                accept=".pdf"
                onChange={(e) => setFile(e.target.files[0])}
            />

            <select onChange={(e) => setRole(e.target.value)}>
                <option value="">Select Role</option>
                <option>Frontend Developer</option>
                <option>Backend Developer</option>
                <option>Data Analyst</option>
                <option>UI/UX Designer</option>
                <option>Data Scientist</option>
                <option>Data Engineer</option>
            </select>

            <button onClick={handleSubmit}>Analyze</button>
        </div>
    );
};

export default UploadForm;
