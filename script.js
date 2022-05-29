const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandparent.addEventListener(
  "click",
  (e) => {
    console.log("Grandparent 1");
  },
  true
);

parent.addEventListener(
  "click",
  (e) => {
    console.log("parent");
  },
  true
);

child.addEventListener(
  "click",
  (e) => {
    console.log("child");
  },
  true
);
document.addEventListener(
  "click",
  (e) => {
    console.log("document");
  },
  false
);
