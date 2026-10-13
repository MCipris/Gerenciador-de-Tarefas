
# [Gerenciador de Tarefas CLI]

## Descrição
 Uma ferramenta minimalista para a criação e gerenciamento de tarefas que foi desenvolvida com node.js.

---

## Tecnologias Utilizadas
* **Node.js** (Versão 18+) - Ambiente de execução JavaScript de alta performance.
* **ES Modules** - O padrão oficial do JavaScript para modularização de código, permitindo utilizar a sintaxe de `import` e `export`.
* **node:fs/promises**: Módulo nativo do Node.js para interação com o sistema de arquivos utilizando o padrão de promessas.
* **node:path**: Módulo nativo do Node.js projetado para auxiliar na manipulação e resolução de caminhos de diretórios e arquivos.

---

## Como Instalar e Executar o Projeto
Siga os passos a seguir para instalar e configurar o projeto na sua máquina:

1. Certifique-se de que possui o Node.js na sua versão 18 ou superior instalado na sua máquina.

2. Clone o repositório
```
git clone https://github.com/MCipris/Gerenciador-de-Tarefas.git
```

3. Acesse a pasta
```
cd Gerenciador-de-Tarefas
```
4. Execute:

```
npm link
```
Pronto! Agora o comando `tarefas` estará disponível para utilizar no terminal.

---

## Como usar
 A estrutura básica para executar os comandos da CLI é:
```
tarefas <comando> [argumentos]
```
### Comandos Disponíveis:
- `adicionar <descrição>`
 Cria uma nova tarefa com o status inicial de `pendente`. Para isso, é necessário informar a descrição da tarefa **obrigatoriamente** entre aspas.
    - *Exemplo:*
    - `tarefas adicionar "Estudar cálculo I"`

- `editar <id> <descrição>`
 Edita a descrição de uma tarefa específica com base no seu ID numérico. Para isso, é necessário informar o ID númerico, e em seguida a descrição da tarefa **obrigatoriamente** entre aspas.
    - *Exemplo:*
    - `tarefas editar 2 "Estudar trigonometria"`

- `listar [filtro]`
Exibe as tarefas cadastradas. Além disso, é possível filtrar o resultado passando um argumento opcional (`pendentes` ou `concluidas`). Caso nenhum argumento seja passado, todas as tarefas serão exibidas.
    - *Exemplos:*
    - `tarefas listar` (Mostra todas)
    - `tarefas listar pendentes` (Mostra apenas as pendentes)
    - `tarefas listar concluidas` (Mostra apenas as concluídas)

- `concluir <id>`
 Atualiza o status de uma tarefa específica de `pendente` para `concluída`, com base no seu ID numérico. Caso a tarefa já tenha sido concluída, será exibida uma mensagem sobre a questão.
    - *Exemplo:*
    - `tarefas concluir 2`

- `remover <id>`
 Remove permanentemente uma tarefa específica com base no seu ID numérico.
    - *Exemplo:*
    - `tarefas remover 1`

- `ajuda`
 Exibe o manual de instruções completo com a listagem de comandos e detalhes de uso.
    - *Exemplo:*
    - `tarefas ajuda`
---

## Como foi o desenvolvimento
 O projeto foi construído seguindo os seguintes pontos:
1. Armazenamento: Optei por estruturar o armazenamento com o arquivo `tasks.json` como um dicionário onde as chaves são os IDs em formato de string, e os respectivos valores são os dados das tarefas como descrição, status e data de criação.

2. Divisão: O código foi dividido em módulos claros, o arquivo `storage.js` ficou responsável pelo armazenamento, nele existem as funções necessários para ler e salvar os dados no arquivo `tasks.json`. O arquivo `commands.js` ficou responsável pelas principais regras de negócio do projeto, é nele que se encontram todas as funções que gerenciam as tarefas. O arquivo `help.js` basicamente se encontra a função que exibi as informações de ajuda. E por último, temos o arquivo `index.js` que recebe as informações de entrada e direciona para as funções dos demais arquivos mencionados.  

3. Organização do Repositório: Optei por utilizar uma convenção simplificada para o fluxo de trabalho, nela a branch principal estabilizada é a `main`, enquanto que existe uma outra branch `dev` que a partir dela é feita adições de funcionalidades, que após ter a funcionamento validada são mescladas a `dev`, e em seguida as mudanças da `dev` são mescladas a `main`. 
O projeto não teve muitas mudanças durante o desenvolvimento. Entretanto, houve dificuldade na implementação da parte de armazenamento, pois eu não tinha muito conhecimento em como fazer essa parte no Node.js. Porém, pesquisando bastante consegui implementar.
---

## Próximos passos
Para mudanças futuras, eu implementaria principalmente os testes automatizados, que foi um dos requisitos não obrigatórios que mais me chamaram a atenção, já que é uma medida importante para manter o projeto em pleno funcionamento. Além disso, eu também faria a parte do executável que não necessita da instação da linguagem.