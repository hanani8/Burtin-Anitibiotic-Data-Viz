function generateAntiobioticCircles(d3, viz, DATA, width, height) {
  const colorScale = d3.scaleLog([0.001, 870], [1, 0.1]);
  const circleAttrs = [];
  const padding = 5;
  const angle = (2 * Math.PI) / 16;

  DATA = DATA[0];

  for (let i = 0; i < DATA.length; i++) {
    const antibiotics = {
      Penicilin: DATA[i]["Penicilin"],
      Streptomycin: DATA[i]["Streptomycin"],
      Neomycin: DATA[i]["Neomycin"],
    };

    const sortedAntibiotics = sortAntibiotics(antibiotics);

    let diameter = padding + height / 3.5;

    sortedAntibiotics.forEach((d, j) => {
      const radius = 3 * DATA[i]["Scaled_" + d];
      circleAttrs.push({
        antibiotic: d,
        mig: DATA[i][d],
        scaled_mig: DATA[i]["Scaled_" + d],
        r: radius,
        cx:
          width / 2 + (diameter + radius) * Math.sin((2 * i + 1) * angle * 0.5),
        cy:
          height / 2 -
          (diameter + radius) * Math.cos((2 * i + 1) * angle * 0.5),
        opacity: 0.8,
        fill: antibioticColor(d),
      });
      diameter += 2 * radius + padding;
    });
  }

  viz
    .selectAll("circle.antibiotic")
    .data(circleAttrs)
    .join("circle")
    .attr("r", (d, i) => d.r)
    .attr("cx", (d, i) => d.cx)
    .attr("cy", (d, i) => d.cy)
    .attr("fill", (d, i) => d.fill)
    .attr("fill-opacity", (d, i) => d.opacity)
    .attr("stroke", "black")
    .attr("stroke-width", "3")
    .on("mouseover", function (event, d) {
      d3.select(this).attr("fill-opacity", 1);
      tooltip.transition().duration(200).style("opacity", 1);
      tooltip
        .html(
          "<span class='poppins-medium'>" +
            d.antibiotic +
            "</span>" +
            "<br/>MIG: " +
            d.mig +
            "<br/>MIG(Scaled): " +
            Math.round(d.scaled_mig, 2)
        )
        .style("left", event.pageX + 5 + "px")
        .style("top", event.pageY - 28 + "px");
    })
    .on("mouseout", function (event, d) {
      d3.select(this).attr("fill-opacity", d.opacity);
      tooltip.transition().duration(500).style("opacity", 0);
    });
}

function sortAntibiotics(bacteria) {
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
  return sortedAntibiotics;
}

function antibioticColor(antibiotic) {
  if (antibiotic == "Penicilin") {
    return "#D04848";
  } else if (antibiotic == "Streptomycin") {
    return "#6895D2";
  } else {
    return "#508D69";
  }
}

const tooltip = d3
  .select("body")
  .append("div")
  .style("position", "absolute")
  .style("text-align", "center")
  .style("color", "white")
  .attr("class", "poppins-regular")
  .style("background", "#265073")
  .style("opacity", 1)
  .style("margin", "10px");
