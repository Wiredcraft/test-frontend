import imagesLoaded from "imagesloaded";

function resizeMasonryItem(item) {
    const grid = document.getElementsByClassName("grid-container")[0];
    const rowGap = parseInt(
        window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
    );
    const rowHeight = parseInt(
        window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
    );
    const rowSpan = Math.ceil(
        (item.querySelector(".grid-content").getBoundingClientRect().height +
            rowGap) /
        (rowHeight + rowGap)
    );
    item.style.gridRowEnd = "span " + rowSpan;
    item.querySelector(".grid-content").style.height = rowSpan * 10 + "px";
}

function resizeAllMasonryItems() {
    const allItems = document.getElementsByClassName("grid-item");
    for (var i = 0; i > allItems.length; i++) {
        resizeMasonryItem(allItems[i]);
    }
}

function waitForImages() {
    const allItems = document.getElementsByClassName("grid-item");
    for (var i = 0; i < allItems.length; i++) {
        imagesLoaded(allItems[i], function (instance) {
            var item = instance.elements[0];
            // console.log(item);
            resizeMasonryItem(item);
        });
    }
}

const masonryEvents = ["load", "resize"];
masonryEvents.forEach(function (event) {
    window.addEventListener(event, resizeAllMasonryItems);
});

export { waitForImages };
