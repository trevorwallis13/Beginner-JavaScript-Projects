const people = [
  {
    id: 1,
    name: "John Doe",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    title: "Content Writer",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitasse platea dictumst quisque sagittis purus."
  },
  {
    id: 2,
    name: "Sally Johnson",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    title: "Frontend Developer",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet risus nullam eget felis."
  },
  {
    id: 3,
    name: "Tony Tiger",
    image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    title: "Vice President of Fun",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas sed enim ut sem viverra aliquet."
  },
  {
    id: 4,
    name: "Jimmy John",
    image: "https://www.jimmyjohns.com/images/common/jimmyjohns_logo.png",
    title: "Sandwich Man",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas sed enim ut sem viverra aliquet."
  },
  {
    id: 5,
    name: "Sara Jones",
    image: "https://images.unsplash.com/photo-1611432579699-484f7990b127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "UX Designer",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet tellus cras adipiscing enim eu."
  }
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let val = 0;

prevBtn.addEventListener("click", () => {

  if(val === 0) {
    val = people.length - 1;
  } else {
    val --;
  };

  console.log(val);

  img.src = people[val].image;
  author.textContent = people[val].name;
  job.textContent = people[val].title;
  info.textContent = people[val].review;

})

nextBtn.addEventListener("click", () => {

  if(val === people.length - 1) {
    val = 0;
  } else {
    val ++;
  };

  console.log(val);

  img.src = people[val].image;
  author.textContent = people[val].name;
  job.textContent = people[val].title;
  info.textContent = people[val].review;

})

randomBtn.addEventListener("click", () => {

  let oldVal = val;

  while (oldVal === val) {
    val = Math.floor(Math.random() * people.length);
  }

  img.src = people[val].image;
  author.textContent = people[val].name;
  job.textContent = people[val].title;
  info.textContent = people[val].review;

});

