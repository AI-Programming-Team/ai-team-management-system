import os
from fastapi import FastAPI
from pydantic import BaseModel
import openai
from dotenv import load_dotenv

load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")

app = FastAPI()

class Idea(BaseModel):
    user_id: str
    idea: str

@app.get("/")
async def root():
    return {"message": "Backend AI service running!"}

@app.post("/submit-idea")
async def submit_idea(idea: Idea):
    prompt = f"Generate 5 insightful brainstorming questions for refining this business idea: '{idea.idea}'"

    response = openai.ChatCompletion.create(
        model="gpt-4-turbo",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.7
    )

    questions = response.choices[0].message.content.strip().split("\n")
    return {"brainstorming_questions": questions}