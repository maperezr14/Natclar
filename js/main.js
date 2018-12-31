$( document ).ready(function() {

	$(".toggle-password").click(function() {
		$(this).toggleClass("fa-eye fa-eye-slash");
			var input = $($(this).attr("toggle"));
			if (input.attr("type") == "password") {
			input.attr("type", "text");
		} else {
			input.attr("type", "password");
		}
	});


	$("#showRegister").click(function() {
		$("#pills-login-tab").removeClass("active show");
		$("#pills-login").removeClass("active show");
		$("#pills-register-tab").addClass("active show");
		$("#pills-register").addClass("active show");		
	});

	$(".indicador").click(function() {
		$('html,body').animate({
            scrollTop: $(".page-content").offset().top},
        'slow');            
    });

    $(".top-direccion.active").click(function() {
		alert("un click");
		$(this).toggleClass("active");
		$(this).next(".direccion-body").toggleClass("active");
	});

	$(".top-direccion").click(function() {
		alert("dos click");
		$(this).toggleClass("active");
		$(this).next(".direccion-body").toggleClass("active");
	});
});

$(".top-direccion.active").click(function() {
	alert("un click");
	$(this).toggleClass("active");
	$(this).next(".direccion-body").toggleClass("active");
});

$(".top-direccion").click(function() {
	alert("dos click");
	$(this).toggleClass("active");
	$(this).next(".direccion-body").toggleClass("active");
});

$(document).ready(function(){

	//Telefonos

  $("#add-phone").click(function(){
    $(".telefonos").append("<div class='col-sm-12 telf-adt'>" + "<div class='row'>" + "<label for='phone' class='col-sm-3 col-form-label for-phone'></label>" + "<div class='col-sm-9 select-input btn-eliminar'>" + "<fieldset id='phone'>" + "<select class='form-control'>" + "<option value='0'>Seleccione</option>" + "<option value='1'>Bitel</option>" + "<option value='2'>Claro</option>" + "<option value='3'>Entel</option>" + "<option value='4'>Movistar</option>" + "</select>" + "<input type='text' class='form-control' name='phone'>" + "</fieldset>" + "<button id='remove-phone' class='btn-trash remove-phone' type='button'><i class='fas fa-trash'></i></button>" + "</div>" + "</div>" + "</div>");
  });

  $("#miperfil").delegate(".remove-phone", "click", function () {
    $(this).closest('.telf-adt').remove();
  });

  	//Email
  $("#add-mail").click(function(){
    $(".correos").append("<div class='col-sm-12 mail-adt'>" + "<div class='row'>" + "<label for='secondMail' class='col-sm-3 col-form-label'></label>" + "<div class='col-sm-9 btn-eliminar'>" + "<input type='email' class='form-control' id='secondMail' placeholder='Opcional*'>" + "<button id='remove-mail' class='btn-trash remove-mail' type='button'><i class='fas fa-trash'></i></button>" + "</div>" + "</div>" + "</div>");
  });
  $("#miperfil").delegate(".remove-mail", "click", function () {
    $(this).closest('.mail-adt').remove();
  });

  	//Idiomas

  $("#add-lang").click(function(){
  	$(".lang-list").show();
    $(".lang-list ul").append("<li>" + "Idioma: " + $('#idioma').val() + " - "  +"Nivel: " + $('#nivelidioma').val() + "<button id='remove-lang' class='btn-trash remove-lang' type='button'><i class='fas fa-trash'></i></button>" + "</li>");
    $('#idioma').val('');
    $('#nivelidioma').val('');
  });

  $("#miperfil").delegate(".remove-lang", "click", function () {
    $(this).closest('li').remove();
  });

  //Discapacidad

  $("#add-discapacidad").click(function(){
  	$(".discapacidad-list").show();
    $(".discapacidad-list ul").append("<li>" + "Discapacidad: " + $('#discapacidades').val() + "<button id='remove-discapacidad' class='btn-trash remove-discapacidad' type='button'><i class='fas fa-trash'></i></button>" + "</li>");
    $('#discapacidades').val('');
  });

  $("#miperfil").delegate(".remove-discapacidad", "click", function () {
    $(this).closest('li').remove();
  });

  	//direcciones

  $("#add-direccion").click(function(){
  	$(".direcciones-content").show();
    $(".direcciones-content").append(
    	"<div class='direcciones col-md-6'>" + 
    	"<div class='top-direccion'>Dirección: <i class='fas fa-chevron-down'></i></div>" + 
    	"<div class='direccion-body'>" + 
    	"<span><b>Tipo de Via:</b> " + 
    	$('#tipovia').val() + 
    	"</span>" + 
    	"<br>" + 
    	"<span><b>Nombre de Via:</b> " + 
    	$('#namevia').val() + 
    	"</span>" + 
    	"<br>" + 
    	"<span><b>Número de Via: </b>" +  
    	$('#numerovia').val() + 
    	"</span>" + "<br>" + 
    	"<span><b>Departamento:</b> " + 
    	$('#dpto').val() + 
    	"</span>" + 
    	"<br>" + 
    	"<span><b>Manzana:</b> " + 
    	$('#manzana').val() + 
    	"</span>" + 
    	"<br>" + 
    	"<span><b>Interior:</b> " + 
    	$('#interior').val() + 
    	"</span>" + 
    	"<br>" + 
    	"<span><b>Lote:</b> " + 
    	$('#lote').val() + 
    	"</span>" + 
    	"<br>" + 
    	"<span><b>Kilometro:</b> " + 
    	$('#kilometro').val() + 
    	"</span>" + 
    	"<br>" + 
    	"<span><b>Bloque/Etapa:</b> " + 
    	$('#bloque').val() +
    	$('#etapa').val() + 
    	"</span>" + 
    	"<br>" + 
    	"<span><b>Tipo de Zona:</b> " + 
    	$('#tipozona').val() + 
    	"</span>" + 
    	"<br>" + 
    	"<span><b>Nombre de Zona:</b> " + 
    	$('#nombrezona').val() + 
    	"</span>" + 
    	"<br>" + 
    	"<span><b>Número de Zona:</b> " + 
    	$('#numerozona').val() + 
    	"</span>" + 
    	"<br>" + 
    	"<span><b>Referencia:</b> " + 
    	$('#referencia').val() + 
    	"</span>" + 
    	"<br>" + 
    	"<span><b>Departamento:</b> " + 
    	$('#departamento').val() + 
    	"</span>" + 
    	"<br>" + 
    	"<span><b>Provincia:</b> " + 
    	$('#provincia').val() + 
    	"</span>" + 
    	"<br>" + 
    	"<span><b>Distrito:</b> " + 
    	$('#distrito').val() + 
    	"</span>" + 
    	"</div>" + 
    	"<div class='col-sm-12'>" + 
    	"<button  class='btn-trash remove-direccion' type='button'><i class='fas fa-trash'></i></button>" + 
    	"</div>" + 
    	"</div>" 
    );
    $("#tipovia").val('0'); 
	$("#namevia").val(''); 
	$("#numerovia").val(''); 
	$("#dpto").val(''); 
	$("#manzana").val(''); 
	$("#interior").val(''); 
	$("#lote").val(''); 
	$("#kilometro").val(''); 
	$("#bloque").val('');
	$("#etapa").val(''); 
	$("#tipozona").val('0'); 
	$("#nombrezona").val(''); 
	$("#numerozona").val(''); 
	$("#referencia").val(''); 
	$("#departamento").val('0'); 
	$("#provincia").val('0'); 
	$("#distrito").val('0');
  });

  $("#miperfil").delegate(".remove-direccion", "click", function () {
    $(this).closest('.direcciones').remove();
  });

  	//Formación Educativa

  $("#add-insti").click(function(){
  	$(".instituciones-content").show();
    $(".instituciones-content").append(
    	"<div class='estudios col-md-6'>" +  
		"<div class='estudios-body'>" + 
		"<span><b>Institución Academica:</b> " + 
		$('#insti').val() + 
		"</span>" + 
		"<br>" + 
		"<span><b>Nivel Académico:</b> " + 
		$('#nivelinsti').val() + 
		"</span>" + 
		"<br>" + 
		"<span><b>Estado de Formación: </b>" +  
		$('#estadoformacion').val() + 
		"</span>" + "<br>" + 
		"<span><b>Periodo Inicio:</b> " + 
		$('#monthinstiini').val() + 
		"<span> / </span>" + 
		$('#yearinstiini').val() + 
		"</span>" + 
		"<br>" + 
		"<span><b>Periodo Fin:</b> " + 
		$('#monthinstifin').val() + 
		"<span> / </span>" + 
		$('#yearinstiini').val() + 
		"</span>" + 
		"</div>" + 
		"<div class='col-sm-12'>" + 
		"<button  class='btn-trash remove-insti' type='button'><i class='fas fa-trash'></i></button>" + 
		"</div>" + 
		"</div>"
  	);
  });

  $("#miperfil").delegate(".remove-insti", "click", function () {
    $(this).closest('estudios').remove();
  });


//Formación Complementaria (Cursos)

  $("#add-curso").click(function(){
  	$(".cursos-content").show();
    $(".cursos-content").append(
    	"<div class='cursos col-md-6'>" +  
		"<div class='cursos-body'>" + 
		"<span><b>Curso:</b> " + 
		$('#curso').val() + 
		"</span>" + 
		"<br>" + 
		"<span><b>Nivel de conocimiento:</b> " + 
		$('#nivelcurso').val() + 
		"</span>" + 
		"<br>" + 
		"<span><b>Periodo Inicio:</b> " + 
		$('#daycursoini').val() + 
		"<span> / </span>" + 
		$('#monthcursoini').val() + 
		"<span> / </span>" + 
		$('#yearcursoini').val() +
		"</span>" + 
		"<br>" + 
		"<span><b>Cursando: </b>" +  
		$('#chekCursando').val() + 
		"</span>" + 
		"<br>" + 
		"<span><b>Periodo Fin:</b> " + 
		$('#daycursofin').val() + 
		"<span> / </span>" + 
		$('#monthcursofin').val() + 
		"<span> / </span>" + 
		$('#yearcursofin').val() +
		"</span>" + 
		"<br>" + 
		"<span><b>Vigencia: </b>" +  
		$('#chekvigencia').val() + 
		"</span>" + 
		"</div>" + 
		"<div class='col-sm-12'>" + 
		"<button  class='btn-trash remove-curso' type='button'><i class='fas fa-trash'></i></button>" + 
		"</div>" + 
		"</div>"
  	);
  });

  $("#miperfil").delegate(".remove-curso", "click", function () {
    $(this).closest('cursos').remove();
  });

//Formación Complementaria (Cursos)

  $("#add-experiencias").click(function(){
  	$(".experiencias-content").show();
    $(".experiencias-content").append(
    	"<div class='experiencias col-md-6'>" +  
		"<div class='experiencias-body'>" + 
		"<span><b>Empresa:</b> " + 
		$('#empresa').val() + 
		"</span>" + 
		"<br>" + 
		"<span><b>Cargo:</b> " + 
		$('#cargoempresa').val() + 
		"</span>" + 
		"<br>" + 
		"<span><b>Área: </b>" +  
		$('#areaempresa').val() + 
		"</span>" + 
		"<br>" + 
		"<span><b>Periodo Inicio:</b> " +  
		$('#monthexperienciaini').val() + 
		"<span> / </span>" + 
		$('#yearexperienciaini').val() +
		"</span>" + 
		"<br>" + 
		"<span><b>Periodo Fin:</b> " + 
		$('#monthexperienciafin').val() + 
		"<span> / </span>" + 
		$('#yearexperienciafin').val() +
		"</span>" + 
		"<br>" + 
		"<span><b>Actualmente: </b>" +  
		$('#chekActualmente').val() + 
		"</span>" + 
		"<br>" + 
		"<span><b>Funciones/Logros: </b>" +  
		$('#funioneslogros').val() + 
		"</span>" + 
		"</div>" + 
		"<div class='col-sm-12'>" + 
		"<button  class='btn-trash remove-experiencias' type='button'><i class='fas fa-trash'></i></button>" + 
		"</div>" + 
		"</div>"
  	);
  });

  $("#miperfil").delegate(".remove-experiencias", "click", function () {
    $(this).closest('.experiencias').remove();
  });


});

