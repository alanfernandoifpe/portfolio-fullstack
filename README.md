# Portfólio Pessoal Full-Stack

![Status do Projeto](https://img.shields.io/badge/status-concluído-brightgreen)

Bem-vindo ao repositório do meu portfólio pessoal! Esta é uma aplicação web **full-stack** construída do zero para demonstrar minhas habilidades em desenvolvimento frontend e backend. A aplicação é totalmente dinâmica, com projetos carregados a partir de um banco de dados e um formulário de contato funcional.

![Screenshot do Portfólio]([https://i.imgur.com/screenshot-placeholder.png](https://imgur.com/72QsLNF)) ---

## 🚀 Principais Funcionalidades

-   **Interface Moderna e Responsiva:** Design limpo construído com Bootstrap 5, totalmente adaptável a desktops, tablets e celulares.
-   **Seção de Projetos Dinâmica:** Os cards de projetos são carregados a partir de um banco de dados via uma API REST, permitindo fácil atualização.
-   **Backend Robusto:** API REST construída com Node.js e Express para gerenciar os dados da aplicação.
-   **Formulário de Contato Funcional:** Permite que visitantes enviem mensagens, que são salvas de forma segura em um banco de dados SQLite.
-   **Estrutura de Código Profissional:** O backend é organizado em camadas (Rotas, Controllers) para facilitar a manutenção e escalabilidade.

---

## 🔧 Tecnologias Utilizadas

Este projeto foi construído utilizando um conjunto de tecnologias modernas e populares no mercado de desenvolvimento web.

#### **Frontend (Lado do Cliente)**

-   **HTML5:** Para a estruturação semântica do conteúdo.
-   **CSS3:** Para estilizações customizadas, animações e design visual.
-   **JavaScript (ES6+):** Para interatividade, manipulação do DOM e comunicação com a API via `fetch`.
-   **Bootstrap 5:** Framework CSS para a criação do layout responsivo e utilização de componentes (Navbar, Cards, Formulários).
-   **Bootstrap Icons:** Biblioteca de ícones utilizada na seção de Habilidades e no rodapé.
-   **Google Fonts:** Para a importação das fontes customizadas (Poppins e Roboto).

#### **Backend (Lado do Servidor)**

-   **Node.js:** Ambiente de execução para o código JavaScript no servidor.
-   **Express.js:** Framework para a construção da API REST, gerenciamento de rotas e middlewares.
-   **SQLite3:** Banco de dados relacional, leve e baseado em arquivo, para persistência dos dados de projetos e mensagens.
-   **`sqlite3` (npm):** Driver Node.js para a comunicação com o banco de dados SQLite.

#### **Ambiente de Desenvolvimento**

-   **Git & GitHub:** Para versionamento de código e hospedagem do repositório.
-   **Nodemon:** Para reiniciar o servidor automaticamente durante o desenvolvimento.
-   **Dotenv:** Para o gerenciamento de variáveis de ambiente.

---

## ⚙️ Como Rodar o Projeto Localmente

Siga os passos abaixo para executar este projeto em sua máquina.

#### **Pré-requisitos**

-   [Node.js](https://nodejs.org/en/) (versão 18.x ou superior)
-   [Git](https://git-scm.com/)

#### **Passo a Passo**

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/alanfernandoifpe/portfolio-fullstack.git](https://github.com/alanfernandoifpe/portfolio-fullstack.git) # SUBSTITUA PELA URL DO SEU REPOSITÓRIO
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd portfolio-fullstack
    ```

3.  **Instale as dependências do backend:**
    ```bash
    cd backend
    npm install
    ```

4.  **Configure as variáveis de ambiente:**
    -   Ainda na pasta `backend`, crie um arquivo chamado `.env`.
    -   Dentro dele, adicione a seguinte linha:
        ```
        PORT=3000
        ```

5.  **Inicie o servidor backend:**
    ```bash
    npm run dev
    ```
    - O servidor estará rodando em `http://localhost:3000`.

6.  **Abra o frontend:**
    -   Navegue até a pasta `frontend` e abra o arquivo `index.html` diretamente no seu navegador.

---

## 📬 Contato

**Alan Fernando**

-   [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/alanfernandocosta/) -   [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/alanfernandoifpe) ---

<p align="center">
  Desenvolvido com ❤️ e muito código!
</p>
