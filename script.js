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

  const weapons = document.querySelector(".weapons");
  const defaultWeaponMarker = document.getElementById("defaultWeaponMarker");
  const weaponAMarker = document.getElementById("weaponAMarker");
  const weaponBMarker = document.getElementById("weaponBMarker");
  const weaponAInput = document.getElementById("weaponA");
  const weaponBInput = document.getElementById("weaponB");

  const auxillaryNameA = document.getElementById("auxilliaryA");
  const auxillaryNameB = document.getElementById("auxilliaryB");
  const auxillaryNameC = document.getElementById("auxilliaryC");
  const auxillaryNameD = document.getElementById("auxilliaryD");
  const auxillaryNameE = document.getElementById("auxilliaryE");

  const auxillaryEventA = document.getElementById("auxilliaryEventA");
  const auxillaryEventB = document.getElementById("auxilliaryEventB");
  const auxillaryEventC = document.getElementById("auxilliaryEventC");
  const auxillaryEventD = document.getElementById("auxilliaryEventD");
  const auxillaryEventE = document.getElementById("auxilliaryEventE");

  const lucre = document.querySelector(".lucre");
  const lucreMarkerA = document.getElementById("lucremarkerA");
  const lucreMarkerB = document.getElementById("lucremarkerB");
  const lucreMarkerC = document.getElementById("lucremarkerC");

  const starpoints = document.querySelector(".starpoints");
  const starpointsmarkerA = document.getElementById("starpointsmarkerA");
  const starpointsmarkerB = document.getElementById("starpointsmarkerB");

  const buttons = document.querySelectorAll(".menu-btn");
  const sheets = document.querySelectorAll(".sheet-window");

  let rightClickPosition = { x: 0, y: 0 };

  // Helferfunktionen

  function saveSelection(key, value) {
    localStorage.setItem(key, value);
  }

  function loadCharSheet() {
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

    const saveddefaultWeaponMarkerPosition = JSON.parse(
      localStorage.getItem("defaultWeaponMarkerPosition")
    );
    if (saveddefaultWeaponMarkerPosition) {
      defaultWeaponMarker.style.left = `${saveddefaultWeaponMarkerPosition.x}px`;
      defaultWeaponMarker.style.top = `${saveddefaultWeaponMarkerPosition.y}px`;
      defaultWeaponMarker.style.visibility = "visible";
    }

    const savedweaponAMarkerPosition = JSON.parse(
      localStorage.getItem("weaponAMarkerPosition")
    );
    if (savedweaponAMarkerPosition) {
      weaponAMarker.style.left = `${savedweaponAMarkerPosition.x}px`;
      weaponAMarker.style.top = `${savedweaponAMarkerPosition.y}px`;
      weaponAMarker.style.visibility = "visible";
    }

    const savedweaponBMarkerPosition = JSON.parse(
      localStorage.getItem("weaponBMarkerPosition")
    );
    if (savedweaponBMarkerPosition) {
      weaponBMarker.style.left = `${savedweaponBMarkerPosition.x}px`;
      weaponBMarker.style.top = `${savedweaponBMarkerPosition.y}px`;
      weaponBMarker.style.visibility = "visible";
    }
    weaponAInput.value = localStorage.getItem("weaponA");
    weaponBInput.value = localStorage.getItem("weaponB");

    // Auxilliary Namen
    auxillaryNameA.value = localStorage.getItem("auxillaryNameA");
    auxillaryNameB.value = localStorage.getItem("auxillaryNameB");
    auxillaryNameC.value = localStorage.getItem("auxillaryNameC");
    auxillaryNameD.value = localStorage.getItem("auxillaryNameD");
    auxillaryNameE.value = localStorage.getItem("auxillaryNameE");

    // Auxilliary Events
    auxillaryEventA.value = localStorage.getItem("auxillaryEventA");
    auxillaryEventB.value = localStorage.getItem("auxillaryEventB");
    auxillaryEventC.value = localStorage.getItem("auxillaryEventC");
    auxillaryEventD.value = localStorage.getItem("auxillaryEventD");
    auxillaryEventE.value = localStorage.getItem("auxillaryEventE");

    // Lucre
    const savedlucreMarkerAPosition = JSON.parse(
      localStorage.getItem("lucreMarkerAPosition")
    );
    if (savedlucreMarkerAPosition) {
      lucreMarkerA.style.left = `${savedlucreMarkerAPosition.x}px`;
      lucreMarkerA.style.top = `${savedlucreMarkerAPosition.y}px`;
      lucreMarkerA.style.visibility = "visible";
    }

    const savedlucreMarkerBPosition = JSON.parse(
      localStorage.getItem("lucreMarkerBPosition")
    );
    if (savedlucreMarkerBPosition) {
      lucreMarkerB.style.left = `${savedlucreMarkerBPosition.x}px`;
      lucreMarkerB.style.top = `${savedlucreMarkerBPosition.y}px`;
      lucreMarkerB.style.visibility = "visible";
    }

    const savedlucreMarkerCPosition = JSON.parse(
      localStorage.getItem("lucreMarkerCPosition")
    );
    if (savedlucreMarkerCPosition) {
      lucreMarkerC.style.left = `${savedlucreMarkerCPosition.x}px`;
      lucreMarkerC.style.top = `${savedlucreMarkerCPosition.y}px`;
      lucreMarkerC.style.visibility = "visible";
    }

    // Starpoints
    const savedstarpointsmarkerAPosition = JSON.parse(
      localStorage.getItem("starpointsmarkerAPosition")
    );
    if (savedstarpointsmarkerAPosition) {
      starpointsmarkerA.style.left = `${savedstarpointsmarkerAPosition.x}px`;
      starpointsmarkerA.style.top = `${savedstarpointsmarkerAPosition.y}px`;
      starpointsmarkerA.style.visibility = "visible";
    }

    const savedstarpointsmarkerBPosition = JSON.parse(
      localStorage.getItem("starpointsmarkerBPosition")
    );
    if (savedstarpointsmarkerBPosition) {
      starpointsmarkerB.style.left = `${savedstarpointsmarkerBPosition.x}px`;
      starpointsmarkerB.style.top = `${savedstarpointsmarkerBPosition.y}px`;
      starpointsmarkerB.style.visibility = "visible";
    }
  }

  //menübar und sheets
  function toggleSheet(sheetId) {
    const sheet = document.getElementById(sheetId);
    const isDisplayed = sheet.style.display === "block";
    // Alle Fenster schließen
    sheets.forEach((s) => (s.style.display = "none"));
    // Das angeklickte Fenster umschalten
    sheet.style.display = isDisplayed ? "none" : "block";

    if (sheetId === "charSheet") {
      loadCharSheet();
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
    const scrollTop = charHealth.scrollTop;

    const x = e.pageX - rect.left - healthmarker.offsetWidth / 2;
    const y = e.pageY - rect.top + scrollTop - healthmarker.offsetHeight / 2;

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

  weapons.addEventListener("click", (e) => {
    e.preventDefault();

    const rect = weapons.getBoundingClientRect();

    const x = e.pageX - rect.left - defaultWeaponMarker.offsetWidth / 2;
    const y = e.pageY - rect.top - defaultWeaponMarker.offsetHeight / 2;

    if (x > 150) {
      if (y > 20 && y < 50) {
        defaultWeaponMarker.style.visibility = "visible";
        defaultWeaponMarker.style.left = `${x}px`;
        defaultWeaponMarker.style.top = `${y}px`;

        localStorage.setItem(
          "defaultWeaponMarkerPosition",
          JSON.stringify({ x, y })
        );
      }

      if (y > 55 && y < 95) {
        weaponAMarker.style.visibility = "visible";
        weaponAMarker.style.left = `${x}px`;
        weaponAMarker.style.top = `${y}px`;

        localStorage.setItem("weaponAMarkerPosition", JSON.stringify({ x, y }));
      }

      if (y > 100 && y < 140) {
        weaponBMarker.style.visibility = "visible";
        weaponBMarker.style.left = `${x}px`;
        weaponBMarker.style.top = `${y}px`;

        localStorage.setItem("weaponBMarkerPosition", JSON.stringify({ x, y }));
      }
    }
  });

  weaponAInput.addEventListener("change", () => {
    const weaponA = weaponAInput.value;
    saveSelection("weaponA", weaponA);
  });

  weaponBInput.addEventListener("change", () => {
    const weaponB = weaponBInput.value;
    saveSelection("weaponB", weaponB);
  });

  // Auxilliary Namen
  auxillaryNameA.addEventListener("change", () => {
    const auxillaryNameASaved = auxillaryNameA.value;
    saveSelection("auxillaryNameA", auxillaryNameASaved);
  });

  auxillaryNameB.addEventListener("change", () => {
    const auxillaryNameBSaved = auxillaryNameB.value;
    saveSelection("auxillaryNameB", auxillaryNameBSaved);
  });

  auxillaryNameC.addEventListener("change", () => {
    const auxillaryNameCSaved = auxillaryNameC.value;
    saveSelection("auxillaryNameC", auxillaryNameCSaved);
  });

  auxillaryNameD.addEventListener("change", () => {
    const auxillaryNameDSaved = auxillaryNameD.value;
    saveSelection("auxillaryNameD", auxillaryNameDSaved);
  });

  auxillaryNameE.addEventListener("change", () => {
    const auxillaryNameESaved = auxillaryNameE.value;
    saveSelection("auxillaryNameE", auxillaryNameESaved);
  });

  // Auxilliary Events
  auxillaryEventA.addEventListener("change", () => {
    const auxillaryEventASaved = auxillaryEventA.value;
    saveSelection("auxillaryEventA", auxillaryEventASaved);
  });

  auxillaryEventB.addEventListener("change", () => {
    const auxillaryEventBSaved = auxillaryEventB.value;
    saveSelection("auxillaryEventB", auxillaryEventBSaved);
  });

  auxillaryEventC.addEventListener("change", () => {
    const auxillaryEventCSaved = auxillaryEventC.value;
    saveSelection("auxillaryEventC", auxillaryEventCSaved);
  });

  auxillaryEventD.addEventListener("change", () => {
    const auxillaryEventDSaved = auxillaryEventD.value;
    saveSelection("auxillaryEventD", auxillaryEventDSaved);
  });

  auxillaryEventE.addEventListener("change", () => {
    const auxillaryEventESaved = auxillaryEventE.value;
    saveSelection("auxillaryEventE", auxillaryEventESaved);
  });

  // Lucre
  lucre.addEventListener("click", (e) => {
    e.preventDefault();

    const rect = lucre.getBoundingClientRect();

    const x = e.pageX - rect.left - lucreMarkerA.offsetWidth / 2;
    const y = e.pageY - rect.top - lucreMarkerA.offsetHeight / 2;

    if (y > 10 && y < 50) {
      lucreMarkerA.style.visibility = "visible";
      lucreMarkerA.style.left = `${x}px`;
      lucreMarkerA.style.top = `${y}px`;

      localStorage.setItem("lucreMarkerAPosition", JSON.stringify({ x, y }));
    }

    if (y > 50 && y < 80) {
      lucreMarkerB.style.visibility = "visible";
      lucreMarkerB.style.left = `${x}px`;
      lucreMarkerB.style.top = `${y}px`;

      localStorage.setItem("lucreMarkerBPosition", JSON.stringify({ x, y }));
    }

    if (y > 80 && y < 140) {
      lucreMarkerC.style.visibility = "visible";
      lucreMarkerC.style.left = `${x}px`;
      lucreMarkerC.style.top = `${y}px`;

      localStorage.setItem("lucreMarkerCPosition", JSON.stringify({ x, y }));
    }
  });

  // Starpoints

  starpoints.addEventListener("click", (e) => {
    e.preventDefault();

    const rect = starpoints.getBoundingClientRect();

    const x = e.pageX - rect.left - starpointsmarkerA.offsetWidth / 2;
    const y = e.pageY - rect.top - starpointsmarkerA.offsetHeight / 2;

    if (y > 0 && y < 17) {
      starpointsmarkerA.style.visibility = "visible";
      starpointsmarkerA.style.left = `${x}px`;
      starpointsmarkerA.style.top = `${y}px`;

      localStorage.setItem(
        "starpointsmarkerAPosition",
        JSON.stringify({ x, y })
      );
    }

    if (y > 17 && y < 60) {
      starpointsmarkerB.style.visibility = "visible";
      starpointsmarkerB.style.left = `${x}px`;
      starpointsmarkerB.style.top = `${y}px`;

      localStorage.setItem(
        "starpointsmarkerBPosition",
        JSON.stringify({ x, y })
      );
    }
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
