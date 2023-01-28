const images = [
  "../photo/ben-black.jpg",
  "../photo/ben.jpg",
  "../photo/london-black.jpg",
  "../photo/london.jpg",
  "../photo/london-night.jpg",
  "../photo/pink-sky.jpg",
  "../photo/star-tree.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
const background = document.querySelector(".image");

bgImage.src = `img/${chosenImage}`;
background.prepend(bgImage);
