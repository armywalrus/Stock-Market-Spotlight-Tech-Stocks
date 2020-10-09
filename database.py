from flask import Flask, render_template, redirect
import requests
from flask_pymongo import PyMongo
import csv

app = Flask(__name__)

app.config["MONGO_URI"] = "mongodb://localhost:27017/tech_stocks"
mongo = PyMongo(app)
mongo.db.tech_stocks.drop()

with open('All_Stocks.csv') as csv_file:
        data = csv.reader(csv_file, delimiter=',')
        for row in data:
            stocks= {
                "Stock Exchange": row[0],
                "Stock": row[1],
                "Stock Ticker": row[2],
                "Date": row[3],
                "Open": row[4],
                "High": row[5],
                "Low": row[6],
                "Close": row[7],
                "Adj Close": row[8],
                "Volume": row[9]
            }
            mongo.db.tech_stocks.insert_one(stocks) 