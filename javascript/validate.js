$(function () {
    function validateName() {
        let fullnameInp = $("#inpFullname");
        let fullnameVal = fullnameInp.val();
        fullnameVal = fullnameVal.toLowerCase();
        var regex = new RegExp("^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$");
        
        if (! fullnameVal.match(regex)) {
            fullnameInp.addClass('is-invalid');
            fullnameInp.removeClass('is-valid');
            return false;
        } else {
            fullnameInp.removeClass('is-invalid');
            fullnameInp.addClass('is-valid');
            return true;
        }
    }

    function validatePassword() {
        let passwordInp = $("#inpPassword");
        let password = passwordInp.val();

        let regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

        if(! regex.test(password)) {
            passwordInp.addClass('is-invalid');
            passwordInp.removeClass('is-valid');
            return false;
        } else {
            passwordInp.removeClass('is-invalid');
            passwordInp.addClass('is-valid');
            return true;
        }
    }

    function validateSex() {
        let maleInp = $("#inpMale");
        let femaleInp = $("#inpFemale");

        if( maleInp.is(':checked') || femaleInp.is(':checked') ) {
            $("input[name='gender']").removeClass("is-invalid");
            $("input[name='gender']").addClass("is-valid");
            return true;
        } else {
            $("input[name='gender']").removeClass("is-valid");
            $("input[name='gender']").addClass("is-invalid");
            return false;
        }
    }

    function validateOccupation() {
        let occupationInp = $("#selOccupation");
        let occupationVal = occupationInp.val();

        if(occupationVal === "") {
            occupationInp.removeClass("is-valid");
            occupationInp.addClass("is-invalid");
            return false;
        } else {
            occupationInp.removeClass("is-invalid");
            occupationInp.addClass("is-valid");
            return true;
        }
    }

    function validateSelf() {
        let aboutInp = $("#txtAbout");
        let aboutVal = aboutInp.val();

        if (aboutVal.length > 200) {
            $("#aboutSelf > .invalid-feedback").html("Du får inte skriva mer än 200 tecken!");
            aboutInp.removeClass("is-valid");
            aboutInp.addClass("is-invalid");
            return false;
        } else if(aboutVal.length < 10) {
            $("#aboutSelf > .invalid-feedback").html("Du behöver berätta lite mer.");
            aboutInp.removeClass("is-valid");
            aboutInp.addClass("is-invalid");
            return false;
        }
        else {
            aboutInp.removeClass("is-invalid");
            aboutInp.addClass("is-valid");
            return true;
        }
    }

    function validateCheck() {
        if( !$("#chbAccept").is(":checked") ) {
            $("#chbAccept").removeClass("is-valid");
            $("#chbAccept").addClass("is-invalid");

            return false;
        } else {
            $("#chbAccept").removeClass("is-invalid");
            $("#chbAccept").addClass("is-valid");

            return true;
        }
    }

    function count() {
        let txtVal = $("#txtAbout").val();
        let chars = txtVal.length;
        $("#counter").html(chars);

        if( chars < 10 || chars > 200 ) {
            $("#counter").css("color", "red");
        } else if( chars >= 10 || chars <= 200) {
            $("#counter").css("color", "green");
        }
        
    }

    $("#txtAbout").on('keyup propertychange paste', function() {
        count();
    })

    $('#btnSubmit').on("click", function() {
        if( validateName() && validatePassword() && validateSex() && validateOccupation() && validateSelf() && validateCheck() ) {

        } else {
            event.preventDefault();
            event.stopPropagation();
        }
    });

    $("form input").change(function() {
        if( $(this).val().length < 2) {
            $(this).addClass("is-invalid");
            $(this).removeClass("is-valid");
        } else if ( $(this).attr("type") === "text" ) {
            validateName();
        } else if ($(this).attr("type") ==="password"){
            validatePassword();
        } else if( $(this).attr("type") === "radio") {
            validateSex();
        } else if( $(this).attr("type") === "checkbox" ) {
            validateCheck();
        } else {
            $(this).addClass("is-valid");
            $(this).removeClass("is-invalid");
        }
    });

    $("form input").blur(function() {
        if( $(this).val().length < 2) {
            $(this).addClass("is-invalid");
            $(this).removeClass("is-valid");
        } else if ( $(this).attr("type") === "text" ) {
            validateName();
        } else if ($(this).attr("type") ==="password"){
            validatePassword();
        } else if( $(this).attr("type") === "radio") {
            validateSex();
        } else if( $(this).attr("type") === "checkbox" ) {
            validateCheck();
        } else {
            $(this).addClass("is-valid");
            $(this).removeClass("is-invalid");
        }

    });

    $("form select").blur(function() {
        validateOccupation();
    })

    $("form textarea").blur(function() {
        validateSelf();
    })

    $("form select").change(function() {
        validateOccupation();
    })

    $("form textarea").change(function() {
        validateSelf();
    })


});