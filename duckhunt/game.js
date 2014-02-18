function draw() {

        canvas = document.getElementById("game");
        if(canvas.getContext) {
                ctx = canvas.getContext("2d");
        } 
        else {
                alert("Canvas not supported on browser.");
        }

        

        var img = new Image();

        img.src = "assets/duckhunt.png";


        img.onload = function() {
                
                /* To get rid of blurring */
                ctx.mozImageSmoothingEnabled = false;
                ctx.webkitImageSmoothingEnabled = false;

                ctx.drawImage(img, 0, 275, 75, 130, 155, 250, 150, 260);
                ctx.drawImage(img, 0, 500, 900, 500, 0, 200, 900, 500);
                ctx.drawImage(img, 0, 0, 60, 45, 300, 475, 120, 90);
        }

}
