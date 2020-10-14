const url = "http://127.0.0.1:5000/tech_stocks";

// Fetch the JSON data and console log it
const dataPromise = d3.json(url);
  console.log("Data Promise", dataPromise.then(function(data) {
    console.log(data);
    })
  );