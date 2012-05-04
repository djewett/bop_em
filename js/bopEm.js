/* Game object will control game flow and hold all the game objects */
var bopEm = {};

bopEm.test = function(){
	console.log("The class is setup correctly");
}

bopEm.init = function (){	
	this.moles = [
		[new Mole(jQuery('#mole11'),1,1),new Mole(jQuery('#mole12'),1,1),new Mole(jQuery('#mole13'),1,1),new Mole(jQuery('#mole14'),1,1)],
		[new Mole(jQuery('#mole21'),2,1),new Mole(jQuery('#mole22'),2,1),new Mole(jQuery('#mole23'),2,1),new Mole(jQuery('#mole24'),2,1)],
		[new Mole(jQuery('#mole31'),3,1),new Mole(jQuery('#mole32'),3,1),new Mole(jQuery('#mole33'),3,1),new Mole(jQuery('#mole34'),3,1)]		
	];
	jQuery('.mole').bind('click', function(){
		$(this).addClass('moleClicked');
	})
	var counter = 0;
	var self = this;
	var a = setInterval(function(){self.animate(counter)},500)
	//setTimeout(function(){window.clearInterval(a)},10 *1000)
}
bopEm.animate = function(counter){
	var row = Math.floor(Math.random()*3);
	var col = Math.floor(Math.random()*4);
	console.log(row, " ", col);
	this.moles[row][col].animate();
}