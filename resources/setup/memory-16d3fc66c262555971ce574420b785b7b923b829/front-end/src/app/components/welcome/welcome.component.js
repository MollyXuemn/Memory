// TODO Step 7 import { Component } from "../../utils/component";
// TODO Step 7 import template from  "./welcome.component.html"

(function() {   // TODO Step 7 remove this closure

    // TODO Step 3.1 create a class
    class WelcomeComponent {
        constructor() {
            // function WelcomeComponent() {
        }

        /* method WelcomeComponent.init */
        // WelcomeComponent.prototype.init = function init() {
        init() {
            var form = document.querySelector('form.form-signin');


			form.addEventListener('submit',  event=> { 
                event.preventDefault();
                if (form.checkValidity() === false) {
                    event.stopPropagation();
                    form.classList.add('was-validated');
                } else {
                    var name = event.srcElement.querySelector('#nickname').value;
                    var size = parseInt(event.srcElement.querySelector('#size').value);

                    _startGame(name, size);

                }
            }/*.bind(this)*/, false);

            return this;
        }
    }

    // TODO Step 7 implement getTemplate() {}

    // function _startGame(name, size) {
	function _startGame(name, size) {
       
        // TODO Step 7: change path to: `game?name=${name}=name&size=${size}`

		window.location = `../game/game.component.html?name=...${name}&size=${size}`;
    }
	
    // put component in global scope, to be runnable right from the HTML.
    // TODO Step 7 export WelcomeComponent
    window.WelcomeComponent = WelcomeComponent
	
})();