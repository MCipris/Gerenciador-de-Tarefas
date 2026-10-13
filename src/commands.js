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

export async function listarTarefas(filtro) {
    const tarefasMap = await lerTarefas();

    if( filtro === undefined ){
        for(const [id, tarefa] of tarefasMap){
            if( tarefa.status === "concluída" ){
                console.log('[X] #'+id+' '+tarefa.descricao);
            } else {
                console.log('[ ] #'+id+' '+tarefa.descricao);
            }
        }        
    } else if( filtro === 'pendentes' ) {
        for(const [id, tarefa] of tarefasMap){
            if( tarefa.status === "pendente" ){
                console.log('[ ] #'+id+' '+tarefa.descricao);
            }
        }
    } else if( filtro === 'concluidas' ) {
        for(const [id, tarefa] of tarefasMap){
            if( tarefa.status === "concluída" ){
                console.log('[X] #'+id+' '+tarefa.descricao);
            } 
        }
    } else {
        console.log('Erro: Filtro inválido. Use "pendentes", "concluidas" ou deixe vazio.');
        return;
    }
}

export async function concluirTarefa(idTarefa){
    if ( isNaN(idTarefa) ) {
        console.log('Erro: Você precisa fornecer o id da tarefa.');
        return;
    }

    const tarefasMap = await lerTarefas();
    
    if( tarefasMap.has(idTarefa) ){
        let tarefa = tarefasMap.get(idTarefa);
        if( tarefa.status === 'pendente' ) {
            tarefa.status = 'concluída';
            tarefasMap.set(idTarefa, tarefa);   
        } else {
            console.log('Erro: Esta tarefa já foi concluída.');
            return;    
        }
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