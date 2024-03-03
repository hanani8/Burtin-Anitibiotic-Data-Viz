function generateBestTwoAntibioticsCircle(d3, viz, width, height) {
  const arcGenerator = d3
    .arc()
    .innerRadius(height / 6.3)
    .outerRadius(height / 5.5)
    .padAngle(0.03);
  // .cornerRadius(5);

  const angle = (2 * Math.PI) / 16;

  const arcData = d3.range(16).map((d, i) => {
    return {
      startAngle: i * angle,
      endAngle: (i + 1) * angle,
    };
  });

  viz
    .selectAll(".bestTwoAntibiotics")
    .data(arcData)
    .join("path")
    .attr("class", "bestTwoAntibiotics")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
    .attr("stroke", "black")
    .attr("stroke-width", "1")
    .attr("fill", "black")
    .attr("d", arcGenerator);
}
