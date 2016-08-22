# Verificador do Diário Oficial de Natal

Um botão na Barra de Ferramentas do Firefox possibilita pesquisar rapidamente por uma palavra-chave no Diário Oficial do Município de Natal, RN.

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
```

**Teste:**

```sh
$ jpm run
```

**Empacotamento:**
```sh
$ jpm sign --api-key ***************** --api-secret ****************************************************************
```
