// Обратный отсчёт
const targetDate = new Date("2025-06-30T00:00:00").getTime();
const timerEl = document.getElementById("timer");

function updateCountdown() {
  const now = Date.now();
  const diff = targetDate - now;

  if (diff <= 0) {
    timerEl.textContent = "It's the wedding day!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  timerEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Данные (можно потом вынести в отдельный файл .json)
const data = {
  names: "Jack & Venessa",
  date: "30.06.2025",
  venue: "Restaurant Royal Hall",
  rsvpLink: "https://forms.gle/N6WtZK3RkfsmtfPG6",
  images: {
    hero: "assets/images/main_photo.jpg",
    gallery: ["assets/images/photo_1.jpg", "assets/images/photo_2.jpg"],
  },
};

// Установка данных на страницу
document.getElementById("names").textContent = data.names;
document.getElementById("date").textContent = data.date;
document.getElementById("dateDetail").textContent = data.date;
document.getElementById("venue").textContent = data.venue;
document.getElementById("rsvpLink").href = data.rsvpLink;
document.getElementById("heroImage").src = data.images.hero;

// Галерея
const gallery = document.getElementById("galleryGrid");
data.images.gallery.forEach((src) => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = "Memory";
  gallery.appendChild(img);
});

// Кнопка "Поделиться"
function share() {
  const url = window.location.href;
  if (navigator.share) {
    navigator.share({
      title: "Wedding Invitation",
      url,
    });
  } else {
    navigator.clipboard.writeText(url);
    alert("Link copied to clipboard!");
  }
}
