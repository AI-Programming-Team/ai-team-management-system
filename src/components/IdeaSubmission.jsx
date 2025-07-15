import React, { useState } from 'react';
import axios from 'axios';

function IdeaSubmission() {
  const [idea, setIdea] = useState('');
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const baseUrl =
        import.meta.env.VITE_BACKEND_URL || window.location.origin;
      const response = await axios.post(`${baseUrl}/submit-idea`, {
        user_id: 'user123', // Replace dynamically later
        idea: idea,
      });

      setQuestions(response.data.brainstorming_questions);
    } catch (error) {
      console.error('Error fetching brainstorming questions:', error);
    }
    setLoading(false);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Submit Business Idea</h2>
      <textarea
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        placeholder="Enter your business idea..."
        className="w-full border p-2 rounded-lg mb-2"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'Submit Idea'}
      </button>

      {questions.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold">Brainstorming Questions:</h3>
          <ul className="list-disc ml-5">
            {questions.map((question, index) => (
              <li key={index}>{question}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default IdeaSubmission;