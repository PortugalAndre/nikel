//Não Permite Alterar Valores
const nome = "André Portugal"

//Permite Alterar Valores
    let nome2 = "";

//Objeto "simples"
    let pessoaDefault = {
        nome: "André Portugal",
        idade: "31",
        trabalho: "Vendedor",
        cidade: "Santo André"
    }

//Objeto "composto" - Array
    let nomes = ["André Portugal", "Maria", "João"];
    let pessoasListaVazia = []

    let pessoas = 
    [{
            nome: "André Portugal",
            idade: "31",
            trabalho: "Vendedor",
            cidade: "Santo André"
        },
        {
            nome: "Maria",
            idade: "40",
            trabalho: "Professora",
            cidade: "São Caetano"
        },
        {
            nome: "João",
            idade: "20",
            trabalho: "Entregador",
            cidade: "São Paulo"
    },];


//Funções
    function alterarNome() {
        nome2 = "Maria";
        console.log("Valor alterado:");
        console.log(nome2);
    }

    function recebeEalteraNome(novonome) {
        nome2 = novonome;
        console.log("Valor alterado recebendo um nome:");
        console.log(nome2);
    }

    function imprimirPessoa(pessoa) {
        console.log("Nome:");
        console.log(pessoa.nome)

        console.log("Idade:");
        console.log(pessoa.idade)

        console.log("Trabalho:");
        console.log(pessoa.trabalho)

        console.log("Cidade:");
        console.log(pessoa.cidade)
    }

    function adicionarPessoa(pessoa){
        pessoas.push(pessoa);
    }
    
    function imprimirpessoas(){
        console.log("-----IMPRIMIR PESSOAS-----");
        pessoas.forEach((item) => {
            console.log("Nome:");
            console.log(item.nome);

            console.log("Idade:");
            console.log(item.idade);

            console.log("Trabalho:");
            console.log(item.trabalho);

            console.log("Cidade:");
            console.log(item.cidade);
        })
    };

//Chamadas de Funções
    imprimirpessoas();

    adicionarPessoa({
        nome: "Joana",
        idade: "35",
        trabalho: "Diretora Comercial",
        cidade: "São Paulo"
    });

    imprimirpessoas();
 
    //imprimirPessoa(pessoaDefault);

    // imprimirPessoa({
    //     nome: "Maria",
    //     idade: "40",
    //     trabalho: "Professora",
    //     cidade: "São Caetano"
    // });

    // imprimirPessoa({
    //     nome: "João",
    //     idade: "20",
    //     trabalho: "Entregador",
    //     cidade: "São Paulo"
    // });

    //recebeEalteraNome("fernando");
    //recebeEalteraNome("Maria");

    //alterarNome();