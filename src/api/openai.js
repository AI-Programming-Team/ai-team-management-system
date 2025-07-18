export async function askAI(messages) {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    if (!apiKey || apiKey === "REPLACE_WITH_YOUR_OPENAI_API_KEY") {
    throw new Error("Missing OpenAI API key");
  }

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages,
    }),
  });

  if (!response.ok) {
    throw new Error(`OpenAI API error: ${response.statusText}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}