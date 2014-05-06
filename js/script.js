$(document).ready(function (e) {
	
    $('#calrecomm').text('mg/day');
    $('input[name=pregnant]').attr("disabled", false);
        $('input[name=lactating]').attr("disabled", false);
				$('input[name=menopause]').attr("disabled", false);
    $(".submit-btn").click(function (e) {

        var age = $("#age").val();
        var gender = $("input[name='gender']:checked").val();
        var preg = $("input[name='pregnant']:checked").val();
        var lact = $("input[name='lactating']:checked").val();
        var menopause = $("input[name='menopause']:checked").val();

localStorage.setItem("age", age);
localStorage.setItem("gender", gender);
localStorage.setItem("preg", preg);
localStorage.setItem("lact", lact);
localStorage.setItem("menopause", menopause);

				if (age >= 1 || age <= 9) {
            children();       
        }
        if (age >= 10 || age <= 18) {
            adult();
        }
        if ((age >= 19) && (gender == 'male')) {
            men();
        }
        if ((age >= 19) && (gender == 'female')) {
            women();
        }
    });
    $("#age").bind("change", function () {
        var age = $("#age").val();
    }); //age change	
  
 
  $("input[name='gender']").change(function () {
        var gender = $("input[name='gender']:checked").val();
        if (gender == 'male') {
           $('input[name=pregnant]').attr("disabled", true);
				   $('input[name=lactating]').attr("disabled", true);
				   $('input[name=menopause]').attr("disabled", true);
        }
				  if (gender == 'female') {
        $('input[name=pregnant]').attr("disabled", false);
        $('input[name=lactating]').attr("disabled", false);
				$('input[name=menopause]').attr("disabled", false);
        }
    }); //gender change

    $(".clear-btn").on('click', function() {			
    $("input[type='radio']").attr("checked",false).checkboxradio("refresh");

       $('#calrecomm').text('mg/day');
    });
}); //document ready



/* Children */
function children() {  
        $('#calrecomm').text('600 mg/day');
}

/* adult */
function adult() {
    var age = $("#age").val();
    if ((age >= 10) && (age <= 18)) {
        $('#calrecomm').text('800 mg/day');
    }
}

/* men */
function men() {
    var age = $("#age").val();
    if ((age >= 19) && (age <= 65)) {
        $('#calrecomm').text('600 mg/day');
    }
    if (age >= 65) {
        $('#calrecomm').text('Not Available');
    }
}

/* Women */
function women() {
   var preg = $("input[name='pregnant']:checked").val();
   var lact = $("input[name='lactating']:checked").val();
   var menopause = $("input[name='menopause']:checked").val();
		
    $('#calrecomm').text('600 mg/day');
		
    if (preg == 'yes') {
        $('#calrecomm').text('1200 mg/day');
    }
    if (lact == 'yes') {
        $('#calrecomm').text('1200 mg/day');
    }
    if (menopause == 'yes') {
        $('#calrecomm').text('800 mg/day');

    }

}