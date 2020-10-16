////////////////////////////////////////
/// Restful API
const url = "http://127.0.0.1:5000/tech_stocks";



////////////////////////////////////////////
// NYSE Stock Select (SE1) //
function SE1_Change(){
  d3.json(url, function(data){
  
    console.log(data);

    var SE1_stocks = [ "Choose a Stock", "AAPL", "GOOG", "MSFT" ]
    
    d3.selectAll("#selDataset1")
      .selectAll("option")
      .data(SE1_stocks)
      .enter()
      .append("option")
      .attr("value", function(s1) {
        return s1;
      })
      .text(function(s1){
        return s1;
      });
  });

  // Store Chosen stock for later reference //
  var chosen_s1 = d3.select("#selDataset1").node().value;
  // console.log(chosen_s1)
  // Call the "UpdateCharts" Function with "chosen_s1" //
  UpdateChart1(chosen_s1);
  
}
SE1_Change();
//////////////////////////////////////////////


//////////////////////////////////////////////
// NYSE Chart Update (SE1) //
function UpdateChart1(chosen_s1){
  d3.json(url, function(data){
    // columns_duplicates_to_array
    // console.log(data.result);
    // Let current_datetime = new Date()
    // console.log(current_datetime.toString())
    // var chartData = data
    // console.log(chartData)
    // var arr =(chartData.Date)
    // console.log(arr)
    // var SE1_stockdata =[]
    // SE1_stockdata.push(new Date(chartData.result.Date));
    // // console.log(SE1_stockdata)
    // var close_price1 = []
    // close_price1.push(parseFloat(chartData.result.Close));
    var SE1_stockdata =[]
    var close_price1 = []


    data.result.forEach(function(row){


      if (row["Stock Ticker"] === chosen_s1){
        
        /// Below was my attempt to format the data !!NOT WORKING!!///

        SE1_stockdata.push(new Date(row.Date));
        // console.log(SE1_stockdata)
        close_price1.push(parseFloat(row.Close));

        // console.log(dates)
        // console.log(close_price1)

        var trace1 = {
          x: SE1_stockdata,
          y: close_price1,
          type: "bar",
          text: close_price1,
          marker: {
            color: 'rgb(255,26,0)',
            line: {
              color:'rgb(255,26,0)',
              width: 1
            }
          },
          transforms: [{
              type: 'sort',
              target: 'x',
              order: 'ascending'
            }],
    }
        var barchart1 = [trace1];

        var layout1 = {
          title: `NYSE Tech Stock: ${chosen_s1}`,
          color: "#870814",
          yaxis: {
            autorange: true,
          },
          xaxis: {
            autorange: true,
          },
        };

        Plotly.newPlot("bar", barchart1, layout1);
        
      }
    });
  });
}
//////////////////////////////////////////////


//////////////////////////////////////////////
// LSE Stock Select (SE2) //
function SE2_Change(){
  d3.json(url, function(data){

    var SE2_stocks = [ "Choose a Stock", "MCRO.L", "SGE.L", "VOD.L" ]
  
    // console.log(SE2_stocks);
    
    d3.selectAll("#selDataset2")
      .selectAll("option")
      .data(SE2_stocks)
      .enter()
      .append("option")
      .attr("value", function(s2) {
        return s2;
      })
      .text(function(s2){
        return s2;
      });
  });

  // Store Chosen stock for later reference //
  var chosen_s2 = d3.select("#selDataset2").node().value;
  console.log(chosen_s2)

  // Call the "UpdateCharts" Function with "chosen_s1" //
  UpdateChart1(chosen_s2);
  
  
}
SE2_Change();
//////////////////////////////////////////////


//////////////////////////////////////////////
// LSE Chart Update (SE2) //
function UpdateChart2(chosen_s2){
  d3.json(url, function(data){

    // console.log(data.result);
    var SE2_stockdata =[]
    var close_price2 = []

    data.result.forEach(function(row){
      if (row["Stock Ticker"] === chosen_s2){

        /// Below was my attempt to format the data !!NOT WORKING!!///
        SE2_stockdata.push(new Date(row.Date));
        close_price2.push(parseFloat(row.Close));

        // console.log(dates)
        // console.log(close_price1)

        var trace2 = {
          x: SE2_stockdata,
          y: close_price2,
          type: "bar",
          text: close_price2,
          marker: {
            color: 'rgb(255,26,0)',
            line: {
              color:'rgb(255,26,0)',
              width: 1
            }
          },
          transforms: [{
              type: 'sort',
              target: 'x',
              order: 'ascending'
            }],
        };

        var barchart2 = [trace2];

        var layout2 = {
            title: `LSE Tech Stock: ${chosen_s3}`,
            yaxis: {
              autorange: true,
            },
            xaxis: {
              autorange: true,
            },
          };
          // NOTE: I BELIEVE "BAR" HAS TO BE THE SAME FOR THE TYPE ABOVE AND THE HTML ID //
        Plotly.newPlot("bar", barchart2, layout2);
        
      }
    });
  });
}
//////////////////////////////////////////////


//////////////////////////////////////////////
// OTC Stock Select (SE3) //
function SE3_Change(){
  d3.json(url, function(data){

    var SE3_stocks = [ "Choose a Stock", "AACAF", "IFNNY", "TTNDF" ]
  
    // console.log(SE3_stocks);
    
    d3.selectAll("#selDataset3")
      .selectAll("option")
      .data(SE3_stocks)
      .enter()
      .append("option")
      .attr("value", function(s3) {
        return s3;
      })
      .text(function(s3){
        return s3;
      });
  });

  // Store Chosen stock for later reference //
  var chosen_s3 = d3.select("#selDataset3").node().value;
  console.log(chosen_s3)

  // Call the "UpdateCharts" Function with "chosen_s3" //
  UpdateChart3(chosen_s3);
  
}
SE3_Change();
///////////////////////////////////////////////



////////////////////////////////////////////
// OTC Chart Update (SE3) //
function UpdateChart3(chosen_s3){
  d3.json(url, function(data){
    var SE3_stockdata =[]
    var close_price3 = []

    // console.log(data.result);

    data.result.forEach(function(row){
      if (row["Stock Ticker"] === chosen_s3){
        
        /// Below was my attempt to format the data !!NOT WORKING!!///
        SE3_stockdata.push(new Date(row.Date));
        close_price3.push(parseFloat(row.Close));

        // console.log(dates)
        // console.log(close_price1)

        var trace3 = {
          x: SE3_stockdata,
          y: close_price3,
          type: "bar",
          text: close_price3,
          marker: {
            color: 'rgb(255,26,0)',
            line: {
              color:'rgb(255,26,0)',
              width: 1
            }
          },
          transforms: [{
              type: 'sort',
              target: 'x',
              order: 'ascending'
            }],
        };

        var barchart3 = [trace3];

        var layout3 = {
          title: `OTC Tech Stock: ${chosen_s3}`,
          yaxis: {
            autorange: true,
          },
          xaxis: {
            autorange: true,
          },
        };

        // NOTE: I BELIEVE "BAR" HAS TO BE THE SAME FOR THE TYPE ABOVE AND THE HTML ID //
        Plotly.newPlot("bar", barchart3, layout3);
        
      }
    });
  });
}
//////////////////////////////////////////////

// ChartJS


new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
      datasets: [{ 
          data: [86,114,106,106,107,111,133,221,783,2478],
          label: "Africa",
          borderColor: "#3e95cd",
          fill: false
        }, { 
          data: [282,350,411,502,635,809,947,1402,3700,5267],
          label: "Asia",
          borderColor: "#8e5ea2",
          fill: false
        }, { 
          data: [168,170,178,190,203,276,408,547,675,734],
          label: "Europe",
          borderColor: "#3cba9f",
          fill: false
        }, { 
          data: [40,20,10,16,24,38,74,167,508,784],
          label: "Latin America",
          borderColor: "#e8c3b9",
          fill: false
        }, { 
          data: [6,3,2,2,7,26,82,172,312,433],
          label: "North America",
          borderColor: "#c45850",
          fill: false
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'World population per region (in millions)'
      }
    }
  });
