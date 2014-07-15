$(document).ready(function(e) {
  		var eathabit=localStorage.getItem("eathabit");
		if(eathabit=='veg'){
    $(".non-veg").css("display","none");
		}
		else if(eathabit=='non-veg'){
		 $(".non-veg").css("display","block");
		}
});
var ricecal;
var khicharical;
var pulaocal;
var parathacal;
var phulkacal;
var purical;
var bhaturacal;
var pot_parathacal;
var ragirotical;
var chanadalcal;
var masurdalcal;
var turdalcal;
var spinachcal;
var sambarcal;
var kadhical;
var cholecal;
var mungwholecal;
var masurwholecal;
var rajmahcal;
var chawalical;
var avialcal;
var bhagaracal;
var matarcal;
var aloomatarcal;
var potatocurrycal;
var koftacal;
var kurmacal;
var soupcal;
var paneermascal;
var beanscal;
var baiganaloocal;
var mirchical;
var gopigaajarcal;
var bhindical;
var kadducal;
var baigancal;
var cabbagecal;
var leafyveg1cal;
var leafyveg2cal;
var leafyveg3cal;
var leafyveg4cal;
var pohacal;
var upmacal;
var chatcal;
var dahivadacal;
var vadacal;
var dosacal;
var mas_dosacal;
var idlical;
var pot_vadacal;
var milkshakecal;
var samosacal;
var sandwichcal;
var veg_puffcal;
var bajjical;
var puracal;
var chikkical;
var cake_fruitcal;
var biscuit_nutcal;
var breadpuddcal;
var custardcal;
var halwacal;
var payasamcal;
var shrikhandcal;
var pooranpolical;
var fishfilletcal;
var fishfriedcal;
var muttoncurrycal;
var prawncurrycal;
var dumchickencal;
var milk_buffalocal;
var milk_cowcal;
var skimmed_milkcal;
var curdcal;
var cheesecal;
var buttermilkcal;
var lassical;
var bananashakecal;
var strawberrycal;
var applecal;
var coc_chutneycal;
var tillchutneycal;
var cereal_total;


function milk() {

    var curd = $("#curd").val() + $("#curdfrac").val();
    var cheese = $("#cheese").val() + $("#cheesefrac").val();
    var buttermilk = $("#buttermilk").val() + $("#buttermilkfrac").val();
    var lassi = $("#lassi").val() + $("#lassifrac").val();
    var milkshake = $("#milkshake").val() + $("#milkshakefrac").val();

    curdcal = curd * 223;
    cheesecal = cheese * 237;
    buttermilkcal = buttermilk * 75;
    lassical = lassi * 298;
    milkshakecal = milkshake * 333.4;
    var milk_total = curdcal + cheesecal + buttermilkcal + lassical + milkshakecal;


    /*session storage */


    var se_curd = $("#curd option:selected").val();
    var se_cheese = $("#cheese option:selected").val();
    var se_buttermilk = $("#buttermilk option:selected").val();
    var se_lassi = $("#lassi option:selected").val();
    var se_milkshake = $("#milkshake option:selected").val();
    var se_curd_frac = $("#curdfrac option:selected").val();
    var se_cheese_frac = $("#cheesefrac option:selected").val();
    var se_buttermilk_frac = $("#buttermilkfrac option:selected").val();
    var se_lassi_frac = $("#lassifrac option:selected").val();
    var se_milkshakefrac = $("#milkshakefrac option:selected").val();

    sessionStorage.setItem('se_curd', se_curd);
    sessionStorage.setItem('se_cheese', se_cheese);
    sessionStorage.setItem('se_buttermilk', se_buttermilk);
    sessionStorage.setItem('se_lassi', se_lassi);
    sessionStorage.setItem('se_milkshake', se_milkshake);

    sessionStorage.setItem('se_curd_frac', se_curd_frac);
    sessionStorage.setItem('se_cheese_frac', se_cheese_frac);
    sessionStorage.setItem('se_buttermilk_frac', se_buttermilk_frac);
    sessionStorage.setItem('se_lassi_frac', se_lassi_frac);
    sessionStorage.setItem('se_milkshakefrac', se_milkshakefrac);

    localStorage.setItem("milk_total", milk_total);
}

function cereal() {
    var rice = $("#rice").val() + $("#ricefrac").val();
    var khichari = $("#khichari").val() + $("#khicharifrac").val();
    var pulao = $("#pulao").val() + $("#pulaofrac").val();
    var paratha = $("#paratha").val() + $("#parathafrac").val();
    var phulka = $("#phulka").val() + $("#phulkafrac").val();
    var puri = $("#puri").val() + $("#purifrac").val();
    var bhatura = $("#bhatura").val() + $("#bhaturafrac").val();
    var pot_paratha = $("#pot_paratha").val() + $("#pot_parathafrac").val();
    var ragiroti = $("#ragiroti").val() + $("#ragirotifrac").val();
    //calculate					
    ricecal = rice * 3.25;
    khicharical = khichari * 11.55;
    pulaocal = pulao * 28.45;
    parathacal = paratha * 16.4;
    phulkacal = phulka * 12;
    purical = puri * 8.066666667;
    bhaturacal = bhatura * 24.4;
    pot_parathacal = pot_paratha * 31.5;
    ragirotical = ragiroti * 103;

    cereal_total1 = ricecal + khicharical + pulaocal + parathacal + phulkacal + purical + bhaturacal + pot_parathacal + ragirotical;

    var se_rice = $("#rice option:selected").val();
    var se_khichari = $("#khichari option:selected").val();
    var se_pulao = $("#pulao option:selected").val();
    var se_paratha = $("#paratha option:selected").val();
    var se_phulka = $("#phulka option:selected").val();
    var se_puri = $("#puri option:selected").val();
    var se_bhatura = $("#bhatura option:selected").val();
    var se_pot_paratha = $("#pot_paratha option:selected").val();
    var se_ragiroti = $("#ragiroti option:selected").val();

    var se_ricefrac = $("#ricefrac option:selected").val();
    var se_khicharifrac = $("#khicharifrac option:selected").val();
    var se_pulaofrac = $("#pulaofrac option:selected").val();
    var se_parathafrac = $("#parathafrac option:selected").val();
    var se_phulkafrac = $("#phulkafrac option:selected").val();
    var se_purifrac = $("#purifrac option:selected").val();
    var se_bhaturafrac = $("#bhaturafrac option:selected").val();
    var se_pot_parathafrac = $("#pot_parathafrac option:selected").val();
    var se_ragirotifrac = $("#ragirotifrac option:selected").val();


    sessionStorage.setItem('se_rice', se_rice);
    sessionStorage.setItem('se_khichari', se_khichari);
    sessionStorage.setItem('se_pulao', se_pulao);
    sessionStorage.setItem('se_paratha', se_paratha);
    sessionStorage.setItem('se_phulka', se_phulka);
    sessionStorage.setItem('se_puri', se_puri);
    sessionStorage.setItem('se_bhatura', se_bhatura);
    sessionStorage.setItem('se_ragiroti', se_ragiroti);
    sessionStorage.setItem('se_ricefrac', se_ricefrac);
    sessionStorage.setItem('se_khicharifrac', se_khicharifrac);
    sessionStorage.setItem('se_pulaofrac', se_pulaofrac);
    sessionStorage.setItem('se_parathafrac', se_parathafrac);
    sessionStorage.setItem('se_phulkafrac', se_phulkafrac);
    sessionStorage.setItem('se_purifrac', se_purifrac);
    sessionStorage.setItem('se_bhaturafrac', se_bhaturafrac);
    sessionStorage.setItem('se_pot_parathafrac', se_pot_parathafrac);
    sessionStorage.setItem('se_ragirotifrac', se_ragirotifrac);


    localStorage.setItem("cereal_total", cereal_total1);
}

function currydal() {

    var chanadal = $("#chanadal").val() + $("#chanadalfrac").val();
    var turdal = $("#turdal").val() + $("#turdalfrac").val();
    var spinach = $("#spinach").val() + $("#spinachfrac").val();
    var sambar = $("#sambar").val() + $("#sambarfrac").val();
    var kadhi = $("#kadhi").val() + $("#kadhifrac").val();
    var chole = $("#chole").val() + $("#cholefrac").val();
    var mungwhole = $("#mungwhole").val() + $("#mungwholefrac").val();
    var masurdal = $("#masurdal").val() + $("#masurdalfrac").val();
    var rajmah = $("#rajmah").val() + $("#rajmahfrac").val();


    chanadalcal = chanadal * 17.5;
		 masurdalcal = masurdal * 20.8;
    turdalcal = turdal * 23.95;
    spinachcal = spinach * 74.8;
    sambarcal = sambar * 38.15;
    kadhical = kadhi * 66.6;
    cholecal = chole * 85.9;
    mungwholecal = mungwhole * 32.8;   
    rajmahcal = rajmah * 94.2;
		

    var currydal_total = chanadalcal + turdalcal + spinachcal + sambarcal + kadhical + cholecal + mungwholecal + masurdalcal + rajmahcal;

    var se_chanadal = $("#chanadal option:selected").val();
    var se_masurdal = $("#masurdal option:selected").val();
    var se_turdal = $("#turdal option:selected").val();
    var se_spinach = $("#spinach option:selected").val();
    var se_sambar = $("#sambar option:selected").val();
    var se_kadhi = $("#kadhi option:selected").val();
    var se_chole = $("#chole option:selected").val();
    var se_mungwhole = $("#mungwhole option:selected").val();   
    var se_rajmah = $("#rajmah option:selected").val();


    var se_chanadalfrac = $("#chanadalfrac option:selected").val();
    var se_masurdalfrac = $("#masurdalfrac option:selected").val();
    var se_turdalfrac = $("#turdalfrac option:selected").val();
    var se_spinachfrac = $("#spinachfrac option:selected").val();
    var se_sambarfrac = $("#sambarfrac option:selected").val();
    var se_kadhifrac = $("#kadhifrac option:selected").val();
    var se_cholefrac = $("#cholefrac option:selected").val();
    var se_mungwholefrac = $("#mungwholefrac option:selected").val();  
    var se_rajmahfrac = $("#rajmahfrac option:selected").val();


    sessionStorage.setItem('se_chanadal', se_chanadal);
		sessionStorage.setItem('se_masurdal', se_masurdal);
    sessionStorage.setItem('se_turdal', se_turdal);
    sessionStorage.setItem('se_spinach', se_spinach);
    sessionStorage.setItem('se_sambar', se_sambar);
    sessionStorage.setItem('se_kadhi', se_kadhi);
    sessionStorage.setItem('se_chole', se_chole);
    sessionStorage.setItem('se_mungwhole', se_mungwhole);   
    sessionStorage.setItem('se_rajmah', se_rajmah);


  	sessionStorage.setItem('se_chanadalfrac', se_chanadalfrac);			
    sessionStorage.setItem('se_turdalfrac', se_turdalfrac);
    sessionStorage.setItem('se_spinachfrac', se_spinachfrac);
    sessionStorage.setItem('se_sambarfrac', se_sambarfrac);
    sessionStorage.setItem('se_kadhifrac', se_kadhifrac);
    sessionStorage.setItem('se_cholefrac', se_cholefrac);
    sessionStorage.setItem('se_mungwholefrac', se_mungwholefrac);
    sessionStorage.setItem('se_masurdalfrac', se_masurdalfrac);
    sessionStorage.setItem('se_rajmahfrac', se_rajmahfrac);


    localStorage.setItem("currydal_total", currydal_total);

}


function veg_gravy() {
    var avial = $("#avial").val() + $("#avialfrac").val();
    var bhagara = $("#bhagara").val() + $("#bhagarafrac").val();
    var matar = $("#matar").val() + $("#matarfrac").val();
    var aloomatar = $("#aloomatar").val() + $("#aloomatarfrac").val();

    var kofta = $("#kofta").val() + $("#koftafrac").val();
    var soup = $("#soup").val() + $("#soupfrac").val();
    var paneermas = $("#paneermas").val() + $("#paneermasfrac").val();

    avialcal = avial * 44.7;
    bhagaracal = bhagara * 163.3;
    matarcal = matar * 96.4;
    aloomatarcal = aloomatar * 23.2;
    koftacal = kofta * 139.7;
    soupcal = soup * 30.6;
    paneermascal = paneermas * 72;

    var veg_gravy_total = avialcal + bhagaracal + matarcal + aloomatarcal + koftacal + soupcal + paneermascal;

    var se_avial = $("#avial option:selected").val();
    var se_bhagara = $("#bhagara option:selected").val();
    var se_matar = $("#matar option:selected").val();
    var se_aloomatar = $("#aloomatar option:selected").val();
    var se_kofta = $("#kofta option:selected").val();
    var se_soup = $("#soup option:selected").val();
    var se_paneermas = $("#paneermas option:selected").val();

    var se_avialfrac = $("#avialfrac option:selected").val();
    var se_bhagarafrac = $("#bhagarafrac option:selected").val();
    var se_matarfrac = $("#matarfrac option:selected").val();
    var se_aloomatarfrac = $("#aloomatarfrac option:selected").val();
    var se_koftafrac = $("#koftafrac option:selected").val();
    var se_soupfrac = $("#soupfrac option:selected").val();
    var se_paneermasfrac = $("#paneermasfrac option:selected").val();


    sessionStorage.setItem('se_avial', se_avial);
    sessionStorage.setItem('se_bhagara', se_bhagara);
    sessionStorage.setItem('se_matar', se_matar);
    sessionStorage.setItem('se_aloomatar', se_aloomatar);
    sessionStorage.setItem('se_kofta', se_kofta);

    sessionStorage.setItem('se_soup', se_soup);
    sessionStorage.setItem('se_paneermas', se_paneermas);
    sessionStorage.setItem('se_avialfrac', se_avialfrac);
    sessionStorage.setItem('se_bhagarafrac', se_bhagarafrac);
    sessionStorage.setItem('se_matarfrac', se_matarfrac);
    sessionStorage.setItem('se_aloomatarfrac', se_aloomatarfrac);

    sessionStorage.setItem('se_soupfrac', se_soupfrac);
    sessionStorage.setItem('se_paneermasfrac', se_paneermasfrac);

    localStorage.setItem("veg_gravy_total", veg_gravy_total);
}

function veg_dry() {

    var mirchi = $("#mirchi").val() + $("#mirchifrac").val();
    var gopigaajar = $("#gopigaajar").val() + $("#gopigaajarfrac").val();
    var bhindi = $("#bhindi").val() + $("#bhindifrac").val();
    var kaddu = $("#kaddu").val() + $("#kaddufrac").val();

    var cabbage = $("#cabbage").val() + $("#cabbagefrac").val();
    var leafyveg1 = $("#leafyveg1").val() + $("#leafyveg1frac").val();
    var leafyveg2 = $("#leafyveg2").val() + $("#leafyveg2frac").val();
    var leafyveg3 = $("#leafyveg3").val() + $("#leafyveg3frac").val();
    var leafyveg4 = $("#leafyveg4").val() + $("#leafyveg4frac").val();


    mirchical = mirchi * 22.7;
    gopigaajarcal = gopigaajar * 59.2;
    bhindical = bhindi * 123.06;
    kadducal = kaddu * 33.1;

    cabbagecal = cabbage * 45.8;
    leafyveg1cal = leafyveg1 * 396;
    leafyveg2cal = leafyveg2 * 1017;
    leafyveg3cal = leafyveg3 * 261;
    leafyveg4cal = leafyveg4 * 187;

    var veg_dry_total = mirchical + gopigaajarcal + bhindical + kadducal + cabbagecal + leafyveg1cal + leafyveg2cal + leafyveg3cal + leafyveg4cal;


    var se_mirchi = $("#mirchi option:selected").val();
    var se_gopigaajar = $("#gopigaajar option:selected").val();
    var se_bhindi = $("#bhindi option:selected").val();
    var se_kaddu = $("#kaddu option:selected").val();

    var se_cabbage = $("#cabbage option:selected").val();
    var se_leafyveg1 = $("#leafyveg1 option:selected").val();
    var se_leafyveg2 = $("#leafyveg2 option:selected").val();
    var se_leafyveg3 = $("#leafyveg3 option:selected").val();
    var se_leafyveg4 = $("#leafyveg4 option:selected").val();


    var se_mirchifrac = $("#mirchifrac option:selected").val();
    var se_gopigaajarfrac = $("#gopigaajarfrac option:selected").val();
    var se_bhindifrac = $("#bhindifrac option:selected").val();
    var se_kaddufrac = $("#kaddufrac option:selected").val();

    var se_cabbagefrac = $("#cabbagefrac option:selected").val();
    var se_leafyveg1frac = $("#leafyveg1frac option:selected").val();
    var se_leafyveg2frac = $("#leafyveg2frac option:selected").val();
    var se_leafyveg3frac = $("#leafyveg3frac option:selected").val();
    var se_leafyveg4frac = $("#leafyveg4frac option:selected").val();


    sessionStorage.setItem('se_mirchi', se_mirchi);
    sessionStorage.setItem('se_gopigaajar', se_gopigaajar);
    sessionStorage.setItem('se_bhindi', se_bhindi);
    sessionStorage.setItem('se_kaddu', se_kaddu);

    sessionStorage.setItem('se_cabbage', se_cabbage);
    sessionStorage.setItem('se_leafyveg1', se_leafyveg1);
    sessionStorage.setItem('se_leafyveg2', se_leafyveg2);
    sessionStorage.setItem('se_leafyveg3', se_leafyveg3);
    sessionStorage.setItem('se_leafyveg4', se_leafyveg4);

    sessionStorage.setItem('se_mirchifrac', se_mirchifrac);
    sessionStorage.setItem('se_gopigaajarfrac', se_gopigaajarfrac);
    sessionStorage.setItem('se_bhindifrac', se_bhindifrac);
    sessionStorage.setItem('se_kaddufrac', se_kaddufrac);

    sessionStorage.setItem('se_cabbagefrac', se_cabbagefrac);
    sessionStorage.setItem('se_leafyveg1frac', se_leafyveg1frac);
    sessionStorage.setItem('se_leafyveg2frac', se_leafyveg2frac);
    sessionStorage.setItem('se_leafyveg3frac', se_leafyveg3frac);
    sessionStorage.setItem('se_leafyveg4frac', se_leafyveg4frac);

    localStorage.setItem("veg_dry_total", veg_dry_total);
}

function snacks() {
    var poha = $("#poha").val() + $("#pohafrac").val();
    var chat = $("#chat").val() + $("#chatfrac").val();
    var dahivada = $("#dahivada").val() + $("#dahivadafrac").val();
    var vada = $("#vada").val() + $("#vadafrac").val();
    var dosa = $("#dosa").val() + $("#dosafrac").val();
    var mas_dosa = $("#mas_dosa").val() + $("#mas_dosafrac").val();
    var idli = $("#idli").val() + $("#idlifrac").val();
    var samosa = $("#samosa").val() + $("#samosafrac").val();
    var sandwich = $("#sandwich").val() + $("#sandwichfrac").val();
    var veg_puff = $("#veg_puff").val() + $("#veg_pufffrac").val();
    var bajji = $("#bajji").val() + $("#bajjifrac").val();
    var pura = $("#pura").val() + $("#purafrac").val();

    var coc_chutney = $("#coc_chutney").val() + $("#coc_chutneyfrac").val();
    var tillchutney = $("#tillchutney").val() + $("#tillchutneyfrac").val();

    pohacal = poha * 22.96666667;
    chatcal = chat * 39.36;
    dahivadacal = dahivada * 143.2;
    vadacal = vada * 18.35;
    dosacal = dosa * 1.3;
    mas_dosacal = mas_dosa * 37.2;
    idlical = idli * 10;
    samosacal = samosa * 5.8;
    sandwichcal = sandwich * 7.15;
    veg_puffcal = veg_puff * 19.6;
    bajjical = bajji * 1.9625;
    puracal = pura * 50.4;
    coc_chutneycal = coc_chutney * 60;
    tillchutneycal = tillchutney * 218;

    var snacks_total = pohacal + chatcal + dahivadacal + vadacal + dosacal + mas_dosacal + idlical + samosacal + sandwichcal + veg_puffcal + bajjical + puracal + coc_chutneycal + tillchutneycal;


    var se_poha = $("#poha option:selected").val();
    var se_chat = $("#chat option:selected").val();
    var se_dahivada = $("#dahivada option:selected").val();
    var se_vada = $("#vada option:selected").val();
    var se_dosa = $("#dosa option:selected").val();
    var se_mas_dosa = $("#mas_dosa option:selected").val();
    var se_idli = $("#idli option:selected").val();
    var se_samosa = $("#samosa option:selected").val();
    var se_sandwich = $("#sandwich option:selected").val();
    var se_veg_puff = $("#veg_puff option:selected").val();
    var se_bajji = $("#bajji option:selected").val();
    var se_pura = $("#pura option:selected").val();
    var se_coc_chutney = $("#coc_chutney option:selected").val();
    var se_tillchutney = $("#tillchutney option:selected").val();

    var se_pohafrac = $("#pohafrac option:selected").val();
    var se_chatfrac = $("#chatfrac option:selected").val();
    var se_dahivadafrac = $("#dahivadafrac option:selected").val();
    var se_vadafrac = $("#vadafrac option:selected").val();
    var se_dosafrac = $("#dosafrac option:selected").val();
    var se_mas_dosafrac = $("#mas_dosafrac option:selected").val();
    var se_idlifrac = $("#idlifrac option:selected").val();
    var se_samosafrac = $("#samosafrac option:selected").val();
    var se_sandwichfrac = $("#sandwichfrac option:selected").val();
    var se_veg_pufffrac = $("#veg_pufffrac option:selected").val();
    var se_bajjifrac = $("#bajjifrac option:selected").val();
    var se_purafrac = $("#purafrac option:selected").val();
    var se_coc_chutneyfrac = $("#coc_chutneyfrac option:selected").val();
    var se_tillchutneyfrac = $("#tillchutneyfrac option:selected").val();

    sessionStorage.setItem('se_poha', se_poha);
    sessionStorage.setItem('se_chat', se_chat);
    sessionStorage.setItem('se_dahivada', se_dahivada);
    sessionStorage.setItem('se_vada', se_vada);
    sessionStorage.setItem('se_dosa', se_dosa);
    sessionStorage.setItem('se_idli', se_idli);
    sessionStorage.setItem('se_samosa', se_samosa);
    sessionStorage.setItem('se_sandwich', se_sandwich);
    sessionStorage.setItem('se_veg_puff', se_veg_puff);
    sessionStorage.setItem('se_bajji', se_bajji);
    sessionStorage.setItem('se_pohafrac', se_pohafrac);
    sessionStorage.setItem('se_coc_chutney', se_coc_chutney);
    sessionStorage.setItem('se_coc_chutneyfrac', se_coc_chutneyfrac);

    sessionStorage.setItem('se_chatfrac', se_chatfrac);
    sessionStorage.setItem('se_dahivadafrac', se_dahivadafrac);
    sessionStorage.setItem('se_vadafrac', se_vadafrac);
    sessionStorage.setItem('se_dosafrac', se_dosafrac);
    sessionStorage.setItem('se_mas_dosafrac', se_mas_dosafrac);
    sessionStorage.setItem('se_idlifrac', se_idlifrac);
    sessionStorage.setItem('se_samosafrac', se_samosafrac);
    sessionStorage.setItem('se_sandwichfrac', se_sandwichfrac);
    sessionStorage.setItem('se_veg_pufffrac', se_veg_pufffrac);
    sessionStorage.setItem('se_bajjifrac', se_bajjifrac);
    sessionStorage.setItem('se_purafrac', se_purafrac);
    sessionStorage.setItem('se_tillchutney', se_tillchutney);
    sessionStorage.setItem('se_tillchutneyfrac', se_tillchutneyfrac);

    localStorage.setItem("snacks_total", snacks_total);
}

function sweets() {
    var chikki = $("#chikki").val() + $("#chikkifrac").val();
    var cake_fruit = $("#cake_fruit").val() + $("#cake_fruitfrac").val();
    var breadpudd = $("#breadpudd").val() + $("#breadpudfrac").val();
    var custard = $("#custard").val() + $("#custardfrac").val();
    var payasam = $("#payasam").val() + $("#payasamfrac").val();
    var shrikhand = $("#shrikhand").val() + $("#shrikhandfrac").val();
    var pooranpoli = $("#pooranpoli").val() + $("#pooranpolifrac").val();
    var gulabjamun = $("#gulabjamun").val() + $("#gulabjamunfrac").val();
    var rasgulla = $("#rasgulla").val() + $("#rasgullafrac").val();
    var icecream = $("#icecream").val() + $("#icecreamfrac").val();


    chikkical = chikki * 11.55;
    cake_fruitcal = cake_fruit * 13.9;
    breadpuddcal = breadpudd * 125.6;
    custardcal = custard * 78.9;
    payasamcal = payasam * 81.7;
    shrikhandcal = shrikhand * 313.4666667;
    pooranpolical = pooranpoli * 15.5;
    gulabjamuncal = gulabjamun * 239;
    rasgullacal = rasgulla * 52;
    icecreamcal = icecream * 156;
		
    var sweets_total = chikkical + cake_fruitcal + breadpuddcal + custardcal + payasamcal + shrikhandcal + pooranpolical + gulabjamuncal + rasgullacal + icecreamcal;


    var se_chikki = $("#chikki option:selected").val();
    var se_cake_fruit = $("#cake_fruit option:selected").val();
    var se_breadpudd = $("#breadpudd option:selected").val();
    var se_custard = $("#custard option:selected").val();
    var se_payasam = $("#payasam option:selected").val();
    var se_shrikhand = $("#shrikhand option:selected").val();
    var se_pooranpoli = $("#pooranpoli option:selected").val();
    var se_gulabjamun = $("#gulabjamun option:selected").val();
    var se_rasgulla = $("#rasgulla option:selected").val();
    var se_icecream = $("#icecream option:selected").val();


    var se_chikkifrac = $("#chikkifrac option:selected").val();
    var se_cake_fruitfrac = $("#cake_fruitfrac option:selected").val();
    var se_breadpudfrac = $("#breadpudfrac option:selected").val();
    var se_custardfrac = $("#custardfrac option:selected").val();
    var se_payasamfrac = $("#payasamfrac option:selected").val();
    var se_shrikhandfrac = $("#shrikhandfrac option:selected").val();
    var se_pooranpolifrac = $("#pooranpolifrac option:selected").val();
    var se_gulabjamunfrac = $("#gulabjamunfrac option:selected").val();
    var se_rasgullafrac = $("#rasgullafrac option:selected").val();
    var se_icecreamfrac = $("#icecreamfrac option:selected").val();

    sessionStorage.setItem('se_chikki', se_chikki);
    sessionStorage.setItem('se_cake_fruit', se_cake_fruit);
    sessionStorage.setItem('se_breadpudd', se_breadpudd);
    sessionStorage.setItem('se_custard', se_custard);
    sessionStorage.setItem('se_payasam', se_payasam);
    sessionStorage.setItem('se_shrikhand', se_shrikhand);
    sessionStorage.setItem('se_pooranpoli', se_pooranpoli);
    sessionStorage.setItem('se_gulabjamun', se_gulabjamun);
    sessionStorage.setItem('se_rasgulla', se_rasgulla);
    sessionStorage.setItem('se_icecream', se_icecream);


    sessionStorage.setItem('se_chikkifrac', se_chikkifrac);
    sessionStorage.setItem('se_cake_fruitfrac', se_cake_fruitfrac);
    sessionStorage.setItem('se_breadpudfrac', se_breadpudfrac);
    sessionStorage.setItem('se_custardfrac', se_custardfrac);
    sessionStorage.setItem('se_payasamfrac', se_payasamfrac);
    sessionStorage.setItem('se_shrikhandfrac', se_shrikhandfrac);
    sessionStorage.setItem('se_pooranpolifrac', se_pooranpolifrac);
    sessionStorage.setItem('se_gulabjamunfrac', se_gulabjamunfrac);
    sessionStorage.setItem('se_rasgullafrac', se_rasgullafrac);
    sessionStorage.setItem('se_icecreamfrac', icecreamfrac);

    localStorage.setItem("sweets_total", sweets_total);
}


function nonveg() {

    var fishfillet = $("#fishfillet").val() + $("#fishfilletfrac").val();
    var meat = $("#meat").val() + $("#meatfrac").val();

    var prawncurry = $("#prawncurry").val() + $("#prawncurryfrac").val();
    var egg = $("#egg").val() + $("#eggfrac").val();


    fishfilletcal = fishfillet * 104;
    meatcal = meat * 10;
    prawncurrycal = prawncurry * 32.33333333;
    eggcal = egg * 25;


    var nonveg_total = fishfilletcal + meatcal + prawncurrycal + eggcal;

    var se_fishfillet = $("#fishfillet option:selected").val();
    var se_meat = $("#meat option:selected").val();
    var se_prawncurry = $("#prawncurry option:selected").val();
    var se_egg = $("#egg option:selected").val();

    var se_fishfilletfrac = $("#fishfilletfrac option:selected").val();
    var se_meatfrac = $("#meatfrac option:selected").val();
    var se_prawncurryfrac = $("#prawncurryfrac option:selected").val();
    var se_eggfrac = $("#eggfrac option:selected").val();


    sessionStorage.setItem('se_fishfillet', se_fishfillet);
    sessionStorage.setItem('se_fishfilletfrac', se_fishfilletfrac);
    sessionStorage.setItem('se_meat', se_meat);
    sessionStorage.setItem('se_meatfrac', se_meatfrac);

    sessionStorage.setItem('se_prawncurry', se_prawncurry);
    sessionStorage.setItem('se_prawncurryfrac', se_prawncurryfrac);
    sessionStorage.setItem('se_egg', se_egg);
    sessionStorage.setItem('se_eggfrac', se_eggfrac);


    localStorage.setItem("nonveg_total", nonveg_total);
    window.location = "result.html";
}



function calculate() {
        var name = localStorage.getItem("name");
        var age = localStorage.getItem("age");
        var gender = localStorage.getItem("gender");
        if (age <= 9) {
            children();

        }

        if ((age >= 10) && (age <= 18)) {
            adult();

        }
        if ((age >= 19) && (gender == 'male')) {

            men();

        }
        if ((age >= 19) && (gender == 'female')) {
            women();

        }
        /* Children */
        function children() {

            $('#calrecomm').text('600 mg/day');
        }

        /* adult */
        function adult() {

            var age = localStorage.getItem("age");
            if ((age >= 10) && (age <= 18)) {
                $('#calrecomm').text('800 mg/day');
            }
        }

        /* men */
        function men() {
            var age = localStorage.getItem("age");
            if ((age >= 19)) {
                $('#calrecomm').text('600 mg/day');

            }

        }

        /* Women */
        function women() {
            var preg = localStorage.getItem("preg");
            var lact = localStorage.getItem("lact");
            var menopause = localStorage.getItem("menopause");
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
        var cereal_tot = parseFloat(localStorage.getItem("cereal_total"));
        var currydal_tot = parseFloat(localStorage.getItem("currydal_total"));
        var veg_gravy_tot = parseFloat(localStorage.getItem("veg_gravy_total"));
        var veg_dry_tot = parseFloat(localStorage.getItem("veg_dry_total"));
        var snacks_tot = parseFloat(localStorage.getItem("snacks_total"));
        var sweets_tot = parseFloat(localStorage.getItem("sweets_total"));
        var nonveg_tot = parseFloat(localStorage.getItem("nonveg_total"));
        var milk_tot = parseFloat(localStorage.getItem("milk_total"));
        var others_tot = parseFloat(localStorage.getItem("others_total"));


        if (isNaN(cereal_tot)) {
            cereal_tot = 0;

        }
        if (isNaN(currydal_tot)) {
            currydal_tot = 0;
        }
        if (isNaN(veg_gravy_tot)) {
            veg_gravy_tot = 0;
        }
        if (isNaN(veg_dry_tot)) {
            veg_dry_tot = 0;
        }
        if (isNaN(snacks_tot)) {
            snacks_tot = 0;
        }
        if (isNaN(sweets_tot)) {
            sweets_tot = 0;
        }
        if (isNaN(nonveg_tot)) {
            nonveg_tot = 0;
        }
        if (isNaN(milk_tot)) {
            milk_tot = 0;
        }
        if (isNaN(others_tot)) {
            others_tot = 0;
        }



        var totalcalcium = cereal_tot + currydal_tot + veg_gravy_tot + veg_dry_tot + snacks_tot + sweets_tot + nonveg_tot + milk_tot + others_tot;

        totalcalcium = totalcalcium / 3;
        totalcalcium = totalcalcium.toFixed(2);
        totalcalcium = Math.ceil(totalcalcium);

        $("#resultval").text(totalcalcium + " mg");

        var agesel = localStorage.getItem("age");
        var gensel = localStorage.getItem("gender");
        var pregsel = localStorage.getItem("preg");
        var lactsel = localStorage.getItem("lact");
        var menosel = localStorage.getItem("menopause");

        //Children
        if (agesel <= 9) {

            if (totalcalcium <= 600) {

                $(".resultcom").html("<span>NO! <img src='images/sadicon.png'/> You need  to improve your intake of calcium. Please consult your doctor for further advice or <a href='slide1.html' data-ajax='false'>tap here</a> to know more. </span>");
            } else if (totalcalcium > 600) {

                $(".resultcom").html("<span> YES!  <img src='images/smileicon.png'/> Congratulations!! </span> <p>Continue to include calcium-rich foods in your diet or <a href='slide1.html' data-ajax='false'>tap here</a> to know more.</p>");
            }
        }

        //10-18
        if (agesel >= 10 || agesel <= 18) {

            if (totalcalcium <= 800) {
                $(".resultcom").html("<span>NO! <img src='images/sadicon.png'/> You need  to improve your intake of calcium. Please consult your doctor for further advice or <a href='slide1.html' data-ajax='false'>tap here</a> to know more.</span>");
            } else if (totalcalcium > 800) {

                $(".resultcom").html("<span> YES! <img src='images/smileicon.png'/> Congratulations!! </span> <p>Continue to include calcium-rich foods in your diet or <a href='slide1.html' data-ajax='false'>tap here</a> to know more.</p>");
            }
        }
        //adult women
        if ((agesel >= 19) && (gensel == 'female')) {

            if (totalcalcium <= 600) {

                $(".resultcom").html("<span>NO! <img src='images/sadicon.png'/> You need  to improve your intake of calcium. Please consult your doctor for further advice or <a href='slide1.html' data-ajax='false'>tap here</a> to know more. </span>");
            } else if (totalcalcium > 600) {

                $(".resultcom").html("<span> YES! <img src='images/smileicon.png'/> Congratulations!! </span> <p>Continue to include calcium-rich foods in your diet or <a href='slide1.html' data-ajax='false'>tap here</a> to know more.</p>");
            }
        }
        //pregnant women
        if (pregsel == 'yes') {

            if (totalcalcium <= 1200) {

                $(".resultcom").html("<span>NO! <img src='images/sadicon.png'/> You need  to improve your intake of calcium. Please consult your doctor for further advice or <a href='slide1.html' data-ajax='false'>tap here</a> to know more. </span>");
            } else if (totalcalcium > 1200) {

                $(".resultcom").html("<span> YES! <img src='images/smileicon.png'/> Congratulations!! </span> <p>Continue to include calcium-rich foods in your diet or <a href='slide1.html' data-ajax='false'>tap here</a> to know more.</p>");
            }
        }

        //lactating women
        if (lactsel == 'yes') {

            if (totalcalcium <= 1200) {

                $(".resultcom").html("<span'>NO! <img src='images/sadicon.png'/> You need  to improve your intake of calcium. Please consult your doctor for further advice or <a href='slide1.html' data-ajax='false'>tap here</a> to know more. </span>");
            } else if (totalcalcium > 1200) {

                $(".resultcom").html("<span> YES! <img src='images/smileicon.png'/> Congratulations!! </span> <p>Continue to include calcium-rich foods in your diet or <a href='slide1.html' data-ajax='false'>tap here</a> to know more.</p>");
            }
        }


        //post menopausal women
        if (menosel == 'yes') {

            if (totalcalcium <= 800) {

                $(".resultcom").html("<span>NO! <img src='images/sadicon.png'/> You need  to improve your intake of calcium. Please consult your doctor for further advice or <a href='slide1.html' data-ajax='false'>tap here</a> to know more. </span>");
            } else if (totalcalcium > 800) {

                $(".resultcom").html("<span> YES! <img src='images/smileicon.png'/> Congratulations!! </span> <p>Continue to include calcium-rich foods in your diet or <a href='slide1.html' data-ajax='false'>tap here</a> to know more.</p>");
            }
        }

        //adult men
        if ((agesel >= 19) && (gensel == 'male')) {

            if (totalcalcium <= 600) {

                $(".resultcom").html("<span>NO! <img src='images/sadicon.png'/> You need  to improve your intake of calcium. Please consult your doctor for further advice or <a href='slide1.html' data-ajax='false'>tap here</a> to know more. </span>");
            } else if (totalcalcium > 600) {
                $(".resultcom").html("<span> YES! <img src='images/smileicon.png'/> Congratulations!! </span> <p>Continue to include calcium-rich foods in your diet or <a href='slide1.html' data-ajax='false'>tap here</a> to know more.</p>");
            }
        }
        //adult men 65+
        /*if((agesel > 65) && (gensel == 'male')){

        	if(totalcalcium <= 600){
        		
        		$(".resultcom").html("Not Available");
        	}
        }*/
    } //calculate