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
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const myNavBar = navbarHelper(3);


function scrollToSection(num) {
    let el = document.querySelector(`#section${num}`);
    el.scrollIntoView({
        behavior: "smooth",
    });
}

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


