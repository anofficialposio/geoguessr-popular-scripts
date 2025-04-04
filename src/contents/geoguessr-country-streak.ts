import type { PlasmoCSConfig } from "plasmo"

import { GEF } from "~src/libs/geoguessr-event-framework"
import { GeoGuessrStreakFramework } from "~src/libs/geoguessr-streak-framework"

export const config: PlasmoCSConfig = {
  matches: ["https://www.geoguessr.com/*"],
  run_at: "document_start",
  // windowの下にいろいろと生やすので必要
  world: "MAIN"
}

/* 
# Migration Notes

ref: https://github.com/miraclewhips/geoguessr-userscripts/blob/master/geoguessr-country-streak.user.js

- EventFrameworkとStreakFrameworkをコピーして持ってくる
- StreakFramework
  - unsafeWindowを使っているので、windowを使うように変更
  - GeoGuessrStreakFrameworkをexport
  - eslintのエラーを解消
- EventFramework
  - unsafeWindowを使っているので、windowを使うように変更
  - eslintのエラーを解消
  - 即時実行をコメントアウトして、GEFだけ残す
  - GEFをexport
  - 初期化処理はここで行うように変更
- GeoGuessrEventFrameworkの初期化処理をここに追加

*/

// ==UserScript==
// @name         GeoGuessr Country Streak
// @description  Adds a country streak counter that automatically updates while you play
// @version      1.24
// @author       miraclewhips
// @match        *://*.geoguessr.com/*
// @icon         https://www.google.com/s2/favicons?domain=geoguessr.com
// @grant        unsafeWindow
// @run-at       document-start
// @require      https://miraclewhips.dev/geoguessr-event-framework/geoguessr-event-framework.min.js?v=13
// @require      https://miraclewhips.dev/geoguessr-event-framework/geoguessr-streak-framework.min.js?v=13
// @copyright    2022, miraclewhips (https://github.com/miraclewhips)
// @license      MIT
// @downloadURL  https://github.com/miraclewhips/geoguessr-userscripts/raw/master/geoguessr-country-streak.user.js
// @updateURL    https://github.com/miraclewhips/geoguessr-userscripts/raw/master/geoguessr-country-streak.user.js
// ==/UserScript==

/* ------------------------------------------------------------------------------- */
/* ----- SETTINGS (MUST RELOAD PAGE FOR CHANGES TO TAKE EFFECT) ------------------ */
/* ------------------------------------------------------------------------------- */
const LANGUAGE = "en" // ISO 639-1 language code - https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
const CHALLENGE = true // Set to false to disable streaks on challenge links
const AUTOMATIC = true // Set to false for a manual counter (controlled by keyboard shortcuts only)

/* ------------------------------------------------------------------------------- */
/* ----- KEYBOARD SHORTCUTS (MUST RELOAD PAGE FOR CHANGES TO TAKE EFFECT) -------- */
/* ------------------------------------------------------------------------------- */
const KEYBOARD_SHORTCUTS = {
  reset: "0", // reset streak to 0
  increment: "1", // increment streak by 1
  decrement: "2", // decrement streak by 1
  restore: "8" // restore your streak to it's previous value
}

/* ############################################################################### */
/* ##### DON'T MODIFY ANYTHING BELOW HERE UNLESS YOU KNOW WHAT YOU ARE DOING ##### */
/* ############################################################################### */

// I modified the original script cuz I know what I'm doing

// こっちを最初に読み込まないとエラーが出る
// もとは (function() {})() なので当然だが
if (!window["GeoGuessrEventFramework"]) {
  window["GeoGuessrEventFramework"] = new GEF()
  console.log(
    "GeoGuessr Event Framework initialised: https://github.com/miraclewhips/geoguessr-event-framework"
  )
} else {
  console.log("GeoGuessr Event Framework already initialised")
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GSF = new GeoGuessrStreakFramework({
  storage_identifier: "MW_GeoGuessrCountryStreak",
  name: "Country Streak",
  terms: {
    single: "country",
    plural: "countries"
  },
  enabled_on_challenges: CHALLENGE,
  automatic: AUTOMATIC,
  language: LANGUAGE,
  only_match_country_code: true,
  address_matches: ["country"],
  keyboard_shortcuts: KEYBOARD_SHORTCUTS,
  // この2つを足さないとエラーが出る。あたりまえだけど
  query_openstreetmap: true,
  streak_type: "round"
})
