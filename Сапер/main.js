class gameArea{

  constuctor(){
    this.bombs=0; //number of bombs
    this.areaSizeX=8;//size of gameSpace for x coordinate
    this.areaSizeY=8;//size of gameSpace for y coordinate
    this.IdCell=0;
    this.Id='Sapper';
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
  creation_area(){
    var area=document.getElementById(this.Id);
    var tb=document.createElement('table');
    var num=0//number of bombs that already placed on the map

    for(var i=0;i<=this.areaSizeY;i++){//height of table
      var tr=document.createElement('tr');
      tb.appendChild(tr);
      for(var j=0;j<=this.areaSizeX;j++){//width of table
        var cell=new Cell;//create new obj Cell
        num++;//an increase of bomb number that already placed
        cell.Id=this.IdCell;
        this.IdCell++;
        cell.onclick=function(){alert(cell.status)};
        //put the bomb inside Cell

      cell.createCell(tr);
      }
    }
    area.appendChild(tb);
  }
}
class Cell extends gameArea{

   __constuctor(){
    this.color='#fff';
    this.size='8px';
    this.status=0;
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

  }
}
