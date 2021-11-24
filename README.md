# Aula 16 - 16/11 - Integração com o front-end

## Primeiros passos

- [ ] Os conceitos de CRUD e MVC
- [ ] Usando controladores para reunir funções handlers
- [ ] Lidando com variáveis de ambiente: https://www.npmjs.com/package/dotenv

## Cadastro com upload de arquivo

- [ ] Instalando `multer`: `npm install multer` - https://www.npmjs.com/package/multer
- [ ] Aplicando o middleware do `multer` nas rotas:

```js
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.post("/produtos", upload.single("imagem"), produtosController.create);
```

- [ ] Acesso ao arquivo da requisição pelo `req.file` e armazenamento do nome do arquivo
- [ ] Montando o caminho das imagens no método `findAll`
- [ ] Configurando um diretório estático: `app.use("/uploads", express.static("uploads"));`: https://expressjs.com/pt-br/starter/static-files.html
- [ ] Cadastrando um produto com imagem no Insomnia

## Integração com front-end

- [ ] Habilitando CORS no back-end com o pacote `cors`: instalar, importar e usar `cors()` como middleware antes das rotas
- [ ] Apresentação do projeto de front-end

```js
const form = document.querySelector("form");

form.addEventListener("submit", async (evt) => {
  evt.preventDefault();
  const formData = new FormData(form);

  const options = {
    method: "post",
    body: formData,
  };
  const response = await fetch("http://localhost:3000/produtos", options);

  if (response.ok) {
    alert("Produto cadastrado com sucesso.");
  } else {
    console.log(response);
    alert("Falha ao cadastrar produto.");
  }
});
```
