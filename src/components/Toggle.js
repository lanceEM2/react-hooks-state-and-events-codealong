import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);
  // set false because the button should be OFF when first rendered

  // the handleClick() when called sets the opposite of the ON/OFF
  function handleClick() {
    setIsOn((isOn) => !isOn);
  }

  const color = isOn ? "red" : "white";

  return (
    // when useState(true) the toggle will display ON
    <>
    <button onClick = {handleClick} style = {{ background: color }}>
      {isOn ? "ON" : "OFF"}
    </button>
    </>
  )
}

export default Toggle;
