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

## Auth0 Setup

The application uses Auth0 for authentication. Create a **Single Page Application**
in your Auth0 dashboard and note the **Domain** and **Client ID** values. Edit
`.env` and set `VITE_AUTH0_DOMAIN` and `VITE_AUTH0_CLIENT_ID` with those values.

Auth0 also needs to know where it can redirect users after they sign in. When
running the Vite dev server locally that URL is usually:

```
http://localhost:5173
```

Add this URL to the **Allowed Callback URLs** and **Allowed Logout URLs** in
your Auth0 application settings. After saving the changes, restart the dev
server so Vite picks up the updated environment variables.