////////HORIZONTAL BAR CHART//////
//SAMPLES object contains otu_id, sample_values, and otu_labels
//samples.id index [0]
//samples.otu_ids [1]
//samples.sample_values [2]
//samples.otu_labels [3]


function init() {
  //connect app.js to the samples.json file
  d3.json("data/samples.json").then(data => {
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

    //isolate the top 10 sample values
    var top_10 = sample_val.slice(0, 10).reverse()

    //create trace for horizontal bar chart
    var trace1 = {
      x: sample_val,
      y: top_10,
      text: labels,
      marker: {
        color: 'blue'
      },
      type: "bar"
    };

    //create the data array for the plot
    var data = [trace1];

    //create the layout
    var layout = {
      title: "Top 10 Operational Taxonomic Units (OTUs)",
    };

    //use plotly to create new par chart
    Plotly.newPlot('plot', data, layout);

///////////Create code for dropdown menus///////////////////////////////
//Note HTML has been amended to apply dropdowns. 
// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#selDataset").on("change", updatePlotly);

// This function is called when a dropdown menu item is selected
function updatePlotly() {
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");

  /////////////////////////CONSTRUCT BUBLE CHART////////////////////////
  var otus = data.samples[0].otu_ids;
  var sample = data.samples[0].sample_values;

  var trace2 = {
    x: otus,
    y: sample,
    mode: "markers",
    marker: {
      size: sample,
      color: otus,
      text: data.samples[0].otu_labels
  },

    //create the data array for the plot
    var data2 = [trace2];

    var layout2 = {
      title: "Operational Taxonomic Units (OTUs)"
    };

    // create the bubble plot
    Plotly.newPlot("bubble", data2, layout2);
  };


  /////Create Metadata Table///////////////////////////////////
  //Read metadata table pulling in demographic information
  var metadata = data.metadata;
  console.log(metadata)

  //create variables for other demographic info
  var id = data.metadata.id;
  var ethnicity = data.metadata.ethnicity;
  var gender = data.metadata.gender;
  var age = data.metadata.age;
  var location = data.metadata.location;
  var bbtype = data.metadata.bbtype;
  var wfreq = data.metadata.wfreq;

init();




