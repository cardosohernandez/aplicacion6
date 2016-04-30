 //JavaScript
 
 $(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		
		$('#beep').tap(function(){
			navigator.notification.bee (3);
			});//tap beep
		
		$('#vibrar').tap(function (){
			navigator .notification.vibrate (1000);
			});//tap vibrar
	
	},false);//deviceready
	 });//ready
					
		