#!/bin/bash

if [ ! -d "source" ]
then
    mkdir source
fi

cp -r ../src ../*.json source/.

docker build -t yashvijaydocker/angular-cli-project:YV171117 .
echo "To push execute:"
echo "docker push yashvijaydocker/angular-cli-project:YV171117"
