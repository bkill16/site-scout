import Nav from "./components/NavHeader.svelte";
import Footer from "./components/Footer.svelte";
import { getSearchInput } from "./getSearchInput";

const nav = new Nav({
  target: document.querySelector(".nav-header"),
});

const footer = new Footer({
  target: document.querySelector("footer"),
});

getSearchInput();