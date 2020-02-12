//Avoid use of global variables/functions(used IIFE)
(function() {
  const container = document.querySelector(".container");
  //sorting data according to the sequence number provided
  function _sortData(data) {
    return data.sort((resA, resB) => resA.sequenceNO - resB.sequenceNO);
  }
  //Completion status wise color
  function progressColor(status) {
    switch (status) {
      case "COMPLETE":
        return "lightgreen";
      case "NOT_STARTED":
        return "lightcoral";
      case "IN_PROGRESS":
        return "lightsalmon";
      default:
        return "whitesmoke";
    }
  }
  //Display Whole TOC on load of window
  async function displayTOC() {
    const res = await fetch("http://localhost:3000/api/book/maths");
    const data = await res.json();
    const resArr = _sortData(data.response);
    for (var i = 0; i < resArr.length; i++) {
      const { title, id, type, completeCount, childrenCount, status } = resArr[
        i
      ];
      //div elements creation for each chapters
      const div = document.createElement("div");
      if (status) {
        div.style.backgroundColor = progressColor(status);
      }
      type === "chapter"
        ? div.classList.add("chapters")
        : div.classList.add("lesson");
      const childrenWrap = document.createElement("div");
      childrenWrap.classList.add("lessons");
      childTOC(id, childrenWrap);
      div.innerHTML = `${title} ${
        type === "chapter" ? `(${completeCount}/${childrenCount})` : ""
      }`;
      div.addEventListener("click", function(e) {
        e.stopPropagation();
        type === "chapter" ? div.classList.toggle("active") : null;
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
      container.appendChild(div);
      container.appendChild(childrenWrap);
    }
  }
  async function childTOC(id, childrenWrap) {
    const res = await fetch(
      `http://localhost:3000/api/book/maths/section/${id}`
    );
    const data = await res.json();
    if (data.status === "OK") {
      const childResArr = _sortData([].concat(...Object.values(data.response)));
      for (var i = 0; i < childResArr.length; i++) {
        const { title, status } = childResArr[i];
        //div element creation for each lesson
        const childDiv = document.createElement("div");
        childDiv.style.backgroundColor = progressColor(status);
        childDiv.innerHTML = title;
        childrenWrap.appendChild(childDiv);
      }
    }
  }
  window.addEventListener("load", displayTOC);
})();
