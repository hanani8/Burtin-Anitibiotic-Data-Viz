function generateMainCircle(viz, width, height) {
  const arcGenerator = d3
    .arc()
    .innerRadius(height / 4)
    .outerRadius(height / 3.5)
    .padAngle(0)
    .cornerRadius(10);

  const angle = (2 * Math.PI) / 16;

  const arcData = d3.range(16).map((d, i) => {
    return {
      startAngle: i * angle,
      endAngle: (i + 1) * angle,
    };
  });

  viz
    .selectAll("path")
    .data(arcData)
    .join("path")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
    .attr("stroke", "black")
    .attr("stroke-width", "2")
    .attr("fill", "none")
    .attr("id", function (d, i) {
      return "bacteria-" + (i + 1);
    })
    .attr("class", function (d, i) {
      if (i > 8 && i < 16) {
        return "positive";
      } else {
        return "negative";
      }
    })
    .attr("d", arcGenerator);
}
