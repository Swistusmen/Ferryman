from fastapi import FastAPI
from CalculationData import CalculationData
from fastapi.middleware.cors import CORSMiddleware
from find_solution import find_solution

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
    print(inputs)
    myData=CalculationData(inputs)
    myData.printt()
    #myData=find_solution(myData)
    outputData=find_solution(myData)
    #return {"message":"Hello world","values":myData.zyski,"money":myData.money()}
    return outputData
    