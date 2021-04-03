from fastapi import FastAPI
from CalculationData import CalculationData
from fastapi.middleware.cors import CORSMiddleware

app=FastAPI()

origins = [
    "http://localhost:3000",
    "http://localhost:3000/calculations"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def hello_world():
    print("Hit me")
    print("a")
    return {"message": "Hello"}

@app.post("/calculations")
def calculate(inputs: list):
    print(len(inputs))
    myData=CalculationData(inputs)
    myData.printt()
    print(inputs)
    myAnswer=[1,2,3,4,5,6,7,8]
    money=[111,222,333]
    return {"message":"Hello world","values":myData.zyski,"money":myData.money()}
    