import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://www.geoguessr.com/*"],
  // memo: run_at: "document_start" だと動かない
  run_at: "document_idle"
}

/* 
# Migration Notes

This script works without any modification so far.

*/

// ==UserScript==
// @name         GeoGuessr Tiny Leave Game Button
// @description  Make the "Leave Game" button tiny to prevent accidental clicks.
// @version      1.0.0
// @author       Posio
// @license      MIT
// @match        https://www.geoguessr.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

const DEBUG = false

console.log("[Tiny Leave Game Button] Script loaded")

const debugLog = (message) => {
  if (!DEBUG) {
    return
  }
  console.log(`[Tiny Leave Game Button] ${message}`)
}

const observer = new MutationObserver(() => {
  const overlay = document.querySelector(
    'div[class^="game-menu_inGameMenuOverlay__"]'
  )
  if (!overlay) {
    debugLog("Container not found")
    return
  }

  debugLog("Container found")

  const buttonsContainer = overlay.querySelector(
    'div[class^="buttons_buttons__"]'
  )
  if (!buttonsContainer) {
    debugLog("Buttons container not found")
    return
  }

  debugLog("Buttons found")

  // find 2nd button element in buttons
  const buttons = buttonsContainer.querySelectorAll("button")
  if (!buttons || buttons.length < 2) {
    debugLog("Leave button not found")
    return
  }

  debugLog("Leave Game button found")

  // change left and right padding to 4
  const leaveButton = buttons[1]
  leaveButton.style.paddingLeft = "4px"
  leaveButton.style.paddingRight = "4px"

  // hide button
  // leaveButton.style.display = "none"

  // change text inside button
  const span = leaveButton.querySelector("span")
  if (!span) {
    debugLog("span not found")
    return
  }
  span.textContent = "-"
})

const target = document.querySelector("#__next")
if (target) {
  observer.observe(target, { subtree: true, childList: true })
  debugLog("Observer started")
} else {
  debugLog("Target not found")
}
