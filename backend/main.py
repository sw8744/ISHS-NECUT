from fastapi import FastAPI
import cv2

app = FastAPI()

@app.get("/")
def test():
    return {"message": "Hello World"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=5000)