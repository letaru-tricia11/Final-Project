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
    
    closeBtn
})