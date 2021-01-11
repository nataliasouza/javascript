/*
var nome = "Natt";

if(nome === 'Natt'){
    console.log("Seu nome é Natt");

}else if(nome === 'Natalia') {
    console.log("Seu nome não é Natt");
}else {
    console.log("Seu nome não é Natt");
}
*/

var nome = 'Natacha';

switch(nome) {
    case 'Natt':
        console.log('Seu nome é Natt');
        break;

        case 'Natacha':
            console.log('Seu nome não é Natt, seu nome é Natacha do Capital kkk');
            break;

            case 'Natalina':
                console.log('Seu nome não é Natt, você chama Natalina');

                default:
                    console.log('Seu nome não é Natt, não insista! rs');
                    break;
}