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
$(".link-item").click(mostrarPerfil);
$(function(){
	$('.pix_diapo').diapo();
});