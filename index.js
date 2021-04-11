//>>>>>>>>>>>>>>>>>>>>>>>>>>>>Show Menu.
window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
});
const displayMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navId)
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}
displayMenu('nav-toggle', 'nav-menu');


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>Remove menu after one click at particular link from mobile.

const itemLink = document.querySelectorAll('.nav_link')
function removeMenu() {
    const link = document.getElementById('nav-menu')
    link.classList.remove('show-menu')
}
itemLink.forEach((n) => n.addEventListener('click', removeMenu));


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Scroll section active Link.

const active = document.querySelectorAll('section[id]')
function scrollActivation() {
    const scrollY = window.pageYOffset
    active.forEach(c => {
        const activeHeight = c.offsetHeight
        const activeTop = c.offsetTop - 50
        activeId = c.getAttribute('id')
        if (scrollY > activeHeight && scrollY <= activeTop + activeHeight) {
            document.querySelector('.nav_menu a[href*='+activeId +']').classList.add('active-link')
        } else {
            document.querySelector('.nav_menu a[href*='+activeId +']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActivation)

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Header Background Color change after scrolling.

function scrollHeader() {
    const header = document.getElementById('header')
    if (scrollY >= 200) {
        header.classList.add('header-color')
    } else {
        header.classList.remove('header-color')
    }
}
window.addEventListener('scroll', scrollHeader);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Scroll up from botttom to top.
function scrollTop() {
    const topScroll = document.getElementById('scroll-top')
    if (scrollY >= 560) {
        topScroll.classList.add('scroll-top')
    } else {
        topScroll.classList.remove('scroll-top')
    }
}
window.addEventListener('scroll', scrollTop);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>charge theme dark/white.
const darkThemeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const themeIcon = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => darkThemeButton.classList.contains(themeIcon) ? 'box-moon' : 'box-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme == 'dark' ? 'add' : 'remove'](darkTheme)
    darkThemeButton.classList[selectedIcon=='box-moon'?'add':'remove'](themeIcon)
}

darkThemeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    darkThemeButton.classList.toggle(themeIcon)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
})


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>scroll-event-animation.
const sc = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset:true
})
sc.reveal(`.home_data,.home_image,.about_data,.about_image,
    .app_data,.app_image,.services_content,.menu_content,.contact_data,.footer_content`, {
    interval:200
})


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>login and registration popup.
var modal = document.getElementById('container');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.container').style.display = "none";
});

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Cart popup.
// var modal = document.getElementById('myModal');
// var cart_button = document.getElementById('cart-btn');
// cart_button.onclick = function (event) {
//     console.log('cart click!')
//     if (event.target == myModal) {
//         modal.style.display = "block";
//     }
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   }
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Popup subscription.
$(document).ready(function () {
    setTimeout(function () {
       $('#popMainup').css('display','block') 
    },5000*4)
});
$('.submitbtn').click(function () {
    $('#popMainup').css('display','none') 
})


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Chat-Box.
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
  
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Prevent default when click read more.

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Form validation.
