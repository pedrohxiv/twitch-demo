# Projeto Demo Twitch

## Descrição do Projeto

O Twitch Demo é um projeto abrangente desenvolvido do zero, proporcionando uma experiência semelhante a Twitch com funcionalidades avançadas.

## Principais Funcionalidades

- **Streaming usando RTMP / WHIP:** Os usuários podem transmitir conteúdo utilizando os protocolos RTMP e WHIP, proporcionando uma experiência de transmissão ao vivo robusta.

- **Geração de Ingressos:** Implementei a geração de ingressos para autenticar e direcionar o tráfego de streaming de entrada.

- **Conexão Next.js com OBS:** Configuração da conexão entre a aplicação Next.js e o software de transmissão OBS, permitindo uma integração suave.

- **Autenticação:** Sistema de autenticação para garantir a segurança e validade das contas dos usuários.

- **Upload de Thumbnails:** Os usuários podem fazer upload de thumbnails para personalizar suas transmissões.

- **Contagem de Visualizações em Tempo Real:** Exibição da contagem de espectadores em tempo real durante as transmissões ao vivo.

- **Status de Transmissão ao Vivo:** Indicação clara do status de transmissão ao vivo para os espectadores.

- **Chat em Tempo Real usando Sockets:** Implementação de um sistema de chat em tempo real utilizando sockets para interação instantânea.

- **Cores Únicas para Cada Usuário no Chat:** Atribuição de cores únicas para cada usuário no chat, proporcionando uma experiência visual agradável.

- **Sistema de Seguimento:** Os usuários podem seguir outros criadores de conteúdo.

- **Sistema de Bloqueio:** Implementação de um sistema de bloqueio para gerenciar interações indesejadas.

- **Expulsão de Participantes em Tempo Real:** Possibilidade de expulsar participantes de uma transmissão em tempo real.

- **Dashboard do Streamer / Criador:** Um painel completo para os criadores de conteúdo gerenciarem suas transmissões.

- **Modo de Chat Lento:** Opção de ativar o modo de chat lento para controlar a velocidade das mensagens no chat.

- **Modo Somente para Seguidores no Chat:** Restrição do chat apenas para seguidores do canal.

- **Ativar / Desativar Chat:** Controle para ativar ou desativar o chat durante as transmissões.

- **Layout Colapsável:** Opção para ocultar elementos como barras laterais, chat, etc., proporcionando uma experiência personalizada.

- **Design Atraente:** Desenvolvimento de um design visualmente atraente para melhorar a experiência do usuário.

- **SSR (Server-Side Rendering):** Utilização de SSR para garantir um aplicativo rápido e eficiente.

- **MySQL:** Integração com o banco de dados MySQL para armazenar informações de usuários, transmissões e interações.

## Dependências

O projeto utiliza diversas dependências para garantir seu funcionamento suave:

- `@clerk/nextjs:` ^4.29.1
- `@clerk/themes:` ^1.7.9
- `@livekit/components-react:` ^1.5.1
- `@prisma/client:` ^5.7.1
- `@radix-ui/react-avatar:` ^1.0.4
- `@radix-ui/react-dialog:` ^1.0.5
- `@radix-ui/react-label:` ^2.0.2
- `@radix-ui/react-scroll-area:` ^1.0.5
- `@radix-ui/react-select:` ^2.0.0
- `@radix-ui/react-separator:` ^1.0.3
- `@radix-ui/react-slider:` ^1.1.2
- `@radix-ui/react-slot:` ^1.0.2
- `@radix-ui/react-switch:` ^1.0.3
- `@radix-ui/react-tooltip:` ^1.0.7
- `@tanstack/react-table:` ^8.11.6
- `@uploadthing/react:` ^6.1.0
- `class-variance-authority:` ^0.7.0
- `clsx:` ^2.1.0
- `date-fns:` ^3.2.0
- `jwt-decode:` ^4.0.0
- `livekit-client:` ^1.15.8
- `livekit-server-sdk:` ^1.2.7
- `lucide-react:` ^0.303.0
- `next:` 14.0.4
- `next-themes:` ^0.2.1
- `query-string:` ^8.1.0
- `react:` ^18
- `react-dom:` ^18
- `sonner:` ^1.3.1
- `svix:` ^1.15.0
- `tailwind-merge:` ^2.2.0
- `tailwindcss-animate:` ^1.0.7
- `uploadthing:` ^6.1.1
- `usehooks-ts:` ^2.9.1
- `uuid:` ^9.0.1
- `zustand:` ^4.4.7
- `@types/node:` ^20
- `@types/react:` ^18
- `@types/react-dom:` ^18
- `@types/uuid:` ^9.0.7
- `autoprefixer:` ^10.0.1
- `eslint:` ^8
- `eslint-config-next:` 14.0.4
- `postcss:` ^8
- `prisma:` ^5.7.1
- `tailwindcss:` ^3.3.0
- `typescript:` ^5

## Como Executar o Projeto

1. Clone este repositório em sua máquina local.
2. Certifique-se de ter o Node.js e o npm (ou yarn) instalados.
3. Instale as dependências do projeto utilizando o seguinte comando:

```bash
npm install
# ou
yarn install
```

4. Crie um arquivo `.env` na raiz do projeto com as seguintes chaves e seus respectivos valores:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=seu_valor_aqui
CLERK_SECRET_KEY=seu_valor_aqui
NEXT_PUBLIC_CLERK_SIGN_IN_URL=seu_valor_aqui
NEXT_PUBLIC_CLERK_SIGN_UP_URL=seu_valor_aqui
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=seu_valor_aqui
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=seu_valor_aqui
CLERK_WEBHOOK_SECRET=seu_valor_aqui
DATABASE_URL=seu_valor_aqui
LIVEKIT_API_URL=seu_valor_aqui
LIVEKIT_API_KEY=seu_valor_aqui
LIVEKIT_API_SECRET=seu_valor_aqui
NEXT_PUBLIC_LIVEKIT_WS_URL=seu_valor_aqui
UPLOADTHING_SECRET=seu_valor_aqui
UPLOADTHING_APP_ID=seu_valor_aqui
```

Certifique-se de substituir `seu_valor_aqui` pelos valores corretos de cada chave.

5. Inicie o servidor de desenvolvimento com o seguinte comando:

```bash
npm run dev
# ou
yarn dev
```

6. Acesse a aplicação em `http://localhost:3000` e explore todas as funcionalidades do Twitch Clone, incluindo transmissões ao vivo, interação no chat e gerenciamento de conteúdo.