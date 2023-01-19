

            function isEmail(email) {
                var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email);
            }




            $("#submit-button").click(function(){

                var errorMessage ="";
                var fieldMissing= "";

                if($("#email").val()==""){
                 fieldMissing = "email";
                }

                if($("#phone").val()==""){
                 fieldMissing += "<br>phone";
                }
                if($("#password").val()==""){
                 fieldMissing += "<br>password";
                }
                if($("#password-confirm").val()==""){
                 fieldMissing += "<br>confirmPassword";
                }
                if(fieldMissing != ""){
                    errorMessage += "The following field is missing: " + fieldMissing;
                }





                if(isEmail($("#email").val()) == false){
                    errorMessage += "<p>Email is not valid</p> "; 
                }
                if($.isNumeric($("#phone").val())==false){
                    errorMessage += "<p>Phone number not Numeric</p>";
                
                }
                if($("#password").val()!= $("#password-confirm").val()){
                
                    errorMessage += "<p>Password is dont matched</p>";
                
                
                }
                if(errorMessage !=""){
                    $("#errorMessage").html(errorMessage);
                }else{
                    $("#successMessage").show();
                    $("#errorMessage").hide();
                
                
                }
                
                
             
            });

        

      