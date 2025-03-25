import React, { useMemo } from "react"

import { Settings } from "./components/Settings"

function OptionsIndex() {
  const version = useMemo(() => {
    const manifest = chrome.runtime.getManifest()
    return manifest.version
  }, [])

  return (
    <div style={{ padding: "24px" }}>
      {/* <img src={iconImage} width="70" alt="app icon" /> */}
      <h1>
        {chrome.i18n.getMessage("name")} v{version}
      </h1>

      <h2>TODO:</h2>

      <div style={{ padding: "0px" }}>
        <Settings />
      </div>

      <hr
        style={{
          marginTop: "48px",
          marginBottom: "18px"
        }}
      />

      <footer>
        Made by{" "}
        <a href="https://posio.pages.dev" target="_blank" rel="noreferrer">
          Posio
        </a>
      </footer>
    </div>
  )
}

export default OptionsIndex
