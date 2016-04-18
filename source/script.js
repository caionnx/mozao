$(function(){
var vid = document.getElementById("playsong"); 
$('body').on("click", function(){
vid.play();
})

rn = 1 + Math.floor(Math.random() * 2);
$('#'+ rn +'.toShow').fadeIn();

function shows( element ){
	rn = 1 + Math.floor(Math.random() * 3);
	if(rn == element.attr('id')){
		shows( element );
	}
	else{
		element.fadeOut();
		$('#'+ rn +'.toShow').fadeIn(400, function(){
			$( ".animateHeart" ).stop().show().animate({
				opacity: 1,
				width: 300,
				height: 300,
				marginLeft: "-150px",
				marginTop: "-150px"
			}, 300, function() {
				$( ".animateHeart" ).animate({
					opacity: 0,
					width: 150,
					height: 150,
					marginLeft: "-75px",
					marginTop: "-75px"
					}, 300, function(){
						$(this).hide();
					});
				});
			});
	}
}
$('.toShow').on("click", function(){
shows( $(this) );
 })


})