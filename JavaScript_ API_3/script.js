const photoContainer = document.querySelector("#photoContainer");
const randomPhoto = document.querySelector(".photo-random");
const photographer = document.querySelector(".photo-photographer");
const likeButton = document.querySelector(".like-btn");
const likeCount = document.querySelector(".like-count");

let likes = 0;


async function fetchRandomPhoto() {
  try {
    const response = await fetch('https://api.unsplash.com/photos/random?client_id=je1Nxn7sSTobnhhReW0MVKBO6YBFl12UiLh1TPbAd9o');
    const photoData = await response.json();
    return photoData;
  } catch (error) {
    console.error("Ошибка при получении случайного изображения:", error);
    return null;
  }
}

async function loadRandomPhoto() {
  const photo = await fetchRandomPhoto();
  if (photo) {
    randomPhoto.src = photo.urls.small;
    randomPhoto.alt = photo.alt_description || "Random photo";
    photographer.textContent = `Photo by: ${photo.user.name}`;
  }
}

likeButton.addEventListener("click", () => {
  likes++;
  likeCount.textContent = likes;
});


loadRandomPhoto();