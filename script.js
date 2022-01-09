//local data
const testimonials = [
  {
    id: 1,
    img: "./images/image-tanya.jpg" ,
    text: `"I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'am now in the job of my dreams and son excited about the future."`,
    name: "Tanya Sinclair",
    job: 'UX Engineer'
  },
  {
    id: 2,
    img: "./images/image-john.jpg" ,
    text: `"If you want to lay the best foundation possible I'd recommend taking the course. The depth the instructors go is incredeble. I now feel so confident about starting up as a professional developer."`,
    name: "John Tarkpor",
    job: 'Junior Front-end Developer'
  },
  {
    id: 3,
    img: "./images/charles-etoroma.jpg",
    text: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, distinctio nesciunt, aspernatur odit deleniti libero doloremque provident cupiditate quae illum unde, sint culpa iste et pariatur tempora est!"`,
    name: "Charles Etoroma",
    job: 'UI/UX Designer'
  },
  {
    id: 4,
    img: "./images/ian-dooley.jpg",
    text: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta quidem neque voluptatem eveniet inventore provident aliquid eum dicta expedita porro autem amet, aspernatur ad consequuntur."`,
    name: "Ian Dooley",
    job: 'Developer'
  }, 
  {
    id: 5,
    img: "./images/jake-nackos.jpg",
    text: `"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi est dolorum quos expedita libero reiciendis omnis nesciunt distinctio, voluptates voluptatem neque dolore maxime excepturi quis optio."`,
    name: "Jake Nackos",
    job: 'Designer'
  },
  {
    id: 6,
    img: "./images/julian-wan.jpg",
    text: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolorem porro nihil odio libero harum. Sunt repellendus cupiditate officia molestias quis maiores voluptatibus est quia itaquee perferendis."`,
    name: "Julian Wan",
    job: 'UX Engineer'
  },
]

//select items
const img = document.querySelector('.person-img');
const text = document.querySelector('.para');
const name = document.querySelector('.name');
const job = document.querySelector('.occupation');

//select btns
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

//set current item
let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
  showPerson(currentItem)
})

function showPerson(person) {
  const item = testimonials[person];
  img.src = item.img;
  text.textContent = item.text;
  name.textContent = item.name;
  job.textContent = item.job;
}

//show next perosn
next.addEventListener('click', function() {
  currentItem++;
  if(currentItem > testimonials.length - 1){
    currentItem = 0;
  }

  showPerson(currentItem);
})


//show prev person
prev.addEventListener('click', function() {
  currentItem--;
  if(currentItem < 0){
    currentItem = testimonials.length - 1;
  }

  showPerson(currentItem);
})
