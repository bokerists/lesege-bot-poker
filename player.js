exports = module.exports = {


    VERSION: 'Superstar poker js-player',

    bet: function (gamestate) {
        var amount = 0

        if (gamestate.players[gamestate.me].cards[0].rank === gamestate.players[gamestate.me].cards[1].rank) {
            amount = gamestate.callAmount
        } else if
        (gamestate.players[gamestate.me].cards[0].rank === "A" || gamestate.players[gamestate.me].cards[1].rank === "A") {
            amount = gamestate.callAmount
        } else if (gamestate.players[gamestate.me].cards[0].rank === "K" || gamestate.players[gamestate.me].cards[1].rank === "K") {
            amount = gamestate.callAmount
        }  else if (gamestate.players[gamestate.me].cards[0].type  === gamestate.players[gamestate.me].cards[1].type) {
            amount = gamestate.callAmount
        }


    
      return amount
  }


/*
     switch(expression) {
     case n:

     break;
     case n:
     code block
     break;
     default:
     default code block
     }
*/

};
