function cereal() {
          var rice = $("#rice").val();
			    var khichari = $("#khichari").val();
			    var pulao = $("#pulao").val();
				  var paratha = $("#paratha").val();
				  var phulka = $("#phulka").val();
				  var puri = $("#puri").val();
				  var bhatura = $("#bhatura").val();
					var pot_paratha = $("#pot_paratha").val();
				  var ragiroti = $("#ragiroti").val();	
					//calculate					
ricecal=rice*3.25;
khicharical = khichari*11.55;
pulaocal = pulao*28.45;
parathacal = paratha*16.4;
phulkacal = phulka*12;
purical = puri*8.066666667;
bhaturacal = bhatura*24.4;
pot_parathacal = pot_paratha*31.5;
ragirotical = ragiroti*103;
	alert('cereal');
}

function currydal()
{
	alert('curry');
					var chanadal = $("#chanadal").val();
			    var mungdal = $("#mungdal").val();
			    var masurdal = $("#masurdal").val();
				  var turdal = $("#turdal").val();
				  var spinach = $("#spinach").val();
				  var sambar = $("#sambar").val();
				  var kadhi = $("#kadhi").val();
					var chole = $("#chole").val();
				  var mungwhole = $("#mungwhole").val();
				  var masurwhole = $("#masurwhole").val();
					var rajmah = $("#rajmah").val();
				  var chawali = $("#chawali").val();	
chanadalcal =chanadal*17.5;
mungdalcal =mungdal*71.7;
masurdalcal =masurdal*65.8;
turdalcal=turdal*27.1;
spinachcal=spinach*77.9;
sambarcal=sambar*38.3;
kadhical=kadhi*66.6;
cholecal=chole*85.9;
mungwholecal=mungwhole*33.7;
masurwholecal=masurwhole*20.8;
rajmahcal=rajmah*94.2;
chawalical=chawali*38;
}


function veg_gravy(){	
					var avial = $("#avial").val();
			    var bhagara = $("#bhagara").val();
			    var matar = $("#matar").val();
				  var aloomatar = $("#aloomatar").val();
				  var potatocurry = $("#potatocurry").val();
				  var kofta = $("#kofta").val();
				  var kurma = $("#kurma").val();
					var soup = $("#soup").val();
				  var paneermas = $("#paneermas").val();
var avialfrac = $("#avialfrac").val();
var bhagarafrac = $("#bhagarafrac").val();
var matarfrac = $("#matarfrac").val();
var aloomatarfrac = $("#aloomatarfrac").val();
var potatofrac = $("#potatocurryfrac").val();
var koftafrac = $("#koftafrac").val();
var kurmafrac = $("#kurmafrac").val();
var soupfrac = $("#soupfrac").val();
var paneerfrac = $("#paneermasfrac").val();	
			var test=potatocurry/potatofrac;
avialcal=avial*44.7;
bhagaracal=bhagara*163.3;
matarcal=matar*97.5;
aloomatarcal=aloomatar*23.6;
potatocurrycal=test*22.8;
koftacal=kofta*139.7;
kurmacal=kurma*95.3;
soupcal=soup*30.6;
paneermascal=paneermas*72;


alert(potatocurry);
alert(potatocurrycal);

}