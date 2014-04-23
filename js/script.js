$(document).ready(function (e) {
    $('#calrecomm').text('mg/day');

    $(".submit-btn").click(function (e) {
        var age = $("#age").val();
        var gender = $("input[name='gender']:checked").val();
        var preg = $("#pregnant").val();
        var lact = $("#lactating").val();
        var menopause = $("#menopause").val();

        if ((age >= 19) && (gender == 'male')) {
            men();
            $('#pregnant').slider('disable');
            $('#lactating').slider('disable');
            $('#menopause').slider('disable');
        }
        if ((age >= 19) && (gender == 'female')) {
            women();
        }
    });
    $("#age").bind("change", function () {
        var age = $("#age").val();

        if (age >= 1 || age <= 9) {
            children();
            $('input[name=gender]').attr("disabled", true);
            $('#pregnant').slider('disable');
            $('#lactating').slider('disable');
            $('#menopause').slider('disable');
        }
        if (age >= 10 || age <= 18) {
            adult();
            $('input[name=gender]').attr("disabled", true);
            $('#pregnant').slider('disable');
            $('#lactating').slider('disable');
            $('#menopause').slider('disable');
        }

        if (age >= 19) {
					
            $('input[name=gender]').attr("disabled", false);
        }

    }); //age change	
    $("input[name='gender']").change(function () {
        var gender = $("input[name='gender']:checked").val();
        if (gender == 'female') {
            
            $('#pregnant').slider('enable');
            $('#lactating').slider('enable');
            $('#menopause').slider('enable');
        }
    }); //gender change

    $("#pregnant,#lactating,#menopause").change(function () {
        var preg = $("#pregnant").val();
        var lact = $("#lactating").val();
        var menopause = $("#menopause").val();
        if (preg == 'yes') {
            $('#lactating').slider('disable');
            $('#menopause').slider('disable');
        }
        if (lact == 'yes') {
            $('#pregnant').slider('disable');
            $('#menopause').slider('disable');
        }


        if ((preg == 'no' && lact == 'no') && (menopause == 'yes')) {

            $('#pregnant').slider('disable');
            $('#lactating').slider('disable');
        }

    }); //menopause
    var resetForms = function () {
        $('form').each(function () {
            this.reset();
        });
    };


    $(".clear-btn").click(function (e) {
        resetForms();
        $('input[name=gender]').attr("disabled", false);
        $('#pregnant').slider('enable');
        $('#lactating').slider('enable');
        $('#menopause').slider('enable');
        $('#calrecomm').text('mg/day');
    });
}); //document ready



/* Children */
function children() {
    var age = $("#age").val();
    if ((age >= 1) && (age <= 3)) {
        $('#calrecomm').text('500 mg/day');
    } else if ((age >= 4) && (age <= 6)) {
        $('#calrecomm').text('600 mg/day');
    } else if ((age >= 7) && (age <= 9)) {
        $('#calrecomm').text('700 mg/day');
    }
}

/* adult */
function adult() {
    var age = $("#age").val();
    if ((age >= 10) && (age <= 18)) {
        $('#calrecomm').text('1300 mg/day');
    }
}

/* men */
function men() {
    var age = $("#age").val();
    if ((age >= 19) && (age <= 65)) {
        $('#calrecomm').text('1000 mg/day');

    }
    if (age >= 65) {
        $('#calrecomm').text('1300 mg/day');

    }
}



/* Women */
function women() {
    var preg = $("#pregnant").val();
    var lact = $("#lactating").val();
    var menopause = $("#menopause").val();
    $('#calrecomm').text('1000 mg/day');
    if (preg == 'yes') {
        $('#calrecomm').text('1200 mg/day');
    }
    if (lact == 'yes') {
        $('#calrecomm').text('1000 mg/day');
    }
    if (menopause == 'yes') {
        $('#calrecomm').text('1300 mg/day');

    }

}