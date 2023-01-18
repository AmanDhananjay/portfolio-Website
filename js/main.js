//Navigation bar effects on scroll
window.addEventListener("scroll", function(){
 const header =document.querySelector("header");
 header.classList.toggle("sticky",window.scrollY > 0);
});

//Portfolio section - Modal

//Our clients - Swiper

//Website dark/light theme
const themeBtn =document.querySelector(".theme-btn");

themeBtn.addEventListener("click", ()=>{
  document.body.classList.toggle("dark-theme");
  themeBtn.classList.toggle("circle") ;

  localStorage.setItem("saved-theme",getCurrentTheme());
  localStorage.setItem("saved-icon",getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => document.body.classList.contains("circle") ? "circle" : "star";
 
const savedTheme = localStorage.getItem("saved-theme");   
const savedIcon = localStorage.getItem("saved-icon"); 

  if (savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon==="circle" ? "add" : "remove"]("circle");
  }  
    
//Scroll to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");
window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY > 400);
});
scrollTopBtn.addEventListener("click", ()=>{
    document.body.scrollTop =0;
    document.documentElement.scrollTop = 0;

});


//Navigation menu items active on page scroll
window.addEventListener("scroll",()=>{
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;
    sections.forEach(current =>{
        let sectionHeight = current.offsetHeight;
        let sectionTop =  current.offsetTop -50;
        let id = current.getAttribute("id");

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
    }
    else{
        document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");

    }

});
}); 

//Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelector(".nav-items a");

menuBtn.addEventListener("click",() =>{
  navigation.classList.add("active");
});
closeBtn.addEventListener("click",() =>{
    navigation.classList.remove("active");
  }); 
  navItems.forEach((navItem) =>{
    navItem.addEventListener("click", () => {
      navigation.classList.remove("active");
    });
  });

//Scroll reveal animations
scrollReveal({
  reset :true,
  distance :'60px',
  duration :3000,
  delay:200
});
//Common reveal options to create reveal animations

//Target elements, and specify options to create reveal animations
ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02',{ delay: 500, origin:'left' });

ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', { delay: 600, origin: 'right' });


 ScrollReveal().reveal('.home .info .btn', { delay: 700, origin: 'bottom' });
ScrollReveal().reveal('.media-icons i, .contact-left li', { delay: 500, origin: 'left', interval: 200 });

 ScrollReveal().reveal('.home-img, .about-img', { delay: 500, origin: 'bottom' });

 ScrollReveal().reveal('.about .description, .copy-right', { delay: 600, origin: 'right' });

 ScrollReveal().reveal('.about .professional-list li', { delay: 500, origin: "right", interval:200 });

 ScrollReveal().reveal(' .skills-description, .services-description, .contact-card, client-swiper, contact-left h2', { delay: 700, origin: 'left' });
ScrollReveal().reveal('.experience-card, .service-card, .education, .portfolio .img-card', { delay: 800, origin: 'bottom', interval: 200 });
  ScrollReveal().reveal('footer .group', { delay: 500, origin: 'top', interval: 200 });