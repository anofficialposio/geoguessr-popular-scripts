interface ScriptInfo {
  name: string
  author: string
  url: string
  description: string
  version: string
  license: string
}

export const SCRIPT_INFO: { [key: string]: ScriptInfo } = {
  "tiny-leave-game-button": {
    name: "GeoGuessr Tiny Leave Game Button",
    author: "Posio",
    url: "https://miraclewhips.dev",
    description:
      "Make the 'Leave Game' button tiny to prevent accidental clicks.",
    version: "1.0.0",
    license: "MIT"
  },
  "geoguessr-country-streak": {
    name: "GeoGuessr Country Streak",
    author: "miraclewhips",
    url: "https://miraclewhips.dev",
    description: "geoguessr-training-mode",
    version: "1.0.0",
    license: "MIT"
  },
  "geoguessr-training-mode": {
    name: "GeoGuessr Training Mode",
    author: "miraclewhips",
    url: "https://miraclewhips.dev",
    description:
      "Save locations to Map Making App, toggle compass, terrain mode, hide car, and more.",
    version: "1.15",
    license: "MIT"
  }
}
