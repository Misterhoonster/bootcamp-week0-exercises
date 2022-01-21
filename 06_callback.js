/**
  This one is tricky!
  In an alternate universe, coins have a `true` and a `false` side.
  Write code that first gets a user via a getUser() call, then in the callback,
  flips a coin and tells the user whether or not their guess was correct.
 */

const coinToss = (guess, callback) => {
  const result = Math.round(Math.random())
  const didWin = (guess === result)
  determineWinner(didWin)
}

const getUser = (callback) => {
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    guess: Math.round(Math.random()),
  }
  flipCoin(user)
}

const flipCoin = (user) => {
  coinToss(user.guess, determineWinner);
}

const determineWinner = (didWin) => {
  if (didWin)
  {
    console.log("CORRECT!");
  }
  else
  {
    console.log("INCORRECT :(((");
  }
}

getUser(flipCoin);

