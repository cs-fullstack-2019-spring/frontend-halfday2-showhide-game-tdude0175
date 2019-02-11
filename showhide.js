let clicks = 0;
let targets = 0;
let hits = 0;

// Point of Entry called from HTML when page is loaded
function letsRock() {
    let theGo = document.getElementById("goGetIt");
    theGo.onclick = function () {
        // Get random number of targets and do setup
        const targetKount = document.getElementById("numberOfTargets").value;
        const targetTime = document.getElementById("displayTime").value;
        // No start the game!
        setUpTargetsAndPlay(parseInt(targetKount), parseInt(targetTime));
    };
}
// Utility function to get a random table cell number
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// This function gets called if player hits a target
function clickedTarget(e) {
    console.log(e.target);
    // Let's get the hit item and store in a variable
    let hit = e.target.querySelector("img");

    // FIXME: Targets clicked before they disappear should stay visible. Presently they do not.
    /*  Do some sanity checks making sure there is an image and it has the 'display' style
        before we try to change the display property.
    */
    if (hit != null && hit.style.display != null) {
        e.target.querySelector("img").style.display = 'block'; // Make hit target image visible again
    }
    console.log("Got a Hit!");
    // Update their hit score
    hits += 1;
}
// The main function that sets up targets and starts a game
function setUpTargetsAndPlay(numberOfTargets, displayTimeMs) {
    clicks = 0;
    targets = numberOfTargets;
    hits = 0;

    // Setup click detection for the entire table
    $("table").on("click", function () {

        clicks += 1;
        console.log("clicked = " + clicks + " Max = " + targets);
        if (clicks === targets) {
            // FIXME: Sometime at end of game hits are more than 5 for some reason which should be impossible
            alert("No more clicks! You got " + hits + " out of " + targets);
            // Turn off click detection
            $("td").off("click");
            $("table").off("click");
            $(".targetImg").remove();
        }
    });

    console.log("Selecting " + targets + " targets");
    // Get the number of targets specified and randomly picks cells to display them in for the target table
    for (let x = 0; x < targets; x++) {
        let targetNum = getRandomInt(1, 50); // Pick a random table cell
        console.log("Table cell selected for target = " + targetNum);
        let tdID = "td" + targetNum;
        let imgID = "img" + targetNum;

        // Set an IMG for each randomly selected cell along with 'click' event handler
        $('#' + tdID).on("click", clickedTarget).append("<img id = " + imgID + " class= 'targetImg' src='bird.png'>");
        $('#' + imgID).delay(2000).show(0); // Wait 2 seconds then show the targets
        $('#' + imgID).delay(displayTimeMs).hide(0); // Setup a callback that will hide the images after the specified time
    }

}
