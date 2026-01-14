import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">ResumeIQ</div>
        <div className="nav-right">
          <button className="login">Log in</button>
          <button className="signup">Sign up</button>
        </div>
      </nav>

      <main className="hero">
        <h1>
          Your career is <br /> your canvas.
        </h1>

        <p>
          ResumeIQ uses AI to analyze resumes and guide you toward job-ready
          success.
        </p>

        <div className="input-box">
          <input
            type="file"
            accept="application/pdf"
          />
          <button>Start with AI</button>
        </div>
      </main>
    </div>
  );
}

export default App;
