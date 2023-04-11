/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const queryNav = document.querySelector('.navbar__menu');
const queryNavUl = document.querySelector('#navbar__list');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// a helper function when called will add an Li elemeent to the ul in the navbar
function navbarHelper(numItems){
    queryNav;
    queryNavUl;

    // repeat create Navbar Li element 3x
    for (let i = 1; i <= numItems; i++) {
        const navLiEl = document.createElement('li');
        navLiEl.style.color = 'black';
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

/* creates new sections on the DOM
    to improve this function it should create a new section when called
*/
function newSectionEl(){
    // pass the section id to the li
     queryNavUl;
    // stores create section method
    const section = document.createElement('section');
    // stores create div element
    const div = document.createElement('div');
    // stores create h2 element method
    const heading = document.createElement('h2');
    // stores create paragraph method
    const paragraph = document.createElement('p');

    // add id to new section element
    section.setAttribute('id', 'section4');

    // add data attribute to section element
    const queryNewSection = document.querySelector('section4');

    section.setAttribute('data-nav', `Section 4`);
    
    // add class to new div element
    div.setAttribute('class', 'landing__container');

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

// // Get all sections that have an ID defined
const sections = document.querySelectorAll('section');

// // Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter(){
    
    // Get current scroll position
    let scrollY = window.pageYOffset;
    let scrollLocation = scrollY;


    console.log('scroll Y = ' + scrollY );
    console.log('your scroll location ' + scrollLocation);


// loops over the sections object to return the current section
const sections = document.querySelectorAll('section');


window.addEventListener("scroll", navHighlighter);

function navHighlighter(){

        let scrollY = window.pageYOffset;
        let scrollLocation = scrollY;

        console.log('scroll Y = ' + scrollY );
        console.log('your scroll location ' + scrollLocation);

        for (let i = 0; i < sections.length; i++){
            // const addClassLi = document.querySelectorAll('li');
            // console.log(addClassLi);

            if (scrollLocation < 1000){
                document.getElementById('navItem 1').classList.add('class=', "your-active-class");
            } else if (scrollLocation > 1000 && scrollLocation < 1100){
                document.getElementById('navItem 2').classList.add("your-active-class");
            } else if (scrollLocation > 1200 && scrollLocation < 2400){
                document.getElementById('navItem 3').classList.add("your-active-class");
            } else if (scrollLocation > 2400){
                document.getElementById('navItem 4').classList.add("your-active-class");
            };
        }    
    };
        
};
  
    


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


