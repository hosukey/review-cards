const reviews = [
    {
        id: 1,
        name: "Suzy Bae",
        job: "Web Developer",
        img: "https://i.pinimg.com/564x/ca/fc/d5/cafcd5a2afd944dc9817462a425cf9c3.jpg",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat necessitatibus numquam fuga culpa saepe quae cupiditate dolorem in nobis. Dolores consequatur nesciunt veniam provident fugiat, repellendus rerum placeat nemo odio.",
    },

    {
        id: 2,
        name: "Hye Sun Shin",
        job: "Web Designer",
        img: "https://i.pinimg.com/564x/84/93/8a/84938af33c66a0fbd852ab6b067b7d0b.jpg",
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quodullam expedita consectetur, magnam excepturi itaque unde! Esse magni ea quia rem fugiat quisquam vel, vero qui at perspiciatis placeat!",
    },

    {
        id: 3,
        name:"Ji Eun Lee",
        job: "Intern",
        img: "https://i.pinimg.com/564x/0b/bb/cd/0bbbcd74fb44f1efa9b666a268936657.jpg",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo dignissimos aspernatur dicta beatae minima temporibus molestiae eius facere corrupti. Amet rerum officiis repellat deserunt nemo maiores, quas mollitia odit neque.",
    },

    {
        id: 4,
        name: "Sohee Han",
        job: "Boss",
        img: "https://i.pinimg.com/564x/2c/8e/29/2c8e2957b8a7ec7f275a90b4effc0c04.jpg",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi aliquid eligendi nemo voluptate deleniti ut! Suscipit autem explicabo sit illo soluta alias expedita sequi architecto earum laudantium, obcaecati, similique atque.",
    }

];

const img = document.getElementById('person-img');
const name = document.querySelector('.name');
const job = document.querySelector('.job');
const desc = document.querySelector('.desc');


const leftBtn = document.querySelector('.left')
const rightBtn = document.querySelector('.right');
const randomBtn = document.querySelector('.random');

//set starting item
let currentItem = 0;

//load initial item
window.addEventListener('DOMContentLoaded',function(){
    showPerson(currentItem);
})

//show person based on item
function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    name.textContent = item.name;
    job.textContent = item.job;
    desc.textContent = item.desc;  
}

//show next person
rightBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length -1){
        currentItem = 0;
    }
    showPerson(currentItem);
})

//show prev person
leftBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length -1;
    }
    showPerson(currentItem);
})

//show random person
randomBtn.addEventListener('click', function(){
    randomNum = Math.floor(Math.random()*reviews.length);
    showPerson(randomNum);
})