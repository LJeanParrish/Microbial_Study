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

    var filterdata = data.samples.filter(x => x.id == sampleid)[0]
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

    ///call new trace and new bubble layout can use same x and y

    var trace2 = {
      x: sample_val,
      y: ids,
      mode: "markers",
      marker: {
        size: sample_val,
        color: ids,
        text: label,
      }
    },

    //create the data array for the plot
    var data2 = [trace2];

    var layout2 = {
      title: "Operational Taxonomic Units (OTUs)"
    };

    // create the bubble plot
    Plotly.newPlot("bubble", data2, layout2);  
})
}

///////////Create code for dropdown menus///////////////////////////////
//Note HTML has been amended to apply dropdowns. 
// Call updatePlotly() when a change takes place to the DOM
// d3.selectAll("#selDataset").on("change", updatePlotly);

// // This function is called when a dropdown menu item is selected
// function updatePlotly() {
//   // Use D3 to select the dropdown menu
//   var dropdownMenu = d3.select("#selDataset");
//   // Assign the value of the dropdown menu option to a variable
//   var dataset = dropdownMenu.property("value");

/////////////////////////CONSTRUCT BUBLE CHART////////////////////////
//   var otus = data.samples[0].otu_ids;
//   var sample = data.samples[0].sample_values;

//   var trace2 = {
//     x: otus,
//     y: sample,
//     mode: "markers",
//     marker: {
//       size: sample,
//       color: otus,
//       text: data.samples[0].otu_labels
//     }
//   },

//   //create the data array for the plot
//   var data2 = [trace2];

//   var layout2 = {
//     title: "Operational Taxonomic Units (OTUs)"
//   };

//   // create the bubble plot
//   Plotly.newPlot("bubble", data2, layout2);
// };


/////Create Metadata Table///////////////////////////////////
//Read metadata table pulling in demographic information
// var metadata = data.metadata;
// console.log(metadata)

// //create variables for other demographic info
// var id = data.metadata.id;
// var ethnicity = data.metadata.ethnicity;
// var gender = data.metadata.gender;
// var age = data.metadata.age;
// var location = data.metadata.location;
// var bbtype = data.metadata.bbtype;
// var wfreq = data.metadata.wfreq;

dropdownmenu();




