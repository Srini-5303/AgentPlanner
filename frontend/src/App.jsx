import React, { useState } from 'react';
import './App.css';
import { WorkflowGraph } from './components/WorkflowGraph';

function App() {
  const [projectInput, setProjectInput] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="container">
      <h1 className="title">AgentPlanner</h1>

      <div className="card">
        <label htmlFor="project-input" className="label">Enter your project idea:</label>
        <textarea
          id="project-input"
          className="textarea"
          value={projectInput}
          onChange={(e) => setProjectInput(e.target.value)}
          placeholder="e.g., Build a chatbot web app..."
        />
        <button onClick={handleSubmit} className="button">Generate Plan</button>
      </div>

      {submitted && (
        <div className="grid">
          <div className="card">
            <h2 className="subtitle">📋 Task Summary</h2>
            <pre className="summary">
1. Define project scope and requirements
2. Design UI wireframes
3. Set up backend (FastAPI)
4. Implement frontend (React + CSS)
5. Integrate agents via API
6. Visualize task dependencies
7. Deploy and test
            </pre>
          </div>

          <div className="card">
            <h2 className="subtitle">🕸️ Workflow Visualization</h2>
            <WorkflowGraph />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
