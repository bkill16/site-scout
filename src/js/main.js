import Nav from "./components/NavHeader.svelte";
import Footer from "./components/Footer.svelte";
import { getHomeSearchInput, getSearchPageInput } from "./getSearchInput";

const nav = new Nav({
  target: document.querySelector(".nav-header"),
});

const footer = new Footer({
  target: document.querySelector("footer"),
});

getHomeSearchInput();
getSearchPageInput();