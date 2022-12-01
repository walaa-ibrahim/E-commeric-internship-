//functionality and validation on inputs fields 
if (window.location.pathname.includes('sign-up.html') || ('login.html') || ('forget-pass.html')){
	/*if(document.getElementById("myP").dir = "rtl") {
		console.log('yes');
	}*/
    //placeholder when you focus & blur
    //console.log('yes');
    var placeAttr='';
    $('[placeholder]').focus(function(){
    placeAttr =$(this).attr('placeholder');
    $(this).attr('placeholder','');
    }).blur(function(){
    $(this).attr('placeholder', placeAttr);  
    });//End placeholder when you focus & blur
    //fire jqueryValidation
    $(".myform").validate({
    rules: {
        firstName: {
            required: true,
            minlength:3
        },
        lastName: {
            required: true,
            minlength:3
        },
        uEmail: {
        required: true,
        email: true
        },
        password: {
        required: true,
        minlength:8
        },
        phone: {
            requierd:true
        }
        
    }
    });/*End jqueryvalidation */
    
    
    //toggle password
    $("body").on('click', '#togglePassword', function() {
        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $(".user-password");
        if (input.attr("type") === "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });//End toggle password
    //validation on inputs by Regular Expression
    //collect data
    /*var firstName= document.querySelector('.first-name');
    var lastName= document.querySelector('.lst-name');
    var userMail= document.querySelector('.user-mail');
    var userPass= document.querySelector('.user-password');
    var myForm= document.querySelector('.sub-form');
    var inps= document.getElementsByTagName('input');
    //collect error messages
    var frsNameMsg= document.querySelector('#fName-lert');
    var lstNameMsg=document.querySelector('#lName-lert');
    var mailMsg=document.querySelector('#mail-lert');
    var passMsg=document.querySelector('#pass-lert');
    //validation on First name & last name
    var nameRegx= /^[a-zA-Z]{3,9}[0-9]?[0-9]?$/;
    firstName.addEventListener('blur',function(){
    if (firstName.value !='' && nameRegx.test(firstName.value)==true) {
        frsNameMsg.style.display='none';
    }else{
        frsNameMsg.style.display='block';
    }
    });//End First Name
    lastName.addEventListener('blur',function(){
    if (lastName.value !='' && nameRegx.test(lastName.value)==true) {
        lstNameMsg.style.display='none';
    }else{
        lstNameMsg.style.display='block';
    }
    });//End Last Name
    //validation on userMail
    var mailRegx= /^[a-zA-Z0-9]*[_.-]?[a-zA-Z0-9]{0,}@[a-z0-9]{0,65}(\.[a-z]{1,6}){1,4}$/;
    userMail.addEventListener('blur',function(){
    if (userMail.value !='' && mailRegx.test(userMail.value)==true) {
        mailMsg.style.display='none'
    }else{
        mailMsg.style.display='block';
    }
    });
    //validation on Password
    var passRegx= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$/;
    userPass.addEventListener('blur',function(){
    if (userPass.value !='' && passRegx.test(userPass.value)==true) {
        passMsg.style.display='none'
    }else{
        passMsg.style.display='block';
    }
    });
    //event on submit
    myForm.addEventListener('click', function(e){
    e.preventDefault;
        if (firstName.value !='' && nameRegx.test(firstName.value)==true &&
            lastName.value !='' && nameRegx.test(lastName.value)==true &&
            userMail.value !='' && mailRegx.test(userMail.value)==true &&
            userPass.value !='' && passRegx.test(userPass.value)==true) {
            clear();
                
        }else{
            alert('you Must Fill All Fields')
        };
    });
    //clear the last value of inputs
    function clear(){
        for (let i = 0; i < inps.length; i++) {
            inps[i].value=''
        }
    };*/
    //phone code

    $("#phone").intlTelInput({
        allowDropdown: true,
        autoHideDialCode: true,
        dropdownContainer: document.body,
        excludeCountries: ["Egypt"],
        formatOnDisplay: true,
        nationalMode: false,
        placeholderNumberType: "MOBILE",
        separateDialCode: false,
       
    });
        
}
