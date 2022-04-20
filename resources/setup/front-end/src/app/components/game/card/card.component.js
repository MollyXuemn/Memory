import "./card.component.css";
// TODO Step 7 import { Component } from "../../../utils/component";
import { Component } from "../../../utils/component";
// TODO Step 7 import template from  "./card.component.html"
import template from  "./card.component.html";

  /* class CardComponent constructor */
  export class CardComponent  extends Component{
    constructor(id){// is this card flipped ?
      super("card");
      this._flipped = false;
  
      // has the matching card has been discovered already ?
      this.matched = false;
  
      this._id = id;
  
      this._imageElt = this.getElement().querySelector(".card-wrapper");
     
      // TODO Step 3.2: use template literals (backquotes)
      // TODO Step 7: Update the path for images with 'src/app/components/game/card/assets/card***'
      this._imageElt.querySelector("img.front-face").src =
        require(`./assets/card-${this._id}.png`);
      this._imageElt.querySelector("img.back-face").src =
        require(`./assets/back.png`);
      }
    

  /* method CardComponent.getElement */
  // DOne Step 7: remove this method
 
  // Done Step 7 implement getTemplate() {}
  getTemplate() {
    return template;
  }

  /* method CardComponent.flip */
  flip() {
    this._imageElt.classList.toggle("flip");
    this._flipped = !this._flipped;
  };

  /* method CardComponent.equals */
  equals(card) {
    return card._id === this._id;
  };

  /* CardComponent.get flipped() */

  get flipped() {
    return this._flipped;
  }
  }
  // put component in global scope, to be runnable right from the HTML.
  // TODO Step 7 export CardComponent

let environment = {
  api: {
    host: "See that ? Without closures, I can override variables from other files that belongs to the global scope.",
  },
};
