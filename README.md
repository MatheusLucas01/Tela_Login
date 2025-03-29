Tela de Login Azure
Este projeto apresenta uma tela de login simples, desenvolvida em React com Vite e CSS (arquivos .css), inspirada na identidade visual do Azure.

Demonstração
Acesse o projeto em funcionamento: 🔗 Tela de Login Azure

Tecnologias Utilizadas
React (com Vite)

JavaScript (ES6+)

CSS3 (arquivos .css)

HTML5

Estrutura de Pastas
Conforme a imagem anexada, o projeto segue esta organização:

csharp
Copiar
Editar
tela_login/
├── node_modules/            # Dependências instaladas
├── public/                  # Arquivos estáticos (se necessários)
├── src/
│   ├── assets/
│   │   └── background.jpg   # Imagem de fundo
│   ├── Components/
│   │   └── Login/
│   │       ├── Login.css    # Estilos específicos do componente de login
│   │       └── Login.jsx    # Componente de login
│   ├── App.css              # Estilos globais ou do App
│   ├── App.jsx              # Componente principal da aplicação
│   ├── index.css            # Estilos globais adicionais
│   └── main.jsx             # Ponto de entrada do React
├── .gitignore               # Arquivos/pastas ignorados pelo Git
├── eslint.config.js         # Configuração do ESLint
├── index.html               # HTML base para a aplicação
├── package-lock.json
├── package.json
├── README.md                # Este arquivo
└── vite.config.js           # Configurações do Vite
Como Executar Localmente
Clonar o repositório:

bash
Copiar
Editar
git clone https://github.com/seu-usuario/tela_login.git
Instalar as dependências:

bash
Copiar
Editar
cd tela_login
npm install
# ou
yarn
Rodar o servidor de desenvolvimento:

bash
Copiar
Editar
npm run dev
# ou
yarn dev
Acessar a aplicação:
Abra seu navegador e visite http://localhost:5173 (ou a porta indicada no terminal).

Scripts Disponíveis
No arquivo package.json, você encontrará os seguintes scripts úteis:

dev: Inicia o servidor de desenvolvimento.

build: Cria a build de produção na pasta dist.

preview: Pré-visualiza a build de produção.

Personalização
Trocar Imagem de Fundo: Para alterar a imagem de fundo, substitua o arquivo background.jpg em src/assets/ por outro arquivo de imagem (atualize o código, se necessário).

Estilos (CSS): Ajuste os estilos nos arquivos Login.css, App.css e index.css para personalizar a aparência geral.

Possíveis Melhorias
Autenticação Real: Conectar a tela de login com algum back-end ou serviço de autenticação (Azure AD, Firebase, etc.).

Validações de Formulário: Adicionar validação de e-mail, senha e mensagens de erro mais detalhadas.

Responsividade Avançada: Ajustar pontos de quebra (breakpoints) para oferecer uma experiência aprimorada em diferentes dispositivos.

Dark Mode: Implementar um tema escuro opcional para a aplicação.

Contribuindo
Contribuições são bem-vindas! Para contribuir:

Faça um fork do repositório.

Crie uma nova branch para sua feature/correção:

bash
Copiar
Editar
git checkout -b minha-feature
Commit suas alterações:

bash
Copiar
Editar
git commit -m "Descrição da minha feature"
Faça o push para o repositório remoto:

bash
Copiar
Editar
git push origin minha-feature
Abra um Pull Request descrevendo suas mudanças.

Licença
Este projeto está sob a licença MIT. Sinta-se à vontade para utilizá-lo e modificá-lo conforme suas necessidades.

Feito com 💙 por Matheus Lucas.
