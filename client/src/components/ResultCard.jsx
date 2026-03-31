import React from 'react';
import ReactMarkdown from 'react-markdown';

const ResultCard = ({ result }) => {
    if (!result) return null;

    return (
        <div className="result-card">
            <div className="result-card__header">
                <div className="result-card__header-left">
                    <div className="result-card__status-dot"></div>
                    <h2>Analysis Complete</h2>
                </div>
                <span className="result-card__badge">✓ Ready</span>
            </div>
            <div className="result-card__body">
                <div className="analysis-content">
                    <ReactMarkdown>{result}</ReactMarkdown>
                </div>
            </div>
        </div>
    );
};

export default ResultCard;