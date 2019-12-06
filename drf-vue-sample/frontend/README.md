# frontend

## Develop App on Docker
### Run development server
```bash
docker-compose build && docker-compose up
# See http://localhost:8080
# getting inside the container
docker exec -it street_main_1 sh
```

### Run test
```bash
docker-compose build && docker-compose run --rm main yarn run test:unit
# with updating snapshot
yarn run test:unit --updateSnapshot
```

---

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your end-to-end tests
```
yarn run test:e2e
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
