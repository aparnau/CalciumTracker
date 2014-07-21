$(document).ready(function (e) {
    $('.pregnantblock').hide();
    $('.lactatingblock').hide();
    $('.menopauseblock').hide();
    $('#otherblock').hide();
    $('#calrecomm').text('mg/day');

    var namesel = localStorage.getItem("name");
    var agesel = localStorage.getItem("age");
    var gendersel = localStorage.getItem("gender");
    var pregsel = localStorage.getItem("preg");
    var lactsel = localStorage.getItem("lact");
    var menopausesel = localStorage.getItem("menopause");
    var eathabitsel = localStorage.getItem("eathabit");

    if (pregsel == 'no' && lactsel == 'no' && menopausesel == 'no') {
        $("input[type='checkbox']").attr("checked", true).checkboxradio("refresh");
    }

    if (namesel !== null) {
        $('#name').val(namesel);
    }
    if (agesel !== null) {
        $('#age').val(agesel);
    }

    if (gendersel == 'male') {
        document.aboutform.gender[0].checked = true;
        $("#gender_0").checkboxradio("refresh");

        $('.pregnantblock').hide();
        $('.lactatingblock').hide();
        $('.menopauseblock').hide();
        $('#otherblock').hide();
        /*          $('input[name=pregnant]').attr("disabled", true);
                    $('input[name=lactating]').attr("disabled", true);
                    $('input[name=menopause]').attr("disabled", true);*/
    } else if (gendersel == 'female') {

        document.aboutform.gender[1].checked = true;
        $("#gender_1").checkboxradio("refresh");
        $('.pregnantblock').show();
        $('.lactatingblock').show();
        $('.menopauseblock').show();
        $('#otherblock').show();
    }

    if (pregsel == 'no') {
        document.aboutform.pregnant[0].checked = true;
        $("#pregnant_0").checkboxradio("refresh");
    } else if (pregsel == 'yes') {
        document.aboutform.pregnant[1].checked = true;
        $("#pregnant_1").checkboxradio("refresh");
    }

    if (lactsel == 'no') {
        document.aboutform.lactating[0].checked = true;
        $("#lactating_0").checkboxradio("refresh");
    } else if (lactsel == 'yes') {
        document.aboutform.lactating[1].checked = true;
        $("#lactating_1").checkboxradio("refresh");
    }

    if (menopausesel == 'no') {
        document.aboutform.menopause[0].checked = true;
        $("#menopause_0").checkboxradio("refresh");
    } else if (menopausesel == 'yes') {
        document.aboutform.menopause[1].checked = true;
        $("#menopause_1").checkboxradio("refresh");
    }
    if (eathabitsel == 'veg') {
        document.aboutform.eathabit[0].checked = true;
        $("#eathabit_0").checkboxradio("refresh");
    } else if (eathabitsel == 'non-veg') {
        document.aboutform.eathabit[1].checked = true;
        $("#eathabit_1").checkboxradio("refresh");
    }

    $(".submit-btn").click(function (e) {
        var name = $("#name").val();
        var age = $("#age").val();
        var gender = $("input[name='gender']:checked").val();
        var preg = $("input[name='pregnant']:checked").val();
        var lact = $("input[name='lactating']:checked").val();
        var menopause = $("input[name='menopause']:checked").val();
        var eathabit = $("input[name='eathabit']:checked").val();
        localStorage.setItem("name", name);
        localStorage.setItem("age", age);
        localStorage.setItem("gender", gender);
        localStorage.setItem("eathabit", eathabit);

        if (document.getElementById("othercheck").checked == true) {
            $("input[type='checkbox']").attr("checked", true).checkboxradio("refresh");
            localStorage.setItem("preg", 'no');
            localStorage.setItem("lact", 'no');
            localStorage.setItem("menopause", 'no');
        } else if (document.getElementById("othercheck").checked == false) {
            $("input[type='checkbox']").attr("checked", true).checkboxradio("refresh");
            localStorage.setItem("preg", preg);
            localStorage.setItem("lact", lact);
            localStorage.setItem("menopause", menopause);
        }


        var regex = /^[a-zA-Z]*$/;
        var nameregex = /^[A-Za-z ]+$/
        if (age == '') {
            alert('Please enter valid age');
            document.aboutform.age.focus();
        } else if (name == '') {
            alert('Please enter valid name');
            document.aboutform.name.focus();
        } else if (!nameregex.test(document.aboutform.name.value)) {
            alert('Please enter valid name');
            document.aboutform.name.focus();
        } else {

            window.location = 'recallentery.html';
        }
    });
    /*    $("#age").bind("change", function () {
            var age = $("#age").val();
        }); //age change	
    */

    $("input[name='gender']").change(function () {
        var gender = $("input[name='gender']:checked").val();
        var age = $("#age").val();
        if (gender == 'male') {
            $('.pregnantblock').hide();
            $('.lactatingblock').hide();
            $('.menopauseblock').hide();
            $('#otherblock').hide();
            localStorage.removeItem("preg");
            localStorage.removeItem("lact");
            localStorage.removeItem("menopause");

        }
        if (gender == 'female' && age > 18) {
            $('.pregnantblock').show();
            $('.lactatingblock').show();
            $('.menopauseblock').show();
            $('#otherblock').show();
        }
    }); //gender change

});
