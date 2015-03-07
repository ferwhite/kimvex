var $perfil = $('#perfil'),
	$inicio = $('#inicio'),
	$global = $('#global'),
	$mensaje= $('#mensaje'),
	$amigos = $('#amigos'),
	$fotos	= $('#fotos'),
	$videos = $('#videos'),
	$grupos = $('#grupos'),
	$tImage	= $('#topImagenes'),
	$portafolio = $('#portafolio'),
	$seguridad = $('#seguridad'),
	$config	= $('#configuracion'),
	$cerrar	= $('#cerra'),
	$perfilCuerpo = $('#perfilCuerpo'),
	$inicioCuerpo = $('#inicioCuerpo');

function mostrarPerfil(g){
	g.preventDefault();
	g.stopPropagation();

	$perfilCuerpo.slideToggle();
	$inicioCuerpo.slideToggle();
	console.log(g);
}
/*$(document).ready(function(){
	var contenedor = $('#slider');
	var tiempo = 7000;

	contenedor.css({'background-image':'url(background-image.jpg)'});

	function imagen() {
		setTimeout(function(){contenedor.fadeTo('slow',0.8, function(){ $(this).css({'background-image':'url(django.png)'}); imagen3();}).fadeTo('slow', 1);}, tiempo);
	}
	function imagen2() {
		setTimeout(function(){contenedor.fadeTo('slow',0.8, function(){ $(this).css({'background-image':'url(2-1920x.jpg)'}); imagen();}).fadeTo('slow', 1);}, tiempo);
	}
	function imagen3() {
		setTimeout(function(){contenedor.fadeTo('slow',0.8, function(){ $(this).css({'background-image':'url(background-image.jpg)'}); imagen();}).fadeTo('slow', 1);}, tiempo);
	}
	imagen2();
	 });
*/
$perfil.click(mostrarPerfil);
	$(function(){
		$('.pix_diapo').diapo();
	});