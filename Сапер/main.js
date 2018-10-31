'use strict';

class gameArea{

  constructor(){
    this.bombs=0; //number of bombs
    this.areaSizeX=8;//size of gameSpace for x coordinate
    this.areaSizeY=8;//size of gameSpace for y coordinate
    this.IdXCell=0;
    this.IdYCell=0;
    this.Id='Sapper';
    this.matrix=new Array;
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
  bombPlant(){
    //
  }
  matrixCells(){
    for (i=0;i<this.areaSizeY;i++){
      this.matrix=new Array
    }
  }
  creation_area(){
    var area=document.getElementById(this.Id);
    var tb=document.createElement('table');
    var num=1//number of bombs that already placed on the map

    for(var i=0;i<this.areaSizeY;i++){//height of table
      var tr=document.createElement('tr');
      tb.appendChild(tr);
      this.IdYCell++;
      for(var j=0;j<this.areaSizeX;j++){//width of table
        var cell=new Cell;//create new obj Cell
        num++;//an increase of bomb number that already placed
        cell.IdY=this.IdYCell;
        cell.IdX=this.IdXCell;
        this.IdXCell++;
        //Creating cell with or without bomb WHATEVER
        cell.createCell(tr);
      }
    }
    //Put bomb inside the cell
    cell.bombspawn(tb);
    area.appendChild(tb);
  }
  //
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
    td.style.backgroundColor=this.color;
    td.style.cursor=this.cursor;
    tr.appendChild(td);
    this.IdX++;

    var t=this;
    td.onclick=function(){
      alert(t.status);
      //alert(t.num);
    }
  }
  explosion(){
  }
  //here we just spawn bomb inside bombObj
  bombspawn(){
    var x,y;
    var tb1=document.getElementsByTagName('table');
    var m=1;
    //alert(tb);
    while (m>0){
      x=Math.floor(Math.random()*8);
      y=Math.floor(Math.random()*8);
      if (tb1.children[0].children[0].status=0){
        tb1.children[0].children[0].status=1;
        m-=m;
      }
    }
  }
  // here we will put the bomb inside the html cell element
  bombPlace(){
    var x,y;
    var tb1=document.getElementsByTagName('table');
    var m=1;
    while(m!=0){
      x=Math.floor(Math.random()*6);
      y=Math.floor(Math.random()*6);
      //if (this.IdX==x && this.IdY==y && this.status!=1){
        this.status=1;
        alert(x);
        alert(this.status);
        m=0;
      //}
    }
  }
  bombcheck(){

  }
}
