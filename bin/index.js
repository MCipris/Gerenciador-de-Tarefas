#!/usr/bin/env node

import { adicionarTarefa } from '../src/commands.js';

const [,, comando, arg1] = process.argv;

async function main() {
    switch (comando) {
        case 'adicionar':
            await adicionarTarefa(arg1);
            break;
        case 'editar':
            break;
        case 'listar':
            break;
        case 'concluir':
            break;
        case 'remover':
            break;
        default:
            console.log('Comando não reconhecido.');
            break;
    }
}

main();