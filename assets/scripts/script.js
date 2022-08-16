const getClass = className => document.getElementsByClassName(className)[0];

const video = getClass("video");
const frameFour = getClass("frame_four");

const onVideoClick = () => {
	setTimeout(() => {
		frameFour.style.opacity = "1";
		frameFour.style.transform = "scale(1)";

		setTimeout(() => {
			frameFour.style.opacity = "0";
			frameFour.style.transform = "scale(0)";
			video.removeEventListener("click", onVideoClick);
		}, 2000);
	}, 2000);
};

video.addEventListener("click", onVideoClick);
