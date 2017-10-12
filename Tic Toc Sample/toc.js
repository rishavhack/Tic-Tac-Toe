angular.module("ticToc",[])
	.controller("firstCtrl",firstCtrl)


function firstCtrl() {
	var my = this;
	my.gameStart = gameStart;
	my.rowGame = rowGame; 
	my.tic= [
	{name:"",status:true},
	{name:"",status:true},
	{name:"",status:true},
			];
	my.firstClick = true; 
	function rowGame(i)
	{
		console.log(i);
	}
	function gameStart(i)
	{
		if(my.firstClick == true)
		{
			my.tic[i].name="X";
			my.firstClick = false;
		}
		else
		{
			my.tic[i].name="O";
			my.firstClick = true;
		}
	}

}