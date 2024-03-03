function generateLineGraph(d3, viz, DATA, width, height) {
  const percentScale = d3.scaleLinear().domain([0.001, 870]).range([0, 100]);

  // Variable to hold points of efficient antibiotic
  const points = [];
  const circles = [];
  // For each bacteria, find the best antibiotic
  DATA[0].forEach((bacteria, i) => {
    const antibiotics = {
      Penicilin: bacteria["Penicilin"],
      Streptomycin: bacteria["Streptomycin"],
      Neomycin: bacteria["Neomycin"],
    };

    const bestAntibiotic = getBestAntibiotic(antibiotics);

    // For each data point, create a point with radius and angle in mind
    const radius = 4 * bacteria["Scaled_" + bestAntibiotic];
    const angle = (2 * Math.PI) / 16;
    points.push({
      x0:
        width / 2 + (height / 4 - radius) * Math.sin((2 * i + 1) * angle * 0.5),
      y0:
        height / 2 -
        (height / 4 - radius) * Math.cos((2 * i + 1) * angle * 0.5),
      x1: width / 2 + (height / 4) * Math.sin((2 * i + 1) * angle * 0.5),
      y1: height / 2 - (height / 4) * Math.cos((2 * i + 1) * angle * 0.5),
    });
    circles.push({
      cx:
        width / 2 + (height / 4 - radius) * Math.sin((2 * i + 1) * angle * 0.5),
      cy:
        height / 2 -
        (height / 4 - radius) * Math.cos((2 * i + 1) * angle * 0.5),
      r: 2,
    });
  });

  // Line Generator
  const lineGenerator = d3
    .area()
    .curve(d3.curveBasis)
    .x0((d) => d.x0)
    .y0((d) => d.y0)
    .x1((d) => d.x1)
    .y1((d) => d.y1);

  points.push(points[0]);

  viz
    .append("path")
    .attr("d", lineGenerator(points))
    .attr("fill", "#DC8686")
    .attr("stroke", "black")
    .attr("stroke-width", "2");

  // viz
  //   .selectAll("circle.best-antibiotic")
  //   .data(circles)
  //   .join("circle")
  //   .attr("r", (d, i) => d.r)
  //   .attr("cx", (d, i) => d.cx)
  //   .attr("cy", (d, i) => d.cy)
  //   .attr("stroke", "black")
  //   .attr("stroke-width", "2");
}

function getBestAntibiotic(bacteria) {
  const sortedAntibiotics = [];
  if (bacteria["Penicilin"] >= bacteria["Streptomycin"]) {
    if (bacteria["Penicilin"] >= bacteria["Neomycin"]) {
      sortedAntibiotics.push("Penicilin");
      if (bacteria["Streptomycin"] >= bacteria["Neomycin"]) {
        sortedAntibiotics.push("Streptomycin");
        sortedAntibiotics.push("Neomycin");
      } else {
        sortedAntibiotics.push("Neomycin");
        sortedAntibiotics.push("Streptomycin");
      }
    } else {
      sortedAntibiotics.push("Neomycin");
      sortedAntibiotics.push("Penicilin");
      sortedAntibiotics.push("Streptomycin");
    }
  } else {
    if (bacteria["Streptomycin"] >= bacteria["Neomycin"]) {
      sortedAntibiotics.push("Streptomycin");
      if (bacteria["Penicilin"] >= bacteria["Neomycin"]) {
        sortedAntibiotics.push("Penicilin");
        sortedAntibiotics.push("Neomycin");
      } else {
        sortedAntibiotics.push("Neomycin");
        sortedAntibiotics.push("Penicilin");
      }
    } else {
      sortedAntibiotics.push("Neomycin");
      sortedAntibiotics.push("Streptomycin");
      sortedAntibiotics.push("Penicilin");
    }
  }
  return sortedAntibiotics[2];
}
