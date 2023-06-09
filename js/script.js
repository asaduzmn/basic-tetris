document.addEventListener("DOMContentLoaded", ()=>{
    const grid = document.querySelector('.grid');
    let squares = Array.from(document.querySelectorAll('.grid div'));
    const score = document.querySelector('#score');
    const scoreBtn = document.querySelector('#start-button');
    const width = 10;

    const lTetromino = [
    [1,width+1,width*2+1,2],
    [width,width+1,width+2,width*2+2],
    [1,width+1,width*2+1,width*2],
    [width,width*2,width*2+1,width*2+2]
  ];

  const zTetromino = [
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1],
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1]
  ];

  const tTetromino = [
    [1,width,width+1,width+2],
    [1,width+1,width+2,width*2+1],
    [width,width+1,width+2,width*2+1],
    [1,width,width+1,width*2+1]
  ];

  const oTetromino = [
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1]
  ];

  const iTetromino = [
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3],
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3]
  ];

  const theTetrominoes= [lTetromino,zTetromino,tTetromino,oTetromino,iTetromino];

  //selecting random tetromino for rotation
  let random = Math.floor(Math.random()*theTetrominoes.length);
  let currentRotation = 0;

  let currentPosition = 4;
  let current = theTetrominoes[random][currentRotation];

//draw the tetromino
  function draw(){
    current.forEach(index => {
      squares[currentPosition + index ].classList.add('tetramino');
    })
  }


  //undraw the tetromino
  function undraw(){
    current.forEach(index => {
      squares[currentPosition + index].classList.remove('tetramino');
    })
  }


  //move down tetromino for every second
  timerId = setInterval(movedown,1000);

  function movedown() {
    undraw();
    currentPosition += width;
    draw();
    freeze();
  }

  //freeze function
  function freeze(){
    if(current.some(index => squares[currentPosition + index + width].classList.contains('taken'))){
      current.forEach(index => squares[currentPosition + index].classList.add('taken'));
      random = Math.floor(Math.random()* theTetrominoes.length);
      current = theTetrominoes[random][currentRotation];
      currentPosition = 4;
      draw();
    }
  }
   
});