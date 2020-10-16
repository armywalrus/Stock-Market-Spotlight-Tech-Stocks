////////////////////////////////////////
/// Restful API
const url = "http://127.0.0.1:5000/tech_stocks";



//////////////////////////////////////////////
// NYSE Stock Select (SE1) //
function SE1_Change(){
  d3.json(url, function(data){

    var SE1_stocks = [ "Choose a Stock", "AAPL", "GOOG", "MSFT" ]
  
    // console.log(SE1_stocks);
    
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
  console.log(chosen_s1)

  // Call the "UpdateCharts" Function with "chosen_s1" //
  UpdateChart1(chosen_s1);
  
}
SE1_Change();
//////////////////////////////////////////////


//////////////////////////////////////////////
// NYSE Chart Update (SE1) //
function UpdateChart1(chosen_s1){
  d3.json(url, function(data){

    // console.log(data.result);

    data.result.forEach(function(row){
      if (row["Stock Ticker"] === chosen_s1){
        
        /// Below was my attempt to format the data !!NOT WORKING!!///
        var SE1_stockdata =[]
        SE1_stockdata.push(new Date(row.Date));

        var close_price1 = []
        close_price1.push(parseFloat(row.Close));

        // console.log(dates)
        // console.log(close_price1)

        var trace1 = {
          x: SE1_stockdata,
          y: close_price1,
          type: "bar",
          text: close_price1,
          transforms: [{
              type: 'sort',
              target: 'x',
              order: 'ascending'
            }],
        };

        var barchart1 = [trace1];

        var layout1 = {
          title: `NYSE Tech Stock: ${chosen_s1}`,
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

  // Call the "UpdateCharts" Function with "chosen_s2" //
  // UpdateChart2(chosen_s2);
  
}
SE2_Change();
//////////////////////////////////////////////


//////////////////////////////////////////////
// LSE Chart Update (SE2) //
// function UpdateChart2(chosen_s2){
//   d3.json(url, function(data){

//     // console.log(data.result);

//     data.result.forEach(function(row){
//       if (row["Stock Ticker"] === chosen_s2){
        
//         /// Below was my attempt to format the data !!NOT WORKING!!///
//         var SE2_stockdata =[]
//         SE2_stockdata.push(new Date(row.Date));

//         var close_price2 = []
//         close_price2.push(parseFloat(row.Close));

//         // console.log(dates)
//         // console.log(close_price1)

//         var trace2 = {
//           x: SE2_stockdata,
//           y: close_price2,
//           type: "bar",
//           text: close_price2,
//           transforms: [{
//               type: 'sort',
//               target: 'x',
//               order: 'ascending'
//             }],
//         };

//         var barchart2 = [trace2];

//         var layout2 = {
//           title: `LSE Tech Stock: ${chosen_s2}`,
//           yaxis: {
//             autorange: true,
//           },
//           xaxis: {
//             autorange: true,
//           },
//         };

//         // NOTE: I BELIEVE "BAR" HAS TO BE THE SAME FOR THE TYPE ABOVE AND THE HTML ID //
//         Plotly.newPlot("bar", barchart2, layout2);
        
//       }
//     });
//   });
// }
//////////////////////////////////////////////


//////////////////////////////////////////////
// OTC Stock Select (SE3) //
function SE3_Change(){
  d3.json(url, function(data){

    var SE3_stocks = [ "Choose a Stock", "AACAF", "ISNNY", "TTNDF" ]
  
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
  // UpdateChart3(chosen_s3);
  
}
SE3_Change();
///////////////////////////////////////////////



//////////////////////////////////////////////
// LSE Chart Update (SE2) //
// function UpdateChart3(chosen_s3){
//   d3.json(url, function(data){

//     // console.log(data.result);

//     data.result.forEach(function(row){
//       if (row["Stock Ticker"] === chosen_s3){
        
//         /// Below was my attempt to format the data !!NOT WORKING!!///
//         var SE3_stockdata =[]
//         SE3_stockdata.push(new Date(row.Date));

//         var close_price3 = []
//         close_price3.push(parseFloat(row.Close));

//         // console.log(dates)
//         // console.log(close_price1)

//         var trace3 = {
//           x: SE3_stockdata,
//           y: close_price3,
//           type: "bar",
//           text: close_price3,
//           transforms: [{
//               type: 'sort',
//               target: 'x',
//               order: 'ascending'
//             }],
//         };

//         var barchart3 = [trace3];

//         var layout3 = {
//           title: `LSE Tech Stock: ${chosen_s3}`,
//           yaxis: {
//             autorange: true,
//           },
//           xaxis: {
//             autorange: true,
//           },
//         };

//         // NOTE: I BELIEVE "BAR" HAS TO BE THE SAME FOR THE TYPE ABOVE AND THE HTML ID //
//         Plotly.newPlot("bar", barchart3, layout3);
        
//       }
//     });
//   });
// }
//////////////////////////////////////////////


