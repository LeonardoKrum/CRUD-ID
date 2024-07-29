const prompt = require("prompt-sync")();
const { criar, atualizar, listar, remover } = require("./func.js");

while (true) {
    console.log(`
1 - para cadastrar novo usuario
2 - para listar usuarios
3 - para atualizar usuario
4 - para remover usuario
5 - para sair
\n
`);

    const opcao = Number(prompt(`Escolha uma opção acima: `));
    switch (opcao) {
        case 1:
            criar();
            break;
        case 2:
            listar();
            break;
        case 3:
            atualizar();
            break;
        case 4:
            remover();
            break;
        case 5:
            process.exit();
            break;

        default:
            console.log(`Opção invalida`);
            break;
    }
}
