////////HORIZONTAL BAR CHART//////
//SAMPLES object contains otu_id, sample_values, and otu_labels
//samples.id index [0]
//samples.otu_ids [1]
//samples.sample_values [2]
//samples.otu_labels [3]


function getPlots(id) {
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
  });

  ////////////BUBLE CHART////////////////////////////////////////////////////////////////////////////
  var trace2 = {
    x: data.samples[0].otu_ids,
    y: data.samples[0].sample_values,
    mode: "markers",
    marker: {
      size: data.samples[0].sample_values,
      color: data.samples[0].otu_ids
    },
    text: data.samples[0].otu_labels
  };

