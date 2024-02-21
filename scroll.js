

const date = document.getElementById("date");

date.innerHTML = new Date().getFullYear();

const navBar = document.querySelector(".nav-bar");
const logo =document.querySelector(".logo")
const sidebarToggle = document.querySelector(".sidebar-toggle");


window.addEventListener("scroll", function() {
    const scrollHeight = this.window.scrollY
    const navHeight = navBar.offsetHeight;
    const playgroundSection = this.document.querySelector(".bg-green")
    const playgroundSectionTop = playgroundSection.offsetTop

    console.log(playgroundSectionTop)

    if(scrollHeight > navHeight) {
        navBar.classList.add("fixed-nav")
    if(scrollHeight >= playgroundSectionTop) {
        logo.classList.add("white-logo")
        sidebarToggle.classList.add("white-sidebar-toggle")
    } else {
        logo.classList.remove("white-logo")
        sidebarToggle.classList.remove("white-sidebar-toggle")
    }

    } else {
        navBar.classList.remove("fixed-nav")
    }
})


// ********** smooth scroll ************
// select links
const scrollLink = document.querySelectorAll(".scroll-link")
const linksContainer = document.querySelector(".links-container")

scrollLink.forEach(function(link){
    link.addEventListener("click", function(e){
        //prevent default 
        e.preventDefault() // not navigating anywhere
        //navigate to specific spot 
        const id = e.currentTarget.getAttribute("href").slice(1)
        // console.log(id)
        const element = document.getElementById(id)

        //calculte the height 
        const navHeight = navBar.getBoundingClientRect().height
        const containerHeight = linksContainer.getBoundingClientRect().height
        const fixeNav = navBar.classList.contains("fixed-nav")

        let position = element.offsetTop - navHeight//give us the value of the top element, and calaculate it
        if (!fixeNav) { //this is to navigate link when it's on transparant background. if fixed nav is false 
            position = position - navHeight
        }
        if(navHeight > 100){//this is for mobile responsivness
            position = position + containerHeight
        }


        window.scrollTo({ //method to get to specific value
            left: 0,
            top: position,
        })
        linksContainer.style.height = 0 //to close togle when link is clicked 

    })
})