console.log("Connection to main.js works!");

var newDeck ={

  "0": {
    "value": 2,
    "name": "2",
    "suit": "spade",
  },
  "1": {
    "value": 3,
    "name": "3",
    "suit": "spade",
  },
  "2": {
    "value": 4,
    "name": "4",
    "suit": "spade",
  },
  "3": {
    "value": 5,
    "name": "5",
    "suit": "spade",
  },
  "4": {
    "value": 6,
    "name": "6",
    "suit": "spade",
  },
  "5": {
    "value": 7,
    "name": "7",
    "suit": "spade",
  },
  "6": {
    "value": 8,
    "name": "8",
    "suit": "spade",
  },
  "7": {
    "value": 9,
    "name": "9",
    "suit": "spade",
  },
  "8": {
    "value": 10,
    "name": "10",
    "suit": "spade",
  },
  "9": {
    "value": 10,
    "name": "J",
    "suit": "spade",
  },
  "10": {
    "value": 10,
    "name": "Q",
    "suit": "spade",
  },
  "11": {
    "value": 10,
    "name": "K",
    "suit": "spade",
  },
  "12": {
    "value": 11,
    "name": "A",
    "suit": "spade",
  },
  "13": {
    "value": 2,
    "name": "2",
    "suit": "clubs",
  },
  "14": {
    "value": 3,
    "name": "3",
    "suit": "clubs",
  },
  "15": {
    "value": 4,
    "name": "4",
    "suit": "clubs",
  },
  "16": {
    "value": 5,
    "name": "5",
    "suit": "clubs",
  },
  "17": {
    "value": 6,
    "name": "6",
    "suit": "clubs",
  },
  "18": {
    "value": 7,
    "name": "7",
    "suit": "clubs",
  },
  "19": {
    "value": 8,
    "name": "8",
    "suit": "clubs",
  },
  "20": {
    "value": 9,
    "name": "9",
    "suit": "clubs",
  },
  "21": {
    "value": 10,
    "name": "10",
    "suit": "clubs",
  },
  "22": {
    "value": 10,
    "name": "J",
    "suit": "clubs",
  },
  "23": {
    "value": 10,
    "name": "Q",
    "suit": "clubs",
  },
  "24": {
    "value": 10,
    "name": "K",
    "suit": "clubs",
  },
  "25": {
    "value": 11,
    "name": "A",
    "suit": "clubs",
  },
  "26": {
    "value": 2,
    "name": "2",
    "suit": "diamonds",
  },
  "27": {
    "value": 3,
    "name": "3",
    "suit": "diamonds",
  },
  "28": {
    "value": 4,
    "name": "4",
    "suit": "diamonds",
  },
  "29": {
    "value": 5,
    "name": "5",
    "suit": "diamonds",
  },
  "30": {
    "value": 6,
    "name": "6",
    "suit": "diamonds",
  },
  "31": {
    "value": 7,
    "name": "7",
    "suit": "diamonds",
  },
  "32": {
    "value": 8,
    "name": "8",
    "suit": "diamonds",
  },
  "33": {
    "value": 9,
    "name": "9",
    "suit": "diamonds",
  },
  "34": {
    "value": 10,
    "name": "10",
    "suit": "diamonds",
  },
  "35": {
    "value": 10,
    "name": "J",
    "suit": "diamonds",
  },
  "36": {
    "value": 10,
    "name": "Q",
    "suit": "diamonds",
  },
  "37": {
    "value": 10,
    "name": "K",
    "suit": "diamonds",
  },
  "38": {
    "value": 11,
    "name": "A",
    "suit": "diamonds",
  },
  "39": {
    "value": 2,
    "name": "2",
    "suit": "hearts",
  },
  "40": {
    "value": 3,
    "name": "3",
    "suit": "hearts",
  },
  "41": {
    "value": 4,
    "name": "4",
    "suit": "hearts",
  },
  "42": {
    "value": 5,
    "name": "5",
    "suit": "hearts",
  },
  "43": {
    "value": 6,
    "name": "6",
    "suit": "hearts",
  },
  "44": {
    "value": 7,
    "name": "7",
    "suit": "hearts",
  },
  "45": {
    "value": 8,
    "name": "8",
    "suit": "hearts",
  },
  "46": {
    "value": 9,
    "name": "9",
    "suit": "hearts",
  },
  "47": {
    "value": 10,
    "name": "10",
    "suit": "hearts",
  },
  "48": {
    "value": 10,
    "name": "J",
    "suit": "hearts",
  },
  "49": {
    "value": 10,
    "name": "Q",
    "suit": "hearcats",
  },
  "50": {
    "value": 10,
    "name": "K",
    "suit": "hearts",
  },
  "51": {
    "value": 11,
    "name": "A",
    "suit": "hearts",
  },

}
var dealerCardValue = [];
var playerCardValue = [];
var cardsInPlay = [];
var gameState = true;


getPlayerCard = function (){
	var card = Math.floor(Math.random() * 52);
	var duplicateCheck = checkForDuplicates(card);
	if (duplicateCheck === false) {
		playerCardValue.push(newDeck[card].value)
		cardsInPlay.push(card)
	} else getPlayerCard();
}

getDealerCard = function (){
	var card = Math.floor(Math.random() * 52);
	var duplicateCheck = checkForDuplicates(card);
	if (duplicateCheck === false) {
		dealerCardValue.push(newDeck[card].value)
		cardsInPlay.push(card)
	} else getDealerCard();
}

checkForDuplicates = function(element){
		if (cardsInPlay.length === 0) {
			return false;
	} else if (cardsInPlay.indexOf(element) === -1) {
		return false
	} else return true;
}

playerValue = function(){
	var total = 0;
	for (var i = 0; i < playerCardValue.length; i++) {
    total += playerCardValue[i] << 0;
	}
	$('.playerValue').text(total)
	if (total > 21) {
		gameState = false;
		console.log('loser!')
	} return total;
	}

dealerLogic = function (){
	var $playerValue = playerValue();
	var $dealerValue = dealerValue();
	if ($dealerValue < 17 && $dealerValue <= $playerValue) {
		getDealerCard();
		dealerValue();
		dealerLogic();
	}else if ($dealerValue < $playerValue && $dealerValue < 21) {
		getDealerCard();
		dealerValue();
		dealerLogic();
	}; gameState = false
}

dealerValue = function(){
	var total = 0;
	for (var i = 0; i < dealerCardValue.length; i++) {
    total += dealerCardValue[i] << 0;
	}
	$('.dealerValue').text(total)
	return total;
}

gameOver = function(){
	console.log(playerValue())
	console.log(dealerValue())
	if (playerValue() === 21 && dealerValue() != 21) {
	console.log('21! You win!');
} else if (playerValue() > 21) {
	console.log('Bust! You lose!');
} else if (playerValue() === dealerValue()){
	console.log('Push!');
} else if (dealerValue() > 21) {
	console.log('Dealer bust! You win!');
} else if (playerValue() > dealerValue()){
	console.log('You win!');
} else console.log('You lose!');
}

$('.hit').on('click', function(){
	getPlayerCard();
	playerValue();
})

$('.stay').on('click', function(){
	dealerLogic();
	gameOver();
})



$(document).ready(function(){
	getPlayerCard();
	getPlayerCard();
	
	console.log(cardsInPlay);
	playerValue();
	getDealerCard();
	getDealerCard();
	dealerValue();
})

console.log(playerValue())


// console.log(playerCardValue[0])











