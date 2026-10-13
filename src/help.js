
const textoAjuda = `
GERENCIADOR DE TAREFAS CLI (v1.0.0)

Descrição:
    O Gerenciador de Tarefas

Uso:
    tarefas <comando> [argumentos]

Comandos disponíveis:
    adicionar <descrição>       Cria uma nova tarefa na sua lista local;
    editar <id> <descrição>     Edita a descrição de uma tarefa;
    listar <filtro>             Exibe as tarefas de acordo com o filtro. (opções de filtro: "", "pendentes" ou "concluídas");
    concluir <id>               Conclui uma tarefa pendente;
    remover <id>                Remove uma tarefa pelo ID;
    ajuda                       Exibe este manual de intruções.

Argumentos:
    <descrição>                 Texto livre obrigatoriamente entre aspas para descrever a tarefa;
    <id>                        Número interio correspondente ao identificador da tarefa;
    <filtro> (opcional)         Deixe vazio para ver todas, ou use "pendentes" ou "concluidas".

Exemplos:
    tarefas adicionar "Estudar cálculo I"
    tarefas editar 2 "Fazer a planilha financeira"
    tarefas listar pendentes
    tarefas concluir 1
    tarefas remover 3
`;

export async function exibirAjuda(){
    console.log(textoAjuda);
}