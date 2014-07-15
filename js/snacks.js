$(document).ready(function (e) {
	var name=localStorage.getItem("name");
	$("#top-bar").append(name);
	
	
var se_poha=sessionStorage.getItem('se_poha');
var se_pohafrac=sessionStorage.getItem('se_pohafrac');
var se_chat=sessionStorage.getItem('se_chat');
var se_chatfrac=sessionStorage.getItem('se_chatfrac');
var se_dahivada=sessionStorage.getItem('se_dahivada');
var se_dahivadafrac=sessionStorage.getItem('se_dahivadafrac');
var se_vada=sessionStorage.getItem('se_vada');
var se_vadafrac=sessionStorage.getItem('se_vadafrac');
var se_dosa=sessionStorage.getItem('se_dosa');
var se_dosafrac=sessionStorage.getItem('se_dosafrac');
var se_mas_dosa=sessionStorage.getItem('se_mas_dosa');
var se_mas_dosafrac=sessionStorage.getItem('se_mas_dosafrac');
var se_idli=sessionStorage.getItem('se_idli');
var se_idlifrac=sessionStorage.getItem('se_idlifrac');

var se_samosa=sessionStorage.getItem('se_samosa');
var se_samosafrac=sessionStorage.getItem('se_samosafrac');
var se_sandwich=sessionStorage.getItem('se_sandwich');
var se_sandwichfrac=sessionStorage.getItem('se_sandwichfrac');
var se_veg_puff=sessionStorage.getItem('se_veg_puff');
var se_veg_pufffrac=sessionStorage.getItem('se_veg_pufffrac');
var se_bajji=sessionStorage.getItem('se_bajji');
var se_bajjifrac=sessionStorage.getItem('se_bajjifrac');
var se_pura=sessionStorage.getItem('se_pura');
var se_purafrac=sessionStorage.getItem('se_purafrac');

var se_coc_chutney=sessionStorage.getItem('se_coc_chutney');
var se_coc_chutneyfrac=sessionStorage.getItem('se_coc_chutneyfrac');
var se_tillchutney=sessionStorage.getItem('se_tillchutney');
var se_tillchutneyfrac=sessionStorage.getItem('se_tillchutneyfrac');

$('#poha option[value="'+se_poha+'"]').prop('selected', true);
$('#pohafrac option[value="'+se_pohafrac+'"]').prop('selected', true);
$('#chat option[value="'+se_chat+'"]').prop('selected', true);
$('#chatfrac option[value="'+se_chatfrac+'"]').prop('selected', true);
$('#dahivada option[value="'+se_dahivada+'"]').prop('selected', true);
$('#dahivadafrac option[value="'+se_dahivadafrac+'"]').prop('selected', true);
$('#vada option[value="'+se_vada+'"]').prop('selected', true);
$('#vadafrac option[value="'+se_vadafrac+'"]').prop('selected', true);
$('#dosa option[value="'+se_dosa+'"]').prop('selected', true);
$('#dosafrac option[value="'+se_dosafrac+'"]').prop('selected', true);
$('#mas_dosa option[value="'+se_mas_dosa+'"]').prop('selected', true);
$('#mas_dosafrac option[value="'+se_mas_dosafrac+'"]').prop('selected', true);
$('#idli option[value="'+se_idli+'"]').prop('selected', true);
$('#idlifrac option[value="'+se_idlifrac+'"]').prop('selected', true);
$('#samosa option[value="'+se_samosa+'"]').prop('selected', true);
$('#samosafrac option[value="'+se_samosafrac+'"]').prop('selected', true);
$('#sandwich option[value="'+se_sandwich+'"]').prop('selected', true);
$('#sandwichfrac option[value="'+se_sandwichfrac+'"]').prop('selected', true);
$('#veg_puff option[value="'+se_veg_puff+'"]').prop('selected', true);
$('#veg_pufffrac option[value="'+se_veg_pufffrac+'"]').prop('selected', true);
$('#bajji option[value="'+se_bajji+'"]').prop('selected', true);
$('#bajjifrac option[value="'+se_bajjifrac+'"]').prop('selected', true);
$('#pura option[value="'+se_pura+'"]').prop('selected', true);
$('#purafrac option[value="'+se_purafrac+'"]').prop('selected', true);


$('#coc_chutney option[value="'+se_coc_chutney+'"]').prop('selected', true);
$('#coc_chutneyfrac option[value="'+se_coc_chutneyfrac+'"]').prop('selected', true);
$('#tillchutney option[value="'+se_tillchutney+'"]').prop('selected', true);
$('#tillchutneyfrac option[value="'+se_tillchutneyfrac+'"]').prop('selected', true);

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
		
	

});
