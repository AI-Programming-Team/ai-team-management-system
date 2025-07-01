# ai-team-management-system
"AI team management platform for assigning tasks and tracking projects."

## Configuration

The dashboard relies on an OpenAI API key to power the chat features. Copy
`.env` and replace the placeholder value with your actual key:

```
VITE_OPENAI_API_KEY=your_openai_key
```

After updating the file, restart the dev server with `npm run dev` or rebuild
with `npm run build` so Vite can embed the new value.