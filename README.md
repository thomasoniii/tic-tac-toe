This is part of OmniSci's internal tech time meeting where the engineering staff
works on teaching programming and programming concepts to the QA staff.

For it, we've been building out a simple tic-tac-toe program in React.

To install:

git clone https://github.com/thomasoniii/tic-tac-toe

cd tic-tac-toe

npm install

npm run start

This app will evolve over time, and was designed to pair with the meetings as opposed
to be a stand-alone tutorial. But you can see roughly how the app progressed by looking
at the commit history.

It's also designed to be an example of iterative development - we're going to build out
interim steps to show how a program can evolve and grow over time instead of just jumping
straight to a final product. That inevitably means that we're going to write some code
we won't use later - but that's okay! Interim steps can be valuable as part of the process.

Rough game plan is:

- initial boilerplate structure of an app. Get a board up on the page, give the user
  the ability to click on a square and cycle through X -> O -> blank.
- Add in redux + actual players. Keep track of whose turn it is and only let the player
  add that mark. Manually clear the board and keep score.
- Move the board state into redux so we can keep track of it more globally, and use that
  to build out an algoritm to determine the winner. Also clear the board when the game is done.
  And make sure that a user cannot clear a previously set mark - only the current one.
- Build some AIs to play against so it's not a two person local game. Start with a simple AI,
  progress to an unbeatable one, and then refine it so the user can actually still win sometimes.
  Let the user choose the AI.
- wire into firebase or some other online DB to allow two players to play across the internet.
- Improve the graphics beyond just a simple table with text.
- Add some tests to confirm at least basic functionality.
