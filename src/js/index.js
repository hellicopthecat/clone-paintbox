$(document).ready(function () {
  console.log("hi");
  const myImage = $("#first_img");
  const imageArray = [
    "src/img/cosmetic/img_1.webp",
    "src/img/cosmetic/img_2.webp",
    "src/img/cosmetic/img_3.webp",
    "src/img/cosmetic/img_4.webp",
  ];
  let imageIndex = 0;

  function changeImage() {
    myImage.attr("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex >= imageArray.length) {
      imageIndex = 0;
    }
  }
  setInterval(changeImage, 3000);
});
