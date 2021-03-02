Antes de tentar rodar o projeto, lembre de fazer o download das dependencias com o comando yarn ou npm install.

Para iniciar a aplicação basta digitar no console yarn dev:server ou npm run dev:server
Para rodar os testes basta digitar yarn test ou npm run test

Por favor, se atentar ao número de conexões com banco de dados, 
pois estou utilizando um servidor online gratuito que permite apenas 5 conexões de cada vez.

As regiões e planos já estão cadastrados nesse banco de dados.

ROTAS

/users 

POST

Criação de usuario
parametros:

name: string
email: string
password: string

/sessions
POST
cria uma nova sessão para o usuário, retorna o token que deverá ser usado para fazer operações em algumas rotas.

Parametros Json: 
email: string
password: string

/profile
GET
Retorna o perfil do usuario

Parametro Header
token: string


/profile
PUT
Atualiza perfil do usuario
Parametro Header
token: string

Parametros JSON

name: string
email: string

opcionais: password, old_password : string


/users/avatar

PATCH
Adiciona avatar do usuario
Parametro Multipart

avatar: imagem

Parametro Header
token: string

/password/forgot
POST

Envia um email com token para alterar a senha

Parametros JSON
email: string

/password/reset
POST
Parametros JSON

Altera a senha do usuario que a perdeu

password
token: string

/plans
POST

Cria um plano

parametro header
token: string

parametros JSON:

description: string
percentagePerMinute: int
freeMinutes: int

/plans/all
GET
lista todos os planos


/plans/simulate/withoutcall
POST

Faz a simulação solicitada na proposta da tarefa

parametros JSON:

plan_id: string
region_id: : string
totalMinutes: int

/regions
POST

Cria uma região

parametro header
token

parametros JSON:

origin: string
destination: string
pricePerMinute: number

/regions/all
GET
lista todos os planos








