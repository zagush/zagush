```javascript
// =========================================
// ZAGUSH WEBSITE
// =========================================

console.log("ZAGUSH website loaded.");


// =========================================
// OBJECT HOVER / INTERACTION
// =========================================

const objects = document.querySelectorAll(".object");

objects.forEach((object) => {

    object.addEventListener("mouseenter", () => {
        object.classList.add("is-hovered");
    });

    object.addEventListener("mouseleave", () => {
        object.classList.remove("is-hovered");
    });

});
```
