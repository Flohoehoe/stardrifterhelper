const logOutput = document.querySelector(".loglist");
const logEventInput = document.querySelector("#logEventInput");
const logInput = document.querySelector("#logInput");

function updateLoglocalStorage(logEntry) {
  let log = JSON.parse(localStorage.getItem("log")) || []; // Fallback auf ein leeres Array, falls nichts im localStorage ist

  log.push(logEntry);
  localStorage.setItem("log", JSON.stringify(log)); // Speichere das Array als JSON
}

export function createLogEntry() {
  if (logInput.value.trim() === "" || logEventInput.value.trim() === "") {
    logInput.value = "Inser Text for Log Entry";
  } else {
    const logText = `${logEventInput.value}: ${logInput.value}`;
    const logEntry = document.createElement("li");
    logEntry.classList.add("logentry");
    logEntry.textContent = logText;
    logOutput.appendChild(logEntry);
    updateLoglocalStorage(logText);
    logInput.value = "";
    logEventInput.value = ""; // Leere das Inputfeld
  }
}

export function loadLog() {
  const log = JSON.parse(localStorage.getItem("log"));
  if (log) {
    log.forEach((entry) => {
      const logEntry = document.createElement("li");
      logEntry.classList.add("logentry");
      logEntry.textContent = entry;
      logOutput.appendChild(logEntry);
    });
  }
}

export function exportLog() {
  const log = JSON.parse(localStorage.getItem("log")) || [];
  let logString = "";
  log.forEach((entry) => {
    logString += `${entry}\n`;
  });
  const blob = new Blob([logString], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "log.txt";
  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
