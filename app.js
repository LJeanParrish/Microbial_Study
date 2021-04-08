////////DROPDOWN SET-UP////////////////////////////////////
function dropdownmenu() {
  d3.json("data/samples.json").then(data => {
    var samplenames = data.names
    console.log(samplenames)
    var menu = d3.select("#selDataset")
    samplenames.forEach((x) => {
      menu.append("option").text(x).property("value")
    })
    buildcharts(samplenames[0])
  })
}

function buildtable(newid) { }
function optionChanged(newid) {
  buildtable(newid)
  buildcharts(newid)
}

/////////HORIZONTAL BAR CHART SET-UP///////////////////////
function buildcharts(sampleid) {
  //connect app.js to the samples.json file
  d3.json("data/samples.json").then(data => {
    console.log(data)

    var filterdata = data.samples.filter(x => x.id == sampleid)[0];
    console.log(filterdata)

    //create variable to bring in out_ids
    var ids = filterdata.otu_ids;
    console.log(ids)

    //create variable for sample_values
    var sample_val = filterdata.sample_values;
    console.log(sample_val)

    //create variable for otu_labels
    var label = filterdata.otu_labels;

    //create trace for horizontal bar chart
    var trace1 = {
      x: sample_val.slice(0, 10).reverse(),
      y: ids.slice(0, 10).reverse(),
      text: label.slice(0, 10).reverse(),
      marker: {
        color: 'blue'
      },
      type: "bar",
      orientation: "h"
    };

    //create the data array for the plot
    var data = [trace1];

    //create the layout
    var layout = {
      title: "Top 10 Operational Taxonomic Units (OTUs)",

    };

    //use plotly to create new par chart
    Plotly.newPlot('bar', data, layout);

    ////////CREATE THE BUBLE CHART////////////////////////////////
    var trace2 = {
      x: sample_val,
      y: ids,
      mode: "markers",
      marker: {
        size: sample_val,
        color: ids,
        text: label,
      }
    };

    //create the data array for the plot
    var data2 = [trace2];

    var layout2 = {
      title: "Operational Taxonomic Units (OTUs)",
      height: 600,
      width: 1000
    };

    // create the bubble plot
    Plotly.newPlot("bubble", data2, layout2);
  })
}

/////CREATE THE DEMOGRAPHICS TABLE//////////////////////////
function demoInfo(demoid) {
  d3.json("data/samples.json").then(data => {
    var metadata = data.metadata;
    console.log(metadata);
    

    //filter demo information
    var filteredDemo = metadata.filter(info => info.demoid.toString() === demoid)[0];

    var panelBody = d3.select("#sample-metadata");

    //empty the demo info panel each time before getting new data
    panelBody.html("");

    Object.entries(filteredDemo).forEach((key) => {
      panelBody.append("p").text(key[0] + ":" + key[1]);
    });
  });
};

dropdownmenu();