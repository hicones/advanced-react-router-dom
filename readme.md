# Uso Avançado de `react-router-dom`

Este projeto demonstra o uso avançado da biblioteca `react-router-dom` para gerenciar a navegação em uma aplicação React que consome a API do Rick and Morty. O projeto utiliza recursos como `searchParams`, `loader`, `location.state`, e `OutletContext` para criar uma experiência de usuário rica e dinâmica.

## Funcionalidades

- **Navegação baseada em URL com `react-router-dom`**
- **Uso de parâmetros de pesquisa (`searchParams`) para filtragem de dados**
- **Carregamento de dados assíncronos com `loader`**
- **Compartilhamento de estado de localização com `location.state`**
- **Utilização de `OutletContext` para passar dados entre rotas**

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/hicones/advanced-react-router-dom


Claro! Vou adicionar uma seção ao README que enfatiza a abordagem de não utilizar constantemente `useState` e `useEffect` para gerenciar estado e efeitos colaterais, destacando a importância de soluções mais eficientes e a utilização das funcionalidades do `react-router-dom`.

Aqui está o README atualizado:

2. **Navegue até o diretório do projeto:**

   ```bash
   cd advanced-react-router-dom
   ```

3. **Instale as dependências:**

   ```bash
   yarn install
   ```

4. **Inicie o servidor de desenvolvimento:**

   ```bash
   yarn dev
   ```

## Estrutura do Projeto

- **`src/`** - Contém o código-fonte do projeto.
  - **`components/`** - Componentes React reutilizáveis.
  - **`pages/`** - Páginas que correspondem a diferentes rotas e Definições de rotas usando `react-router-dom.
  - **`lib/`** - Funções utilitárias e constantes.
  - **`services/`** - Requisições http e http client.

## Principais Recursos

### 1. Parâmetros de Pesquisa (`searchParams`)

Utilizamos `searchParams` para permitir filtragem e busca de personagens. Por exemplo, você pode buscar por um nome de personagem diretamente na URL:

```jsx
import { useSearchParams } from 'react-router-dom';

function CharacterSearch() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name') || '';

  // Fetch characters by name
}
```

### 2. Carregamento de Dados Assíncronos com `loader`

Usamos o `loader` para carregar dados necessários antes da renderização da página. Isto é útil para páginas que precisam de dados da API antes de serem exibidas.

```jsx
import { json, LoaderFunction } from 'react-router-dom';

export const characterLoader: LoaderFunction = async ({ params }) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`);
  const character = await response.json();
  return json(character);
};
```

### 3. Estado de Localização (`location.state`)

Para passar dados entre navegações sem expor na URL, usamos `location.state`. Isso é útil para compartilhar informações sobre a navegação atual ou estados temporários.

```jsx
import { useLocation } from 'react-router-dom';

function CharacterDetail() {
  const location = useLocation();
  const { character } = location.state || {};

  return (
    <div>
      <h1>{character.name}</h1>
      {/* Exibir mais detalhes do personagem */}
    </div>
  );
}
```

### 4. Contexto do Outlet (`OutletContext`)

O `OutletContext` é usado para passar dados do pai para os componentes filhos dentro de uma rota aninhada.

```jsx
import { Outlet, useOutletContext } from 'react-router-dom';

function ParentComponent() {
  const contextValue = { user: 'Rick' };

  return (
    <Outlet context={contextValue} />
  );
}

function ChildComponent() {
  const context = useOutletContext();
  
  return (
    <div>
      <p>Usuário: {context.user}</p>
    </div>
  );
}
```

## Abordagem Eficiente para Estado e Efeitos

Neste projeto, buscamos minimizar o uso constante de `useState` e `useEffect` para gerenciar estado e efeitos colaterais. Ao invés disso, utilizamos as funcionalidades do `react-router-dom` para lidar com:

- **Carregamento de Dados**: Utilizando o `loader`, evitamos a necessidade de múltiplos `useEffect` para buscar dados em diferentes componentes. Isso resulta em uma arquitetura mais limpa e previsível.
  
- **Gerenciamento de Estado**: Usamos `location.state` e `OutletContext` para compartilhar dados entre componentes e rotas sem recorrer ao uso excessivo de `useState`. Isso ajuda a evitar a criação de estados desnecessários e reduz a complexidade do gerenciamento de estado.

Ao adotar essas práticas, o projeto se beneficia de uma estrutura de navegação mais eficiente e menos propensa a problemas relacionados à sincronização de estados e efeitos.

## Exemplos de Rotas

- **Home**: Página inicial com uma lista de personagens.
- **Character**: Página de detalhes de um personagem, carregada com `loader`.
- **Search**: Página de busca, utilizando `searchParams` para filtragem.

## Contribuição

Contribuições são bem-vindas! Por favor, envie um pull request ou abra uma issue para sugerir melhorias ou relatar problemas.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
