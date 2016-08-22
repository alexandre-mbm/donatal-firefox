#!/bin/bash

VERSION=$1

MESSAGE="$2"

function CL() {
    STR="$1"
    STR=${STR//\:/\\:}
    STR=${STR//\//\\/}
    STR=${STR//\_/\\_}
    echo "$STR"
}

UPDATE_LINK=$(CL https://github.com/alexandre-mbm/donatal-firefox/releases/download/$VERSION/verificador_do_diario_oficial_de_natal-$VERSION-fx.xpi)

UPDATE_URL=$(CL https://raw.githubusercontent.com/alexandre-mbm/donatal-firefox/master/update.rdf)

RDF=@donatal-$VERSION.update.rdf

XPI=donatal.xpi

FINAL=$(CL verificador_do_diario_oficial_de_natal-$VERSION-fx.xpi)

JSON=package.json

MANIFEST=update.rdf

# muda versão
# gera pacote
# git push --tags
# editar o release (abrir página)

sed -i '/"version"\:/s/\: ".*"/\: "'$VERSION'"/' $JSON
sed -i '/"updateURL"\:/s/\: ".*"/\: "'$UPDATE_URL'"/' $JSON
sed -i '/"updateLink"\:/s/\: ".*"/\: "'$UPDATE_LINK'"/' $JSON

jpm xpi

jpm sign --api-key "$JPM_API_KEY" --api-secret "$JPM_API_SECRET" --xpi $XPI

mv $RDF $MANIFEST

git add $JSON
git add $MANIFEST
git commit -m "$MESSAGE"
git tag -f $VERSION
git push
git push --tags
git show

echo
echo https://github.com/alexandre-mbm/donatal-firefox/releases/tag/$VERSION
echo
