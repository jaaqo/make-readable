chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  switch (message.type) {
    case "MAKE_READABLE":
      makeReadable();
    default:
      break;
  }
});

function makeReadable() {
  if (document.getElementById("makeReadableWrapper")) {
    document.body.innerHTML = document.getElementById(
      "makeReadableContainer"
    ).innerHTML;
  } else {
    const wrapper = document.createElement("div");
    wrapper.id = "makeReadableWrapper";
    wrapper.style.backgroundColor = "#fff";
    wrapper.style.fontFamily = "Open Sans";

    const fontLink = document.createElement("link");
    fontLink.type = "text/css";
    fontLink.rel = "stylesheet";
    fontLink.href = "http://fonts.googleapis.com/css?family=Open+Sans";
    wrapper.appendChild(fontLink);

    const container = document.createElement("div");
    container.id = "makeReadableContainer";
    container.style.paddingTop = "30px";
    container.style.paddingBottom = "30px";
    container.style.maxWidth = "800px";
    container.style.width = "100%";
    container.style.margin = "0 auto";

    wrapper.appendChild(container);
    container.innerHTML = document.body.innerHTML;
    document.body.innerHTML = wrapper.outerHTML;
  }
}
