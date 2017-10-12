angular.module("app",[])
	.controller("firstCtrl",firstCtrl)

function firstCtrl()
{

	var my = this;
	my.currentPlayer = "X";
  my.winnerPlayer={};
	my.currentStatus = false;
	my.box = [
    [{ value: "-" }, { value: "-" }, { value: "-" }],
    [{ value: "-" }, { value: "-" }, { value: "-" }],
    [{ value: "-" }, { value: "-" }, { value: "-" }]
  ];
  my.isTaken =isTaken;
  my.clickBox=clickBox;



  function clickBox(cell)
  {

    if(my.currentStatus == false)
  	{
  	cell.value = my.currentPlayer;
  	my.currentStatus = true;
  	my.currentPlayer = "O";
  	}
  	else
  	{
  	cell.value= "O";
  	my.currentStatus = false;
  	my.currentPlayer = "X";
 	}

  if(my.box[0][0].value=="X" && my.box[0][1].value=="X" && my.box[0][2].value=="X")
  {
    my.winnerPlayer.winner = "X";
    my.winnerPlayer.disable = "none";
    console.log("X");
  }
  else if(my.box[0][0].value=="O" && my.box[0][1].value=="O" && my.box[0][2].value=="O")
  {
     my.winnerPlayer.winner  = "O";
    my.winnerPlayer.disable = "none";
  }
  else if(my.box[1][0].value=="X" && my.box[1][1].value=="X" && my.box[1][2].value=="X")
  {
    my.winnerPlayer.winner  = "X";
    my.winnerPlayer.disable = "none";
  }
  else if(my.box[1][0].value=="O" && my.box[1][1].value=="O" && my.box[1][2].value=="O")
  {
    my.winnerPlayer.winner  = "O";
     my.winnerPlayer.disable = "none";
  }
  else if(my.box[2][0].value=="X" && my.box[2][1].value=="X" && my.box[2][2].value=="X")
  {
    my.winnerPlayer.winner  = "X";
    my.winnerPlayer.disable = "none";
  }
  else if(my.box[2][0].value=="O" && my.box[2][1].value=="O" && my.box[2][2].value=="O")
  {
    my.winnerPlayer.winner  = "O";
    my.winnerPlayer.disable = "none";
  }
  else if(my.box[0][0].value=="X" && my.box[1][0].value=="X" && my.box[2][0].value=="X")
  {
    my.winnerPlayer.winner  = "X";
    my.winnerPlayer.disable = "none";
  }
  else if(my.box[0][0].value=="O" && my.box[1][0].value=="O" && my.box[2][0].value=="O")
  {
    my.winnerPlayer.winner  = "O";
    my.winnerPlayer.disable = "none";
  }
  else if(my.box[0][1].value=="X" && my.box[1][1].value=="X" && my.box[2][1].value=="X")
  {
    my.winnerPlayer.winner  = "X";
    my.winnerPlayer.disable = "none";
  }
  else if(my.box[0][1].value=="O" && my.box[1][1].value=="O" && my.box[2][1].value=="O")
  {
    my.winnerPlayer.winner  = "O";
    my.winnerPlayer.disable = "none";
  }
  else if(my.box[0][2].value=="X" && my.box[1][2].value=="X" && my.box[2][2].value=="X")
  {
    my.winnerPlayer.winner = "X";
    my.winnerPlayer.disable = "none";
  }
  else if(my.box[0][2].value=="O" && my.box[1][2].value=="O" && my.box[2][2].value=="O")
  {
    my.winnerPlayer.winner  = "O";
    my.winnerPlayer.disable = "none";
  }
  else if(my.box[0][0].value=="X" && my.box[1][1].value=="X" && my.box[2][2].value=="X")
  {
    my.winnerPlayer.winner  = "X";
    my.winnerPlayer.disable = "none";
  }
  else if(my.box[0][0].value=="O" && my.box[1][1].value=="O" && my.box[2][2].value=="O")
  {
    my.winnerPlayer.winner  = "O";
    my.winnerPlayer.disable = "none";
  }
  else if(my.box[0][2].value=="X" && my.box[1][1].value=="X" && my.box[2][0].value=="X")
  {
    my.winnerPlayer.winner  = "X";
    my.winnerPlayer.disable = "none";
  }
  else if(my.box[0][2].value=="O" && my.box[1][1].value=="O" && my.box[2][0].value=="O")
  {
    my.winnerPlayer.winner  = "O";
    my.winnerPlayer.disable = "none";
  }



  }
  function isTaken(cell) 
  {
  	return cell.value !== "-";
  }





}