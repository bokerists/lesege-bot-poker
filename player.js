exports = module.exports = {


    VERSION: 'Superstar poker js-player',

    bet: function (gamestate) {

        var casoBase = function() {
            if (gamestate.players[gamestate.me].cards[0].rank === gamestate.players[gamestate.me].cards[1].rank) {
                amount = gamestate.callAmount
            } else if
            (gamestate.players[gamestate.me].cards[0].rank === "A" || gamestate.players[gamestate.me].cards[1].rank === "A") {
                amount = gamestate.callAmount
            } else if (gamestate.players[gamestate.me].cards[0].rank === "K" || gamestate.players[gamestate.me].cards[1].rank === "K") {
                amount = gamestate.callAmount
            } else if (gamestate.players[gamestate.me].cards[0].type === gamestate.players[gamestate.me].cards[1].type) {
                amount = gamestate.callAmount
            }

        }

        var amount = 0

        if(gamestate.commonCards.length == 0) {
            casoBase()
        }
        else {
            var flag = 0
            gamestate.commonCards.forEach(function (carta) {
                if (carta.type === gamestate.players[gamestate.me].cards[0].type || carta.type === gamestate.players[gamestate.me].cards[1].type) {
                    flag = 1
                } else if (carta.rank === gamestate.players[gamestate.me].cards[0].rank || carta.rank === gamestate.players[gamestate.me].cards[1].rank) {
                    flag = 1
                }
            })
            if (flag) {
                amount = gamestate.callAmount*2
            } else {
                amount = 0
            }
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
