console.log("Connection to main.js works!");



var Game = function Game(questions){
	this.questions = questions;
	this.render = function(){
		this.questions.forEach(function(element){
		var $div = $('<div>').addClass('box');
		$('.container').append($div);
		})
	}
}

var game = new Game(tomQuestions);

game.render();
