# Capacitacao_Rodas_e_Motores2025

🚀 **Capacitação interna da diretoria de projetos 2025.01**  
📌 **Objetivo:** Promover o conhecimento e aprimoramento tanto de **front-end** quanto de **back-end**.

---

## 🎥 Video da Capacitação

Confira o vídeo da primeira (31/03/2025) parte no YouTube: [Clique aqui para assistir](https://youtu.be/ev23-MwNPpQ?si=X-kh7zBnD5EPfKwm)

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

| Método  | Rota       | Descrição |
|---------|-----------|-----------|
| `GET`   | `/`       | Rota de teste |
| `POST`  | `/usuarios` | Cria um novo usuário |
| `POST`  | `/sign` | Cria credenciais de login |
| `POST`  | `/login` | Realiza login |
| `POST`  | `/veiculo` | (Rota autenticada) Cadastra um veículo |
| `GET`   | `/veiculo?` | Busca veículos |

### 🔹 **Exemplo de Requisição e Resposta**
#### 📌 **Criar um usuário**
**Requisição:**
```json
POST /usuarios
Content-Type: application/json

{
  "nome": "João Silva",
  "email": "joao@email.com",
  "senha": "123456"
}
```
**Resposta (201 - Created):**
```json
{
  "id": 1,
  "nome": "João Silva",
  "email": "joao@email.com",
  "createdAt": "2025-03-31T12:00:00Z"
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

| Nome          | GitHub |
|--------------|----------------------|
| **Luciano Sabino** | [@LucianoSabino](https://github.com/LucianoSabino) |
| **Emily Souza** | [@souzaemily](https://github.com/souzaemily) |

---

## 🚧 Em execurção 2025... 🚧
