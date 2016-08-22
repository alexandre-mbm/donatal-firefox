# Verificador do Diário Oficial de Natal

Um botão na Barra de Ferramentas do Firefox, ou atalho customizável de teclado, possibilitam buscar rapidamente palavra-chave ou expressão no Diário Oficial do Município de Natal, capital do Rio Grande do Norte, um Estado brasileiro.

## Ambiente de desenvolvimento

**Instalação:**

```sh
$ sudo pacman -S npm
$ sudo npm install jpm --global
$ yaourt -S firefox-developer
```

**Ativação:**

```sh
$ export JPM_FIREFOX_BINARY=/usr/bin/firefox-developer
$ export JPM_API_KEY=*****************
$ export JPM_API_SECRET=****************************************************************

```

**Teste:**

```sh
$ jpm run
```

**Empacotamento:**
```sh
$ git status
$ git diff
$ git commit
$ ./release.sh VERSÃO "MENSAGEM"
```
