# UFSC - CTC - INE - INE5646 Programação para Web :: Exercício App Lembretes

A aplicação permite que o usuário que já esteja cadastrado registre pequenos lembretes em um banco de dados. Usuários são cadastrados informando um login e uma senha.

## Objetivo do Exercício

Mostrar uma aplicação do tipo SPA (*Single Page Application*) que implementa o conceito de autenticação de usuário utilizando o conceito de Java Web Token ([JWT](https://jwt.io/)). A aplicação também mostra como acessar uma base de dados [MongoDB](https://docs.mongodb.com/) para armazenar os dados dos usuários e seus respectivos lembretes.

A aplicação utiliza tokens no formato JWT (JSON Web Token) gerados pela
biblioteca *jsonwebtoken*. A documentação desta biblioteca está disponível em
[https://github.com/auth0/node-jsonwebtoken#readme](https://github.com/auth0/node-jsonwebtoken#readme)

## Instruções

Crie uma base de dados MongoDB que será acessada pela aplicação. Como sugestão, acesse [https://mlab.com](https://mlab.com)  e, depois de se registrar, crie uma base para você.

Depois de baixar/clonar o respositório, entre no diretório **cliente** e digite

`npm install`

para instalar os pacotes JavaScript utilizados pelo lado cliente da aplicação.

Repita o comando acima dentro do diretório **servidor**, instalando os pacotes JavaScript utilizados pelo lado servidor da aplicação.

Dentro do diretório **servidor**, crie o arquivo **.env** e adicione o seguinte conteúdo

```bash
PORTA=3000
BD_URL=mongodb://...
SENHA_JWT='senha super secreta'
DURACAO_JWT='1h'
SALT='Uma_frase_1mig1'
```

O valor da variável BD_URL deve ser a URL que dá acesso à sua base de dados.

O valor das demais variáveis também devem ser alteradas. Em uma situação real, o conteúdo do arquivo **.env** deve ser protegido. Somente o desenvolvedor da aplicação pode conhecer as 5 variáveis e seus respectivos valores.

### Durante o desenvolvimento

O desenvolvimento da aplicação envolve duas frentes de trabalho: a programação necessária para o lado cliente e a programação necessária para o lado servidor.

#### Lado Cliente

Para iniciar o desenvolvimento do lado cliente entre no diretório **cliente** e digite

`npm start`

Cada vez que um arquivo no lado cliente for alterado o webpack será acionado para gerar uma nova versão do arquivo bundle.js.

#### Lado Servidor

Para iniciar o desenvolvimento do lado servidor entre no diretório **servidor** e digite

`npm start`

A partir de então a aplicação estará disponível na porta 3000 (ou na porta que você definiu no arquivo **.env**). Para acessar, use o navegador e digite o endereço `https://localhost:3000`.

Sempre que um arquivo no lado servidor for alterado e salvo a aplicação irá reiniciar automaticamente (graças ao pacote **nodemon**).

### Em produção

Depois que o código da aplicação está pronto é preciso gerar as versões otimizadas (em termos de tamanho e velocidade de execução) dos arquivos do lado cliente e do lado servidor.

#### No Lado Cliente

Para gerar a versão em produção do lado cliente entre no diretório **cliente** e digite

`npm run build`

#### No Lado Servidor

Para gerar a versão em produção do lado servidor entre no diretório **servidor** e digite

`npm run build`

#### Executando a aplicação em produção

Para executar a aplicação em modo produção entre no diretório **servidor** e digite

`node build/app.js`
