// var xReq = new XMLHttpRequest();
// xReq.open('GET','fiche.json');
// xReq.onload = function (){
//     var xData = xReq.responseText;
//     document.write(xData);
//     console.log(xData);
// };
// xReq.send();


$(document).ready(function(){

    $.get("./fiche.json", function(jsn){
        
        // let jsn = JSON.parse(strJson);
        var fiche = '';
        for(let i = 0 ; i<jsn.length;i++){
            fiche += '<tr>';
            fiche += '<td>'+jsn[i].id+'</td>';
            fiche += '<td>'+jsn[i].Désignation+'</td>';
            fiche += '<td>'+jsn[i].Catégorie+'</td>';
            fiche += '<td>'+jsn[i].Prix+' DH</td>';
            fiche += '<td>'+jsn[i].Disponibilité+'</td>';
            fiche += '<td>'+jsn[i].Fournisseur.raison_sociale+ ' : ' +jsn[i].Fournisseur.adresse+'</td>';
            fiche += '</tr>';

        } 
        $('#fiche_table tbody').append(fiche);

        $('#fiche_table').DataTable();
        // pour activer DataTable 3eme lien 

        });
    
    




});
 


// $(document).ready(function(){
//  $("button").click(function(){
// $("p").hide();
//  });
// });