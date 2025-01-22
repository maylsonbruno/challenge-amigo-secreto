# Amigo Secreto

Este é um projeto simples para gerenciar e realizar sorteios de "Amigo Secreto" (ou "Amigo Oculto"). Com ele, você pode adicionar os nomes dos participantes, exibi-los em uma lista, e sortear um nome aleatório. 

## Recursos

- Adicionar nomes de amigos à lista.
- Visualizar a lista de participantes.
- Sortear um nome aleatório entre os participantes.
- Mensagem de alerta para listas vazias ou entradas inválidas.

## Tecnologias Utilizadas

- **HTML5**: estrutura do aplicativo.
- **CSS3**: estilização e design responsivo.
- **JavaScript**: manipulação de DOM e lógica de sorteio.

## Estrutura de Arquivos

```plaintext
/
├── index.html       # Página principal
├── style.css        # Estilo da aplicação
├── app.js           # Script com a lógica da aplicação
└── assets/          # Imagens utilizadas no projeto
    ├── amigo-secreto.png
    └── play_circle_outline.png
```

## Como Usar

1. Clone este repositório:

```bash
git clone https://github.com/maylsonbruno/challenge-amigo-secreto.git
```

2. Abra o arquivo `index.html` em um navegador de sua escolha.

3. No campo de entrada, digite o nome de um participante e clique no botão **Adicionar** para incluir na lista.

4. Quando todos os nomes forem adicionados, clique no botão **Sortear amigo** para realizar o sorteio.

5. O nome sorteado será exibido na tela, e a lista será reiniciada automaticamente.

## Funcionalidades do Código

### HTML

- O arquivo `index.html` define a estrutura principal da página, incluindo:
  - Um cabeçalho com título e imagem.
  - Uma seção de entrada para adicionar nomes.
  - Botões interativos para adicionar nomes e sortear um amigo.

### CSS

- O arquivo `style.css` contém estilos responsivos para:
  - Tornar a aplicação visualmente atraente.
  - Garantir que o layout funcione bem em dispositivos móveis.

### JavaScript

- O arquivo `app.js` gerencia:
  - Adição de nomes à lista.
  - Sorteio de um nome aleatório da lista.
  - Mensagens de erro e limpeza automática da lista após o sorteio.

### Principais Funções

#### adicionarAmigo()
- Adiciona o nome inserido no campo de entrada à lista de participantes.
- Mostra um alerta caso o nome esteja vazio.

#### sortearAmigo()
- Sorteia um nome aleatório da lista.
- Exibe o nome sorteado na tela.
- Limpa a lista e reinicia o estado do aplicativo.

## Pré-requisitos

- Navegador moderno que suporte HTML5, CSS3 e JavaScript.


## Contribuições

Sinta-se à vontade para contribuir com melhorias para este projeto! Envie um pull request ou abra uma issue com sugestões e feedback.

---

**Autor:** Seu Nome 