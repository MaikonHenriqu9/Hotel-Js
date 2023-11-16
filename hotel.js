var hotel, nome, senha;

/* Função responsável pelo nome do hotel */
const nomeHotel = () => {
    /*Variável responsável por controlar o loop de repetição*/
    let verificacao = true;

    while(verificacao){
        hotel = prompt("Informe o nome do Hotel");

        /* Validação para saber se a variável está recebendo uma informação válida */
        if(hotel !== null && hotel.trim() !== ""){
            verificacao = false;
        } else {
            alert("Por favor, informe um nome que seja válido");
        }
    }

    nomeHospede();
}

/* Função para saber o nome e a senha do usuário */
const nomeHospede = () => {
    /*Variável responsável por controlar o loop de repetição*/
    let verificacao = true;
    nome = prompt("Informe o seu nome");

    while(verificacao){
        senha = prompt(`${nome}, informe a sua senha`);

        /* Validação para saber a senha do usuário */
        senha == "2678"? verificacao = false : alert("Senha incorreta");
    }

    alert(`Bem vindo ao Hotel ${hotel}, ${nome}`);

    inicioMenu();
}

/* Função responsável por direcionar o usuário para outras funções do menu */
function inicioMenu(){
    /* Variável responsável pela escolha das opções do menu */
    let opcao = parseInt(prompt("MENU DE OPÇÕES \n1) Reservar Quartos \n2) Cadastro \n3) Cadastrar e Pesquisar \n4) Eventos \n5) Buffet \n6) Auditório \n7) Restaurante \n8) Abastecer Carro \n9)Manutenção do Ar Condicionado \n10) Sair"));

    switch(opcao){
        case 1:
            reservaQuartos();
            break;
        case 2:
            cadastro();
            break;
        case 3:
            cadastrarPesquisar();
            break;
        case 4:
            console.log("Deu bom 4");
            break;
        case 5:
            console.log("Deu bom 5");
            break;
        case 6:
            console.log("Deu bom 6");
            break;
        case 7:
            console.log("Deu bom 7");
            break;
        case 8:
            console.log("Deu bom 8");
            break;
        case 9:
            console.log("Deu bom 9");
            break;
        case 10:
            alert(`Muito obrigado e até logo ${nome}`);
            break;
        default:
            erro();
            inicioMenu();
    }
}

/* Função responsável por informar sobre possível erro */
const erro = () => {
    alert("Erro");
    alert("Opção Inválida");
    alert("Escolha uma das opções presentes no Menu");
}

/* Função responsável pela reserva dos quartos */
const reservaQuartos = () =>{
    let valorDiaria, diasHospedagem, nomeHospede, resposta;
    let verificacao = true;

    alert("Reserva dos quartos");

    while(verificacao){
        valorDiaria = parseFloat(prompt("Qual é o valor da diária? "));

        /* Validação para o usuário não informar um valor negativo*/
        valorDiaria > 0 ? verificacao = false: alert("Valor inválido");
    }

    verificacao = true;

    while(verificacao){
        diasHospedagem = parseInt(prompt("Quantas diárias serão necessárias?"));

        /* Validação para o usuário não informar um valor negativo*/
        diasHospedagem > 0 ? verificacao = false: alert("Valor inválido");
    }

    verificacao = true;

    while(verificacao){
        nomeHospede = prompt("Informe o nome do Hóspede");

        /* Validação para o usuário não inserir um valor vazio */
        if(nomeHospede !== null && nomeHospede.trim() !== ""){
            verificacao = false;
        } else {
            alert("Por favor, informe um nome que seja válido");
        }
    }

    verificacao = true;

    /* Laço responsável por validar a resposta do usuário */
    while(verificacao){
        resposta = prompt(`${nome}, você confirma a hospedagem para ${nomeHospede} por ${diasHospedagem} dias?`);
        
        if(resposta.toLowerCase() == "sim"){
            alert(`${nome}, reserva efetuada para ${nomeHospede}`);
            alert("O valor é de " + (valorDiaria * diasHospedagem).toFixed(2) + " reais");
            verificacao = false;

        } else if(resposta.toLowerCase() == "não" || resposta.toLowerCase() == "nao"){
            alert(`${nome}, reserva não efetuada`);
            alert("Voltando para o menu inicial");
            verificacao = false;

        } else {
            alert("Resposta inválida");
        }
    }
    
    inicioMenu();
}

/*Função responsável pelo cadastro dos usuários */
const cadastro = () => {
    let valorDiaria = 0, idade = 0, gratuidade = 0, meia = 0, quantidadeMeia = 0, inteiro = 0, valorHospedagem = 0;
    let nomeHospede;
    let verificacao = true;

    alert("Cadastro de Hóspedes");

    /* Loop para repetir a inserção do valor da diária, caso seja inválido */
    do{
        valorDiaria = parseFloat(prompt("Qual é o valor da diária? "));
        /*Validação do valor da diária*/
        valorDiaria > 0 ? verificacao = false : alert("Valor inválido");

    }while(verificacao); 

    verificacao = true;

    while(verificacao){
        alert("Caso deseje sair, digite a palavra PARE");
        nomeHospede = prompt("Informe o nome do Hóspede");

        /* Validação para o usuário não inserir um valor vazio */
        if (nomeHospede.toLowerCase() === "pare"){
            verificacao = false;
        } else if(nomeHospede !== null && nomeHospede.trim() !== ""){
                
            idade = parseInt(prompt(`Qual é a idade de ${nomeHospede}?`));

                /* Validação das idades */
            if(idade >= 60){
                alert(`${nomeHospede} cadastrada(o) com sucesso.`);
                alert(`${nomeHospede} paga meia`);
                meia = (valorDiaria/2);
                quantidadeMeia = quantidadeMeia + 1;
            } else if (idade >= 0 && idade < 6){
                alert(`${nomeHospede} cadastrada(o) com sucesso.`);
                alert(`${nomeHospede} possui gratuidade`);
                gratuidade = gratuidade + 1;

            } else if (idade >= 6 && idade < 60){
                alert(`${nomeHospede} cadastrada(o) com sucesso.`);
                inteiro = valorDiaria + inteiro;
            } else {
                alert("Idade inválida");
            }

        } else {
            alert("Por favor, informe um nome que seja válido");
        }
    }

    valorHospedagem = (meia + inteiro).toFixed(2);

    alert(`${nome}, o valor total das hospedagens é: R$${valorHospedagem} reais; ${gratuidade} gratuidade(s); ${quantidadeMeia} meia(s)`);
    

    inicioMenu();
}

/* Função responsável por cadastrar e fazer a leitura dos hóspedes */
const cadastrarPesquisar = () => {
    let opcao;

    opcao = parseInt(prompt("MENU DE OPÇÃO\n 1-Cadastrar\n 2-Pesquisar\n 3-Sair"));

    switch(opcao){
        case 1:
        case 2:
        case 3:
            inicioMenu();
        default:
            erro();
    }
}

nomeHotel(); 