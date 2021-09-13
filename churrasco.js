let dataChurrascoDoAlkimin = [10, 11, 2021];
let dataHoje = [13, 09, 2021];
let idade = 17;

if((dataChurrascoDoAlkimin[2] - dataHoje[2]) < 0){
    console.log("OPS impossível marcar, pois o ANO de hoje é posterior ao churrasco!!!");
} else if ((dataChurrascoDoAlkimin[1] - dataHoje[1]) < 0){
    console.log("OPS impossível marcar, pois o MÊS de hoje é posterior ao churrasco!!");
} else if (((dataChurrascoDoAlkimin[0] - dataHoje[0]) < 0) && ((dataChurrascoDoAlkimin[1] - dataHoje[1]) == 0)){
    console.log("OPS impossível marcar, pois o DIA de hoje é posterior ao churrasco!");
} else {
    if(idade < 15){
        console.log("OPS impossível marcar, pois a idade é inferior a 15 anos.");
    } else {
        console.log("Marcado com Sucesso,Bora pro churrasco comemorar!!");
    }        
} 