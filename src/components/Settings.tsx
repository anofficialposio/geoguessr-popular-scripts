import React from "react"

import { useStorage } from "@plasmohq/storage/hook"

import { SCRIPT_INFO } from "~src/libs/script-info"
import { INITIAL_SETTINGS, STORAGE_KEYS } from "~src/libs/storage"

export const Settings = () => {
  const [tinyLeaveGameButtonEnabled, setTinyLeaveGameButtonEnabled] =
    useStorage(
      STORAGE_KEYS.tinyLeaveGameButtonEnabled,
      INITIAL_SETTINGS.tinyLeaveGameButtonEnabled
    )
  const [countryStreakEnabled, setCountryStreakEnabled] = useStorage(
    STORAGE_KEYS.countryStreakEnabled,
    INITIAL_SETTINGS.countryStreakEnabled
  )
  const [trainingModeEnabled, setTrainingModeEnabled] = useStorage(
    STORAGE_KEYS.trainingModeEnabled,
    INITIAL_SETTINGS.trainingModeEnabled
  )

  return (
    <div>
      <div style={{}}>
        <input
          type="checkbox"
          id={STORAGE_KEYS.tinyLeaveGameButtonEnabled}
          checked={tinyLeaveGameButtonEnabled}
          onChange={(e) => {
            setTinyLeaveGameButtonEnabled(e.target.checked)
          }}
        />{" "}
        <label
          style={{
            fontSize: 14,
            fontStyle: "bold"
          }}
          htmlFor={STORAGE_KEYS.tinyLeaveGameButtonEnabled}>
          {SCRIPT_INFO["tiny-leave-game-button"].name}
        </label>
      </div>
      <div style={{}}>
        <input
          type="checkbox"
          id={STORAGE_KEYS.countryStreakEnabled}
          checked={countryStreakEnabled}
          onChange={(e) => {
            setCountryStreakEnabled(e.target.checked)
          }}
        />{" "}
        <label
          style={{
            fontSize: 14,
            fontStyle: "bold"
          }}
          htmlFor={STORAGE_KEYS.countryStreakEnabled}>
          {SCRIPT_INFO["geoguessr-country-streak"].name}
        </label>
      </div>
      <div style={{}}>
        <input
          type="checkbox"
          id={STORAGE_KEYS.trainingModeEnabled}
          checked={trainingModeEnabled}
          onChange={(e) => {
            setTrainingModeEnabled(e.target.checked)
          }}
        />{" "}
        <label
          style={{
            fontSize: 14,
            fontStyle: "bold"
          }}
          htmlFor={STORAGE_KEYS.trainingModeEnabled}>
          {SCRIPT_INFO["geoguessr-training-mode"].name}
        </label>
      </div>
    </div>
  )
}
