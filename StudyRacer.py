from bottle import route, run, error, template, request, static_file, redirect
from random import choice
import json


@route("/")
def index():

    return template("index")

@route("/racepage/")
def race_random_line():

    with open("articles/dinosaur1.json") as myFile:
        content = json.loads(myFile.read())
    line = choice(content)
    
    myFile.close()

    return template("racepage", textFile=line)

@route("/result/", method="POST")
def race_text_to_list():

    raceText = getattr(request.forms, "raceText")
    userInput = getattr(request.forms, "userRaceInput")
    raceTextAsList = raceText.split(" ")
    userInputAsList = userInput.split(" ")

    matches = sum(a == b for a, b in zip(raceTextAsList, userInputAsList))
    lenRaceText=len(raceTextAsList)
    result = int(matches / lenRaceText * 100)

    print("antal rätt", matches)
    print("textens längd", lenRaceText)
    print("procent", result)
    
    return template("result", userResult=result)

@route('/static/<filename>')
def static_files(filename):

    return static_file(filename, root="static")


run(host="127.0.0.1", port=8080, reloader=True, debug=True)
