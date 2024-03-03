function generateGramPositiveArc(d3, viz, width, height) {
  const angle = (2 * Math.PI) / 16;
  const gramPositiveArcGenerator = d3
    .arc()
    .innerRadius(height / 3.85)
    .outerRadius(height / 3.5)
    .padAngle(0.01)
    .cornerRadius(10);

  const gramPositiveArcData = d3.range(9, 16).map((d, i) => {
    return {
      startAngle: d * angle,
      endAngle: (d + 1) * angle,
    };
  });

  viz
    .selectAll(".gramPositiveArc") // Select elements with class 'gramPositiveArc', which are initially non-existent
    .data(gramPositiveArcData)
    .join("path")
    .attr("class", "gramPositiveArc") // Assign class 'gramPositiveArc' to new elements
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
    .attr("fill", "#FE7A36")
    .attr("d", gramPositiveArcGenerator);
}
