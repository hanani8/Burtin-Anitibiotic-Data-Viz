function generateBoundaryPoints(viz, radius, DATA, centerX, centerY, angle) {
  viz
    .selectAll("circle.point")
    .data(DATA)
    .join("circle")
    .attr("cx", function (d, i) {
      return centerX + radius * Math.cos(i * angle);
    })
    .attr("cy", function (d, i) {
      return centerY + radius * Math.sin(i * angle);
    })
    .attr("r", 3)
    .attr("fill", "black");
}
