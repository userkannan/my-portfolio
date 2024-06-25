function myfun(){
    alert("hello")
}



// ############ skils section #################

// const carousel = document.querySelector("#skil-car");
// const arrowBtns = document.querySelectorAll(".wrapper i");
// const firstCardWidth = carousel.querySelector("#skil-cord").offsetWidth;

// let isDragging = false, startX, startScrollLeft;

// //add event listeners for the arrow buttons to scroll the carousel left  and right
// arrowBtns.forEach(btn => {
//     btn.addEventListener("click", () => {
//         carousel.scrollLeft += btn.id === "left" ? - firstCardWidth : firstCardWidth ;

//     })
// });

// const dragStart = () => {
//     isDragging = true;
//     carousel.classList.add("dragging")
//     //Record the initial cursor and scroll position of the carousel
//     startX = e.pageX;
//     startScrollLeft = carousel.scrollLeft;
// }

// const dragging = (e) => {
//     if(!isDragging) return; // if isDaragging is false return from here
//     carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
// }

// const dragStop = () => {
//     isDragging = false;
//     carousel.classList.remove("dragging");
// }

// carousel.addEventListener("mousemove", dragStart);
// carousel.addEventListener("mousemove", dragging);
// carousel.addEventListener("mousemove", dragStop);