let toggle=document.getElementById('toggle');
let moscuro=document.getElementById('moscuro');



toggle.addEventListener('change',(event)=>{
    let checked=event.target.checked;

    document.body.classList.toggle('dark');







    if(checked==true){
        moscuro.innerHTML ='<i class="fa-solid fa-sun"></i>';   
        moscuro.style.color = '#dfba14';
    }else
    {
        moscuro.innerHTML ='<i class="fa-solid fa-moon"></i>';
        moscuro.style.color = 'black';    
    }


})