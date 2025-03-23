Projeto de Automação de Testes

Funcionalidades
Preenchimento do Formulário de Cadastro: Testes para simular o preenchimento dos campos de cadastro, incluindo campos obrigatórios como nome, e-mail, senha, entre outros.

Gerador de Dados Aleatórios: Utilizamos a biblioteca Faker para gerar dados dinâmicos e aleatórios para os testes, como nome de usuário, e-mail, e telefone.

Padrão de Estrutura de Testes (Page Object Model): Organização do código de testes em classes que representam as páginas da aplicação, separando a lógica da automação do conteúdo dos testes.

Tecnologias Utilizadas
Cypress: Framework para testes de automação de interfaces.

Faker: Biblioteca para geração de dados aleatórios.

JavaScript: Linguagem utilizada para escrever os testes.

Git: Controle de versão do código.

Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

Node.js (>= v14.x.x)

npm ou yarn para gerenciar dependências.

Cypress: Para rodar os testes de automação.

Como Rodar os Testes
Clone este repositório em sua máquina local:

bash
Copiar
Editar
git clone https://github.com/seu-usuario/projeto-cypress.git
Navegue até o diretório do projeto:

bash
Copiar
Editar
cd projeto-cypress
Instale as dependências do projeto:

bash
Copiar
Editar
npm install
# ou, se estiver usando yarn
yarn install
Para rodar os testes de automação, execute:

bash
Copiar
Editar
npx cypress open
Isso abrirá a interface do Cypress, onde você poderá selecionar os testes que deseja rodar.
