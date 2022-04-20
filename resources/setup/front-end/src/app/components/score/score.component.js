// TODO Step 6 import { parseUrl } from '../../utils/utils.js';
import { parseUrl } from "../../utils/utils";
import { Component } from "../../utils/component";
import template from "./score.component.html";
// TODO Step 6 remove this closure

    /* class ScoreComponent constructor */
export class ScoreComponent extends Component {
        constructor(){
            super("score");
        let params = parseUrl();
        this.name = params.name;
        this.size = parseInt(params.size);
        this.time = parseInt(params.time);
        }
    
    /* method ScoreComponent.init */
    init() {
        document.getElementById('name').innerText = this.name;
        document.getElementById('size').innerText = this.size;
        document.getElementById('time').innerText = this.time;
    }

    // TODO Step 7 implement getTemplate() {}
    getTemplate() {
        return template;
      }

    // put component in global scope, to be runnable right from the HTML.
    // TODO Step 7 export ScoreComponent
    //window.ScoreComponent = ScoreComponent;

};