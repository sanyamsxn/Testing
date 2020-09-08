
const home = document.querySelector("#active-page-1")
const about = document.querySelector("#active-page-2")
const skills = document.querySelector("#active-page-3")
const projects = document.querySelector("#active-page-4")
const certificates = document.querySelector("#active-page-5")
const contact = document.querySelector("#active-page-6")




window.addEventListener('scroll', ()=>{
    const scrolled = window.pageYOffset;
    
    if((scrolled>=0) && (scrolled< 590)){
        home.style.color = "yellow"
    }
    else{
        home.style.color= "whitesmoke"
    }

})

window.addEventListener('scroll', ()=>{
    const scrolled = window.pageYOffset;
    
    if((scrolled>590) && (scrolled< 1120)){
        about.style.color = "yellow"
    }
    else{
        about.style.color= "whitesmoke"
    }

})

window.addEventListener('scroll', ()=>{
    const scrolled = window.pageYOffset;
    
    if((scrolled>1120) && (scrolled< 1690)){
        skills.style.color = "yellow"
    }
    else{
        skills.style.color= "whitesmoke"
    }

})