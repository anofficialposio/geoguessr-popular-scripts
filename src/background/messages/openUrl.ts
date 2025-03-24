import type { PlasmoMessaging } from "@plasmohq/messaging"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const url = req.body?.url
  const active = req.body?.active

  chrome.tabs.create({
    url: url,
    active: active
  })
  return res.send({ message: "ok" })
}

export default handler
