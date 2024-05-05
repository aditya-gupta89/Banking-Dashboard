"use client";
import React from "react";
import CountUp from "react-countup";
const AnimatedCounter = ({ counter }: { counter: number }) => {
  return <CountUp prefix="$" decimal="." decimals={2} end={counter} />;
};

export default AnimatedCounter;
