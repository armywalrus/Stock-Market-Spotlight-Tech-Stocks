////////////////////////////////////////
/// Restful API
// const url = "http://127.0.0.1:5000/tech_stocks";

// // Fetch the JSON data and console log it
// d3.json(url).then(function(data) {
//   console.log(data);
// });

// // Promise Pending
// const dataPromise = d3.json(url);
// console.log("Data Promise: ", dataPromise);
////////////////////////////////////////



d3.csv("assets/data/All_Stocks.csv").then(function (csvdata) { 
	/// ***NEED TO FORMAT NUMBER & DATE FIELDS*** ///


	////////// STOCK EXCHANGE DATASETS //////////
	//NYSE//
	var SE1_data = csvdata.filter(function(se){
		return se.StockExchange === "NYSE";
	});
	//LSE//
	var SE2_data = csvdata.filter(function(se){
		return se.StockExchange === "LSE";
	});
	//OTC//
	var SE3_data = csvdata.filter(function(se){
		return se.StockExchange === "OTC";
	});
	////////////////////////////////////////


	////////// DATE FILTERS //////////
	// var start_date = d3.select("#selStartDate")
	// var end_date = d3.select("#selEndDate")

	//Set defaults to Earliest & Latest Date!!!! //
	var start_date = "10/20/2019"
	var end_date = "10/30/2019"
	////////////////////////////////////////


	////////// DATE FILTERED DATASETS //////////
	//NYSE//
	SE1_datefil = SE1_data.filter(function(date){
		return (date.Date >= start_date && date.Date <= end_date)
	});
	//LSE//
	SE2_datefil = SE2_data.filter(function(date){
		return (date.Date >= start_date && date.Date <= end_date)
	});
	//OTC//
	SE3_datefil = SE3_data.filter(function(date){
		return (date.Date >= start_date && date.Date <= end_date)
	});
	////////////////////////////////////////
	console.log(SE2_datefil)


	////////// STOCK DROPDOWN LISTS //////////
	var SE1_stocklist = [ "Choose a Stock", "APPL", "GOOG", "MSFT" ]
	var SE2_stocklist = [ "Choose a Stock", "MCRO.L", "SGE.L", "VOD.L" ]
	var SE3_stocklist = [ "Choose a Stock", "AACAF", "ISNNY", "TTNDF" ]
	////////////////////////////////////////

	
	////////// STOCK FILTERS //////////
	// var SE1_stock = d3.select("#selSE1Stock")
	// var SE2_stock = d3.select("#selSE2Stock")
	// var SE3_stock = d3.select("#selSE3Stock")

	var SE1_stock = "GOOG"
	var SE2_stock = "SGE.L"
	var SE3_stock = "TTNDF"
	////////////////////////////////////////


	////////// DATE & STOCK FILTERED DATASETS //////////
	//NYSE//
	SE1_final = SE1_datefil.filter(function(s){
		return s.StockTicker === SE1_stock
	});
	//LSE//
	SE2_final = SE2_datefil.filter(function(s){
		return s.StockTicker === SE2_stock
	});
	//OTC//
	SE3_final = SE3_datefil.filter(function(s){
		return s.StockTicker === SE3_stock
	});
	////////////////////////////////////////
	console.log(SE2_final)




});