import React from "react";

interface MegaBoostProps {
  handleClick: () => void;
}

function MegaBoost(props: MegaBoostProps) {
  console.info("MegaBoost rendered");

  return <button onClick={props.handleClick}>MEGA BOOST!</button>;
}

export default React.memo(MegaBoost);
