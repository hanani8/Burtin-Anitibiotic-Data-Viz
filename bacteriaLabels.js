function generateBacteriaLabels(d3, viz, width, height) {
  console.log("generateLabels");
  const angle = (2 * Math.PI) / 16;
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = height / 7.2;
  const centers = d3.range(16).map((d, i) => {
    return {
      x: centerX + radius * Math.sin((2 * d + 1) * 0.5 * angle),
      y: centerY - radius * Math.cos((2 * d + 1) * 0.5 * angle),
      text: d + 1,
    };
  });

  viz
    .selectAll("circle.labels")
    .data(centers)
    .join("circle")
    .attr("class", "labels")
    .attr("cx", (d) => d.x)
    .attr("cy", (d) => d.y)
    .attr("r", 12)
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 2);

  viz
    .selectAll("text.labels")
    .data(centers)
    .join("text")
    .attr("class", "labels")
    .attr("class", "poppins-regular")
    .attr("x", (d) => d.x)
    .attr("y", (d) => d.y)
    .attr("dy", "0.35em") // Vertically center align text
    .attr("text-anchor", "middle") // Horizontally center align text
    .text((d) => d.text)
    .attr("stroke", "black");
}
