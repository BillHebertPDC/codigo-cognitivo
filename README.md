# Código-Cognitivo & Programação Básica Aplicada

Este repositório é parte de um projeto pessoal-acadêmico onde exploro o conceito de **"código-cognitivo"** como uma metáfora (e ferramenta) para entender **como aprendemos a programar, e como programar reprograma nossa mente**.

---

**Código-cognitivo** é a ideia de que nosso cérebro opera com um conjunto de instruções, padrões e mecanismos mentais — como um código-fonte que define como percebemos, pensamos, decidimos e agimos.

Ao estudar **programação básica**, não estamos apenas aprendendo a instruir máquinas — estamos modelando (ou reescrevendo) nossos próprios processos mentais:

---

> _Programar é escrever algoritmos que também moldam a mente de quem os escreve._
---

> _Programar é trazer a existencia daquido que ainda não existe_
---

> _Programar é trazer ao mundo algo que ainda só está em nossas mentes_

---

## Objetivo

Conectar **fundamentos da programação básica** com elementos da **cognição humana**, de forma prática, filosófica e técnica.

Se aprondudar de varias formas não apenas em **PROGRAMAÇÃO** mais em como se tornar um bom profissional.

Abordar ao maximo conseitos de **programação** e **soft skills**

---

## Estrutura do Projeto

- app
-     app.js
-     app-middlewares.js
-     app-routes.js
-     app-session.js
-     app-static.js
- controllers
- middlewares
- models
- routes
- services
- test
- utils
- validations

## Estrutura do Projeto - Explicação
tentar manter ao maximo os principios modulares, manuteníveis, testáveis e escaláveis
app - app.js                - cria a estrutura modulavel para inicializar app.
app - app-moddlewares.js    - inicializa em ordem os middlewares.
app - app-routes.js         - inicializa as rotas.
app - app-session.js        - cria uma sessão para cada usuario, bom para manter o contexto.
app - app-static.js         - configurar o que será publico estatico no site.
