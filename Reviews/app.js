// Array with reviews objects

const reviews = [
  {
    id: 1,
    author: "John Doe",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    job: "Content Writer",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitasse platea dictumst quisque sagittis purus."
  },
  {
    id: 2,
    author: "Sally Johnson",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    job: "Frontend Developer",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet risus nullam eget felis."
  },
  {
    id: 3,
    author: "Tony Tiger",
    img: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    job: "Vice President of Fun",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas sed enim ut sem viverra aliquet."
  },
  {
    id: 4,
    author: "Jimmy John",
    img: "https://www.jimmyjohns.com/images/common/jimmyjohns_logo.png",
    job: "Sandwich Man",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas sed enim ut sem viverra aliquet."
  },
  {
    id: 5,
    author: "Sara Jones",
    img: "https://images.unsplash.com/photo-1611432579699-484f7990b127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    job: "UX Designer",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet tellus cras adipiscing enim eu."
  }
];

// DOM objects

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// Index placeholder for selecting review objects.
// Will change the current value to select different reviews

let current = 0;

// update review function

function updateReview(index) {
  
  let item = reviews[index];

  img.src = item.img;
  author.textContent = item.author;
  job.textContent = item.job;
  info.textContent = item.info;

}

// Load the first review once the window loads

window.addEventListener("DOMContentLoaded", () => {

  updateReview(current);
})

// Previous button decreases current by 1 and updates DOM

prevBtn.addEventListener("click", () => {

  if(current === 0) {
    current = reviews.length - 1;
  } else {
    current --;
  };

  updateReview(current);

})

// Next button increases current and updates DOM

nextBtn.addEventListener("click", () => {

  if(current === reviews.length - 1) {
    current = 0;
  } else {
    current ++;
  };

  updateReview(current);

})

// Random buttom selects a random review from the array
// New review will be different than current 

randomBtn.addEventListener("click", () => {

  let oldVal = current;

  while (oldVal === current) {
    current = Math.floor(Math.random() * reviews.length);
  }

  updateReview(current);

});

