$(document).ready(function (e) {
    var name = localStorage.getItem("name");
    $("#top-bar").append(name);

    var eathabit = localStorage.getItem("eathabit");
    if (eathabit == 'veg') {
        $(".listitem#non-veg").css("display", "none");
    }   if (eathabit == 'non-veg') {
        $(".listitem#non-veg").css("display", "block");
    }

    /* MILK */

    var se_curd = sessionStorage.getItem('se_curd');
    var se_cheese = sessionStorage.getItem('se_cheese');
    var se_buttermilk = sessionStorage.getItem('se_buttermilk');
    var se_lassi = sessionStorage.getItem('se_lassi');
    var se_milkshake = sessionStorage.getItem('se_milkshake');


    var se_curd_frac = sessionStorage.getItem('se_curd_frac');
    var se_cheese_frac = sessionStorage.getItem('se_cheese_frac');
    var se_buttermilk_frac = sessionStorage.getItem('se_buttermilk_frac');
    var se_lassi_frac = sessionStorage.getItem('se_lassi_frac');
    var se_milkshakefrac = sessionStorage.getItem('se_milkshakefrac');


    $('#curd option[value="' + se_curd + '"]').prop('selected', true);
    $('#curdfrac option[value="' + se_curd_frac + '"]').prop('selected', true);
    $('#cheese option[value="' + se_cheese + '"]').prop('selected', true);
    $('#cheesefrac option[value="' + se_cheese_frac + '"]').prop('selected', true);
    $('#buttermilk option[value="' + se_buttermilk + '"]').prop('selected', true);
    $('#buttermilkfrac option[value="' + se_buttermilk_frac + '"]').prop('selected', true);
    $('#lassi option[value="' + se_lassi + '"]').prop('selected', true);
    $('#lassifrac option[value="' + se_lassi_frac + '"]').prop('selected', true);
    $('#milkshake option[value="' + se_milkshake + '"]').prop('selected', true);
    $('#milkshakefrac option[value="' + se_milkshakefrac + '"]').prop('selected', true);


    $("#curd").selectmenu("refresh");
    $("#curdfrac").selectmenu("refresh");
    $("#cheese").selectmenu("refresh");
    $("#cheesefrac").selectmenu("refresh");
    $("#buttermilk").selectmenu("refresh");
    $("#buttermilkfrac").selectmenu("refresh");
    $("#lassi").selectmenu("refresh");
    $("#lassifrac").selectmenu("refresh");
    $("#milkshake").selectmenu("refresh");
    $("#milkshakefrac").selectmenu("refresh");
    /* CEREAL */


    var se_rice = sessionStorage.getItem('se_rice');
    var se_ricefrac = sessionStorage.getItem('se_ricefrac');
    var se_khichari = sessionStorage.getItem('se_khichari');
    var se_khicharifrac = sessionStorage.getItem('se_khicharifrac');
    var se_pulao = sessionStorage.getItem('se_pulao');
    var se_pulaofrac = sessionStorage.getItem('se_pulaofrac');
    var se_paratha = sessionStorage.getItem('se_paratha');
    var se_parathafrac = sessionStorage.getItem('se_parathafrac');
    var se_phulka = sessionStorage.getItem('se_phulka');
    var se_phulkafrac = sessionStorage.getItem('se_phulkafrac');
    var se_puri = sessionStorage.getItem('se_puri');
    var se_purifrac = sessionStorage.getItem('se_purifrac');
    var se_bhatura = sessionStorage.getItem('se_bhatura');
    var se_bhaturafrac = sessionStorage.getItem('se_bhaturafrac');
    var se_pot_paratha = sessionStorage.getItem('se_pot_paratha');
    var se_pot_parathafrac = sessionStorage.getItem('se_pot_parathafrac');
    var se_ragiroti = sessionStorage.getItem('se_ragiroti');
    var se_ragirotifrac = sessionStorage.getItem('se_ragirotifrac');


    $('#rice option[value="' + se_rice + '"]').prop('selected', true);
    $('#ricefrac option[value="' + se_ricefrac + '"]').prop('selected', true);
    $('#khichari option[value="' + se_khichari + '"]').prop('selected', true);
    $('#khicharifrac option[value="' + se_khicharifrac + '"]').prop('selected', true);
    $('#pulao option[value="' + se_pulao + '"]').prop('selected', true);
    $('#pulaofrac option[value="' + se_pulaofrac + '"]').prop('selected', true);
    $('#paratha option[value="' + se_paratha + '"]').prop('selected', true);
    $('#parathafrac option[value="' + se_parathafrac + '"]').prop('selected', true);
    $('#phulka option[value="' + se_phulka + '"]').prop('selected', true);
    $('#phulkafrac option[value="' + se_phulkafrac + '"]').prop('selected', true);
    $('#puri option[value="' + se_puri + '"]').prop('selected', true);
    $('#purifrac option[value="' + se_purifrac + '"]').prop('selected', true);
    $('#bhatura option[value="' + se_bhatura + '"]').prop('selected', true);
    $('#bhaturafrac option[value="' + se_bhaturafrac + '"]').prop('selected', true);
    $('#pot_paratha option[value="' + se_pot_paratha + '"]').prop('selected', true);
    $('#pot_parathafrac option[value="' + se_pot_parathafrac + '"]').prop('selected', true);
    $('#ragiroti option[value="' + se_ragiroti + '"]').prop('selected', true);
    $('#ragirotifrac option[value="' + se_ragirotifrac + '"]').prop('selected', true);



    $("#rice").selectmenu("refresh");
    $("#ricefrac").selectmenu("refresh");
    $("#khichari").selectmenu("refresh");
    $("#khicharifrac").selectmenu("refresh");
    $("#pulao").selectmenu("refresh");
    $("#pulaofrac").selectmenu("refresh");
    $("#paratha").selectmenu("refresh");
    $("#parathafrac").selectmenu("refresh");
    $("#phulka").selectmenu("refresh");
    $("#phulkafrac").selectmenu("refresh");
    $("#puri").selectmenu("refresh");
    $("#purifrac").selectmenu("refresh");
    $("#bhatura").selectmenu("refresh");
    $("#bhaturafrac").selectmenu("refresh");
    $("#pot_paratha").selectmenu("refresh");
    $("#pot_parathafrac").selectmenu("refresh");
    $("#ragiroti").selectmenu("refresh");
    $("#ragirotifrac").selectmenu("refresh");
    /* CURRYDAL */


    var se_chanadal = sessionStorage.getItem('se_chanadal');
    var se_chanadalfrac = sessionStorage.getItem('se_chanadalfrac');
    var se_masurdal = sessionStorage.getItem('se_masurdal');
    var se_masurdalfrac = sessionStorage.getItem('se_masurdalfrac');
    var se_turdal = sessionStorage.getItem('se_turdal');
    var se_turdalfrac = sessionStorage.getItem('se_turdalfrac');
    var se_spinach = sessionStorage.getItem('se_spinach');
    var se_spinachfrac = sessionStorage.getItem('se_spinachfrac');
    var se_sambar = sessionStorage.getItem('se_sambar');
    var se_sambarfrac = sessionStorage.getItem('se_sambarfrac');
    var se_kadhi = sessionStorage.getItem('se_kadhi');
    var se_kadhifrac = sessionStorage.getItem('se_kadhifrac');
    var se_chole = sessionStorage.getItem('se_chole');
    var se_cholefrac = sessionStorage.getItem('se_cholefrac');
    var se_mungwhole = sessionStorage.getItem('se_mungwhole');
    var se_mungwholefrac = sessionStorage.getItem('se_mungwholefrac');

    var se_rajmah = sessionStorage.getItem('se_rajmah');
    var se_rajmahfrac = sessionStorage.getItem('se_rajmahfrac');

    $('#chanadal option[value="' + se_chanadal + '"]').prop('selected', true);
    $('#chanadalfrac option[value="' + se_chanadalfrac + '"]').prop('selected', true);
    $('#masurdal option[value="' + se_masurdal + '"]').prop('selected', true);
    $('#masurdalfrac option[value="' + se_masurdalfrac + '"]').prop('selected', true);
    $('#turdal option[value="' + se_turdal + '"]').prop('selected', true);
    $('#turdalfrac option[value="' + se_turdalfrac + '"]').prop('selected', true);
    $('#spinach option[value="' + se_spinach + '"]').prop('selected', true);
    $('#spinachfrac option[value="' + se_spinachfrac + '"]').prop('selected', true);
    $('#sambar option[value="' + se_sambar + '"]').prop('selected', true);
    $('#sambarfrac option[value="' + se_sambarfrac + '"]').prop('selected', true);
    $('#kadhi option[value="' + se_kadhi + '"]').prop('selected', true);
    $('#kadhifrac option[value="' + se_kadhifrac + '"]').prop('selected', true);
    $('#chole option[value="' + se_chole + '"]').prop('selected', true);
    $('#cholefrac option[value="' + se_cholefrac + '"]').prop('selected', true);
    $('#mungwhole option[value="' + se_mungwhole + '"]').prop('selected', true);
    $('#mungwholefrac option[value="' + se_mungwholefrac + '"]').prop('selected', true);

    $('#rajmah option[value="' + se_rajmah + '"]').prop('selected', true);
    $('#rajmahfrac option[value="' + se_rajmahfrac + '"]').prop('selected', true);


    $("#chanadal").selectmenu("refresh");
    $("#chanadalfrac").selectmenu("refresh");
    $("#masurdal").selectmenu("refresh");
    $("#masurdalfrac").selectmenu("refresh");
    $("#turdal").selectmenu("refresh");
    $("#turdalfrac").selectmenu("refresh");
    $("#spinach").selectmenu("refresh");
    $("#spinachfrac").selectmenu("refresh");
    $("#sambar").selectmenu("refresh");
    $("#sambarfrac").selectmenu("refresh");
    $("#kadhi").selectmenu("refresh");
    $("#kadhifrac").selectmenu("refresh");
    $("#chole").selectmenu("refresh");
    $("#cholefrac").selectmenu("refresh");
    $("#mungwhole").selectmenu("refresh");
    $("#mungwholefrac").selectmenu("refresh");

    $("#rajmah").selectmenu("refresh");
    $("#rajmahfrac").selectmenu("refresh");
    /* VEG-GRAVY */

    var se_avial = sessionStorage.getItem('se_avial');
    var se_avialfrac = sessionStorage.getItem('se_avialfrac');
    var se_bhagara = sessionStorage.getItem('se_bhagara');
    var se_bhagarafrac = sessionStorage.getItem('se_bhagarafrac');
    var se_matar = sessionStorage.getItem('se_matar');
    var se_matarfrac = sessionStorage.getItem('se_matarfrac');
    var se_aloomatar = sessionStorage.getItem('se_aloomatar');
    var se_aloomatarfrac = sessionStorage.getItem('se_aloomatarfrac');
    var se_kofta = sessionStorage.getItem('se_kofta');
    var se_koftafrac = sessionStorage.getItem('se_koftafrac');
    var se_soup = sessionStorage.getItem('se_soup');
    var se_soupfrac = sessionStorage.getItem('se_soupfrac');
    var se_paneermas = sessionStorage.getItem('se_paneermas');
    var se_paneermasfrac = sessionStorage.getItem('se_paneermasfrac');


    $('#avial option[value="' + se_avial + '"]').prop('selected', true);
    $('#avialfrac option[value="' + se_avialfrac + '"]').prop('selected', true);
    $('#bhagara option[value="' + se_bhagara + '"]').prop('selected', true);
    $('#bhagarafrac option[value="' + se_bhagarafrac + '"]').prop('selected', true);
    $('#matar option[value="' + se_matar + '"]').prop('selected', true);
    $('#matarfrac option[value="' + se_matarfrac + '"]').prop('selected', true);
    $('#aloomatar option[value="' + se_aloomatar + '"]').prop('selected', true);
    $('#aloomatarfrac option[value="' + se_aloomatarfrac + '"]').prop('selected', true);
    $('#kofta option[value="' + se_kofta + '"]').prop('selected', true);
    $('#koftafrac option[value="' + se_koftafrac + '"]').prop('selected', true);
    $('#soup option[value="' + se_soup + '"]').prop('selected', true);
    $('#soupfrac option[value="' + se_soupfrac + '"]').prop('selected', true);
    $('#paneermas option[value="' + se_paneermas + '"]').prop('selected', true);
    $('#paneermasfrac option[value="' + se_paneermasfrac + '"]').prop('selected', true);



    $("#avial").selectmenu("refresh");
    $("#avialfrac").selectmenu("refresh");
    $("#bhagara").selectmenu("refresh");
    $("#bhagarafrac").selectmenu("refresh");
    $("#matar").selectmenu("refresh");
    $("#matarfrac").selectmenu("refresh");
    $("#aloomatar").selectmenu("refresh");
    $("#aloomatarfrac").selectmenu("refresh");
    $("#kofta").selectmenu("refresh");
    $("#koftafrac").selectmenu("refresh");
    $("#soup").selectmenu("refresh");
    $("#soupfrac").selectmenu("refresh");
    $("#paneermas").selectmenu("refresh");
    $("#paneermasfrac").selectmenu("refresh");

    /* VEG-DRY */

    var se_mirchi = sessionStorage.getItem('se_mirchi');
    var se_mirchifrac = sessionStorage.getItem('se_mirchifrac');
    var se_gopigaajar = sessionStorage.getItem('se_gopigaajar');
    var se_gopigaajarfrac = sessionStorage.getItem('se_gopigaajarfrac');
    var se_bhindi = sessionStorage.getItem('se_bhindi');
    var se_bhindifrac = sessionStorage.getItem('se_bhindifrac');
    var se_kaddu = sessionStorage.getItem('se_kaddu');
    var se_kaddufrac = sessionStorage.getItem('se_kaddufrac');
    var se_cabbage = sessionStorage.getItem('se_cabbage');
    var se_cabbagefrac = sessionStorage.getItem('se_cabbagefrac');
    var se_leafyveg1 = sessionStorage.getItem('se_leafyveg1');
    var se_leafyveg1frac = sessionStorage.getItem('se_leafyveg1frac');
    var se_leafyveg2 = sessionStorage.getItem('se_leafyveg2');
    var se_leafyveg2frac = sessionStorage.getItem('se_leafyveg2frac');
    var se_leafyveg3 = sessionStorage.getItem('se_leafyveg3');
    var se_leafyveg3frac = sessionStorage.getItem('se_leafyveg3frac');
    var se_leafyveg4 = sessionStorage.getItem('se_leafyveg4');
    var se_leafyveg4frac = sessionStorage.getItem('se_leafyveg4frac');



    $('#mirchi option[value="' + se_mirchi + '"]').prop('selected', true);
    $('#mirchifrac option[value="' + se_mirchifrac + '"]').prop('selected', true);
    $('#gopigaajar option[value="' + se_gopigaajar + '"]').prop('selected', true);
    $('#gopigaajarfrac option[value="' + se_gopigaajarfrac + '"]').prop('selected', true);
    $('#bhindi option[value="' + se_bhindi + '"]').prop('selected', true);
    $('#bhindifrac option[value="' + se_bhindifrac + '"]').prop('selected', true);
    $('#kaddu option[value="' + se_kaddu + '"]').prop('selected', true);
    $('#kaddufrac option[value="' + se_kaddufrac + '"]').prop('selected', true);
    $('#cabbage option[value="' + se_cabbage + '"]').prop('selected', true);
    $('#cabbagefrac option[value="' + se_cabbagefrac + '"]').prop('selected', true);
    $('#leafyveg1 option[value="' + se_leafyveg1 + '"]').prop('selected', true);
    $('#leafyveg1frac option[value="' + se_leafyveg1frac + '"]').prop('selected', true);
    $('#leafyveg2 option[value="' + se_leafyveg2 + '"]').prop('selected', true);
    $('#leafyveg2frac option[value="' + se_leafyveg2frac + '"]').prop('selected', true);
    $('#leafyveg3 option[value="' + se_leafyveg3 + '"]').prop('selected', true);
    $('#leafyveg3frac option[value="' + se_leafyveg3frac + '"]').prop('selected', true);
    $('#leafyveg4 option[value="' + se_leafyveg4 + '"]').prop('selected', true);
    $('#leafyveg4frac option[value="' + se_leafyveg4frac + '"]').prop('selected', true);




    $("#mirchi").selectmenu("refresh");
    $("#mirchifrac").selectmenu("refresh");
    $("#gopigaajar").selectmenu("refresh");
    $("#gopigaajarfrac").selectmenu("refresh");
    $("#bhindi").selectmenu("refresh");
    $("#bhindifrac").selectmenu("refresh");
    $("#kaddu").selectmenu("refresh");
    $("#kaddufrac").selectmenu("refresh");
    $("#cabbage").selectmenu("refresh");
    $("#cabbagefrac").selectmenu("refresh");
    $("#leafyveg1").selectmenu("refresh");
    $("#leafyveg1frac").selectmenu("refresh");
    $("#leafyveg2").selectmenu("refresh");
    $("#leafyveg2frac").selectmenu("refresh");
    $("#leafyveg3").selectmenu("refresh");
    $("#leafyveg3frac").selectmenu("refresh");
    $("#leafyveg4").selectmenu("refresh");
    $("#leafyveg4frac").selectmenu("refresh");


    /* SNACKS */
    var se_poha = sessionStorage.getItem('se_poha');
    var se_pohafrac = sessionStorage.getItem('se_pohafrac');
    var se_chat = sessionStorage.getItem('se_chat');
    var se_chatfrac = sessionStorage.getItem('se_chatfrac');
    var se_dahivada = sessionStorage.getItem('se_dahivada');
    var se_dahivadafrac = sessionStorage.getItem('se_dahivadafrac');
    var se_vada = sessionStorage.getItem('se_vada');
    var se_vadafrac = sessionStorage.getItem('se_vadafrac');
    var se_dosa = sessionStorage.getItem('se_dosa');
    var se_dosafrac = sessionStorage.getItem('se_dosafrac');
    var se_mas_dosa = sessionStorage.getItem('se_mas_dosa');
    var se_mas_dosafrac = sessionStorage.getItem('se_mas_dosafrac');
    var se_idli = sessionStorage.getItem('se_idli');
    var se_idlifrac = sessionStorage.getItem('se_idlifrac');

    var se_samosa = sessionStorage.getItem('se_samosa');
    var se_samosafrac = sessionStorage.getItem('se_samosafrac');
    var se_sandwich = sessionStorage.getItem('se_sandwich');
    var se_sandwichfrac = sessionStorage.getItem('se_sandwichfrac');
    var se_veg_puff = sessionStorage.getItem('se_veg_puff');
    var se_veg_pufffrac = sessionStorage.getItem('se_veg_pufffrac');
    var se_bajji = sessionStorage.getItem('se_bajji');
    var se_bajjifrac = sessionStorage.getItem('se_bajjifrac');
    var se_pura = sessionStorage.getItem('se_pura');
    var se_purafrac = sessionStorage.getItem('se_purafrac');
    var se_coc_chutney = sessionStorage.getItem('se_coc_chutney');
    var se_coc_chutneyfrac = sessionStorage.getItem('se_coc_chutneyfrac');
    var se_tillchutney = sessionStorage.getItem('se_tillchutney');
    var se_tillchutneyfrac = sessionStorage.getItem('se_tillchutneyfrac');

    $('#poha option[value="' + se_poha + '"]').prop('selected', true);
    $('#pohafrac option[value="' + se_pohafrac + '"]').prop('selected', true);
    $('#chat option[value="' + se_chat + '"]').prop('selected', true);
    $('#chatfrac option[value="' + se_chatfrac + '"]').prop('selected', true);
    $('#dahivada option[value="' + se_dahivada + '"]').prop('selected', true);
    $('#dahivadafrac option[value="' + se_dahivadafrac + '"]').prop('selected', true);
    $('#vada option[value="' + se_vada + '"]').prop('selected', true);
    $('#vadafrac option[value="' + se_vadafrac + '"]').prop('selected', true);
    $('#dosa option[value="' + se_dosa + '"]').prop('selected', true);
    $('#dosafrac option[value="' + se_dosafrac + '"]').prop('selected', true);
    $('#mas_dosa option[value="' + se_mas_dosa + '"]').prop('selected', true);
    $('#mas_dosafrac option[value="' + se_mas_dosafrac + '"]').prop('selected', true);
    $('#idli option[value="' + se_idli + '"]').prop('selected', true);
    $('#idlifrac option[value="' + se_idlifrac + '"]').prop('selected', true);
    $('#samosa option[value="' + se_samosa + '"]').prop('selected', true);
    $('#samosafrac option[value="' + se_samosafrac + '"]').prop('selected', true);
    $('#sandwich option[value="' + se_sandwich + '"]').prop('selected', true);
    $('#sandwichfrac option[value="' + se_sandwichfrac + '"]').prop('selected', true);
    $('#veg_puff option[value="' + se_veg_puff + '"]').prop('selected', true);
    $('#veg_pufffrac option[value="' + se_veg_pufffrac + '"]').prop('selected', true);
    $('#bajji option[value="' + se_bajji + '"]').prop('selected', true);
    $('#bajjifrac option[value="' + se_bajjifrac + '"]').prop('selected', true);
    $('#pura option[value="' + se_pura + '"]').prop('selected', true);
    $('#purafrac option[value="' + se_purafrac + '"]').prop('selected', true);
    $('#coc_chutney option[value="' + se_coc_chutney + '"]').prop('selected', true);
    $('#coc_chutneyfrac option[value="' + se_coc_chutneyfrac + '"]').prop('selected', true);
    $('#tillchutney option[value="' + se_tillchutney + '"]').prop('selected', true);
    $('#tillchutneyfrac option[value="' + se_tillchutneyfrac + '"]').prop('selected', true);

    $("#poha").selectmenu("refresh");
    $("#pohafrac").selectmenu("refresh");
    $("#chat").selectmenu("refresh");
    $("#chatfrac").selectmenu("refresh");
    $("#dahivada").selectmenu("refresh");
    $("#dahivadafrac").selectmenu("refresh");
    $("#vada").selectmenu("refresh");
    $("#vadafrac").selectmenu("refresh");
    $("#dosa").selectmenu("refresh");
    $("#dosafrac").selectmenu("refresh");
    $("#mas_dosa").selectmenu("refresh");
    $("#mas_dosafrac").selectmenu("refresh");
    $("#idli").selectmenu("refresh");
    $("#idlifrac").selectmenu("refresh");
    $("#samosa").selectmenu("refresh");
    $("#samosafrac").selectmenu("refresh");
    $("#sandwich").selectmenu("refresh");
    $("#sandwichfrac").selectmenu("refresh");
    $("#veg_puff").selectmenu("refresh");
    $("#veg_pufffrac").selectmenu("refresh");
    $("#bajji").selectmenu("refresh");
    $("#bajjifrac").selectmenu("refresh");
    $("#pura").selectmenu("refresh");
    $("#purafrac").selectmenu("refresh");
    $("#coc_chutney").selectmenu("refresh");
    $("#coc_chutneyfrac").selectmenu("refresh");
    $("#tillchutney").selectmenu("refresh");
    $("#tillchutneyfrac").selectmenu("refresh");


    /* SWEETS */
    var se_chikki = sessionStorage.getItem('se_chikki');
    var se_chikkifrac = sessionStorage.getItem('se_chikkifrac');
    var se_cake_fruit = sessionStorage.getItem('se_cake_fruit');
    var se_cake_fruitfrac = sessionStorage.getItem('se_cake_fruitfrac');
    var se_breadpudd = sessionStorage.getItem('se_breadpudd');
    var se_breadpudfrac = sessionStorage.getItem('se_breadpudfrac');
    var se_custard = sessionStorage.getItem('se_custard');
    var se_custardfrac = sessionStorage.getItem('se_custardfrac');
    var se_payasam = sessionStorage.getItem('se_payasam');
    var se_payasamfrac = sessionStorage.getItem('se_payasamfrac');
    var se_shrikhand = sessionStorage.getItem('se_shrikhand');
    var se_shrikhandfrac = sessionStorage.getItem('se_shrikhandfrac');
    var se_pooranpoli = sessionStorage.getItem('se_pooranpoli');
    var se_pooranpolifrac = sessionStorage.getItem('se_pooranpolifrac');
    var se_gulabjamun = sessionStorage.getItem('se_gulabjamun');
    var se_gulabjamunfrac = sessionStorage.getItem('se_gulabjamunfrac');
    var se_rasgulla = sessionStorage.getItem('se_rasgulla');
    var se_rasgullafrac = sessionStorage.getItem('se_rasgullafrac');
    var se_icecream = sessionStorage.getItem('se_icecream');
    var se_icecreamfrac = sessionStorage.getItem('se_icecreamfrac');



    $('#chikki option[value="' + se_chikki + '"]').prop('selected', true);
    $('#chikkifrac option[value="' + se_chikkifrac + '"]').prop('selected', true);
    $('#cake_fruit option[value="' + se_cake_fruit + '"]').prop('selected', true);
    $('#cake_fruitfrac option[value="' + se_cake_fruitfrac + '"]').prop('selected', true);
    $('#breadpudd option[value="' + se_breadpudd + '"]').prop('selected', true);
    $('#breadpudfrac option[value="' + se_breadpudfrac + '"]').prop('selected', true);
    $('#custard option[value="' + se_custard + '"]').prop('selected', true);
    $('#custardfrac option[value="' + se_custardfrac + '"]').prop('selected', true);
    $('#payasam option[value="' + se_payasam + '"]').prop('selected', true);
    $('#payasamfrac option[value="' + se_payasamfrac + '"]').prop('selected', true);
    $('#shrikhand option[value="' + se_shrikhand + '"]').prop('selected', true);
    $('#shrikhandfrac option[value="' + se_shrikhandfrac + '"]').prop('selected', true);
    $('#pooranpoli option[value="' + se_pooranpoli + '"]').prop('selected', true);
    $('#pooranpolifrac option[value="' + se_pooranpolifrac + '"]').prop('selected', true);
    $('#gulabjamun option[value="' + se_gulabjamun + '"]').prop('selected', true);
    $('#gulabjamunfrac option[value="' + se_gulabjamunfrac + '"]').prop('selected', true);
    $('#rasgulla option[value="' + se_rasgulla + '"]').prop('selected', true);
    $('#rasgullafrac option[value="' + se_rasgullafrac + '"]').prop('selected', true);
    $('#icecream option[value="' + se_icecream + '"]').prop('selected', true);
    $('#icecreamfrac option[value="' + se_icecreamfrac + '"]').prop('selected', true);


    $("#chikki").selectmenu("refresh");
    $("#chikkifrac").selectmenu("refresh");
    $("#cake_fruit").selectmenu("refresh");
    $("#cake_fruitfrac").selectmenu("refresh");
    $("#breadpudd").selectmenu("refresh");
    $("#breadpudfrac").selectmenu("refresh");
    $("#custard").selectmenu("refresh");
    $("#custardfrac").selectmenu("refresh");
    $("#payasam").selectmenu("refresh");
    $("#payasamfrac").selectmenu("refresh");
    $("#shrikhand").selectmenu("refresh");
    $("#shrikhandfrac").selectmenu("refresh");
    $("#gulabjamun").selectmenu("refresh");
    $("#gulabjamunfrac").selectmenu("refresh");
    $("#rasgulla").selectmenu("refresh");
    $("#rasgullafrac").selectmenu("refresh");
    $("#icecream").selectmenu("refresh");
    $("#icecreamfrac").selectmenu("refresh");

    /* NON-VEG */
    var se_fishfillet = sessionStorage.getItem('se_fishfillet');
    var se_fishfilletfrac = sessionStorage.getItem('se_fishfilletfrac');
    var se_meat = sessionStorage.getItem('se_meat');
    var se_meatfrac = sessionStorage.getItem('se_meatfrac');
    var se_prawncurry = sessionStorage.getItem('se_prawncurry');
    var se_prawncurryfrac = sessionStorage.getItem('se_prawncurryfrac');
    var se_egg = sessionStorage.getItem('se_egg');
    var se_eggfrac = sessionStorage.getItem('se_eggfrac');


    $('#fishfillet option[value="' + se_fishfillet + '"]').prop('selected', true);
    $('#fishfilletfrac option[value="' + se_fishfilletfrac + '"]').prop('selected', true);
    $('#meat option[value="' + se_meat + '"]').prop('selected', true);
    $('#meatfrac option[value="' + se_meatfrac + '"]').prop('selected', true);
    $('#prawncurry option[value="' + se_prawncurry + '"]').prop('selected', true);
    $('#prawncurryfrac option[value="' + se_prawncurryfrac + '"]').prop('selected', true);
    $('#egg option[value="' + se_egg + '"]').prop('selected', true);
    $('#eggfrac option[value="' + se_eggfrac + '"]').prop('selected', true);


    $("#fishfillet").selectmenu("refresh");
    $("#fishfilletfrac").selectmenu("refresh");
    $("#meat").selectmenu("refresh");
    $("#meatfrac").selectmenu("refresh");
    $("#prawncurry").selectmenu("refresh");
    $("#prawncurryfrac").selectmenu("refresh");
    $("#egg").selectmenu("refresh");
    $("#eggfrac").selectmenu("refresh");
});