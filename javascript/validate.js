$(function () {
    function validateName() {
        let fullnameInp = $("#inpFullname");
        let fullnameVal = fullnameInp.val();
        fullnameVal = fullnameVal.toLowerCase();
        var regex = new RegExp("^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$");
        
        if (! fullnameVal.match(regex)) {
            //Namnet är antingen tomt eller fel.
            console.log("Ange ditt hela namn");
            fullnameInp.addClass('is-invalid');
        } else {
            fullnameInp.removeClass('is-invalid');
            fullnameInp.addClass('is-valid');
        }
        console.log(regex.test(fullnameVal));
    }

    function validatePassword() {
        let passwordInp = $("#inpPassword");
        let password = passwordInp.val();

        let regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

        if(! regex.test(password)) {
            passwordInp.addClass('is-invalid');
        } else {
            passwordInp.removeClass('is-invalid');
            passwordInp.addClass('is-valid');
        }
        console.log(regex.test(password));
    }

    function validateSex() {
        let maleInp = $("#inpMale");
        let femaleInp = $("#inpFemale");

        if( maleInp.is(':checked') || femaleInp.is(':checked') ) {
            $("input[name='gender']").removeClass("is-invalid");
            $("input[name='gender']").addClass("is-valid");
        } else {
            $("input[name='gender']").removeClass("is-valid");
            $("input[name='gender']").addClass("is-invalid");
        }
    }

    function validateOccupation() {
        let occupationInp = $("#selOccupation");
        let occupationVal = occupationInp.val();

        if(occupationVal === "") {
            occupationInp.removeClass("is-valid");
            occupationInp.addClass("is-invalid");
        } else {
            occupationInp.removeClass("is-invalid");
            occupationInp.addClass("is-valid");
        }
    }

    function validateSelf() {
        let aboutInp = $("#txtAbout");
        let aboutVal = aboutInp.val();

        if (aboutVal.length > 200) {
            $("#aboutSelf > .invalid-feedback").html("Mr. hacker, du får inte skriva mer än 200 tecken!");
            aboutInp.removeClass("is-valid");
            aboutInp.addClass("is-invalid");
        } else if(aboutVal.length < 10) {
            $("#aboutSelf > .invalid-feedback").html("Du behöver berätta lite mer.");
            aboutInp.removeClass("is-valid");
            aboutInp.addClass("is-invalid");
        }
        else {
            aboutInp.removeClass("is-invalid");
            aboutInp.addClass("is-valid");
        }
    }

    function validateCheck() {
        if( !$("#chbAccept").is(":checked") ) {
            $("#chbAccept").removeClass("is-valid");
            $("#chbAccept").addClass("is-invalid");
        } else {
            $("#chbAccept").removeClass("is-invalid");
            $("#chbAccept").addClass("is-valid");
        }
    }
    $('#btnSubmit').on("click", function() {
        validateName();
        validatePassword();
        validateSex();
        validateOccupation();
        validateSelf();
        validateCheck();
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
});


// Ska man kanske ha en function när man går ut fokus(Så inputen blir röd) sen en till när man trycker submit)
// 0 / 200 ska jag använda keydown/keyUp för att i realtid räkna antalet tecken.