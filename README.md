# 📌 API-restaurant

## Descrição
Esta API de gerenciamento de restaurante foi desenvolvida com base nos ensinamentos do curso da Rocketseat, aplicando boas práticas de arquitetura, organização de código e validação de dados no backend.<br>
A aplicação foi construída utilizando Node.js com TypeScript, garantindo maior segurança e previsibilidade no código. Para o gerenciamento do banco de dados, foi utilizado o Knex.js como query builder, com SQLite3 como banco de dados. A validação de dados é feita com Zod, assegurando consistência nas requisições, enquanto o Express é responsável pela criação e organização das rotas da API.

## 🎯 Objetivo
O projeto tem como objetivo fornecer uma base sólida para o controle de operações de um restaurante, como cadastro e gerenciamento de recursos, utilizando uma API REST simples, eficiente e escalável.

## 🚀 Tecnologias Utilizadas
Este projeto foi desenvolvido utilizando as seguintes tecnologias:

#### devDependencies
- TypeScript – Linguagem principal do projeto, proporcionando tipagem estática e maior segurança no desenvolvimento
	- **version**: *^5.5.4*

#### Dependencies
- **Express** – Framework responsável pela criação das rotas e estrutura da API REST
	-	**version**: *^4.19.2*

- **Knex.js** – Query Builder utilizado para comunicação e gerenciamento do banco de dados
	-	**version**: *^3.1.0*

- **SQLite3** – Banco de dados relacional utilizado na aplicação
	-	**version**: *^5.1.7*

- **Zod** – Biblioteca utilizada para validação e tipagem dos dados de entrada da API
	-	**version**: *^3.23.8*

## ⚙️ Pré-requisitos

Antes de iniciar o projeto, certifique-se de ter os seguintes itens instalados em sua máquina:

- Node.js (versão 18 ou superior)
- npm, yarn ou pnpm (gerenciador de pacotes de sua preferência)
- Git (para versionamento e clonagem do repositório)

Esses pré-requisitos são necessários para executar a aplicação, instalar as dependências e gerenciar o ambiente de desenvolvimento de forma adequada.

## ▶️ Como Executar o Projeto

No seu terminal, execute:

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-projeto.git

# Acesse a pasta do projeto
cd seu-projeto

# Instale as dependências
npm install

# Execute a aplicação
npm run dev
```

A aplicação estará disponível em:<br>
👉 <code>http://localhost:3333</code>

## 📬 Coleção de Requisições (Insomnia)

O projeto disponibiliza um arquivo chamado <code>insomnia.yaml</code>, que contém todas as configurações de requisições da API para uso no **Insomnia**.

Esse arquivo pode ser importado diretamente na ferramenta, facilitando os testes dos endpoints, a visualização de exemplos de requisições e o entendimento do fluxo da API durante o desenvolvimento.

**OBS:** ***O arquivo está localizado na raiz do projeto***

## 📄 Licença

Este projeto está sob a licença MIT.<br>
Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

## 👤 Autor

Desenvolvido por **Gabriel Oliveira Cardoso**

[💼 LinkedIn: Gabriel Cardoso](https://www.linkedin.com/in/gabriel-cardoso-bb1175262/)<br>
[🐙 GitHub: gabriellloc](https://github.com/gabriellloc)