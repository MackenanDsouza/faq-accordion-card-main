const faq_item=document.querySelectorAll(".faq__accordion_item");

faq_item.forEach(faq=>{

    
    faq.addEventListener('click',()=>{

        faq_item.forEach(item=>{
            if(item!=faq){
                if(item.classList.contains("active"))
                {
                    item.classList.remove("active");
                }
            }
        })
        faq.classList.toggle("active");
    })

})