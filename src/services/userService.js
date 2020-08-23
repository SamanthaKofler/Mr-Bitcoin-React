import utilService from './utilService';

export default {
    getUser,
    signUp,
    addMove
}


function getUser() {
    return utilService.loadFromStorage('user');
}

function signUp(username) {
    const id = utilService.makeId();
    var newUser = {_id: id, name: username, coins: 100, moves: []};
    utilService.storeToStorage('user', newUser);
    return Promise.resolve(newUser);
  }

function addMove(move) {
    if(move.amount === '0') {
      alert('Cannot transfer amount 0');
      return;
    }
    var user = getUser();
    if(user.coins - move.amount < 0) {
      alert('Your balance does not suffice');
      return;
    }
    user.coins -=  move.amount;
    user.moves.unshift(move);
    utilService.storeToStorage('user', user);
  }