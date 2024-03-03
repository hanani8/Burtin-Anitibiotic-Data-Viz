function generateBestTwoAntibioticArcs(d3, viz, DATA, width, height) {
  const angle = (2 * Math.PI) / 16;
  const arcGenerator = d3
    .arc()
    .innerRadius(height / 6.3)
    .outerRadius(height / 5.5);
  // .padAngle(0.02);
  // .cornerRadius(5);

  DATA = DATA[0];

  let arcData = [];

  DATA.forEach((bacteria, i) => {
    const antibiotics = {
      Penicilin: bacteria["Penicilin"],
      Streptomycin: bacteria["Streptomycin"],
      Neomycin: bacteria["Neomycin"],
    };
    const best2Antibiotics = getBest2Antibiotics(antibiotics);
    const firstAntibiotic = bacteria["Scaled_" + best2Antibiotics[1]];
    const secondAntibiotic = bacteria["Scaled_" + best2Antibiotics[0]];
    const firstAntibioticPercent =
      firstAntibiotic / (firstAntibiotic + secondAntibiotic);
    // const secondAntibioticPercent =
    //   secondAntibiotic / (firstAntibiotic + secondAntibiotic);

    arcData.push({
      startAngle: i * angle + 0.03,
      endAngle: (i + firstAntibioticPercent) * angle - 0.01,
      fill: "#E55604",
    });

    arcData.push({
      startAngle: (i + firstAntibioticPercent) * angle + 0.01,
      endAngle: (i + 1) * angle - 0.03,
      fill: "#26577C",
    });
  });

  viz
    .selectAll(".best2AntibioticArc") // Select elements with class 'gramPositiveArc', which are initially non-existent
    .data(arcData)
    .join("path")
    .attr("class", "best2AntibioticArc") // Assign class 'gramPositiveArc' to new elements
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
    .attr("fill", (d, i) => d.fill)
    .attr("d", arcGenerator);
}

function getBest2Antibiotics(bacteria) {
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
  return [sortedAntibiotics[1], sortedAntibiotics[2]];
}
