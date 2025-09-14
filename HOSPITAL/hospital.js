// ================== Review Slider ==================

// Selecting all review slides (patients & products)
const reviewSlides = document.querySelectorAll(".patientReview");

// Selecting cards and popup elements
const cards = document.querySelectorAll(".card");
const reviews = document.querySelectorAll(".review");

const closeBtn = document.getElementById("closeBtn");
const detailPopup = document.querySelector(".detail");
const contentContainer = document.querySelector(".content");

let currentSlide = 0;

// Position each slide horizontally
reviewSlides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

// Rotate slides function
function rotateSlides() {
  reviewSlides.forEach((slide) => {
    slide.style.transform = `translateX(-${currentSlide * 100}%)`;
  });
}

// Auto-slide every 1 second
setInterval(() => {
  currentSlide++;
  if (currentSlide >= reviewSlides.length) currentSlide = 0;
  rotateSlides();
}, 1000);

// ================== Dietitians Profiles ==================
const DietitiansProfiles = [
  {
    name: "Dr. Priya Deshmukh",
    description:
      "Certified dietitian specializing in therapeutic diets and lifestyle disease management.",
    img: "dt1.jpg",
  },
  {
    name: "Dr. Rajesh Gupta",
    description:
      "Over 25 years of experience in holistic wellness. Expert in yoga therapy and naturopathy.",
    img: "dt2.jpg",
  },
  {
    name: "Dr. Vivek Rathi",
    description:
      "Nutrition expert focused on weight management and hormonal balance.",
    img: "dt3.jpg",
  },
];

// Show popup details on card click
cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    const dietitian =
      DietitiansProfiles[index % DietitiansProfiles.length]; // loop profiles if cards > profiles

    contentContainer.innerHTML = `
      <img src="${dietitian.img}" alt="${dietitian.name}">
      <div class="contentText">
        <h1>${dietitian.name}</h1>
        <p>“${dietitian.description}”</p>
      </div>
    `;

    detailPopup.style.display = "block";
  });
});

// Close popup
closeBtn.addEventListener("click", () => {
  detailPopup.style.display = "none";
});



// ================== Dietitians Profiles ==================
const productsProfiles = [
  {
    name: "Relive Diabetes Reversal Pack",
     description:
      "A natural kit to support diabetes reversal and better health.",
    img: "p1.jpg",

  },
  {
   name: "ReLive SugarShield Program",
     description:
      "A natural path to balanced blood sugar and lasting wellness.",
    img: "p2.jpg",
  },
  {
    name: "ReLive PureDetox Herbal Tea",
     description:
      "Gentle herbal blend that cleanses, refreshes, and restores natural balance.",
    img: "p3.jpg",
  },
   {
    name: "ReLive Digestive Care – Triphala Formula",
     description:
      "Supports healthy digestion, relieves discomfort, restores balance, and boosts wellness.",
    img: "p4.jpg",
  },
];

// Show popup details on card click
reviews.forEach((review, index) => {
  review.addEventListener("click", () => {
    const products =
      productsProfiles[index % productsProfiles.length]; // loop profiles if cards > profiles

    contentContainer.innerHTML = `
      <img src="${products.img}" alt="${products.name}">
      <div class="contentText">
        <h1>${products.name}</h1>
        <p>“${products.description}”</p>
      </div>
    `;

    detailPopup.style.display = "block";
  });
});

// Close popup
closeBtn.addEventListener("click", () => {
  detailPopup.style.display = "none";
});

// ================== Connect / Login Simulation ==================
const connectBtn = document.getElementById("connectBtn");

connectBtn.addEventListener("click", () => {
  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("pass").value.trim();

  if (!email || !pass) {
    alert("Enter Details");
  } else {
    alert("You Logged IN");
  }
});
