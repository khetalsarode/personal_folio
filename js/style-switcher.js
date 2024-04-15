/*     ==================  toggle style switch===================*/ 
const styleSwitcherToggle=document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click",()=> {
    document.querySelector(".style-switcher").classList.toggle("open");
})

//hide style switch on scroll
window.addEventListener("scroll",()=>{
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
/*==================theme color=====================*/
 const alternateStyles = document.querySelectorAll(".alternate-style");
 function setActiveStyle(color){
    alternateStyles.forEach((style) =>{
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    })
 }

 /*==================Dark-Light=====================*/
const darklight=document.querySelector(".dark-light");
darklight.addEventListener("click",(()=>{
    darklight.querySelector("i").classList.toggle("fa-sun");
    darklight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
}))
window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark")){
        darklight.querySelector("i").classList.add("fa-sun");
    }
    else{
        darklight.querySelector("i").classList.add("fa-moon");
    }
})
