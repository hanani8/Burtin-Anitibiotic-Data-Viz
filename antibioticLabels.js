function generateAntibioticLabels(d3, viz, width, height) {
  const centerX = width / 2;
  const centerY = height / 2;

  const rectWidth = height / 5.5;
  const rectHeight = height / (5.5 * 5); // Adjusted for better visibility
  const padding = 10; // Vertical padding between rectangles
  const opacity = 0.8;

  const centers = [
    {
      text: "Penicilin",
      x: centerX - rectWidth / 2,
      y: centerY - rectHeight / 2 - padding - rectHeight, // Adjust for padding
      fill: "#D04848",
    },
    {
      text: "Streptomycin",
      x: centerX - rectWidth / 2,
      y: centerY - rectHeight / 2, // Centered
      fill: "#6895D2",
    },
    {
      text: "Neomycin",
      x: centerX - rectWidth / 2,
      y: centerY + rectHeight / 2 + padding, // Adjust for padding
      fill: "#508D69",
    },
  ];

  // Create rectangles
  viz
    .selectAll("rect.antibiotic-labels")
    .data(centers)
    .join("rect")
    .attr("class", "antibiotic-labels")
    .attr("x", (d) => d.x)
    .attr("y", (d) => d.y)
    .attr("width", rectWidth)
    .attr("height", rectHeight)
    .attr("fill", (d) => d.fill)
    .attr("stroke", "black")
    .attr("stroke-width", 1.5)
    .attr("fill-opacity", opacity);

  // Add text inside rectangles
  viz
    .selectAll("text.antibiotic-labels")
    .data(centers)
    .join("text")
    .attr("class", "antibiotic-labels")
    .attr("class", "poppins-bold")
    .attr("x", (d) => d.x + rectWidth / 2)
    .attr("y", (d) => d.y + rectHeight / 2)
    .attr("dy", "0.35em") // Center text vertically within rectangle
    .attr("text-anchor", "middle") // Center text horizontally
    .text((d) => d.text)
    .attr("fill", "black") // Text color
    .attr("stroke-width", 0); // No stroke for text
}
