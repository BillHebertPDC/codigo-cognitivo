let fluxo = {
  "posts": {
    "id": 1,
    "titulo": "JavaScript",
    "descricao": "Descrição do card sobre JavaScript",
    "tooltip": "ferramenta",
    "status": "published",
    "visibility": "public",
    "version": "1.0.0",
    "duration": 300,
    "metadata": {
      "author": "Nome do Autor",
      "level": "Basico"
    },
    "created_at": "2025-05-29T12:00:00",
    "updated_at": "2025-05-29T12:00:00",
    "feedback": {
      "like_count": 10,
      "dislike_count": 2
    },
    "content_items": [
      {
        "id": 1,
        "titulo": "Item 1",
        "descricao": "Descrição do item 1",
        "examples": [
          { "name": "exemplo", "description": "Código de exemplo 1" },
          { "name": "exemplo2", "description": "Código de exemplo 2" }
        ]
      },
      {
        "id": 2,
        "titulo": "Item 2",
        "descricao": "Descrição do item 2",
        "examples": [
          { "name": "exemplo", "description": "Código de exemplo 3" },
          { "name": "exemplo2", "description": "Código de exemplo 4" }
        ]
      }
    ],
    "arquivos": [
      { "tipo": "video", "url": "https://www.youtube.com/@Oprogramador/featured" }
    ],
    "tags": [
      { "id": 1, "nome": "JS" },
      { "id": 2, "nome": "TEST" }
    ],
    "searches": [
      { "usuario_id": 1, "termo": "JavaScript" }
    ],
    "children": [
      {
        "id": 2,
        "titulo": "JavaScript 2",
        "descricao": "Descrição do card sobre JavaScript 2",
        "tooltip": "ferramenta",
        "content_items": [
          {
            "id": 3,
            "titulo": "Item 1",
            "descricao": "Descrição do item 1",
            "examples": [
              { "name": "exemplo", "description": "Código de exemplo 1" },
              { "name": "exemplo2", "description": "Código de exemplo 2" }
            ]
          }
        ]
      },
      {
        "id": 3,
        "titulo": "JavaScript 3",
        "descricao": "Descrição do card sobre JavaScript 3",
        "tooltip": "ferramenta",
        "content_items": [
          {
            "id": 4,
            "titulo": "Item 1",
            "descricao": "Descrição do item 1",
            "examples": [
              { "name": "exemplo", "description": "Código de exemplo 1" },
              { "name": "exemplo2", "description": "Código de exemplo 2" }
            ]
          }
        ]
      }
    ]
  }
}



//  id: editId ? parseInt(editId) : nextId++,

let fluc = {
  titulo: "",
  descricao: "",
  tooltip: "",
  status: "",
  visibility: "",
  version: "",
  duration: "",
  parent_id: 0,
  metadata: {
    author: "",
    level: ""
  },
  created_at: "",
  updated_at: "",
  feedback: {
    like_count: 0,
    dislike_count: 0
  },
  content_items: [],
  arquivos: [],
  tags: collectTags(),
  searches: [
    { usuario_id: 1, termo: titulo }
  ]
};



/*
const fluxo = {
    "JavaScript": {
        index: 0,
        tooltip: "ferramenta",
        description: "Descrição card",
        content: {
            item1: {
                desc: "descrição do item",
                examples: [{ name: "exemplo", desc: "code" }, { name: "exemplo2", desc: "code" }]
            },
            item2: {
                desc: "descrição do item",
                examples: [{ name: "exemplo", desc: "code" }, { name: "exemplo2", desc: "code" }]
            }

        },
        files: [{
            audio: "",
            video: "https://www.youtube.com/@Oprogramador/featured",
            quiz: ""
        }],
        searches: [],
        tags: ["JS", "TEST"],
        duration: 300,
        feedback: {
            comments: [],
            dislike: 0,
            like: 0
        },
        metadata: {
            author: "Nome",
            level: "Basico",
        },
        visibility: "public",
        status: "published", // ou "draft", "archived"
        version: "1.0.0",
        children: {
            "JavaScript2": {
                index: 0,
                tooltip: "ferramenta",
                description: "Descrição card",
                content: {
                    item1: {
                        desc: "descrição do item",
                        examples: [{ name: "exemplo", desc: "code" }, { name: "exemplo2", desc: "code" }]
                    },
                    item2: {
                        desc: "descrição do item",
                        examples: [{ name: "exemplo", desc: "code" }, { name: "exemplo2", desc: "code" }]
                    }

                },
                files: [{
                    audio: "",
                    video: "https://www.youtube.com/@Oprogramador/featured",
                    quiz: ""
                }],
                searches: [],
                tags: ["JS", "TEST"],
                duration: 300,
                feedback: {
                    comments: [],
                    dislike: 0,
                    like: 0
                },
                metadata: {
                    author: "Nome",
                    level: "Basico",
                },
                visibility: "public",
                status: "published", // ou "draft", "archived"
                version: "1.0.0",
                children: {}
            }, "JavaScript3": {
                index: 0,
                tooltip: "ferramenta",
                description: "Descrição card",
                content: {
                    item1: {
                        desc: "descrição do item",
                        examples: [{ name: "exemplo", desc: "code" }, { name: "exemplo2", desc: "code" }]
                    },
                    item2: {
                        desc: "descrição do item",
                        examples: [{ name: "exemplo", desc: "code" }, { name: "exemplo2", desc: "code" }]
                    }

                },
                files: [{
                    audio: "",
                    video: "https://www.youtube.com/@Oprogramador/featured",
                    quiz: ""
                }],
                searches: [],
                tags: ["JS", "TEST"],
                duration: 300,
                feedback: {
                    comments: [],
                    dislike: 0,
                    like: 0
                },
                metadata: {
                    author: "Nome",
                    level: "Basico",
                },
                visibility: "public",
                status: "published", // ou "draft", "archived"
                version: "1.0.0",
                children: {}
            }
        }
    }
};
*/
/*
let fluxo = {
    "posts": {
        "id": 1,
        "titulo": "JavaScript",
        "descricao": "Descrição do card sobre JavaScript",
        "tooltip": "ferramenta",
        "status": "published",
        "visibility": "public",
        "version": "1.0.0",
        "duration": 300,
        "metadata": {
            "author": "Bill",
            "level": "Basico"
        },
        "created_at": "2025-05-29T12:00:00",
        "updated_at": "2025-05-29T12:00:00",
        "feedback": {
            "like_count": 10,
            "dislike_count": 2
        },
        "content_items": [
            {
                "id": 1,
                "titulo": "Item 1",
                "descricao": "Descrição do item 1",
                "examples": [
                    { "name": "exemplo", "description": "Código de exemplo 1" },
                    { "name": "exemplo2", "description": "Código de exemplo 2" }
                ]
            },
            {
                "id": 2,
                "titulo": "Item 2",
                "descricao": "Descrição do item 2",
                "examples": [
                    { "name": "exemplo", "description": "Código de exemplo 3" },
                    { "name": "exemplo2", "description": "Código de exemplo 4" }
                ]
            }
        ],
        "arquivos": [
            { "tipo": "video", "url": "https://www.youtube.com/@Oprogramador/featured" }
        ],
        "tags": [
            { "id": 1, "nome": "JS" },
            { "id": 2, "nome": "TEST" }
        ],
        "searches": [
            { "usuario_id": 1, "termo": "JavaScript" }
        ],
        "children": [
            {
                "id": 2,
                "titulo": "JavaScript 2",
                "descricao": "Descrição do card sobre JavaScript 2",
                "tooltip": "ferramenta",
                "content_items": [
                    {
                        "id": 3,
                        "titulo": "Item 1",
                        "descricao": "Descrição do item 1",
                        "examples": [
                            { "name": "exemplo", "description": "Código de exemplo 1" },
                            { "name": "exemplo2", "description": "Código de exemplo 2" }
                        ]
                    }
                ]
            },
            {
                "id": 3,
                "titulo": "JavaScript 3",
                "descricao": "Descrição do card sobre JavaScript 3",
                "tooltip": "ferramenta",
                "content_items": [
                    {
                        "id": 4,
                        "titulo": "Item 1",
                        "descricao": "Descrição do item 1",
                        "examples": [
                            { "name": "exemplo", "description": "Código de exemplo 1" },
                            { "name": "exemplo2", "description": "Código de exemplo 2" }
                        ]
                    }
                ]
            }
        ]
    }
}
*/

/*
    "Tecnico": {
        "id": 1,
        "titulo": "Lógica de Programação",
        "tooltip": "Lógica de Programação é o jeito de pensar para resolver problemas passo a passo...",
        "children": [
            {
                "id": 2,
                "titulo": "Algoritmos",
                "tooltip": "Algoritmos são sequências de passos bem definidos",
            },
            {
                "id": 3,
                "titulo": "Fluxogramas",
                "tooltip": "Fluxogramas são diagramas que representam visualmente a sequência de passos de um processo ou algoritmo.",
            }
        ]
    }
 */
