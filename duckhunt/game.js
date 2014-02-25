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

                /* Tree */
                ctx.drawImage(img, 0, 275, 75, 130, 155, 250, 150, 260);

                /* Bushes and dirt */
                ctx.drawImage(img, 0, 500, 900, 500, 0, 200, 900, 500);

                /* Dog */
                ctx.drawImage(img, 0, 0, 60, 45, 300, 475, 120, 90);

                /* Diagonal blue bird */
                ctx.drawImage(img, 0, 150, 40, 40, 50, 200, 80, 80);

                /* Wing mid blue bird */
                ctx.drawImage(img, 40, 110, 40, 40, 650, 250, 80, 80);

                /* Wing down black bird */
                ctx.drawImage(img, 125, 110, 40, 40, 600, 10, 80, 80);

                /* Wing up red bird */
                ctx.drawImage(img, 335, 110, 40, 40, 400, 350, 80, 80);

                /* Diagonal red bird */
                ctx.drawImage(img, 335, 150, 40, 40, 200, 40, 80, 80);

        }

}
