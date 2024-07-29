const prompt = require("prompt-sync")();

const usuarios = {};
let telefones = [];

let ultimoId = 1;

const modelo = (id) => {
    const email = prompt("Qual o email do usuario?");
    const nome = prompt("Qual o nome do usuario?");
    while (telefone !== "") {
        const telefone = prompt("insira os telefones do usuario");
        telefones.push(telefone);
    }
    if (nome != "" && email != "") {
        let usuario;
        if (id == undefined) {
            usuario = {
                email,
                nome,
                telefones,
                id: ultimoId,
            };
            ultimoId++;
        } else {
            usuario = {
                email,
                nome,
                telefones,
                id,
            };
        }
        return usuario;
    } else {
        console.log("Dados inválidos");
    }
};
const criar = () => {
    const usuario = modelo();

    if (usuario != undefined) {
        usuarios.push(usuario);
        console.log("usuario cadastrado com sucesso");
    }
};

const listar = () => {
    if (usuarios.length == 0) {
        console.log("Nenhum usuario cadastrado");
        return false;
    } else {
        usuarios.forEach((usuario) => {
            console.log(`
                ${usuario.id}.
                ${usuario.nome}, ${usuario.email}, ${usuario.telefones}
                `);
        });

        return true;
    }
};
