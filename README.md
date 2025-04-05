# Capacitacao_Rodas_e_Motores2025

🚀 **Capacitação interna da diretoria de projetos 2025.01**  
📌 **Objetivo:** Promover o conhecimento e aprimoramento tanto de **front-end** quanto de **back-end**.

---

# Progresso do Projeto

## Primeiro Dia

Iniciamos instalando as bibliotecas. Em seguida, fizemos a validação dos dados com **YUP** e criamos a primeira rota. No entanto, encerramos o dia com um erro, que ocorreu devido a uma importação incorreta de um arquivo.

### 🎥 Video da Capacitação

Confira o vídeo da primeira da capacitação (31/03/2025) parte no YouTube: [Clique aqui para assistir](https://youtu.be/ev23-MwNPpQ?si=X-kh7zBnD5EPfKwm)

## Segundo Dia

Nesta segunda parte, corrigimos o erro, e depois configuramos o banco de dados, realizamos as migrações e cadastramos o primeiro usuário. Termimando com progresso tudo funciomando.

### 🎥 Video da Capacitação

Confira o vídeo da segunda parte da cpacitação (02/04/2025) no YouTube: [Clique aqui para assistir](https://youtu.be/fGNn1UCwOjQ?si=110hyHhMTlR-2mPE)

## Terceiro (final) Dia

Nesta terceira (final) parte, Fizemos a parte Criptografia de senha, gemos o token. Termimando com progresso tudo funciomando.

### 🎥 Video da Capacitação

Confira o vídeo da segunda parte da cpacitação (04/04/2025) no YouTube: [Clique aqui para assistir](https://youtu.be/ev23-MwNPpQ?si=X-kh7zBnD5EPfKwm)

---

## 🛆 Como rodar o projeto

1. Certifique-se de ter o **Node.js** instalado (versão recomendada: LTS).
   - Para verificar: `node -v && npm -v`
2. Clone o repositório:
   ```bash
   git clone https://github.com/seu-repositorio.git
   cd seu-repositorio
   ```
3. Crie um arquivo `.env` na raiz do projeto e copie o conteúdo de `.env.example`.
4. Defina a variável `JWT_SECRET` com uma sequência aleatória de caracteres:

   ```env
   JWT_SECRET=kdksfksjfkgjgks
   ```

   - **Dica:** Gere uma chave segura com o comando:
     ```bash
     openssl rand -base64 32
     ```

5. Instale as dependências:
   ```bash
   npm install
   ```
6. Execute o projeto:
   ```bash
   npm run dev
   ```

---

## 💻 Rotas da API

### 🔹 **Endpoints**

| Método | Rota        | Descrição                 |
| ------ | ----------- | ------------------------- |
| `GET`  | `/`         | Rota de teste             |
| `POST` | `/usuarios` | Cria um novo usuário      |
| `POST` | `/sign`     | Cria credenciais de login |
| `POST` | `/login`    | Realiza login             |

### 🔹 **Exemplo de Requisição e Resposta**

#### 📌 **Criar um usuário**

**Requisição:**

```json
POST /usuario
Content-Type: application/json

{
  "nome": "Jão",
  "cpf": "8888888",
  "telefone": "77777777",
  "email": "joão@gmail.com",
  "cidade": "Salvador",
  "estado": "BA",
  "pais": "Russia",
  "bairro": "hfhfhfh",
  "endereco": "jdjdjkdjkdjdjkd"
}
```

**Resposta (201 - Created):**

```json
{
  "id": 1
}
```

---

## 🛠 Tecnologias

O projeto utiliza as seguintes tecnologias:

### **Back-End**

- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Linguagem principal do projeto.
- [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript no servidor.
- [Express](https://expressjs.com/) - Framework para criação de APIs REST.
- [CORS](https://www.npmjs.com/package/cors) - Controle de acesso entre domínios.
- [http-status-codes](https://www.npmjs.com/package/http-status-codes) - Biblioteca para códigos HTTP padronizados.
- [Yup](https://www.npmjs.com/package/yup) - Validação de dados.

### **Banco de Dados**

- [SQLite](https://www.sqlite.org/index.html) - Banco de dados leve para desenvolvimento local.
- [PostgreSQL](https://www.postgresql.org/) - Banco de dados usado em produção.

---

## 👥 Organizadores

| Nome               | GitHub                                             |
| ------------------ | -------------------------------------------------- |
| **Luciano Sabino** | [@LucianoSabino](https://github.com/LucianoSabino) |
| **Emily Souza**    | [@souzaemily](https://github.com/souzaemily)       |

---

## 🚧 Em execurção 2025... 🚧
