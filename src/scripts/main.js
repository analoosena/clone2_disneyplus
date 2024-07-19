document.addEventListener('DOMContentLoaded', function(){

    const tabButtons = document.querySelectorAll('.shows__tabs__button');
    const tabPanes = document.querySelectorAll('.shows__list');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSelection = document.querySelector('.hero');
    const  alturaHero = heroSelection.clientHeight;

    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY;

        if(posicaoAtual < alturaHero){
            ocultaElementosDoHeader();}
            else{
                exibeElementosDoHeader();}
    })


    //Seção de atrações, programação das abas

    tabButtons.forEach(function(button){
        button.addEventListener('click', function(){
            const tabId = button.getAttribute('data-tab');

            tabButtons.forEach(function(btn){
                btn.classList.remove('active');
            });

            button.classList.add('active');

            tabPanes.forEach(function(pane){
                pane.classList.remove('active');
            });
            document.getElementById(tabId).classList.add('active');
        });
    });

    //Seção FAQ

    for(let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', abreOuFechaResposta);
    }

});

function ocultaElementosDoHeader(){
    const header = document.querySelector('header')
    header.classList.add('header--is--hidden');
}

function exibeElementosDoHeader(){
    const header = document.querySelector('header')
    header.classList.remove('header--is--hidden');
}

function abreOuFechaResposta(event){
    const classe = 'faq__questions__item--is-open';
    const elementoPai = event.target.parentNode;

    elementoPai.classList.toggle(classe);

}
