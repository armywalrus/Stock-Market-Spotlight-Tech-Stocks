from flask import Flask, render_template, redirect
import requests
from flask_pymongo import PyMongo
from flask import Flask, jsonify
import csv
import database

import pymongo

# client = pymongo.MongoClient("mongodb+srv://project_staff:walrus@cluster0.i8w5c.mongodb.net/test?retryWrites=true&w=majority")
# db = client.test


app = Flask(__name__)
app.config['MONGO_DBNAME'] = 'tech_stocks'
app.config["MONGO_URI"] = "mongodb+srv://project_staff:walrus@cluster0.i8w5c.mongodb.net/test?retryWrites=true&w=majority"
mongo = PyMongo(app)

@app.route("/tech_stocks")
def index():

    techStocks = mongo.db.tech_stocks
    output = []
    for s in techStocks.find():
        output.append({
            'Stock Exchange' : s['Stock Exchange'],
            'Stock' : s['Stock'],
            'Stock Ticker' : s['Stock Exchange'],
            'Date' : s['Date'],
            'Open' : s['Open'],
            'High' : s['High'],
            'Low' : s['Low'],
            'Close' : s['Close'],
            'Adj Close' : s['Adj Close'],
            'Volume' : s['Volume']
            })
    return jsonify({'result' : output})


if __name__ == '__main__':
    app.run(debug=True)
