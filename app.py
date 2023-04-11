from flask import Flask, render_template,request
from flask_mysqldb import MySQL

app = Flask(__name__)

@app.route("/home")
def Home():
    return render_template('Home.html')

@app.route("/question")
def Question():
    return render_template('Question.html')

@app.route("/resume")
def Resume():
    return render_template('Resume.html')

@app.route("/login")
def Login():
    return render_template('Login.html')

if __name__ =="__main__":
    app.run(debug=True, port=8000)