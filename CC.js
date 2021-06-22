// details
const canvasID = 'canvas'; // canvas id
/*///// info /////

Version: 1.8,


///// cc.js /////*/
var c = document.getElementById(canvasID);
var ctx = c.getContext("2d");
/// setup
function canvasBG(newBG) {
    document.getElementById(canvasID).style.background = newBG;
}

function canvasBorder(canvasBorder) {
    document.getElementById(canvasID).style.border = canvasBorder + 'px solid black';
}
function fullScreen() {
    document.body.style.margin = 0;

}
/// basic functions 
function reloadWindow() {
    window.location.reload();
}
function refresh() {
    ctx.clearRect(0,0, c.width, c.height);
}
/// controls

function Qcontroller() {
    document.addEventListener("keypress", function onEvent(event) {
    if (event.key === 'q') {
        KeyQ();
    } 
    });
} function Wcontroller() {
    document.addEventListener("keypress", function onEvent(event) {
    if (event.key === 'w') {
        KeyW();
    } 
    });
} function Econtroller() {
    document.addEventListener("keypress", function onEvent(event) {
    if (event.key === 'e') {
        KeyE();
    } 
    });
} function Rcontroller() {
    document.addEventListener("keypress", function onEvent(event) {
    if (event.key === 'r') {
        KeyW();
    } 
    });
} function Tcontroller() {
    document.addEventListener("keypress", function onEvent(event) {
    if (event.key === 't') {
        KeyT();
    } 
    });
} function Ycontroller() {
    document.addEventListener("keypress", function onEvent(event) {
    if (event.key === 'y') {
        KeyY();
    } 
    });
} function Ucontroller() {
    document.addEventListener("keypress", function onEvent(event) {
    if (event.key === 'u') {
        KeyU();
    } 
    });
} function Icontroller() {
    document.addEventListener("keypress", function onEvent(event) {
    if (event.key === 'i') {
        KeyI();
    } 
    });
} function Ocontroller() {
    document.addEventListener("keypress", function onEvent(event) {
    if (event.key === 'o') {
        KeyO();
    } 
    });
} function Pcontroller() {
    document.addEventListener("keypress", function onEvent(event) {
    if (event.key === 'p') {
        KeyP();
    } 
    });
}



function Acontroller() {
    document.addEventListener("keypress", function onEvent(event) {
    if (event.key === 'a') {
        KeyA();
    } 
    });
} function Scontroller() {
    document.addEventListener("keypress", function onEvent(event) {
    if (event.key === 's') {
        KeyS();
    } 
    });
} function Dcontroller() {
    document.addEventListener("keypress", function onEvent(event) {
    if (event.key === 'd') {
        KeyD();
    } 
    });
} function Fcontroller() {
    document.addEventListener("keypress", function onEvent(event) {
    if (event.key === 'f') {
        KeyF();
    } 
    });
} function Gcontroller() {
    document.addEventListener("keypress", function onEvent(event) {
    if (event.key === 'g') {
        KeyG();
    } 
    });
} function Hcontroller() {
    document.addEventListener("keypress", function onEvent(event) {
    if (event.key === 'h') {
        KeyH();
    } 
    });
} function Jcontroller() {
    document.addEventListener("keypress", function onEvent(event) {
    if (event.key === 'j') {
        KeyJ();
    } 
    });
} function Kcontroller() {
    document.addEventListener("keypress", function onEvent(event) {
    if (event.key === 'k') {
        KeyK();
    } 
    });
} function Lcontroller() {
    document.addEventListener("keypress", function onEvent(event) {
    if (event.key === 'l') {
        KeyL();
    } 
    });
}



function Zcontroller() {
    document.addEventListener("keypress", function onEvent(event) {
    if (event.key === 'z') {
        KeyZ();
    } 
    });
} function Xcontroller() {
    document.addEventListener("keypress", function onEvent(event) {
    if (event.key === 'x') {
        KeyX();
    } 
    });
} function Ccontroller() {
    document.addEventListener("keypress", function onEvent(event) {
    if (event.key === 'c') {
        KeyC();
    } 
    });
} function Vcontroller() {
    document.addEventListener("keypress", function onEvent(event) {
    if (event.key === 'v') {
        KeyV();
    } 
    });
} function Bcontroller() {
    document.addEventListener("keypress", function onEvent(event) {
    if (event.key === 'b') {
        KeyB();
    } 
    });
} function Ncontroller() {
    document.addEventListener("keypress", function onEvent(event) {
    if (event.key === 'n') {
        KeyN();
    } 
    });
} function Mcontroller() {
    document.addEventListener("keypress", function onEvent(event) {
    if (event.key === 'm') {
        KeyM();
    } 
    });
}

function N1controller() {
    document.addEventListener("keypress", function onEvent(event) {
    if (event.key === '1') {
        Key1();
    } 
    });
}
function N2controller() {
    document.addEventListener("keypress", function onEvent(event) {
    if (event.key === '2') {
        Key2();
    } 
    });
}
function N3controller() {
    document.addEventListener("keypress", function onEvent(event) {
    if (event.key === '3') {
        Key3();
    } 
    });
}
function N4controller() {
    document.addEventListener("keypress", function onEvent(event) {
    if (event.key === '4') {
        Key4();
    } 
    });
}
function N5controller() {
    document.addEventListener("keypress", function onEvent(event) {
    if (event.key === '5') {
        Key5();
    } 
    });
}
function N6controller() {
    document.addEventListener("keypress", function onEvent(event) {
    if (event.key === '6') {
        Key6();
    } 
    });
}
function N7controller() {
    document.addEventListener("keypress", function onEvent(event) {
    if (event.key === '7') {
        Key7();
    } 
    });
}
function N8controller() {
    document.addEventListener("keypress", function onEvent(event) {
    if (event.key === '8') {
        Key8();
    } 
    });
}
function N9controller() {
    document.addEventListener("keypress", function onEvent(event) {
    if (event.key === '9') {
        Key9();
    } 
    });
}


function SPACEcontroller() {
    document.addEventListener("keypress", function onEvent(event) {
    if (event.key === ' ') {
        KeySPACE();
    } 
    });
}



function SINGLECLICKcontroller() {
    document.body.addEventListener("click", singleclick);
    function singleclick() {
        SingleClick() 
    }
} function DOUBLECLICKcontroller() {
    document.body.addEventListener("dblclick", dblclick);
    function dblclick() {
        DoubleClick() 
    } 
}


/// shapes 

let circleSize = 20;
let circleColor = 'black';
function circle(circleX, circleY, circleSize, circleColor) {
    ctx.beginPath();
    ctx.fillStyle= circleColor;
    ctx.arc(circleX, circleY, circleSize , 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
}
let lineSize = 5;
let lineColor = 'black;'
function line(startLineX, startLineY, endLineX, endLineY, lineSize, lineColor) {
    ctx.beginPath();
    ctx.moveTo(startLineX, startLineY);

    ctx.lineTo(endLineX, endLineY);
      
    ctx.lineWidth = lineSize;
    ctx.strokeStyle = lineColor;
    ctx.stroke(); 
    ctx.closePath();
}
function triangle(startTriX, startTriY, twoTriX, twoTriY, endTriX, endTriY, TriSize, TriColor) {
    ctx.beginPath();
    ctx.moveTo(startTriX, startTriY);
    
    ctx.lineTo(twoTriX, twoTriY);
    ctx.lineTo(endTriX, endTriY);
    ctx.lineTo(startTriX, startTriY);

    ctx.lineWidth = TriSize;
    ctx.strokeStyle = TriColor;
    ctx.stroke(); 
    ctx.closePath();
}
function polygon(startPolyX, startPolyY, endPolyX, endPolyY, PolySize, PolyColor) {
    ctx.beginPath();

    ctx.moveTo(startPolyX, startPolyY);
    ctx.lineTo(startPolyX * 2, startPolyY);
    ctx.lineTo(endPolyX, endPolyY);
    ctx.lineTo(startPolyX, startPolyY * 2);
    ctx.lineTo(startPolyX, startPolyY);

    ctx.lineWidth = PolySize;
    ctx.strokeStyle = PolyColor;
    ctx.stroke(); 
    ctx.closePath();
}
function rect(rectStartX, rectStartY, rectWidth, rectHeight, rectColor) {
    ctx.beginPath();
    ctx.fillStyle = rectColor;
    ctx.rect(rectStartX, rectStartY, rectWidth, rectHeight)
    ctx.closePath();
    ctx.fill(); 
}

/// drawing
var mouseX = 0;
var mouseY = 0;
function MouseCoords(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;

}

function text(textX, textY, textSize, textText, textFont, textColor) {
    ctx.fillStyle = textColor;
    ctx.font = textSize + "px " + textFont;
    ctx.fillText(textText, textX, textY);
}

// image processing

let img = new Image();
function createImage(newImageLink) {
    img = new Image();
    img.src = newImageLink;
}

function image(imageName, imageX, imageY, imageWidth, imageHeight) {
    ctx.drawImage(imageName, imageX, imageY, imageWidth, imageHeight);
}




//////////////////////

///// Your code /////

/////////////////////