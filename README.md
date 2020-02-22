# tam
min tam server

###Setup||Installation

```ssh 
git clone https://github.com/mexxwill/tam
npm install
nodejs index.js
```

###Create Keys

```ssh
openssl genrsa -out rsa.private 4096
openssl rsa -in rsa.private -out rsa.public -pubout -outform PEM 
```
or use
```ssh
ssh-keygen -t rsa -b 4096 -m PEM -f jwtRS256.key
openssl rsa -in jwtRS256.key -pubout -outform PEM -out jwtRS256.key.pub
```

###Description

Access running tam-server with curl localhost:7777 or curl localhost:7777/tam - depending on which format you want to access the jws.

###TEEP
https://siot-hackathon.github.io/slides/teep01.pdf
https://siot-hackathon.github.io/slides/teep02.pdf

https://tools.ietf.org/html/draft-ietf-teep-opentrustprotocol-03
