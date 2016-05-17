# k-auth (Easy Authentication and Authorization API) (Work in progress...)

An authentication microservicee API. Uses JWT Tokens to handle signup, signin and other authentication related functionality.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

```
1. git clone https://github.com/sunkay/k-auth.git
2. docker-compose up
```

### Prerequisities

What things you need to install the software and how to install them

```
node
npm
docker
docker-compose
```
## Have to create the secret that is required for JWT Tokens

Create a file in the server folder called config-secret.js & add the following. The secret can be any random set of characters...

```
// hold application secrets and config

module.exports = {
  secret: "askdlmnz234casdf234safa324"
}
```

### Request & Response Examples

```
TBD
```

## Running the tests

TBD

### Break down into end to end tests

TBD
```
Give an example
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
