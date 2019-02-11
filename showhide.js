let clicks = 0;
let targets = 0;
let hits = 0;
let numberArray =[];

// Point of Entry called from HTML when page is loaded
function letsRock() {
    let theGo = document.getElementById("goGetIt");
    theGo.onclick = function () {
        // Get random number of targets and do setup
        const targetKount = document.getElementById("numberOfTargets").value;
        // Don't allow more than 50 targets as that's all the TDs we have
        if (targetKount > 50)
        {
            alert("Maximum number of targets is 50!");
            return;
        }
        const targetTime = document.getElementById("displayTime").value;
        // Now start the game!
        setUpTargetsAndPlay(parseInt(targetKount), parseInt(targetTime+"000"));
        //converted it so that you can input how many seconds rather then use ms
    };
}

// Utility function to get a random table cell number
function getRandomInt(min, max) {
        var numRemoval = Math.floor(Math.random() * (max - min + 1)) + min;
    for(let x = 0; x <= numberArray.length+1;x++)
    {
        if(numberArray[x] === numRemoval)
        {
            numberArray.splice(x,1);        //numbers are hard
            console.log(numRemoval);        //i reworked the random number so that it CANNOT put two images in the same cell.
            return numRemoval;              //More than likely not fullProof
        }
        else if(numberArray.length === 1)
        {
            return numberArray[0];
        }
        else if(x === numberArray.length)
        {
            numRemoval = Math.floor(Math.random() * (max - min + 1)) + min;
            x=0;
        }
    }
}


// This function gets called if player hits a target
function clickedTarget(e) {
    console.log(e.target);
    // Let's get the hit item and store in a variable
    let hit = e.target.querySelector("img");
    /*  Do some sanity checks making sure there is an image and it has the 'display' style
        before we try to change the display property.
    */
    if (hit != null && hit.style.display != null) {
        // Make hit target image visible again
        e.target.querySelector("img").style.display = 'block';
    }else if(e.target.style.display === "block")
    {
        hits-=1;
    }
    console.log("Got a Hit!");
    // Update their hit score
    hits += 1;
}

function testThis(el) {
    console.log(el);
}

// The main function that sets up targets and starts a game
function setUpTargetsAndPlay(numberOfTargets, displayTimeMs) {

    for(let x = 1; x<=50;x++)
    {
        numberArray.push(x);
    }
    clicks = 0;
    targets = numberOfTargets;
    $("#clickCounter").text("ClickCounter: "+ targets);  //added to keep track of clicks left
    hits = 0;
    // Clear any target images from prior game (FIXME: Sometimes doesn't remove them all :-(
    $(".targetImg").remove();
    // Setup click detection for the entire table
    console.log("setting up " + targets + " targets");
    // Get the number of targets specified and randomly picks cells to display them in for the target table
    for (let x = 0; x < targets; x++) {
        let targetNum = getRandomInt(1, 50); // Pick a random table cell
        console.log("Table cell selected for target = " + targetNum);
        let tdID = "td" + targetNum;
        let imgID = "img" + targetNum;
        console.log(imgID);
        // Set an IMG for each randomly selected cell along with 'click' event handler
        $('#' + tdID).append("<img id = " + imgID + " class= 'targetImg' src='bird.png'>");
        // $('#' + imgID).delay(2000).show(0); // Wait 2 seconds then show the targets  //removed since it is not working
        $('#' + imgID).delay(displayTimeMs).hide(0); // Setup a callback that will hide the images after the specified time
        //this allows images to be clicked before they hide,
        var endthis = setTimeout(function () {
            $('#' + tdID).on("click", clickedTarget);
        },displayTimeMs);
         clearInterval(endthis);
    }

    $("table").on("click", function () {
        clicks += 1;
        $("#clickCounter").text("ClickCounter: " + (targets - clicks)); //added to keep track of clicks lefts
        console.log("clicked = " + clicks + " Max = " + targets);
        if (clicks === targets) {  // Player out of clicks!
            // FIXME: Sometime at end of game hits are more than 5 for some reason which should be impossible
            alert("No more clicks! You got " + hits + " out of " + targets);
            // Turn off click detection
            $("td").off("click");
            $("table").off("click");
            $(".targetImg").show(); // Show where all the targets were hidden
            numberArray = [];
        }
    });
}
