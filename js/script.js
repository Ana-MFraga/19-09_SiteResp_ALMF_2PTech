/*
const > Constante > Variáveis que não podem ser alteradas
getElementsByClassName("") > Guarda todos os elementos dentro dessa class dentro de um vetor (que pode ter mais de um elemento com essa classe), então é preciso especificar a posição dele no vetor > [0]
*/
const navbar_btt = document.getElementsByClassName("nav_btt")[0]; //Pegando elemento botão

//Pegando o navbar_links e navbar para colocar a classe 'active' depois
const navbar_link = document.getElementsByClassName("navbar_links")[0];
const navbar = document.getElementsByClassName("navbar")[0];

//Verifica o tipo de evento e ativa ou desativa a classe 'active'
function toggle_menu(event){ 
    if(event.type == 'touchstart'){ event. preventDefault(); }
    
    navbar_link.classList.toggle('active');
    navbar.classList.toggle('active'); //Para que a animação do X funcione
}

/* addEventListener() > Adiciona um evento nessa classe
() => {} > Chama função mais rápido
toggle > Se não tiver, ele adiciona, se tiver, ele tira
navbar_link.classList.toggle('active'); > Colocando a classe 'active' dentro do navbar_link
*/
navbar_btt.addEventListener('click', toggle_menu);
navbar_btt.addEventListener('touchstart', toggle_menu);

/////

let slide_index = 1;
show_slide(slide_index);

//Passa pro próximo slide
function next_slide(n){
    show_slide(slide_index += n); //Para avançar ou voltar os slides, += > Se ele passar um número positivo, ele avança, se o número for negativo, ele volta
}
//Altera o slide nos dots
function current_slide(n){
    show_slide(slide_index += n);
}
//Mostra qual slide deve estar visível
function show_slide(n){
    let i;
    let slides = document.getElementsByClassName('slide');

    //Se eu to no último slide e clico pro próximo, me joga pro primeiro
    if(n > slides.length){ slide_index = 1; }
    //Se eu to no primeiro slide e clico pra voltar, ele vai pro último
    if(n < 1){ slide_index = slides.length; }

    /* Faz todos desaparecerem, pra que consiga escolher o slide certo*/
    for(i=0; i < slides.length; i++){
        slides[i].style.display= "none";
    }

    slides[slide_index - 1].style.display = "block";
}