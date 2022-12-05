window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toogle('window-scroll',window.scrollY>100)
})

const faqs=document.querySelectorAll('.faq');
faqs.forEach(faq =>{
    faq.addEventListener('click,'(), {
    faq,classList,toogle("open");
    })
})
menuBtn.addEventListener('click',()=>{
    menu.style.display="flex";
    closeBtn.style.display="none"
    menuBtn.style.display="inline-block";
})
//close nav bar
 const closeNav = () =>{
    closeBtn.style.display="none";
    closeBtn.style.display="none";
    menuBtn.style.display="inline-block";
 }
 closeBtn.addEventListener('click',closeNav)