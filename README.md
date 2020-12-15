<img alt="logo-ita" title="#CES 27 EXAME" src="https://logodownload.org/wp-content/uploads/2018/01/ita-logo.png" width="400px" />

## [Back-end] CES-26 Exame
Projeto do Back-end criado para a aplicação feita na disciplina de CES-26 pelos alunos: Luís Eduardo Martins Lauro, Ítalo Rennan Lima Silva e Pedro Henrique Ferreira Cavalcante

### Tecnologias
API desenvolvida em [Node](https://nodejs.org/en/), utilizando o [express](https://expressjs.com/) como framework web. <br/>
DB criado utilizando [MongoDB](https://www.mongodb.com/). <br/> 
Outras dependências utilizadas: 
 - [body-parser](https://www.npmjs.com/package/body-parser) - adiciona um middleware de parse para formatar o body de requests.
 - [cors](https://www.npmjs.com/package/cors) - configura a cors da API, permitindo rodar front e back-end localmente simultaneamente.
 - [express]()
 - [mongoose](https://mongoosejs.com/) - modelagem do banco de dados utilizando MongoDB.
 - [mongoose-auto-increment](https://www.npmjs.com/package/mongoose-auto-increment) - implementação do número de matrícula auto-incremental
 - [mongoose-paginate-v2](https://www.npmjs.com/package/mongoose-paginate-v2) - divisão dos dados do DB em páginas.
 - [mongoose-patch-update](https://www.npmjs.com/package/mongoose-patch-update) - facilitar atualização de dados no DB.
 - [mongoose-type-email](https://www.npmjs.com/package/mongoose-type-email) - tipo email para facilitar a verificação
 - [nconf](https://www.npmjs.com/package/nconf) - armazenar valores chaves da aplicação.
 - [nodemon](https://www.npmjs.com/package/nodemon) - atualização automática de mudanças feitas no js enquanto o servidor estiver rodando.
 - [shelljs](https://www.npmjs.com/package/shelljs) - rodar os scripts para checar se o banco de dados está online.

### Estrutura de pastas
 ```js
 - controllers
 - models
 - services
 ```

### Deploy da API
O deploy da API foi feito utilizando o [heroku](https://dashboard.heroku.com/) <br/>
O deploy do banco de dados foi feito utilizando o [Mongo Atlas](https://www.mongodb.com/cloud/atlas), plataforma construída em conjunto entre a Mongo e a AWS. <br/>
A API está disponível no link: https://stormy-garden-64077.herokuapp.com/ <br/>
A princípio, para facilitar o acesso e teste da API, não estamos fazendo nenhuma restrição nos resquest. Em uma versão final deveríamos restringir o acess às rotas apenas à aplicação front-end da aplicação.

### Iniciando a API
Verificar se existe [Node.js](https://nodejs.org/en/), [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), [mongoDB](https://www.mongodb.com/) e [docker](https://www.docker.com/) instalados na sua máquina antes de iniciar com o projeto. 

```bash
# Primeira utilização
# Clone o repositório front-end
$ git clone https://github.com/lulis123/ces26-back-end

# Primeira utilização
# Entre no repositório
$ cd ces26-back-end

# Primeira utilização
# Instale as dependências que estão presentes no arquivo 'package.json'
$ npm install

# Primeira utilização
# Instalar Docker e mongo, caso não os tenha instalado.
$ chmod +x installDockerMongo.sh
$ ./installDockerMongo.sh

# Sempre rodar antes do código (sobe o DB)
# Subir o DB
$ ./runMongoDB.sh

#Em seguida rodar a API
$ npm start
```
