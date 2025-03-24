//
// GM APIs
//

export const GM_openInTab = (
  window: Window,
  url: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  openInBackground: boolean
) => {
  // TODO: focus()を付けても付けなくても前面で開くので、backgroundは無理かも
  window.open(url, "_blank").focus()
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
