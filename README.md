### POINTS: 1.5
### KEY: I gave you the benefit of the doubt because I know u worked your a$$ off and even fixed some issues, but your final version doesn't work.
### No matter how well you hit targets, you don't score.

# JavaScript Show/Hide Game

Take this simple show/hide game and make it your own.

The starter project provides a simple example that displays a specified number of targets for the specified time (in ms).

The player tries to remember where the targets were and click them to get points.

There are many ways that this game can be improved. Not only can you style differently, but the starter version is missing several features you would expect in a typical game like this. It's up to you to implement them!

### YOU MUST IMPLEMENT AT LEAST 1 NEW AND COMMENTED FEATURE TO GET FULL POINTS

Once complete, edit this README and identify the new feature you implemented AT THE BOTTOM of this README.

Some Ideas:

* Use a completely different theme with splash screen, different background(s) and image(s)
* Add multiple levels with different backgrounds and/or targets
* Start with 1 target and increment target count after each round and/or decrease the time the targets are displayed as rounds/levels are completed
* Track the score for the player (assign any value to each correct answer you choose)
* Add sound and other effects


#### The starter project includes jQuery and BootStrap, but you can enhance the game using any technology that you wish

### I IMPLEMENTED THE FOLLOWING NEW FEATURE(S):

added else statement to prevent winning by clicking the same image.
Removed show delay since not working, could turn into setInterval.
added a ClickCounter to the bottom for keeping track of tries.
reworked timer so you input seconds rather then ms.
reworked random numbers so you cannot get an image in the same cell.
changed image size so it fits the cell making it easier to figure out which one to click.
fixed it so you cannot click an image before it hides




