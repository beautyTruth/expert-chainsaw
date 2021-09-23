// navbar

const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  navbar.classList.toggle("change");
  menu.classList.toggle("change");
});
// end of navbar

// section 2 (video controls)
const videoSource = document.querySelector(".video");
const videoBtn = document.querySelector(".buttons i");
const videoBar = document.querySelector(".video-bar");

const playPause = () => {
  if (videoSource.paused) {
    videoSource.play();
    videoBtn.className = "far fa-pause-circle";
    videoSource.style.opacity = ".7";
  } else {
    videoSource.pause();
    videoBtn.className = "far fa-play-circle";
    videoSource.style.opacity = ".3";
  }
};

videoBtn.addEventListener("click", () => {
  playPause();
});

videoSource.addEventListener("timeupdate", () => {
  const barWidth = videoSource.currentTime / videoSource.duration;
  videoBar.style.width = `${barWidth * 100}%`;
  if (videoSource.ended) {
    videoBtn.className = "far fa-play-circle";
    videoSource.style.opacity = ".3";
  }
});

// end of section 2 (video controls)

// section 3 (pricing cards)

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 70,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});

// end of section 3 (pricing cards)

// footer script (year update)

const yearDynamic = document.querySelector(".year");
const currentYear = new Date().getFullYear();

yearDynamic.textContent = currentYear;
