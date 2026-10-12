#!/usr/bin/env node

import { adicionarTarefa, editarTarefa, listarTarefas, concluirTarefa, removerTarefa } from '../src/commands.js';

const [,, comando, arg1, arg2] = process.argv;

async function main() {
    switch (comando) {
        case 'adicionar':
            await adicionarTarefa(arg1);
            break;
        case 'editar':
            await editarTarefa(arg1, arg2);
            break;
        case 'listar':
            await listarTarefas();
            break;
        case 'concluir':
            await concluirTarefa(arg1);
            break;
        case 'remover':
            await removerTarefa(arg1);
            break;
        default:
            console.log('Comando não reconhecido.');
            break;
    }
}

main();