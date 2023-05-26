const toggleImage = document.getElementById('toggleImage');
let isSpinning = false;



toggleImage.addEventListener('click', () => {
  isSpinning = !isSpinning;
  toggleImage.style.transform = isSpinning ? 'rotateY(180deg)' : 'rotateY(0)';
  toggleImage.style.transition = 'transform 1s linear';

  setTimeout(() => {
    if (toggleImage.src.endsWith('/image/1.jpg')) {
      toggleImage.src = '/image/3.jpg';
    } else {
      toggleImage.src = '/image/1.jpg';
    }
  }, 400); // 5-second delay
});

document.getElementById('video').addEventListener('click', function () {
  const video = this;
  video.muted = !video.muted;
});

