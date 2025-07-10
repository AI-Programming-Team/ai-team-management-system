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

If your backend runs on a different host or port, set `VITE_BACKEND_URL` in
`.env` to that base URL (e.g. `http://localhost:8000`). Leaving it empty will
use the current origin when making requests.

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
## Backend Setup

To run the FastAPI backend used for brainstorming prompts:

1. Ensure Python 3.11+ is available.
2. (Optional) Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Add your OpenAI API key to `backend/.env`:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```
5. Start the development server from the `backend` folder:
   ```bash
   uvicorn main:app --reload --host 0.0.0.0
   ```

If you expose the port, the API will be available at
`http://localhost:8000` from your browser.

## Running Tests

The project uses **Vitest** for unit testing. Install the dependencies and then
execute:

```bash
npm test
```

This will run all test files located next to the source code.
