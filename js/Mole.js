function Mole(ele,row,speed){
	this.SPEED_CLASSES = ['slowR1','slowR2','slowR3']
	this.moleRow = row;
	this.aniClass = this.SPEED_CLASSES[(speed * row)-1];
	this.element = ele;
	this.isAnimating = false;
	this.timesClicked = 0;
}

Mole.prototype.animate = function(){
	if(!this.isAnimating){
		console.log("Animating", this);
		
		this.element.addClass(this.aniClass);
		this.isAnimating = true;
		var self = this;
		setTimeout(function(){self.isAnimating = false;self.element.removeClass(self.aniClass);self.removeClass('moleClicked')}, 3* 1000);
	}
}