var x = 20;
onEvent("text_input1", "input", function( ) {
  setProperty("text_area1", "text-color", getText("text_input1"));
});
onEvent("slider_vermelho", "input", function( ) {
  setProperty("text_area1", "background-color", rgb(getNumber("slider_vermelho"), getNumber("slider_verde"), getNumber("slider_azul"), 0.5));
});
onEvent("slider_verde", "input", function( ) {
  setProperty("text_area1", "background-color", rgb(getNumber("slider_vermelho"), getNumber("slider_verde"), getNumber("slider_azul"), 0.5));
});
onEvent("slider_azul", "input", function( ) {
  setProperty("text_area1", "background-color", rgb(getNumber("slider_vermelho"), getNumber("slider_verde"), getNumber("slider_azul"), 0.5));
});
onEvent("botãoMais", "click", function( ) {
  x = x + 3;
  setProperty("text_area1", "font-size", x);
});
onEvent("boptãoMenos", "click", function( ) {
  x = x - 3;
  setProperty("text_area1", "font-size", x);
});
onEvent("dropdown1", "input", function( ) {
  setProperty("text_area1", "font-family", getText("dropdown1"));
});
