![Juliano Costa](https://raw.githubusercontent.com/julianojcs/julianojcs.github.io/master/apfjuliano.dev.png)

# API GraphQL com NodeJS, Server Yoga GraphQL, MongoDB e Mongoose

Implemetação de um servidor que expôe uma API em GraphQL para frontend fazer um CRUD de usuário.

## Configurar

* Baixe o projeto:

```
1. git clone https://github.com/julianojcs/graphql-node-mongoodb.git
2. cd graphql-node-mongoodb
```

* Instale as dependências:

```
3. npm install
```

* Colocar o servidor no ar:

```
4. npm start
```

Abra a url [http://localhost:4000/](http://localhost:4000/) e teste suas requisições:

Queries and Mutations named.

Buscar um usuário com ID específico e retornar o seu nome, email e id:

```
query GET_USER2{
  user (id: "6026b87b04eb222bb80fc359") {
    id
    name
    email
  }
}

```

Buscar um usuário com ID específico e retornar o seu nome, id e email, usando QUERY VARIABLES:

```
query GET_USER($id: ID!){
  user (id: $id) {
    id
    name
    email
  }
}
```

Buscar id, nome e email de todos os usuários:

```
query GET_USERS{
  users {
    id
    name
    email
  }
}
```

Utilize o playground para fazer suas queries e mutations
