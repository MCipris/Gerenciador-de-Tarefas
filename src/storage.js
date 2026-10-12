import fs from 'node:fs/promises';
import path from 'node:path';

const filePath = path.resolve('task.json')

export async function lerTarefas() {
    try {
        const conteudo = await fs.readFile(filePath, 'utf-8');
        const objetoDados = JSON.parse(conteudo);
        const tarefasMap = new Map(Object.entries(objetoDados));

        return tarefasMap;
    } catch (error) {
        return new Map();
    }
}

export async function salvarTarefas(tarefasMap) {
    const conteudo = Object.fromEntries(tarefasMap);

    const jsonString = JSON.stringify(conteudo, null, 2);

    await fs.writeFile(filePath, jsonString, 'utf-8');
}