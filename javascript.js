window.onload = function(){
    let who = [ 'Mi Mamá','Mi Hijo','Mi Hermana','Mi cuñada','Mi Pareja','Mi Papá'];
    let action = [ 'come','Juega','cocina','trabaja en','maneja','conduce'];
    let what = ['tallarines con salsa','a la pelota','tortas','cuidando abuelitos','buses', 'camiones'];
    let when = ['en la tarde','despues del colegio','siempre','de lunes a viernes','siempre','por la carretera'];




   var redm1 = Math.floor((Math.random() * who.length) );
   var redm2 = Math.floor((Math.random() * action.length) );
   var redm3 = Math.floor((Math.random() * what.length) );
   var redm4 = Math.floor((Math.random() * when.length) );

   document.querySelector('#theexcuse').innerHTML =who[redm1] + ' ' + action[redm2] + ' ' + what[redm3] + ' ' + when[redm4];


}