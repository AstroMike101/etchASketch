const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cell = document.querySelectorAll(".cell");
let reset = document.querySelector('.reset');
let newGrid; 
let black= document.querySelector('.black');
let gray = document.querySelector('.gray');
let rainbowColors= document.querySelector('.rainbowColors');
let eraser = document.querySelector('.eraser');



function blackColor(e) {
    
    e.target.style.backgroundColor = `rgb(0, 0, 0)`;

  }


function greyScale(e) {
    
    e.target.style.backgroundColor = `rgb(128, 128, 128)`;


  }

  function erasers(e) {
    
    e.target.style.backgroundColor = `rgb(255, 255, 255)`;


  }

function rainbowColor(e) {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  }

 

//Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {

    //Creates rows
    for (let r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        
        


    
        container.appendChild(row).className = "gridRow";
        
    };


};


//Creates columns
function makeColumns(cellNum) {
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
            
        };
        

    };
};

let n = 0; 




//Creates a default grid sized 16x16 
function defaultGrid() {
    makeRows(12);
    makeColumns(12);
    n++;
    
    
}



defaultGrid();




//add 'active' class if button clicked

let buttons = document.getElementsByTagName('button');

rainbowColors.addEventListener('click', () => { 
    for (let i=0; i<buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    rainbowColors.classList.add('active');
    checkActive();

   
 

}
)
   

eraser.addEventListener('click',() => { 
    for (let i=0; i<buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    eraser.classList.add('active');
    checkActive();
}
)


black.addEventListener('click',() => { 
    for (let i=0; i<buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    black.classList.add('active');
    checkActive();
}
)

gray.addEventListener('click',() => { 
    for (let i=0; i<buttons.length; i++) {
        buttons[i].classList.remove('active');

    }
    gray.classList.add('active');
    checkActive();
}
)

function checkActive() { 
    if (rainbowColors.classList.contains('active')) { 
        for (let i=0; i<rows.length; i++){
            rows[i].removeEventListener("mouseover", erasers);
            rows[i].removeEventListener("mouseover", blackColor);
        }
        for (let i=0; i<rows.length; i++){
            rows[i].addEventListener("mouseover", rainbowColor);
        }
    } 


    else if (eraser.classList.contains('active')) {
        for (let i=0; i<rows.length; i++){
            rows[i].removeEventListener("mouseover", rainbowColor);
            rows[i].removeEventListener("mouseover", blackColor);
        }
        for (let i=0; i<rows.length; i++){
            rows[i].addEventListener("mouseover", erasers);
        }

    }

    else if (black.classList.contains('active')){
        for (let i=0; i<rows.length; i++){
            rows[i].removeEventListener("mouseover", rainbowColor);
            rows[i].removeEventListener("mouseover", erasers);
        }
        for (let i=0; i<rows.length; i++){
            rows[i].addEventListener("mouseover", blackColor);
        }
    }

    else {
        for (let i=0; i<rows.length; i++){
            rows[i].removeEventListener("mouseover", rainbowColor);
            rows[i].removeEventListener("mouseover", erasers);
            rows[i].removeEventListener("mouseover", blackColor);
        }
        for (let i=0; i<rows.length; i++){
            rows[i].addEventListener("mouseover", greyScale);
        }

    }

}


function removeDivs () {
    document.querySelectorAll('.cell').forEach(e => e.remove()); 
    document.querySelectorAll('.gridRow').forEach(e => e.remove()); 

    
}




function resetAll() {
    removeDivs();
    defaultGrid();
    newGrid = prompt('What size do you want your new grid to be? Maximum size is 100.');
    removeDivs();
    
    if (newGrid <=100) {
        makeRows(newGrid);
        makeColumns(newGrid);
    }
    else { 
        alert('You inserted a size over 100!');
    }
    
}



reset.addEventListener('click', resetAll);








