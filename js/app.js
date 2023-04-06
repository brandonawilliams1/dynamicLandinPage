/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// a helper function when called will add an Li elemeent to the ul in the navbar
function navbarHelper(numItems){
    const queryNav = document.querySelector('.navbar__menu');
    const queryNavUl = document.querySelector('#navbar__list');
    
    // repeat create Navbar Li element 3x
    for (let i = 1; i <= numItems; i++) {
        const navLiEl = document.createElement('li');
        navLiEl.style.color = 'black';
        // navLiEl.textContent = "Item " + (i);
        navLiEl.innerHTML = `<a id='navItem ${i}' class= 'menu__link'>Section ${i}</a>`
        queryNavUl.appendChild(navLiEl);

        navLiEl.addEventListener('click', navEvent)
    };
    
    queryNav.appendChild(queryNavUl);
    return queryNav;
};

function navEvent(e){
   let getNum = e.target.id.split(" ");
   scrollToSection(getNum[1]);
};

// creates new sections on the DOM
function newSectionEl(){
    // stores create section method
    const section = document.createElement('section');
    // stores create div element
    const div = document.createElement('div');
    // stores create h2 element method
    const heading = document.createElement('h2');
    // stores create paragraph method
    const paragraph = document.createElement('p');

    // add id to new section element
    section.setAttribute('id', `section`);
    // add data attribute to section element
    const queryNewSection = document.querySelector(`section`);
    section.setAttribute('data-nav', `section`);
    
    // add class to new div element
    section.setAttribute('class', 'landing__container');

    // add pseduo class before h2 and after p 
    section.classList.add('your-active-class');

    // add text to the h1 and p element
    heading.textContent = 'Section 4';
    paragraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.';

    // add div to section as a child of the section
    section.appendChild(div);

    // add h2 and p elements to div element
    div.appendChild(heading);
    div.appendChild(paragraph);

    //select the main element and add the section to it
    const main = document.querySelector('main');
    main.appendChild(section);

    return section;
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const myNavBar = navbarHelper(4);

// call function to add a new section
newSectionEl();

// Scroll to anchor ID using scrollTO event
function scrollToSection(num) {
    let el = document.querySelector(`#section${num}`);

    el.scrollIntoView({
        behavior: "smooth",
    });
};

// define section
const sections = document.getElementsByTagName('section');

// Add class 'active' to section when near top of viewport
// for (let i = 0; i < sections.length; i++) {
//     const section = sections[i];
//     const sectionId = section.getAttribute('id');
  
//     section.addEventListener('mouseenter', function() {
//       document.querySelector(`a[href='#${sectionId}']`).classList.add("active");
//     });
    
//     section.addEventListener('mouseleave', function() {
//       document.querySelector(`a[href='#${sectionId}']`).classList.remove("active");
//     });
//   }    

// // Add an event listener listening for scroll
// // Get all sections that have an ID defined
// const sections = document.querySelectorAll("section[id]");

// // Add an event listener listening for scroll
// window.addEventListener("scroll", navHighlighter);

// function navHighlighter() {
  
//   // Get current scroll position
//   let scrollY = window.pageYOffset;
  
//   // Now we loop through sections to get height, top and ID values for each
//   sections.forEach(current => {
//     const sectionHeight = current.offsetHeight;
//     const sectionTop = current.offsetTop - 50;
//     sectionId = current.getAttribute("id");
    
//     /*
//     - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
//     - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
//     */
//     if (
//       scrollY > sectionTop &&
//       scrollY <= sectionTop + sectionHeight
//     ){
//       document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
//     } else {
//       document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
//     }
//   });
// }

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


