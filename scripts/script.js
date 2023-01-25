const myImage = document.getElementById("first_img");
	const imageArray = [ 
        "/img/cosmetic/img_1.webp", 
        "/img/cosmetic/img_2.webp",
        "/img/cosmetic/img_3.webp",
        "/img/cosmetic/img_4.webp"
		];
	let imageIndex = 0;

	function changeImage() {
		myImage.setAttribute("src", imageArray[imageIndex]);
		imageIndex++;
		if (imageIndex >= imageArray.length) {
			imageIndex = 0;
		}
	}
	setInterval(changeImage, 1000);


