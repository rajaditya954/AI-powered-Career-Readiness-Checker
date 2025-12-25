import React from 'react';
import ReactMarkdown from 'react-markdown';

const ResultCard = ({ result }) => {
    if (!result) return null;

    return (
        <div className="card">
            <h2>Analysis Result</h2>
            {/* The markdown component replaces the <pre> tag */}
            <div className="analysis-content">
                <ReactMarkdown>{result}</ReactMarkdown>
            </div>
        </div>
    );
};

export default ResultCard;