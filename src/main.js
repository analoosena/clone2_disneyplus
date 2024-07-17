document.addEventListener('DOMContentLoaded', function(){

    const tabButtons = document.querySelectorAll('.shows__tabs__button');
    const tabPanes = document.querySelectorAll('.shows__list');
    const questions = document.querySelectorAll('[data-faq-question]');

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

    for(let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', abreOuFechaResposta);
    }

});

function abreOuFechaResposta(event){
    const classe = 'faq__questions__item--is-open';
    const elementoPai = event.target.parentNode;

    elementoPai.classList.toggle(classe);

}