# Pd Hours Frontend

Neste repositório encontra-se o frontend do sistema de controle de horas PD Hours. A aplicação fornece áreas dedicadas para o gerenciamento de funcionários, squads e relatórios, permitindo a criação e visualização de novos registros. Além disso, oferece uma seção com dados analíticos relacionados às horas registradas nos relatórios de uma squad, proporcionando uma visão geral e detalhada do desempenho das squads.

## Tecnologias utilizadas
- HTML/CSS/JavaScript: Linguagens principais para construção das interfaces.
- Angular:  Framework para construção de aplicações web

## Como executar
### Pré-requisitos
- Node.js (versão 20.16.0 ou superior)
- Angular CLI (versão 19.1.4 ou superior)

Para iniciar o servidor de desenvolvimento local, siga os passos abaixo:
	
1.	Instale as dependências do projeto:
    ```bash
    npm install
    ```

2.	Inicie o servidor de desenvolvimento:
    ```bash
    ng serve
    ```
    

Depois que o servidor estiver em execução, abra seu navegador e navegue até `http://localhost:4200/`. 

Obs: O aplicativo será recarregado automaticamente sempre que você modificar qualquer um dos arquivos de origem.

---
### Padrões de Commit

Este repositório segue uma convenção de commits para manter um histórico claro e consistente. Abaixo está uma tabela com os tipos de commits e suas descrições.

| Tipo de Commit | Descrição |
| -------------- | --------- |
| `feat`         | Adição de uma nova funcionalidade |
| `fix`          | Correção de um bug |
| `docs`         | Mudanças na documentação |
| `style`        | Alterações que não afetam o significado do código (espaços em branco, formatação, ponto e vírgula ausente, etc.) |
| `refactor`     | Refatoração de código, que não altera a funcionalidade nem corrige bugs |
| `perf`         | Alterações de código que melhoram o desempenho |
| `test`         | Adição ou correção de testes |
| `build`        | Mudanças que afetam o sistema de build ou dependências externas (ferramentas de compilação, bibliotecas, etc.) |
| `ci`           | Mudanças em arquivos e scripts de configuração de CI (Integração Contínua) |
| `chore`        | Outras mudanças que não modificam o código fonte ou os testes |
| `revert`       | Reversão de um commit anterior |
| `merge`        | Mesclagem de branches |
| `hotfix`       | Correção urgente de um bug crítico |