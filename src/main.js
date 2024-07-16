document.addEventListener('DOMContentLoaded', function(){

    const tabButtons = document.querySelectorAll('.shows__tabs__button');
    const tabPanes = document.querySelectorAll('.shows__list');

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

});