let totalLugares=0;

function comprar(){
    let quantidade = document.getElementById('qtd').value;
    let cadeira= document.getElementById('tipo-ingresso').value;
    if(cadeira=="pista"){
        let lugaresPista= document.getElementById('qtd-pista').innerHTML;
        let totalLugaresPista= lugaresPista - quantidade;

        if(totalLugaresPista>=0){

        document.getElementById('qtd-pista').innerHTML=`${totalLugaresPista}`;
        }else{

            alert(`So tem 0 entradas disponibles de este tipo`);
        }

    }
    if (cadeira=="superior"){
        let lugaresSuperior= document.getElementById('qtd-superior').innerHTML;
        let totalLugaresSuperior= lugaresSuperior - quantidade;

        if(totalLugaresSuperior>=0){

        document.getElementById('qtd-superior').innerHTML=`${totalLugaresSuperior}`;
        }else{

            alert(`So tem 0 entradas disponibles de este tipo`);
        }

        
    }   
        if(cadeira=="inferior"){
            let lugaresInferior= document.getElementById('qtd-inferior').innerHTML;
            let totalLugaresInferior= lugaresInferior - quantidade;

        if(totalLugaresInferior>=0){

        document.getElementById('qtd-inferior').innerHTML=`${totalLugaresInferior}`;
        }else{

            alert(`So tem 0 entradas disponibles de este tipo`);
        }

   
    }
}
