function generateGramNegativeArc(d3, viz, width, height) {
  const angle = (2 * Math.PI) / 16;

  const gramNegativeInnerRadii = [3.625, 3.75, 3.875];

  for (const i in gramNegativeInnerRadii) {
    const gramNegativeArcGenerator = d3
      .arc()
      .innerRadius(height / gramNegativeInnerRadii[i])
      .outerRadius(height / 3.5)
      .cornerRadius(5);

    const gramNegativeArcData = d3.range(0, 9).map((d, i) => {
      return {
        startAngle: d * angle,
        endAngle: (d + 1) * angle,
      };
    });

    viz
      .selectAll(".gramNegativeArc" + i) // Select elements with class 'gramPositiveArc', which are initially non-existent
      .data(gramNegativeArcData)
      .join("path")
      .attr("class", "gramNegativeArc" + i) // Assign class 'gramPositiveArc' to new elements
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
      .attr("stroke", "#202020")
      .attr("stroke-width", "1")
      .attr("fill", "none")
      .attr("d", gramNegativeArcGenerator);
  }

  const gramNegativeOrangeLiningArcGenerator = d3
    .arc()
    .innerRadius(height / 4)
    .outerRadius(height / 3.5)
    .cornerRadius(10);

  const gramNegativeOrangeLiningData = d3.range(0, 9).map((d, i) => {
    return {
      startAngle: d * angle,
      endAngle: (d + 1) * angle,
    };
  });

  viz
    .selectAll(".gramNegativeOrangeLining") // Select elements with class 'gramPositiveArc', which are initially non-existent
    .data(gramNegativeOrangeLiningData)
    .join("path")
    .attr("class", "gramNegativeOrangeLining") // Assign class 'gramPositiveArc' to new elements
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
    .attr("stroke", "#FE7A36")
    .attr("stroke-width", "3")
    .attr("fill", "none")
    .attr("d", gramNegativeOrangeLiningArcGenerator);
}
