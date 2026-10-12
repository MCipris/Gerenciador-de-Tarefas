import { lerTarefas, salvarTarefas } from './storage.js';

export async function adicionarTarefa(descricao) {
    if ( !descricao ) {
        console.log('Erro: Você precisa fornecer uma descrição para a tarefa.');
        return;
    }

    const tarefasMap = await lerTarefas();
    let proximoId = 1;
    const ids = Array.from(tarefasMap.keys());
    if( ids.length > 0 ){
        proximoId = Math.max(...ids) + 1;
    }

    tarefasMap.set(proximoId, {
        descricao: descricao,
        status: 'pendente',
        criadoEm: new Date().toISOString()});

    await salvarTarefas(tarefasMap);
    console.log('Tarefa #'+proximoId+' adicionada.');
}