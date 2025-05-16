function logEventDetails(e) {
  const log = document.getElementById('log');
  log.textContent = `
🧠 General:
  type: ${e.type}
  timestamp: ${e.timeStamp}
  defaultPrevented: ${e.defaultPrevented}

🎯 Target:
  target: ${e.target.tagName}
  currentTarget: ${e.currentTarget?.tagName}
  srcElement: ${e.srcElement?.tagName}
  toElement: ${e.toElement?.tagName}

🖱️ Mouse Coords:
  clientX / clientY: ${e.clientX} / ${e.clientY}
  screenX / screenY: ${e.screenX} / ${e.screenY}

⌨️ Keyboard:
  key: ${e.key}
  code: ${e.code}
  keyCode (deprecated): ${e.keyCode}
  altKey: ${e.altKey}
  ctrlKey: ${e.ctrlKey}
  shiftKey: ${e.shiftKey}
  metaKey: ${e.metaKey}
  repeat: ${e.repeat}
  isComposing: ${e.isComposing}
`;
}

// Bind both click and keydown for demonstration
document.addEventListener('click', logEventDetails);
document.addEventListener('keydown', logEventDetails);

// Optional: also bind the button
document.getElementById("clickMe").addEventListener("click", logEventDetails);
