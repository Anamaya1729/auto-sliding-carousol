const slides = document.querySelectorAll(".slide");
const previous = document.querySelector(".prevBtn");
const next = document.querySelector(".nextBtn");

slides.forEach((item,index)=>
{
    item.style.left = `${index*100}%`
    
})

let counter = 0;

next.addEventListener("click",()=>
{
    counter++;
    carousel()
})

previous.addEventListener("click",()=>
{
    counter--;
    carousel()
})

function carousel()
{
    if (counter  === slides.length)
    {
        counter = 0
    }
    if (counter < 0)
    {
        counter = slides.length - 1
    }
    if (counter < slides.length-1)
    {
        next.style.display = "block"
    }
    else
    {
        next.style.display = "none";
    }
    if (counter > 0)
    {
        previous.style.display = "block"
    }
    else
    {
        previous.style.display = "none"
    }
    slides.forEach((item)=>
    {
        item.style.transform = `translateX(${-counter*100}%)`
    })
}

previous.style.display = "none"

let isMoving = true;

function Move(){
    if (isMoving)
    {
        counter++;
        carousel()
    }
}


let automove = setInterval(Move,2000)

const container = document.querySelector(".container")
container.addEventListener("mouseover",()=>
{
    isMoving = false;
})
container.addEventListener("mouseleave",()=>
{
    isMoving = true;
})