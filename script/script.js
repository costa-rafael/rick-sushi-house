const oberserver = new IntersectionObserver((teste) => {

    teste.forEach((entry) =>{

        console.log(entry)

        if (entry.isIntersecting){
            entry.target.classList.add("show");            
        }
        else{
            entry.target.classList.remove("show")
        }

    });

});

const hiddenElements = document.querySelectorAll(".hiddenLeft");
hiddenElements.forEach((el) => oberserver.observe(el));


const hiddenElementsReverse = document.querySelectorAll(".hiddenReverse");
hiddenElementsReverse.forEach((el) => oberserver.observe(el));


const hiddenElementsTop = document.querySelectorAll(".hiddenTop");
hiddenElementsTop.forEach((el) => oberserver.observe(el));

console.log(hiddenElements);






function anchor(){

    let up = document.querySelector('.elevador')

    let largura = window.innerWidth;    

    let altura = window.innerHeight;

    let scrollTop = window.scrollY;


    if(largura > 600 && scrollTop >= 500){  
        
        //mostrar elevador        
        up.style.marginRight = "5px";
       
       
    }else{
        // up.style.display = "none";
        up.style.marginRight = "-70px";
    }
};

setInterval(anchor, 200);

function linkWhatsApp(){
    location.href = "https://wa.me/5511985133172?text=Ol%C3%A1%2C+Quero+fazer+meu+pedido+no+card%C3%A1pio+com+%2A10%25+de+Desconto%2A+%3A%29";
};

function linkRestaurante(){
    location.href = "https://goo.gl/maps/K9jsyg4VFubmvMwY8";
};

        

      