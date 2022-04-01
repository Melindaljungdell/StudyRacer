from bottle import route, run, error, template, request, static_file, redirect
from random import choice
import json


@route("/")
def index():
    '''Returnerar templaten index'''

    return template("index")

@route("/racepage/")
def race_random_line():
    '''låter användaren racea en slumpmässig text från JSON filen'''

    with open("articles/dinosaur1.json") as myFile:
        content = json.loads(myFile.read())
    line = choice(content)
    
    myFile.close()

    return template("racepage", textFile=line)

@route("/result/", method="POST")
def race_text_to_list():

    '''gör om texten till en lista och beräknar användarens resultat i accuracy%'''

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

    lastWord = raceTextAsList[-1]
    lastInput = userInputAsList[-1]
    
    print(lastWord, lastInput)

    return template("result", userResult=result)

@route('/static/<filename>')
def static_files(filename):
    '''Hämtar css filen'''

    return static_file(filename, root="static")

@route('/scripts/<filename>')
def script_files(filename):
    '''Hämtar JavaScript filen'''

    return static_file(filename, root="scripts")


run(host="127.0.0.1", port=8080, reloader=True, debug=True)
