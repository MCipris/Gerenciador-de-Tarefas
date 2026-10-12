#!/usr/bin/env node

import { adicionarTarefa, listarTarefas, removerTarefa } from '../src/commands.js';

const [,, comando, arg1] = process.argv;

async function main() {
    switch (comando) {
        case 'adicionar':
            await adicionarTarefa(arg1);
            break;
        case 'editar':
            break;
        case 'listar':
            await listarTarefas();
            break;
        case 'concluir':
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