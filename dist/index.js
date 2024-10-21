function toggleDropdown(menuId) {
    const dropDownMenu = document.querySelector(`#${menuId}`);
    if (dropDownMenu.classList.contains('hidden')) {
        dropDownMenu.classList.remove('hidden');
    } else {
        dropDownMenu.classList.add('hidden');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    function toggleBox(toggleButton, hiddenBox, cancelButton) {
        toggleButton.addEventListener('click', () => {
            hiddenBox.classList.toggle('show-box');
        });

        cancelButton.addEventListener('click', () => {
            hiddenBox.classList.remove('show-box');
        });
    }

    const toggleButton = document.getElementById('toggleButton');

    const hiddenBox1 = document.getElementById('hiddenBox1');
    const cancelButton1 = document.getElementById('cancelButton1');
    toggleBox(toggleButton, hiddenBox1, cancelButton1);

    const hiddenBox2 = document.getElementById('hiddenBox2');
    const cancelButton2 = document.getElementById('cancelButton2');
    toggleBox(toggleButton,hiddenBox2, cancelButton2);

});

document.addEventListener('DOMContentLoaded', () => {
    function toggleNestedList(parentLi) {
        const nestedUl = parentLi.querySelector('ul');
        if (nestedUl) {
            if (nestedUl.classList.contains('hidden-ul')) {
                nestedUl.classList.remove('hidden-ul');
                nestedUl.classList.add('show-ul');
            } else {
                nestedUl.classList.remove('show-ul');
                nestedUl.classList.add('hidden-ul');
            }
        }
    }

    document.querySelectorAll('ul.list-disc > li').forEach(parentLi => {
        parentLi.addEventListener('click', () => {
            toggleNestedList(parentLi);
        });
    });
});

const sectionContainer = document.getElementById("products-container");
const buttons = document.querySelectorAll(".category-btn");

// Define the category buttons
const categoryMap = {
  "features-btn": "features",
  "sales-btn": "sales",
  "new-arrivals-btn": "newArrivals",
  "bestsellers-btn": "bestsellers",
};

// Function to load products for a specific category
function loadProducts(category) {
  fetch("./main.json")
    .then((res) => res.json())
    .then((data) => {
      const products = data[category];

        sectionContainer.innerHTML = "";
        

      products.forEach((item) => {
        const productItems = `
          <div class="p-2 bg-white rounded m-2 transition duration-[8s] ease-in-out">
            <div class="p-2 relative">
              
              <div class="lg:w-80 w-[100%] !relativ3 overflow-hidden">
                <img src="${item.image}" alt="${item.name}" class="transition duration-[0.3s] ease-in hover:scale-110">
                <div class="absolute bg-deeporange py-1 px-3 rounded top-4 left-4">
                <p class="text-gray-600 text-sm font-semibold">${item.discountedprice}</p>
              </div>
              </div>
              <div class="pt-4 pb-2 border-b-[1px] border-gray-200">
                <h1 class="text-2xl font-bold text-center">
                  <a href="#">${item.name}</a>
                </h1>
              </div>
              <div class="text-center text-lg font-bold pt-2 pb-5 border-b-[1px] border-gray-200">
                <h3 class="text-redd">${item.type}</h3>
                <h3>${item.price}</h3>
                <span class="text-orangeyellow">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </span>
              </div>
              <div class="pt-4">
                <button class="py-2 px-6 bg-primary rounded text-white text-sm font-semibold">${item.button1} <i class="fa-solid fa-eye"></i></button>
                <button class="py-1 px-5 bg-primary rounded text-white"><i class="fa-solid fa-heart"></i></button>
                <button class="py-2 px-5 bg-primary rounded text-white text-sm font-semibold">${item.button3}</button>
              </div>
            </div>
          </div>
        `;

        sectionContainer.innerHTML += productItems;
      });
    })
    .catch((error) => console.error("Error loading product details:", error));
}

// Function to set the active button and load the corresponding products
function setActiveButton(activeButton) {
  buttons.forEach((button) => {
    if (button === activeButton) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  const category = categoryMap[activeButton.id];
  loadProducts(category);
}

// Add click event listeners to buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => setActiveButton(button));
});

// Load the default category on page load
window.onload = () => {
  setActiveButton(document.getElementById("features-btn"));
};

  
  
   
function createContinuousSlider(sliderId, interval = 3000) {
const sliderContainer = document.getElementById(sliderId);
const sliderInner = sliderContainer.querySelector('.slider-inner');
const sliderItems = sliderContainer.querySelectorAll('.slider-item');
const slideWidth = sliderItems[0].clientWidth;

let currentOffset = 0;
let currentIndex = 0;

// Continuous sliding effect
setInterval(() => {
// Increment offset to slide to the left
currentOffset -= slideWidth;
currentIndex++;

// If currentIndex exceeds the total number of slides, reset the index and offset
if (currentIndex >= sliderItems.length) {
currentIndex = 0;
currentOffset = 0;
}

// Move the slides
sliderInner.style.transform = `translateX(${currentOffset}px)`;

// Move first slide to the end to loop the carousel
if (currentIndex === sliderItems.length - 1) {
const firstSlide = sliderInner.children[0];
sliderInner.appendChild(firstSlide.cloneNode(true));
sliderInner.removeChild(firstSlide);
currentOffset = 0;
sliderInner.style.transition = "none"; // Disable transition for instant reset
sliderInner.style.transform = `translateX(${currentOffset}px)`;
setTimeout(() => {
    sliderInner.style.transition = "transform 0.5s linear"; // Re-enable transition
}, 0);
}

}, interval); // Slide every 'interval' milliseconds
}

document.addEventListener('DOMContentLoaded', function () {
createContinuousSlider('slider1', 3000);
createContinuousSlider('slider2', 2000);
});
