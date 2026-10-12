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

export async function editarTarefa(idTarefa, descricao){
    if ( isNaN(idTarefa) ) {
        console.log('Erro: Você precisa fornecer o id da tarefa.');
        return;
    } if ( !descricao ) {
        console.log('Erro: Você precisa fornecer uma descrição para a tarefa.');
        return;
    }

    const tarefasMap = await lerTarefas();
    
    if( tarefasMap.has(idTarefa) ){
        let tarefa = tarefasMap.get(idTarefa);
        tarefa.descricao = descricao;
        tarefasMap.set(idTarefa, tarefa);
    } else {
        console.log('Erro: O id desta tarefa não foi encontrado.');
        return;
    }   

    await salvarTarefas(tarefasMap);

    console.log('Tarefa #'+idTarefa+' editada.');
}

export async function listarTarefas() {
    const tarefasMap = await lerTarefas();

    for(const [id, tarefa] of tarefasMap){
        if( tarefa.status === "concluída" ){
            console.log('[X] #'+id+' '+tarefa.descricao);
        } else {
            console.log('[ ] #'+id+' '+tarefa.descricao);
        }
    }
    return;
}

export async function concluirTarefa(idTarefa){
    if ( isNaN(idTarefa) ) {
        console.log('Erro: Você precisa fornecer o id da tarefa.');
        return;
    }

    const tarefasMap = await lerTarefas();
    
    if( tarefasMap.has(idTarefa) ){
        let tarefa = tarefasMap.get(idTarefa);
        tarefa.status = 'concluída';
        tarefasMap.set(idTarefa, tarefa);
    } else {
        console.log('Erro: O id desta tarefa não foi encontrado.');
        return;
    }   

    await salvarTarefas(tarefasMap);

    console.log('Tarefa #'+idTarefa+' concluída.');
}

export async function removerTarefa(idTarefa) {
    if ( isNaN(idTarefa) ) {
        console.log('Erro: Você precisa fornecer o id da tarefa.');
        return;
    }

    const tarefasMap = await lerTarefas();
    
    if( tarefasMap.has(idTarefa) ){
        tarefasMap.delete(idTarefa);
    } else {
        console.log('Erro: O id desta tarefa não foi encontrado.');
        return;
    }   

    await salvarTarefas(tarefasMap);

    console.log('Tarefa #'+idTarefa+' removida.');
}