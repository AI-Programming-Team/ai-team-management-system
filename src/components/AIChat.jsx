import React, { useState } from "react";
import { askAI } from "../api/openai";

const AIChat = ({ teamLead }) => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const content = await askAI([
        { role: "system", content: `You are ${teamLead}, an AI team lead.` },
        { role: "user", content: input },
      ]);
      setResponse(content);
    } catch (err) {
      setResponse(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow space-y-2">
      <h3 className="font-semibold">Chat with {teamLead}</h3>
      <textarea
        className="w-full border p-2 rounded"
        rows="3"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={sendMessage}
        disabled={loading}
        className="bg-blue-500 text-white px-3 py-1 rounded"
      >
        {loading ? "Sending..." : "Send"}
      </button>
      {response && <p className="border p-2 rounded">{response}</p>}
    </div>
  );
};

export default AIChat;