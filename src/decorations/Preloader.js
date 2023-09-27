import React from "react";
import AtomicSpinner from "atomic-spinner";

export default function Preloader(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <div className="atomic-spinner my-auto">
      <AtomicSpinner
        nucleusDistanceFromCenter={1}
        nucleusParticleFillColor="#61DAFB"
        electronSize={2}
        electronsPerPath={3}
      />
      </div>
    </div>
  );
}
