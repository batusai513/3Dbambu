var Main=function(a,b){function c(){b.extend(b.validator.messages,{required:"Este campo es requerido.",remote:"Please fix this field.",email:"Por favor ingrese una direccion de correo valida.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",accept:"Please enter a value with a valid extension.",maxlength:b.validator.format("Please enter no more than {0} characters."),minlength:b.validator.format("Please enter at least {0} characters."),rangelength:b.validator.format("Please enter a value between {0} and {1} characters long."),range:b.validator.format("Please enter a value between {0} and {1}."),max:b.validator.format("Please enter a value less than or equal to {0}."),min:b.validator.format("Please enter a value greater than or equal to {0}.")}),b(".flexslider").flexslider({controlNav:!1}),b(".js-contact-form").validate({errorClass:"has-error",validClass:"has-success",highlight:function(a,c,d){b(a).parents(".form-group").addClass(c,d)},unhighlight:function(a,c,d){b(a).parents(".form-group").removeClass(c,d)},errorPlacement:function(a,b){a.appendTo(b.closest(".form-group"))}})}return{init:c}}(window,jQuery);$(function(){Main.init()});