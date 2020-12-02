import React from "react";
import NormalDistribution from "./normal-distribution";

class SampleProportion extends NormalDistribution {
  constructor(participants, conversions) {
    super(); //TODO: do I need it here?
    let mean = conversions / participants,
      sd = Math.sqrt((mean * (1 - mean)) / participants);

    super(mean, sd);
  }
} //rather return to NormalDistribution? and import it there?

export default SampleProportion;
