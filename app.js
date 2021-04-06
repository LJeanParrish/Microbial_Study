////////HORIZONTAL BAR CHART//////
//SAMPLES object contains otu_id, sample_values, and otu_labels
//samples.id index [0]
//samples.otu_ids [1]
//samples.sample_values [2]
//samples.otu_labels [3]


function getPlots(id) {
  //connect app.js to the samples.json file
  d3.json("data/samples.json").then(data => {
  //confirm data reading in correctly
  console.log(data)

  //create variable to bring in out_ids
  var ids = data.samples[1].otu_ids;
  console.log(ids)

  //create variable for sample_values
  var sample_val = data.samples[2].sample_val;
  console.log(sample_val)

  //create variable for otu_labels
  var label = data.samples[3].otu_labels;
  console.log(label)


} 

  
  
  
  //SAMPLE CODE TO ASSIST WITH BUILDOUT//////////////////////////////////////////////////////
  // //  Create the Traces
  //   var trace1 = {
  //     x: data.organ,
  //     y: data.survival.map(val => Math.sqrt(val)),
  //     type: "box",
  //     name: "Cancer Survival",
  //     boxpoints: "all"
  //   };
  
  //   // Create the data array for the plot
  //   var data = [trace1];
  
  //   // Define the plot layout
  //   var layout = {
  //     title: "Square Root of Cancer Survival by Organ",
  //     xaxis: { title: "Organ" },
  //     yaxis: { title: "Square Root of Survival" }
  //   };
  
  //   // Plot the chart to a div tag with id "plot"
  //   Plotly.newPlot("plot", data, layout);
  // });