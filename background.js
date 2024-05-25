// TODO: make the title of the menu the actual search results

function onCreated() {
    if (browser.runtime.lastError) {
        console.log(`Error: ${browser.runtime.lastError}`);
    } else {
        console.log("Item created successfully");
    }
}

browser.contextMenus.create({
    id: "search-wiktionary",
    title: "Search Wiktionary for \"%s\"",
    contexts: ["selection"]
}, onCreated);

browser.contextMenus.onClicked.addListener((info, tab) => {
    switch (info.menuItemId) {
        case "search-wiktionary":
            browser.tabs.create({
                url: `https://en.wiktionary.org/wiki/${info.selectionText.toLowerCase()}#English`,
            });
            break;
    }
});
