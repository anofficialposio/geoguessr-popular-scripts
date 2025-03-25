import { Storage } from "@plasmohq/storage"

const storage = new Storage()

export const STORAGE_KEYS = {
  tinyLeaveGameButtonEnabled: "tinyLeaveGameButtonEnabled",
  countryStreakEnabled: "countryStreakEnabled",
  trainingModeEnabled: "trainingModeEnabled"
}

export const INITIAL_SETTINGS: GpsSettings = {
  tinyLeaveGameButtonEnabled: true,
  countryStreakEnabled: true,
  trainingModeEnabled: true
}

export interface GpsSettings {
  tinyLeaveGameButtonEnabled: boolean
  countryStreakEnabled: boolean
  trainingModeEnabled: boolean
}

export const loadGpsSettings = async (): Promise<GpsSettings> => {
  const tinyLeaveGameButtonEnabled = await storage.get<boolean>(
    STORAGE_KEYS.tinyLeaveGameButtonEnabled
  )
  const countryStreakEnabled = await storage.get<boolean>(
    STORAGE_KEYS.countryStreakEnabled
  )
  const trainingModeEnabled = await storage.get<boolean>(
    STORAGE_KEYS.trainingModeEnabled
  )

  return {
    tinyLeaveGameButtonEnabled:
      tinyLeaveGameButtonEnabled ?? INITIAL_SETTINGS.tinyLeaveGameButtonEnabled,
    countryStreakEnabled:
      countryStreakEnabled ?? INITIAL_SETTINGS.countryStreakEnabled,
    trainingModeEnabled:
      trainingModeEnabled ?? INITIAL_SETTINGS.trainingModeEnabled
  }
}
