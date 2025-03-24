//
// GM APIs
//

import { sendToBackground } from "@plasmohq/messaging"

// ref: https://github.com/greasemonkey/greasemonkey/blob/8a51d1432e8c1adbd761d2654b030e11efc11b74/src/bg/api-provider-source.js#L184-L199
export const GM_openInTab = (url: string, openInBackground: boolean) => {
  const asyncFunc = async () => {
    // https://docs.plasmo.com/framework/messaging
    // Your extension's id can be found in chrome's extension manager window once you've built and added it to your browser.
    // TODO: いや、やっぱり動かんな
    // https://github.com/PlasmoHQ/plasmo/issues/823

    const res = await sendToBackground({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      name: `openUrl`,
      body: {
        url: url,
        active: !openInBackground
      },
      extensionId: "momdigjeoepdfkbhnhcoifhjpibiodke" // TODO: これはproduction buildでも同じなの? > 違う
    })
    console.log("GM_openInTab: res", res)
  }

  asyncFunc().then()
}

export const GM_addStyle = (document: Document, css: string) => {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () =>
      GM_addStyle_impl(document, css)
    )
    return
  } else {
    GM_addStyle_impl(document, css)
  }
}

// ref: https://gist.github.com/arantius/eec890c9ce4ff2f7abee896c0bba664d
const GM_addStyle_impl = (document: Document, css: string) => {
  const head = document.getElementsByTagName("head")[0]
  if (head) {
    const style = document.createElement("style")
    style.setAttribute("type", "text/css")
    style.textContent = css
    head.appendChild(style)

    console.log("GM_addStyle: style added")

    return style
  } else {
    console.error("GM_addStyle: head not found")
  }
}
