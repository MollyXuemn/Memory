// TODO Step 7 import { Component } from "../../utils/component";
import { Component } from "../../utils/component";
// TODO Step 7 import template from  "./welcome.component.html"
import template from  "./welcome.component.html";


// TODO Step 7 remove this closure

    /* class WelcomeComponent constructor  */

export class WelcomeComponent extends Component {
    constructor(){
        super("welcome");
    }

    /* method WelcomeComponent.init */
    init() {
        let form = document.querySelector('form.form-signin');

        form.addEventListener('submit', (event)=> {     // TODO Step 3.2: use arrow function
            event.preventDefault();
            if (form.checkValidity() === false) {
                event.stopPropagation();
                form.classList.add('was-validated');
            } else {
                var name = event.srcElement.querySelector('#nickname').value;
                var size = parseInt(event.srcElement.querySelector('#size').value);

                _startGame(name, size);
            }
        }, false);

        return this;
    }

    // TODO Step 7 implement getTemplate() {}
    getTemplate() {
        return template;
    }
};
    function _startGame(name, size) {
        // Done Step 7: change path to: `game?name=${name}=name&size=${size}`
        window.location.hash = `game?name=${name}=name&size=${size}`;
    }

    // put component in global scope, to be runnable right from the HTML.
    // TODO Step 7 export WelcomeComponent
    //window.WelcomeComponent = WelcomeComponent
