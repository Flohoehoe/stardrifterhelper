document.addEventListener("DOMContentLoaded", (event) => {
  const hexfield = document.getElementById("hexfield");
  const marker = document.getElementById("marker");

  const charName = document.getElementById("charName");

  const healthmarker = document.getElementById("healthmarker");
  const charHealth = document.querySelector(".health");

  const mindMarker = document.getElementById("mindmarker");
  const charMind = document.querySelector('.char-values[data-group="mind"]');

  const destinyMarker = document.getElementById("destinymarker");
  const charDestiny = document.querySelector(
    '.char-values[data-group="destiny"]'
  );

  const notorietyMarker = document.getElementById("notorietymarker");
  const charNotoriety = document.querySelector(
    '.char-values[data-group="notoriety"]'
  );

  const buttons = document.querySelectorAll(".menu-btn");
  const sheets = document.querySelectorAll(".sheet-window");

  let rightClickPosition = { x: 0, y: 0 };

  //menübar und sheets
  function toggleSheet(sheetId) {
    const sheet = document.getElementById(sheetId);
    const isDisplayed = sheet.style.display === "block";
    // Alle Fenster schließen
    sheets.forEach((s) => (s.style.display = "none"));
    // Das angeklickte Fenster umschalten
    sheet.style.display = isDisplayed ? "none" : "block";

    if (sheetId === "charSheet") {
      const charaName = localStorage.getItem("characterName");
      charName.value = charaName;

      const savedhealthMarkerPosition = JSON.parse(
        localStorage.getItem("healthmarkerPosition")
      );
      if (savedhealthMarkerPosition) {
        healthmarker.style.left = `${savedhealthMarkerPosition.x}px`;
        healthmarker.style.top = `${savedhealthMarkerPosition.y}px`;
        healthmarker.style.visibility = "visible";
      }

      const savedmindMarkerPosition = JSON.parse(
        localStorage.getItem("mindmarkerPosition")
      );
      if (savedmindMarkerPosition) {
        mindMarker.style.left = `${savedmindMarkerPosition.x}px`;
        mindMarker.style.top = `${savedmindMarkerPosition.y}px`;
        mindMarker.style.visibility = "visible";
      }

      const saveddestinyMarkerPosition = JSON.parse(
        localStorage.getItem("destinymarkerPosition")
      );
      if (saveddestinyMarkerPosition) {
        destinyMarker.style.left = `${saveddestinyMarkerPosition.x}px`;
        destinyMarker.style.top = `${saveddestinyMarkerPosition.y}px`;
        destinyMarker.style.visibility = "visible";
      }

      const savednotorietyMarkerPosition = JSON.parse(
        localStorage.getItem("notorietymarkerPosition")
      );
      if (savednotorietyMarkerPosition) {
        notorietyMarker.style.left = `${savednotorietyMarkerPosition.x}px`;
        notorietyMarker.style.top = `${savednotorietyMarkerPosition.y}px`;
        notorietyMarker.style.visibility = "visible";
      }
    }
  }

  charName.addEventListener("change", () => {
    const characterName = charName.value;
    saveSelection("characterName", characterName);
  });

  charHealth.addEventListener("click", (e) => {
    e.preventDefault();
    healthmarker.style.visibility = "visible";

    const rect = charHealth.getBoundingClientRect();

    const x = e.pageX - rect.left - healthmarker.offsetWidth / 2;
    const y = e.pageY - rect.top - healthmarker.offsetHeight / 2;

    healthmarker.style.left = `${x}px`;
    healthmarker.style.top = `${y}px`;

    localStorage.setItem("healthmarkerPosition", JSON.stringify({ x, y }));
  });

  charMind.addEventListener("click", (e) => {
    e.preventDefault();
    mindMarker.style.visibility = "visible";

    const rect = charMind.getBoundingClientRect();

    const x = e.pageX - rect.left - mindMarker.offsetWidth / 2;
    const y = e.pageY - rect.top - mindMarker.offsetHeight / 2;

    mindMarker.style.left = `${x}px`;
    mindMarker.style.top = `${y}px`;

    localStorage.setItem("mindmarkerPosition", JSON.stringify({ x, y }));
  });

  charDestiny.addEventListener("click", (e) => {
    e.preventDefault();
    destinyMarker.style.visibility = "visible";

    const rect = charDestiny.getBoundingClientRect();

    const x = e.pageX - rect.left - destinyMarker.offsetWidth / 2;
    const y = e.pageY - rect.top - destinyMarker.offsetHeight / 2;

    destinyMarker.style.left = `${x}px`;
    destinyMarker.style.top = `${y}px`;

    localStorage.setItem("destinymarkerPosition", JSON.stringify({ x, y }));
  });

  charNotoriety.addEventListener("click", (e) => {
    e.preventDefault();
    notorietyMarker.style.visibility = "visible";

    const rect = charNotoriety.getBoundingClientRect();

    const x = e.pageX - rect.left - notorietyMarker.offsetWidth / 2;
    const y = e.pageY - rect.top - notorietyMarker.offsetHeight / 2;

    notorietyMarker.style.left = `${x}px`;
    notorietyMarker.style.top = `${y}px`;

    localStorage.setItem("notorietymarkerPosition", JSON.stringify({ x, y }));
  });

  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      toggleSheet(this.getAttribute("data-sheet"));
    });
  });

  // Kontextmenü und Raumschiff platzieren
  const savedPosition = JSON.parse(localStorage.getItem("markerPosition"));
  if (savedPosition) {
    marker.style.left = `${savedPosition.x}px`;
    marker.style.top = `${savedPosition.y}px`;
    marker.style.visibility = "visible";
  }

  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    const contextMenu = document.getElementById("contextMenu");
    contextMenu.style.display = "block";
    contextMenu.style.left = `${e.pageX}px`;
    contextMenu.style.top = `${e.pageY}px`;

    // Speichere die Position des Rechtsklicks
    rightClickPosition.x = e.pageX;
    rightClickPosition.y = e.pageY;
  });

  document.addEventListener("click", function (e) {
    document.getElementById("contextMenu").style.display = "none";
  });

  document.getElementById("placeShip").addEventListener("click", function (e) {
    const rect = hexfield.getBoundingClientRect();
    const x = rightClickPosition.x - rect.left - marker.offsetWidth / 2;
    const y = rightClickPosition.y - rect.top - marker.offsetHeight / 2;

    // Position des Markers setzen
    marker.style.left = `${x}px`;
    marker.style.top = `${y}px`;
    marker.style.visibility = "visible";

    // Position speichern
    localStorage.setItem("markerPosition", JSON.stringify({ x, y }));
  });

  document
    .getElementById("placeStation")
    .addEventListener("click", function (e) {
      // Logik, um die Raumstation zu platzieren
    });
});
