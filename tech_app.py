from flask import Flask, render_template, redirect
import requests
from flask_pymongo import PyMongo
import csv
import database

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/tech_stocks"
mongo = PyMongo(app)


# mars_data = mongo.db.mars_data
# mars_data_scrape = scrape_mars.scrape()
# mars_data.update({}, mars_data_scrape, upsert=True)


@app.route("/")
def index():

    
    return redirect("/", code=200)


if __name__ == '__main__':
    app.run(debug=True)
