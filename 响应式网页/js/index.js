$(function(){
 var eventType=isPc() ? "click" : "tap";
 
var $headerLeft=$("#header-left-a");
var $maskAside=$("#mask-aside");
var $maskDiv=$("#mask-div");
var $iSelect=$(".select");
var $SelectedUl=$(".selected-ul");

$headerLeft.on(eventType,function(){
	// $maskDiv.show();
	
	$maskAside.stop().animate({
		width:270
	},100).css({
		display:"block"		
	});
	$maskDiv.css({
		display:"block"
	});
});

$maskDiv.on(eventType,function(){
	$maskDiv.hide();
	$maskAside.stop().animate({
		width:0
	},300,function(){
		$maskAside.css({
		display:"none",
				
	});
	});

});
console.log($iSelect[1]);
for(var i=0;i<$iSelect.length;i++){
	//var this.index=this;
	$iSelect[i].onclick=function(){
		var index=$(this).index();
		console.log($(this).children('.selected-ul'));
	$(this).children('.selected-ul').show();
	
	};
	
	
	



}



});