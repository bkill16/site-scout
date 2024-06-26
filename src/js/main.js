import Nav from "./components/NavHeader.svelte"
import Footer from "./components/Footer.svelte"

const nav = new Nav ({
    target: document.querySelector(".nav-header")
})

const footer = new Footer ({
    target: document.querySelector("footer")
})