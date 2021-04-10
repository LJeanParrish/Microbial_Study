# Plot.ly Microbial Biodiversity

![Bacteria by filterforge.com](Images/bacteria.jpg)

The object of this project was to build an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which cataloged the microbes that colonize human navels.

The dataset revealed that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Step performed in the project:

1. Used the D3 library to read in `samples.json`.

2. Created a horizontal bar chart with a dropdown menu which displayed the top 10 OTUs found in that individual.

  ![bar Chart](Images/hw01.png)

3. Created a bubble chart that displays each sample.

![Bubble Chart](Images/bubble_chart.png)

4. Displayed the sample metadata, i.e., an individual's demographic information.

5. Displayed each key-value pair from the metadata JSON object somewhere on the page.

![hw](Images/hw03.png)

6. Ensured all plots would update any time that a new sample is selected.

