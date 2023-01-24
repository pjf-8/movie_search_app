import React from "react";

const ScreenHandler = (props) => {
  function handleScreen() {
    var x = document.getElementById("searchML");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  return (
    <div class="switchy">
      <p class="s_toggle">Toggle your movie list</p>
      <label class="switch">
        <input type="checkbox" onChange={handleScreen} />
        <span class="slider round"></span>
      </label>
    </div>
  );
};

export default ScreenHandler;
