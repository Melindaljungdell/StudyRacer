from bottle import route, run, error, template, request, static_file, redirect
from random import choice
import json



@route("/")
def index():
    '''Returnerar templaten index'''


    return template("index")

@route("/faq/")
def faq():
    '''Returnerar templaten faq'''

    return template("faq")

@route("/about/")
def about():
    '''Returnerar templaten about'''

    return template("about")


@route("/racepage/<text>")
def race(text):
    if text!= "dinosaur1":
        my_file=open(f"articles/{text}.json", "r")
        textToRace=my_file.read()
        TTR=json.loads(textToRace)
        my_file.close()
    
    else:    
        with open("articles/dinosaur1.json") as myFile:
            content = json.loads(myFile.read())
        TTR = choice(content)
        myFile.close()

    return template("racepage", textFile=TTR)

@route("/racetext/")
def make_text_to_race ():
    
    return template("racetext")

@route("/racetext/save", method="POST")
def save_racetext (): 
    raceText = str(request.forms.get("userRaceText"))

    my_file=open("articles/usertext.json", "w")
    my_file.write(json.dumps(raceText))
    my_file.close()

    redirect("/racepage/usertext")

@route("/result/", method="POST")
def race_text_to_list():

    '''gör om texten till en lista och beräknar användarens resultat i accuracy%'''

    raceText = getattr(request.forms, "raceText")
    userInput = getattr(request.forms, "userRaceInput")
    raceTextAsList = raceText.split(" ")
    userInputAsList = userInput.split(" ")

    lastWord = raceTextAsList[-1]
    lastInput = userInputAsList[-1]


    matches = sum(a == b for a, b in zip(raceTextAsList, userInputAsList))
    lenRaceText=len(raceTextAsList)
    result = int(matches / lenRaceText * 100)

    print("antal rätt", matches)
    print("textens längd", lenRaceText)
    print("procent", result)

    
    print(lastWord, lastInput)

    return template("result", userResult=result, userMatches=matches, textLength=lenRaceText)

@route('/static/<filename>')
def static_files(filename):
    '''Hämtar css filen'''

    return static_file(filename, root="static")

@route('/scripts/<filename>')
def script_files(filename):
    '''Hämtar JavaScript filen'''

    return static_file(filename, root="scripts")


run(host="127.0.0.1", port=8080, reloader=True, debug=True)
