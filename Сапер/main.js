'use strict';

class gameArea{

  constructor(){
    this.bombs=0; //number of bombs
    this.areaSizeX=8;//size of gameSpace for x coordinate
    this.areaSizeY=8;//size of gameSpace for y coordinate
    this.Id='Sapper';
    this.matrix=new Array();
    this.mineNum=10;
  }
  getBombsNum(){//get for bomb number
    return this.bombs;
  }
  setBombsNum(number){//set for bomb number
    this.bombs=number;
  }
  getAreaSizeX(){//get number of Cells for width
    return  this.areaSizeX;
  }
  getAreaSizeY(){//get number of Cells for height
    return  this.areaSizeY;
  }
  setAreaSizeX(size){//set number of Cells for width
    this.areaSizeX=size;
  }
  setAreaSizeY(size){//set number of Cells for height
    this.areaSizeY=size;
  }
  setId(Id){
    this.Id=Id;
  }

  matrixCells(){
    for (var i=0;i<this.areaSizeY+2;i++){
      this.matrix[i]=new Array();
      for (var j=0;j<this.areaSizeX+2;j++){
        this.matrix[i][j]=new Cell;
      }
    }
  }

  creation_area(){
    var area=document.getElementById(this.Id);
    var tb=document.createElement('table');
    for(var i=1;i<this.areaSizeY+1;i++){//height of table
      var tr=document.createElement('tr');
      tb.appendChild(tr);
      this.IdYCell++;
      for(var j=1;j<this.areaSizeX+1;j++){//width of table
        this.matrix[i][j].IdY=this.IdYCell;
        this.matrix[i][j].IdX=this.IdXCell;
        this.IdXCell++;
        this.matrix[i][j].createCell(tr);
      }
    }
    area.appendChild(tb);
  }

  bombspawn(){
    var i,j;
    while (this.mineNum>0){
      i=Math.floor(Math.random()*7+1)
      j=Math.floor(Math.random()*7+1)
      if (this.matrix[i][j].status!=-1){
        this.matrix[i][j].status=-1;
        this.mineNum-=1;
      }
    }
  }

  bombnumber(){
    var i,j;
    for (i=1;i<this.areaSizeY+1;i++)
      for(j=1;j<this.areaSizeX+1;j++)
        if (this.matrix[i][j].status=-1){
          if (this.matrix[i-1][j-1].status!=-1)
            this.matrix[i-1][j-1].status+=1;
          if (this.matrix[i-1][j].status!=-1)
            this.matrix[i-1][j].status+=1;
          if (this.matrix[i-1][j+1].status!=-1)
            this.matrix[i-1][j+1].status+=1;
          if (this.matrix[i][j-1].status!=-1)
            this.matrix[i][j-1].status+=1;
          if (this.matrix[i][j+1].status!=-1)
            this.matrix[i][j+1].status+=1;
          if (this.matrix[i+1][j-1].status!=-1)
            this.matrix[i+1][j-1].status+=1;
          if (this.matrix[i+1][j].status!=-1)
            this.matrix[i+1][j].status+=1;
          if (this.matrix[i+1][j+1].status!=-1)
            this.matrix[i+1][j+1].status+=1;
        }
  }
}

class Cell extends gameArea{

  constructor(){
    super();
    this.IdY=0;
    this.IdX=0;
    this.color='#000';
    this.size='8px';
    this.status=0;
    this.cursor="pointer";
  }
  setCellStatus(status){
    this.status=status;
  }
  setCellSize(size){
    this.size=size;
  }
  getCellSize(){
    return this.size;
  }
  setCellColor(color){
    this.color=color;
  }
  getCellColor(){
    return this.color;
  }
  createCell(tr){
    var td=document.createElement('td');
    tr.appendChild(td);
    this.IdX++;
    var t=this;
    td.onclick=function(){
      switch(t.status){
        case -1:
          this.className='bomb';
          break;
        case 1:
          this.className='x1';
          break;
        case 2:
          this.className='x2';
          break;
        case 3:
          this.className='x3';
          break;
      }
    }
  }
}
