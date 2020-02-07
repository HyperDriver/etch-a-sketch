const container = document.querySelector('.container');
let rows = [];
let itens = [];
let squarePerSide = 16;




function createGrid(squarePerSide)
{
    for(let i = 0; i<squarePerSide; i++)
    {
        rows[i] = document.createElement('div');
        rows[i].classList.add('row');
        container.appendChild(rows[i]);
        for(let j =0; j<squarePerSide; j++)
        {
            itens[j] = document.createElement('div');
            itens[j].classList.add('item');
            
            rows[i].appendChild(itens[j]);
            rows[i].addEventListener('mouseover', changeColor);
        }
    }
}

function resetGrid()
{
    for(let i = 0; i < squarePerSide; i++)
    {
        while(rows[i].firsChild)
        {
            rows[i].removeChild(rows[i].firstChild);
        }
    }

    while(container.firstChild)
    {
        container.removeChild(container.firstChild);
    }

   rows = [];
   itens = [];
   
    
}

function resetButton()
{   
    let local_square = 0; 
    while(true)
   {
        local_square = prompt("How many squares per side in the grid? ");
        console.log(local_square);
        if(!isNaN(local_square) && local_square != null)
        {
            local_square = parseInt(local_square);
            break;
        }
        
     
   } 
   
   resetGrid();
   createGrid(local_square);
   squarePerSide = local_square;
}

function changeColor(e)
{   
    /*let round = Math.round;
    let random = Math.random;
    let max_value = 255;*/
    e.target.style.backgroundColor = 'yellow';
   /* if(e.target.style.backgroundColor == '')
    {
        e.target.style.backgroundColor = 'rgba(' + round(random()*max_value)+
        ',' + round(random()*max_value)+
        ','+ round(random()*max_value)+
        ','+random().toFixed(1)+')';
    }
    */
   
}

createGrid(squarePerSide);

btn_reset = document.querySelector('.btn_reset');
btn_reset.addEventListener('click', resetButton);