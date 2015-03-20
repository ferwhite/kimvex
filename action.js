$(".cuerpo").hide();
$("#inicioCuerpo").fadeToggle( "slow" );
function mostrarPerfil(g){
    var nodo = $(this).attr("href");  
 
    if($(nodo).is(":visible")){
	    $(nodo).hide();
        $("#inicioCuerpo").fadeToggle( "slow" );
        return false;
    }else{
       $(".cuerpo").hide();                             
       $(nodo).slideToggle();
       return false;
    }
}
$(".notifiDatos").hide();   
function mostrarNoti(){
	var muestra = $(this).attr('xx');
	console.log(muestra);
	if($(muestra).is(":visible")){
	    $(muestra).hide();
        return false;
    }else{
       $(".notifiDatos").hide();                             
       $(muestra).slideToggle();
       return false;
    }
}

$(".link-item").click(mostrarPerfil);
$(".notiICo").click(mostrarNoti);
$(function(){
	$('.pix_diapo').diapo();
});