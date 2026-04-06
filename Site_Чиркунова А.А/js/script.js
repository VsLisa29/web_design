document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".hero__slider");
  const track = document.querySelector(".hero__track");
  if (!slider || !track) return;

  const slides = Array.from(track.children);
  if (slides.length <= 1) return;

  let index = 0;

  const render = () => {
    track.style.transform = `translateX(-${index * 100}%)`;
  };

  render();

  window.setInterval(() => {
    index = (index + 1) % slides.length;
    render();
  }, 3000);
});
