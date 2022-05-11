export default function changeBackground() {
    const { pathname } = window.location
    const bodyBackground = document.querySelector('body')

    if (pathname === "/universe") {
            bodyBackground.style.background = "url('./images/mountains-universe02.png')"
            bodyBackground.style.backgroundSize = "cover"
    } else if (pathname === "/exploration") {
        bodyBackground.style.background = "url('./images/mountains-universe-3.png')"
        bodyBackground.style.backgroundSize = "cover"
    } else {
        bodyBackground.style.background = "url('./images/mountains-universe-1.png')"
        bodyBackground.style.backgroundSize = "cover"
    }
}