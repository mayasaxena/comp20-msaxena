/* README.txt
 * Maya Saxena
 * COMP20 Assignment 2
 */

All aspects of the project have been correctly implemented.

Approximately 3 hours were spent completing the assignment.

Folder duckhunt contains:
- game.js, which contains the code to draw the images for Assignment 2
- index.html, which contains the code for the canvas
- style.css, which contains the styling for the game
- the assets folder, containing:
        - duckhunt.png, the sprite sheet for the game

        game.js currently only contains the code to draw the required images for
assignment 2. It uses the provided sprite sheet and the JavaScript drawImage()
function to slice the sprite sheet as necessary to draw the images to the
canvas, instead of loading many individual images. 
        One issue encountered while drawing the images was that some images did 
not appear or were partially obscured because of the order they were drawn in.
This was fixed by calling drawImage() so that the background came first and the
other sprites were on top. 
        Another issue encountered was that some of the sprites had to be scaled
from the sprite sheet to the canvas to be appropriately sized for the game, and
those images were blurry when they were scaled. The issue was resolved by
disabling smoothing.

Acknowledgements:
- MDN for help with drawImage:
https://developer.mozilla.org/samples/canvas-tutorial/3_1_canvas_drawimage.html
- StackOverflow for help with blurry scaling on images:
http://stackoverflow.com/questions/7615009/disable-interpolation-when-scaling-a-canvas
- Ming for the code involving what to do when the canvas isn't supported