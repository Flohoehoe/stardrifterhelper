document.addEventListener('DOMContentLoaded', (event) => {
  const hexfield = document.getElementById('hexfield');
  const marker = document.getElementById('marker');

  const buttons = document.querySelectorAll('.menu-btn');
  const sheets = document.querySelectorAll('.sheet-window');

  let rightClickPosition = { x: 0, y: 0 };


  //menübar
  function toggleSheet(sheetId) {
    const sheet = document.getElementById(sheetId);
    const isDisplayed = sheet.style.display === 'block';
    // Alle Fenster schließen
    sheets.forEach(s => s.style.display = 'none');
    // Das angeklickte Fenster umschalten
    sheet.style.display = isDisplayed ? 'none' : 'block';
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', function() {
      toggleSheet(this.getAttribute('data-sheet'));
    });
  });


  const charName = document.getElementById('charName');
  const mindValues = document.querySelector('.char-values[data-group="mind"]');
  const healthValues = document.querySelector('.char-values[data-group="health"]');
  const destinyValues = document.querySelector('.char-values[data-group="destiny"]');
  const notorietyValues = document.querySelector('.char-values[data-group="notoriety"]');


  charName.addEventListener('change', () => {
    const characterName = charName.value;
    saveSelection('characterName', characterName);
  })

  function saveSelection(groupName, value) {
    localStorage.setItem(groupName, value);
  }
  
  healthValues.addEventListener('click', function(event) {
    if (event.target.classList.contains('char-value')) {
      updateSelection(event, healthValues);
      saveSelection('health', event.target.dataset.value);
    }
  });
  
  mindValues.addEventListener('click', function(event) {
    if (event.target.classList.contains('char-value')) {
      updateSelection(event, mindValues);
      saveSelection('mind', event.target.dataset.value);
    }
  });
  
  destinyValues.addEventListener('click', function(event) {
    if (event.target.classList.contains('char-value')) {
      updateSelection(event, destinyValues);
      saveSelection('destiny', event.target.dataset.value);
    }
  });

  notorietyValues.addEventListener('click', function(event) {
    // Findet das nächste Elternelement mit der Klasse 'char-value', beginnend bei event.target
    const charValueElement = event.target.closest('.char-value');
    
    if (charValueElement) {
      console.log("event contains char-value");
      updateSelection({ target: charValueElement }, notorietyValues);
      saveSelection('notoriety', charValueElement.dataset.value);
    } else {
      console.log("event not contains char-value");
    }
  });
  
  function updateSelection(event, valuesContainer) {
    valuesContainer.querySelectorAll('.char-value').forEach(value => {
      value.classList.remove('selected');
    });
    event.target.classList.add('selected');
  }
  
  function loadSelections() {
    charName.value = localStorage.getItem('characterName');
    const groups = ['health', 'mind', 'destiny', 'notoriety'];
    groups.forEach(groupName => {
      const savedValue = localStorage.getItem(groupName);
      if (savedValue) {
        const groupValues = document.querySelector(`.char-values[data-group="${groupName}"]`);
        const valueToSelect = groupValues.querySelector(`.char-value[data-value="${savedValue}"]`);
        if (valueToSelect) {
          updateSelection({ target: valueToSelect }, groupValues);
        }
      }
    });
  }


  // Gespeicherte Position abrufen
  const savedPosition = JSON.parse(localStorage.getItem('markerPosition'));
  if (savedPosition) {
    marker.style.left = `${savedPosition.x}px`;
    marker.style.top = `${savedPosition.y}px`;
    marker.style.visibility = 'visible';
  }

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  const contextMenu = document.getElementById('contextMenu');
  contextMenu.style.display = 'block';
  contextMenu.style.left = `${e.pageX}px`;
  contextMenu.style.top = `${e.pageY}px`;

  // Speichere die Position des Rechtsklicks
  rightClickPosition.x = e.pageX;
  rightClickPosition.y = e.pageY;
});

document.addEventListener('click', function(e) {
  document.getElementById('contextMenu').style.display = 'none';
});

document.getElementById('placeShip').addEventListener('click', function(e) {
  const rect = hexfield.getBoundingClientRect();
  const x = rightClickPosition.x - rect.left - marker.offsetWidth / 2;
  const y = rightClickPosition.y - rect.top - marker.offsetHeight / 2;


  // Position des Markers setzen
  marker.style.left = `${x}px`;
  marker.style.top = `${y}px`;
  marker.style.visibility = 'visible';
  
  // Position speichern
  localStorage.setItem('markerPosition', JSON.stringify({x, y}));
});

document.getElementById('placeStation').addEventListener('click', function(e) {
  // Logik, um die Raumstation zu platzieren
});

loadSelections();
});
