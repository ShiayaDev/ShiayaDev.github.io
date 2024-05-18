(function() {
    console.log("Made by Javelin Web Designs")

    var index = 1;

    var leftButton = document.getElementById("left");
    var rightButton = document.getElementById("right");

    function left() {
        if (index === 1) {
            index = 5;
        } else {
            index--;
        };

        var path = "assets/videos/" + index + ".mp4";
        var video = document.getElementById("video")
        
        video.setAttribute("src", path)

        console.log(index)
    };

    function right() {
        if (index === 5) {
            index = 1;
        } else {
            index++;
        };

        var path = "assets/videos/" + index + ".mp4";
        var video = document.getElementById("video")
        
        video.setAttribute("src", path)

        console.log(index)
    };

    leftButton.addEventListener('click', left);
    rightButton.addEventListener('click', right);
})()