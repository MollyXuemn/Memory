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


  class GameComponent {
  constructor(id){ 
	// function GameComponent() {
    // gather parameters from URL
    var params = this.parseUrl();

    // save player name & game ize
    this._name = params.name;
    this._size = parseInt(params.size) || 9;
    this._flippedCard = null;
    this._matchedPairs = 0;
  }

  /* method GameComponent.init */
  // GameComponent.prototype.init = function init() {
	  init(){
    // fetch the cards configuration from the server
    this.fetchConfig(
      //function (config) {
		 ( config=> {
        
        this._config = config;
		//this._cards = [];
        // create a card out of the config
        this._cards = []; 
        
		this._cards = this._config.ids.map(configId => new CardComponent(configId));
	   
	   
	   this._boardElement = document.querySelector(".cards");
		
		
		for (var i in this._cards) {
		//this._cards.forEach((let i)=>{
          // TODO Step 3.3: use Array.forEach()
			//Step 3.2:voir avec prof
		   (function() {let card = this._cards[i];
			//(function() {let card = this._cards;
          

            this._boardElement.appendChild(card.getElement());
            card.getElement().addEventListener("click",()=>{this._flipCard(card)});//ça marche
            console.log("on est dans la boucle"); 
			   
          }.bind(this)());
        }
		
		
        this.start();
      })
	  
    );
  };

  // TODO Step 7 implement getTemplate() {}

  /* method GameComponent.start */
  // GameComponent.prototype.start = function start() {
	  start() {
    this._startTime = Date.now();
    var seconds = 0;
    
	  document.querySelector("nav .navbar-title").textContent =`Player:${this._name}. Elapsed time:${seconds++}`;
    this._timer = setInterval(
       ()=> {
        
		  document.querySelector("nav .navbar-title").textContent =`Player:${this._name}. Elapsed time:${seconds++}`;
           
      },
      1000
    );
  };

  /* method GameComponent.fetchConfig */
  // GameComponent.prototype.fetchConfig = function fetchConfig(cb) {
	fetchConfig(cb) {
    var xhr =
      typeof XMLHttpRequest != "undefined"
        ? new XMLHttpRequest()
        : new ActiveXObject("Microsoft.XMLHTTP");

    
    xhr.open("get",`${environment.api.host}/board?size=${this._size}`, true);

    xhr.onreadystatechange =  ()=> {
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
  };

  /* method GameComponent.gotoScore */
  // GameComponent.prototype.gotoScore = function gotoScore() {
      gotoScore() {
      let now = Date.now();
      let timeElapsedInSeconds = Math.floor(
      (Date.now() - this._startTime) / 1000
    );
    clearInterval(this._timer);

    setTimeout(
       ()=> {

        // TODO Step 7: change path to: `score?name=${this._name}&size=${this._size}'&time=${timeElapsedInSeconds}`;

          window.location = `../score/score.component.html?name=${this._name}&size=${this._size}&time=${timeElapsedInSeconds}`;
      },
      750
    ); 
  };

  /* method GameComponent._flipCard */
  // GameComponent.prototype._flipCard = function _flipCard(card) {
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

        setTimeout(
           ()=> {
            // hide the cards
            this._flippedCard.flip();
            card.flip();
            this._busy = false;

            // reset flipped card for the next turn.
            this._flippedCard = null;
          }/*.bind(this)*/,500
        );
      }
    }
  };

  // TODO Step 6: Move this method to utils.js
  // function parseUrl() {
	parseUrl() {
    var url = window.location;
    var query = url.href.split("?")[1] || "";
    var delimiter = "&";
    var result = {};

    var parts = query.split(delimiter);
    
	let kv = parts.map(item => item.split("="));
    kv.reduce((previousValue, currentValue) => result[currentValue[0]] = currentValue[1], {});
    return result;
  }
  }
  // put component in global scope, to be runnable right from the HTML.
  // TODO Step 7: export GameComponent
  window.GameComponent = GameComponent;
})();
