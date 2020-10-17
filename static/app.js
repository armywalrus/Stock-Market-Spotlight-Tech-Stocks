////////////////////////////////////////
/// Restful API
const url = "http://stockmarketspotlight.herokuapp.com/tech_stocks";



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

        
      }
    });

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

  // Call the "UpdateCharts" Function with "chosen_s2" //
  UpdateChart2(chosen_s2);
  
  
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
        
      }
    });
    
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
      title: `LSE Tech Stock: ${chosen_s2}`,
      yaxis: {
          autorange: true,
      },
      xaxis: {
          autorange: true,
      },
      };
        // NOTE: I BELIEVE "BAR" HAS TO BE THE SAME FOR THE TYPE ABOVE AND THE HTML ID //
      Plotly.newPlot("bar", barchart2, layout2);

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

        
      }
    });
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

  });
}
//////////////////////////////////////////////

// ChartJS
// Open Price
new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: [150,160,170,175,180,185,190,195,199,205],
      datasets: [{ 
          data: [64, 64, 62, 103, 66, 129, 71, 119, 57, 120],
          label: "AAPL",
          borderColor: "#3e95cd",
          fill: false
        }, { 
          data: [1431, 1096, 1057, 1126, 1126, 1061, 1608, 1457, 1093, 1341],
          label: "GOOG",
          borderColor: "#145A32",
          fill: false
        }, { 
          data: [152, 145, 163, 148, 140, 143, 146, 144, 138, 140],
          label: "MSFT",
          borderColor: "#283747",
          fill: false
        }, { 
          data: [438, 277, 396, 437, 442, 417, 913, 439, 520, 369],
          label: "MCRO.L",
          borderColor: "#F7DC6F",
          fill: false
        }, { 
          data: [680, 634, 746, 602, 699, 526, 690, 556, 635, 577],
          label: "SGE.L",
          borderColor: "#F5B041",
          fill: false
        }, { 
          data: [140, 102, 104, 126, 120, 112, 161, 112, 156, 114],
          label: "VOD.L",
          borderColor: "#BA4A00",
          fill: false
          }, { 
          data: [5.58, 5.58, 5.58, 5.58, 5.58, 5.58, 5.81, 5.81, 5.81, 6.15],
          label: "AACAF",
          borderColor: "#e8c3b9",
          fill: false
          }, { 
          data: [17,11,15,22,15,17,18,17,15,22],
          label: "IFNNY",
          borderColor: "#C39BD3",
          fill: false
          }, { 
          data: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
          label: "TTNDF",
          borderColor: "#A3E4D7",
          fill: false
          }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Open Price by Stock'
      }
    }
  });

  // Close Price
new Chart(document.getElementById("line-chart_two"), {
    type: 'line',
    data: {
      labels: [150,160,170,175,180,185,190,195,199,205],
      datasets: [{ 
          data: [68, 62, 57, 106, 69, 126, 75, 124, 56, 121],
          label: "AAPL",
          borderColor: "#3e95cd",
          fill: false
        }, { 
          data: [1433, 1152, 1107, 1194, 1149, 1071, 1659, 1470, 1131, 1360],
          label: "GOOG",
          borderColor: "#145A32",
          fill: false
        }, { 
          data: [164, 153, 167, 162, 149, 150, 147, 150, 146, 148],
          label: "MSFT",
          borderColor: "#283747",
          fill: false
        }, { 
          data: [443, 280, 453, 442, 464, 417, 925, 462, 535, 420],
          label: "MCRO.L",
          borderColor: "#F7DC6F",
          fill: false
        }, { 
          data: [692, 638, 750, 605, 727, 556, 698, 566, 649, 614],
          label: "SGE.L",
          borderColor: "#F5B041",
          fill: false
        }, { 
          data: [140, 102, 114, 126, 121, 112, 161, 123, 156, 115],
          label: "VOD.L",
          borderColor: "#BA4A00",
          fill: false
          }, { 
          data: [5.58, 5.58, 5.58, 5.58, 5.58, 5.58, 5.81, 5.81, 5.81, 6.15],
          label: "AACAF",
          borderColor: "#e8c3b9",
          fill: false
          }, { 
          data: [18,12,16,22,15,17,18,17,15,22],
          label: "IFNNY",
          borderColor: "#C39BD3",
          fill: false
          }, { 
          data: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
          label: "TTNDF",
          borderColor: "#A3E4D7",
          fill: false
          }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Close Price by Stock'
      }
    }
  });



// var ctx = document.getElementById("myChart").getContext("2d");
// var myChart = new Chart(ctx).Line(data);

// var data = {
//     labels: ["January", "February", "March", "April", "May", "June", "July"],
//     datasets: [
//       {
//         label: "My First dataset",
//         fillColor: "rgba(220,220,220,0.2)",
//         strokeColor: "rgba(220,220,220,1)",
//         pointColor: "rgba(220,220,220,1)",
//         pointStrokeColor: "#fff",
//         pointHighlightFill: "#fff",
//         pointHighlightStroke: "rgba(220,220,220,1)",
//         data: [65, 59, 80, 81, 56, 55, 40]
//       },
//       {
//         label: "My Second dataset",
//         fillColor: "rgba(151,187,205,0.2)",
//         strokeColor: "rgba(151,187,205,1)",
//         pointColor: "rgba(151,187,205,1)",
//         pointStrokeColor: "#fff",
//         pointHighlightFill: "#fff",
//         pointHighlightStroke: "rgba(151,187,205,1)",
//         data: [28, 48, 40, 19, 86, 27, 90]
//       }
//     ]
//   };





////////////////////////////////////////////////////////////////////////////////
// d3.json(url, function(data){
 
//     var labels = data.jsonarray.map(function(e) {
//         return e.Date;
//     });
//     var data = data.jsonarray.map(function(e) {
//         return e.Close;
//     });;
    
//     var ctx = canvas.getContext('2d');
//     var config = {
//         type: 'line',
//         data: {
//         labels: labels,
//         datasets: [{
//             label: 'Graph Line',
//             data: data,
//             backgroundColor: 'rgba(0, 119, 204, 0.3)'
//         }]
//         }
//     };
 
//  var chart = new Chart(ctx, config);

///////////////////////////////////////////////////////////////////////////////////

