(function(){
    $('#signup-form').validate({
        onSubmitHandler: function(form){
            form.submit();
        },
        rules: {
            firstname: {
              required: true,
              minlength: 2
            },
            lastname: {
                required: true,
                minlength: 2
            }
          },
          messages: {
            firstname: {
              required: "We need your first name",
              minlength: jQuery.validator.format("At least {0} characters required!")
            },
            lastname: {
                required: "We need your last name",
                minlength: jQuery.validator.format("At least {0} characters required!")
              }
          }
    });
})();

(function (a, b) { return a + b; })(1, 2); // == add(1,2)
// IIFE = immediately invocable function expression