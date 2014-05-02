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
var mungdalcal;
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
		
cereal_total1=ricecal+khicharical+pulaocal+parathacal+phulkacal+purical+bhaturacal+pot_parathacal+ragirotical;

localStorage.setItem("cereal_total", cereal_total1);
}

function currydal() {

    var chanadal = $("#chanadal").val() + $("#chanadalfrac").val();
    var mungdal = $("#mungdal").val() + $("#mungdalfrac").val();
    var masurdal = $("#masurdal").val() + $("#masurdalfrac").val();
    var turdal = $("#turdal").val() + $("#turdalfrac").val();
    var spinach = $("#spinach").val() + $("#spinachfrac").val();
    var sambar = $("#sambar").val() + $("#sambarfrac").val();
    var kadhi = $("#kadhi").val() + $("#kadhifrac").val();
    var chole = $("#chole").val() + $("#cholefrac").val();
    var mungwhole = $("#mungwhole").val() + $("#mungwholefrac").val();
    var masurwhole = $("#masurwhole").val() + $("#masurwholefrac").val();
    var rajmah = $("#rajmah").val() + $("#rajmahfrac").val();
    var chawali = $("#chawali").val() + $("#chawalifrac").val();
		
    chanadalcal = chanadal * 17.5;
    mungdalcal = mungdal * 71.7;
    masurdalcal = masurdal * 65.8;
    turdalcal = turdal * 27.1;
    spinachcal = spinach * 77.9;
    sambarcal = sambar * 38.3;
    kadhical = kadhi * 66.6;
    cholecal = chole * 85.9;
    mungwholecal = mungwhole * 33.7;
    masurwholecal = masurwhole * 20.8;
    rajmahcal = rajmah * 94.2;
    chawalical = chawali * 38;
		
		var currydal_total=chanadalcal+mungdalcal+masurdalcal+turdalcal+spinachcal+sambarcal+kadhical+cholecal+mungwholecal+masurwholecal+rajmahcal+chawalical;
	
localStorage.setItem("currydal_total", currydal_total);
	
}


function veg_gravy() {
    var avial = $("#avial").val() + $("#avialfrac").val();
    var bhagara = $("#bhagara").val() + $("#bhagarafrac").val();
    var matar = $("#matar").val() + $("#matarfrac").val();
    var aloomatar = $("#aloomatar").val() + $("#aloomatarfrac").val();
    var potatocurry = $("#potatocurry").val() + $("#potatocurryfrac").val();
    var kofta = $("#kofta").val() + $("#koftafrac").val();
    var kurma = $("#kurma").val() + $("#kurmafrac").val();
    var soup = $("#soup").val() + $("#soupfrac").val();
    var paneermas = $("#paneermas").val() + $("#paneermasfrac").val();

    avialcal = avial * 44.7;
    bhagaracal = bhagara * 163.3;
    matarcal = matar * 97.5;
    aloomatarcal = aloomatar * 23.6;
    potatocurrycal = potatocurry * 30.4;
    koftacal = kofta * 139.7;
    kurmacal = kurma * 95.3;
    soupcal = soup * 30.6;
    paneermascal = paneermas * 72;
		
   var veg_gravy_total=avialcal+bhagaracal+matarcal+aloomatarcal+potatocurrycal+koftacal+kurmacal+soupcal+paneermascal;
	 localStorage.setItem("veg_gravy_total", veg_gravy_total);
}

function veg_dry() {
    var beans = $("#beans").val() + $("#beansfrac").val();
    var baiganaloo = $("#baiganaloo").val() + $("#baiganaloofrac").val();
    var mirchi = $("#mirchi").val() + $("#mirchifrac").val();
    var gopigaajar = $("#gopigaajar").val() + $("#gopigaajarfrac").val();
    var bhindi = $("#bhindi").val() + $("#bhindifrac").val();
    var kaddu = $("#kaddu").val() + $("#kaddufrac").val();
    var baigan = $("#baigan").val() + $("#baiganfrac").val();
    var cabbage = $("#cabbage").val() + $("#cabbagefrac").val();
    var leafyveg1 = $("#leafyveg1").val() + $("#leafyveg1frac").val();
    var leafyveg2 = $("#leafyveg2").val() + $("#leafyveg2frac").val();
    var leafyveg3 = $("#leafyveg3").val() + $("#leafyveg3frac").val();
    var leafyveg4 = $("#leafyveg4").val() + $("#leafyveg4frac").val();
		
    beanscal = beans * 41.9;
    baiganaloocal = baiganaloo * 21.1;
    mirchical = mirchi * 24.3;
    gopigaajarcal = gopigaajar * 59.2;
    bhindical = bhindi * 123.06;
    kadducal = kaddu * 33.1;
    baigancal = baigan * 63.2;
    cabbagecal = cabbage * 48.1;
    leafyveg1cal = leafyveg1 * 396;
    leafyveg2cal = leafyveg2 * 1017;
    leafyveg3cal = leafyveg3 * 261;
    leafyveg4cal = leafyveg4 * 187;
		
 var veg_dry_total=beanscal+baiganaloocal+mirchical+gopigaajarcal+bhindical+kadducal+baigancal+cabbagecal+leafyveg1cal+leafyveg2cal+leafyveg3cal+leafyveg4cal;
 
  localStorage.setItem("veg_dry_total", veg_dry_total);
}

function snacks() {
    var poha = $("#poha").val() + $("#pohafrac").val();
    var upma = $("#upma").val() + $("#upmafrac").val();
    var chat = $("#chat").val() + $("#chatfrac").val();
    var dahivada = $("#dahivada").val() + $("#dahivadafrac").val();
    var vada = $("#vada").val() + $("#vadafrac").val();
    var dosa = $("#dosa").val() + $("#dosafrac").val();
    var mas_dosa = $("#mas_dosa").val() + $("#mas_dosafrac").val();
    var idli = $("#idli").val() + $("#idlifrac").val();
    var pot_vada = $("#pot_vada").val() + $("#pot_vadafrac").val();
    var samosa = $("#samosa").val() + $("#samosafrac").val();
    var sandwich = $("#sandwich").val() + $("#sandwichfrac").val();
    var veg_puff = $("#veg_puff").val() + $("#veg_pufffrac").val();
    var bajji = $("#bajji").val() + $("#bajjifrac").val();
    var pura = $("#pura").val() + $("#purafrac").val();
		
    pohacal = poha * 22.1333;
    upmacal = upma * 28.56;
    chatcal = chat * 39.36;
    dahivadacal = dahivada * 143.2;
    vadacal = vada * 20.05;
    dosacal = dosa * 1.3;
    mas_dosacal = mas_dosa * 37.2;
    idlical = idli * 10;
    pot_vadacal = pot_vada * 16.65;
    samosacal = samosa * 5.8;
    sandwichcal = sandwich * 7.15;
    veg_puffcal = veg_puff * 19.6;
    bajjical = bajji * 1.9625;
    puracal = pura * 50.4;

var snacks_total=pohacal+upmacal+chatcal+dahivadacal+vadacal+dosacal+mas_dosacal+idlical+pot_vadacal+samosacal+sandwichcal+veg_puffcal+bajjical+puracal;


localStorage.setItem("snacks_total", snacks_total);
}

function sweets() {
    var chikki = $("#chikki").val() + $("#chikkifrac").val();
    var cake_fruit = $("#cake_fruit").val() + $("#cake_fruitfrac").val();
    var biscuit_nut = $("#biscuit_nut").val() + $("#biscuit_nutfrac").val();
    var breadpudd = $("#breadpudd").val() + $("#breadpudfrac").val();
    var custard = $("#custard").val() + $("#custardfrac").val();
    var halwa = $("#halwa").val() + $("#halwafrac").val();
    var payasam = $("#payasam").val() + $("#payasamfrac").val();
    var shrikhand = $("#shrikhand").val() + $("#shrikhandfrac").val();
    var pooranpoli = $("#pooranpoli").val() + $("#pooranpolifrac").val();

    chikkical = chikki * 11.55;
    cake_fruitcal = cake_fruit * 13.9;
    biscuit_nutcal = biscuit_nut * 2.8;
    breadpuddcal = breadpudd * 125.6;
    custardcal = custard * 78.9;
    halwacal = halwa * 5.466666667;
    payasamcal = payasam * 81.7;
    shrikhandcal = shrikhand * 313.4666667;
    pooranpolical = pooranpoli * 15.5;

var sweets_total=chikkical+cake_fruitcal+biscuit_nutcal+breadpuddcal+custardcal+halwacal+payasamcal+shrikhandcal+pooranpolical;

localStorage.setItem("sweets_total", sweets_total);
}


function nonveg() {
    var fishfillet = $("#fishfillet").val() + $("#fishfilletfrac").val();
    var fishfried = $("#fishfried").val() + $("#fishfriedfrac").val();
    var muttoncurry = $("#muttoncurry").val() * $("#muttoncurryfrac").val();
    var prawncurry = $("#prawncurry").val() + $("#prawncurryfrac").val();
    var dumchicken = $("#dumchicken").val() + $("#dumchickenfrac").val();

	
    fishfilletcal = fishfillet * 246;
    fishfriedcal = fishfried * 99.25;
    muttoncurrycal = muttoncurry * 27.83333333;
    prawncurrycal = prawncurry * 389.3;
    dumchickencal = dumchicken * 149.1;


var nonveg_total=	fishfilletcal+fishfriedcal+muttoncurrycal+prawncurrycal+dumchickencal;

localStorage.setItem("nonveg_total", nonveg_total);
}

function milk() {
    var milk_buffalo = $("#milk_buffalo").val() + $("#milk_buffalofrac").val();
    var milk_cow = $("#milk_cow").val() + $("#milk_cowfrac").val();
    var skimmed_milk = $("#skimmed_milk").val() * $("#skimmed_milkfrac").val();
    var curd = $("#curd").val() + $("#curdfrac").val();
    var cheese = $("#cheese").val() + $("#cheesefrac").val();
    var buttermilk = $("#buttermilk").val() + $("#buttermilkfrac").val();
    var lassi = $("#lassi").val() + $("#lassifrac").val();
    var bananashake = $("#bananashake").val() * $("#bananashakefrac").val();
    var strawberry = $("#strawberry").val() + $("#strawberryfrac").val();
    var apple = $("#apple").val() + $("#applefrac").val();

    milk_buffalocal = milk_buffalo * 315;
    milk_cowcal = milk_cow * 180;
    skimmed_milkcal = skimmed_milk * 180;
    curdcal = curd * 223;
    cheesecal = cheese * 237;
    buttermilkcal = buttermilk * 15;
    lassical = lassi * 149;
    bananashakecal = bananashake * 126;
    strawberrycal = strawberry * 135;
    applecal = apple * 125;
		
	var	milk_total=milk_buffalocal+milk_cowcal+skimmed_milkcal+curdcal+cheesecal+buttermilkcal+lassical+bananashakecal+strawberrycal+applecal;
	
		localStorage.setItem("milk_total", milk_total);
}

function others() {
    var coc_chutney = $("#coc_chutney").val() + $("#coc_chutneyfrac").val();
    var tillchutney = $("#tillchutney").val() + $("#tillchutneyfrac").val();

    coc_chutneycal = coc_chutney * 60;
    tillchutneycal = tillchutney * 275;	

var others_total=coc_chutneycal+	tillchutneycal;	
			localStorage.setItem("others_total", others_total);
	
		window.location="result.html";
}

function calculate(){

var cereal_tot=	 parseInt(localStorage.getItem("cereal_total"));
var currydal_tot=	parseInt(localStorage.getItem("currydal_total"));
var veg_gravy_tot=	parseInt(localStorage.getItem("veg_gravy_total"));
var veg_dry_tot=	parseInt(localStorage.getItem("veg_dry_total"));
var snacks_tot=	parseInt(localStorage.getItem("snacks_total"));
var sweets_tot=parseInt(localStorage.getItem("sweets_total"));
var nonveg_tot=	parseInt(localStorage.getItem("nonveg_total"));
var milk_tot=	parseInt(localStorage.getItem("milk_total"));
var others_tot=	parseInt(localStorage.getItem("others_total"));


var totalcalcium=cereal_tot+currydal_tot+veg_gravy_tot+veg_dry_tot+snacks_tot+sweets_tot+nonveg_tot+milk_tot+others_tot;

totalcalcium=totalcalcium/3;
totalcalcium=totalcalcium.toFixed(2);

 $("#resultval").text(totalcalcium+"mg");

var agesel=localStorage.getItem("age");
var gensel= localStorage.getItem("gender");
var pregsel= localStorage.getItem("preg");
var lactsel= localStorage.getItem("lact");
var menosel= localStorage.getItem("menopause");

//Children
if(agesel <=9 ){

	if(totalcalcium <= 600){
		
		$(".resultcom").html("<span style='color:#FF0000'>NO!!!</span> <p> You need to improve your intake of calcium. Please consult your doctor for further advice. </p>");
	}
	else if (totalcalcium > 600){
		
		$(".resultcom").html("<span style='color:#FF0000'> YES!! <br/>Congratulations!! </span> <p>Continue to include calcium-rich foods in your diet.</p>");
	}
}

//10-18
if(agesel >=10 || agesel <=18 ){

	if(totalcalcium <= 800){		
		$(".resultcom").html("<span style='color:#FF0000'>NO!!!</span> <p> You need to improve your intake of calcium. Please consult your doctor for further advice. </p>");
	}
	else if (totalcalcium > 800){

		$(".resultcom").html("<span style='color:#FF0000'> YES!! <br/>Congratulations!! </span> <p>Continue to include calcium-rich foods in your diet.</p>");
	}
}
//adult women
if((agesel >= 19) && (gensel == 'female')){

	if(totalcalcium <= 600){
		
		$(".resultcom").html("<span style='color:#FF0000'>NO!!!</span> <p> You need to improve your intake of calcium. Please consult your doctor for further advice. </p>");
	}
	else if (totalcalcium > 600){
	
		$(".resultcom").html("<span style='color:#FF0000'> YES!! <br/>Congratulations!! </span> <p>Continue to include calcium-rich foods in your diet.</p>");
	}
}
//pregnant women
if(pregsel == 'yes'){

	if(totalcalcium <= 1200){
		
		$(".resultcom").html("<span style='color:#FF0000'>NO!!!</span> <p> You need to improve your intake of calcium. Please consult your doctor for further advice. </p>");
	}
	else if (totalcalcium > 1200){
		
		$(".resultcom").html("<span style='color:#FF0000'> YES!! <br/>Congratulations!! </span> <p>Continue to include calcium-rich foods in your diet.</p>");
	}
}

//lactating women
if(lactsel == 'yes'){

	if(totalcalcium <= 1200){
		
		$(".resultcom").html("<span style='color:#FF0000'>NO!!!</span> <p> You need to improve your intake of calcium. Please consult your doctor for further advice. </p>");
	}
	else if (totalcalcium > 1200){
		
		$(".resultcom").html("<span style='color:#FF0000'> YES!! <br/>Congratulations!! </span> <p>Continue to include calcium-rich foods in your diet.</p>");
	}
}


//post menopausal women
if(menosel == 'yes'){

	if(totalcalcium <= 800){
		
		$(".resultcom").html("<span style='color:#FF0000'>NO!!!</span> <p> You need to improve your intake of calcium. Please consult your doctor for further advice. </p>");
	}
	else if (totalcalcium > 800){
		
		$(".resultcom").html("<span style='color:#FF0000'> YES!! <br/>Congratulations!! </span> <p>Continue to include calcium-rich foods in your diet.</p>");
	}
}

//adult men
if((agesel >= 19) || (age <= 65) && (gensel == 'male')){

	if(totalcalcium <= 600){
		
		$(".resultcom").html("<span style='color:#FF0000'>NO!!!</span> <p> You need to improve your intake of calcium. Please consult your doctor for further advice. </p>");
	}
	else if (totalcalcium > 600){		
		$(".resultcom").html("<span style='color:#FF0000'> YES!! <br/>Congratulations!! </span> <p>Continue to include calcium-rich foods in your diet.</p>");
	}
}
//adult men 65+
if((agesel > 65) && (gensel == 'male')){

	if(totalcalcium <= 600){
		
		$(".resultcom").html("Not Available");
	}
}
}//calculate