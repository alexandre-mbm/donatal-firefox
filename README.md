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
```

**Teste:**

```sh
$ jpm run
```

**Empacotamento:**
```sh
$ jpm sign --api-key ***************** --api-secret ****************************************************************
```
