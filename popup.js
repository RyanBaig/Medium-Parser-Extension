// USER'S MODE
// Get the user's system preference
let prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Set the initial mode according to the preference
if (prefersDark) {
  document.body.classList.add("dark-mode");
} else {
  document.body.classList.add("light-mode");
}

// THE ACTUAL THINGY
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("add-url").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var currentUrl = tabs[0].url;
        var newUrl = "https://readmedium.com/";
        var modifiedUrl = newUrl + currentUrl;
        chrome.tabs.update(tabs[0].id, { url: modifiedUrl });
      
    });
  });
});
