// TODO Step 6 import { parseUrl } from '../../utils/utils.js';
// TODO Step 7 import { Component } from "../../utils/component";
// TODO Step 7 import template from "./game.component.html"

(function () {
  // TODO Step 6 remove this closure
  var environment = {
    api: {
      host: "http://localhost:8081",
    },
  };


  /* class GameComponent constructor */
class GameComponent {
    constructor(){
    // gather parameters from URL
    var params = parseUrl();

    // save player name & game ize
    this._name = params.name;
    this._size = parseInt(params.size) || 9;
    this._flippedCard = null;
    this._matchedPairs = 0;
    }
  

  /* method GameComponent.init */
  async init() {
    // fetch the cards configuration from the server
    const config = await this.fetchConfig();
    this.fetchConfig()
      .then((config) => {
        // done Step 3.2: use arrow function
        this._config = config;

        // create a card out of the config
        this._cards = this._config.ids.map((i) => new CardComponent(i));

        this._boardElement = document.querySelector(".cards");

        this._cards.forEach(card => {// TODO Step 3.3: use Array.forEach()
            // done Step 3.2: use arrow function
            this._boardElement.appendChild(card.getElement());
            card.getElement().addEventListener(
              "click",
             () => {
                this._flipCard(card);
              }
            ); // done Step 3.2 use arrow function.
          });
        this.start();
      });
  };

  // TODO Step 7 implement getTemplate() {}

  /* method GameComponent.start */
  start() {
    this._startTime = Date.now();
    var seconds = 0;
    // Done Step 3.2: use template literals (backquotes)
    document.querySelector("nav .navbar-title").textContent =
      `Player: ${this._name}. Elapsed time:${seconds++}`;
      

    this._timer = setInterval(
      () => {
        // Done Step 3.2: use arrow function
        // Done Step 3.2: use template literals (backquotes)
        document.querySelector("nav .navbar-title").textContent =
        `Player:${this._name}. Elapsed time:${seconds++}`;
      }, 1000
    );
  };

  
  /* fetchConfig(cb) {
    var xhr =
      typeof XMLHttpRequest != "undefined"
        ? new XMLHttpRequest()
        : new ActiveXObject("Microsoft.XMLHTTP");
        
    xhr.open("get", `${environment.api.host}/board?size=${this._size}`, true);

    // Done Step 3.2 use arrow function
    xhr.onreadystatechange = () => {
      var status;
      var data;
      // https://xhr.spec.whatwg.org/#dom-xmlhttprequest-readystate
      if (xhr.readyState == 4) {
        // `DONE`
        status = xhr.status;
        if (status == 200) {
          data = JSON.parse(xhr.responseText);
          cb(data);
        } else {
          throw new Error(status);
        }
      }
    };
    xhr.send();
    //return cb._id === this._id;
  };
 */
  /* method GameComponent.fetchConfig */
  async fetchConfig() {
    return fetch(`${environment.api.host}/board?size=${this._size}`, {method: "GET",})
      .then((response) =>response.json())
      .catch((error) =>console.log("Error while fetching config: ", error));
    console.log("on est dans la boucle"); 
  }; 

  /* method GameComponent.gotoScore */
  gotoScore() {
    var timeElapsedInSeconds = Math.floor(
      (Date.now() - this._startTime) / 1000
    );
    clearInterval(this._timer);

    setTimeout(
      () => {
        // TODO Step 7: change path to: `score?name=${this._name}&size=${this._size}'&time=${timeElapsedInSeconds}`;
        window.location =
        `../score/score.component.html?name=
        ${this._name}&size=${this._size}&time=
        ${timeElapsedInSeconds}`;
      }, 750
    );
  };

  /* method GameComponent._flipCard */
  _flipCard(card) {
    if (this._busy) {
      return;
    }

    if (card.flipped) {
      return;
    }

    // flip the card
    card.flip();

    // if flipped first card of the pair
    if (!this._flippedCard) {
      // keep this card flipped, and wait for the second card of the pair
      this._flippedCard = card;
    } else {
      // second card of the pair flipped...

      // if cards are the same
      if (card.equals(this._flippedCard)) {
        this._flippedCard.matched = true;
        card.matched = true;
        this._matchedPairs += 1;

        // reset flipped card for the next turn.
        this._flippedCard = null;

        if (this._matchedPairs === this._size) {
          this.gotoScore();
        }
      } else {
        this._busy = true;

        // cards did not match
        // wait a short amount of time before hiding both cards
        // TODO Step 3.2 use arrow function
        setTimeout(
          () => {
            // hide the cards
            this._flippedCard.flip();
            card.flip();
            this._busy = false;

            // reset flipped card for the next turn.
            this._flippedCard = null;
          }, 500
        );
      }
    }
  };  
}
  // TODO Step 6: Move this method to utils.js
  function parseUrl() {
    var url = window.location;
    var query = url.href.split("?")[1] || "";
    var delimiter = "&";
    var result = {};

    var parts = query.split(delimiter);
    // Done Step 3.3: Use Array.map() & Array.reduce()
    return parts
      .map(item => item.split("="))
      .reduce((acc, cur) => {
          acc[cur[0]] = cur[1]
          return acc
      }, {});
  }
  
  // put component in global scope, to be runnable right from the HTML.
  // TODO Step 7: export GameComponent
  window.GameComponent = GameComponent;
})();
