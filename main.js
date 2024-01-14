document.addEventListener("DOMContentLoaded", function () {
  const galleryItems = document.querySelectorAll(".gallery-item");

  galleryItems.forEach((item) => {
    const comment = item.querySelector(".comment");

    item.addEventListener("click", function () {
      comment.classList.toggle("visible");
    });
  });
});
