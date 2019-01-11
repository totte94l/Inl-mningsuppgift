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
            fullnameInp.addClass('is-valid');
        }
        console.log(regex.test(password));
    }

    $('#btnSubmit').on("click", function() {
        validateName();
        validatePassword();
    });
});


// Ska man kanske ha en function när man går ut fokus(Så inputen blir röd) sen en till när man trycker submit)
// 0 / 200 ska jag använda keydown/keyUp för att i realtid räkna antalet tecken.