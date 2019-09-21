# DRF simplest sample
Practicing DRF + Vue.js by building books for sale managing web application.

Policies:
- Using Cookie for Authentication
- Using Bootstrap Vue
- Not using Vuex
- Not using Vue Router

## Refs
- https://github.com/akiyoko/drf-simplest-sample
  - main source

### Getting Started
```bash
docker-compose build
docker-compose run --rm --service-ports web bash
```

```bash
# register admin
python manage.py createsuperuser

python manage.py check

# test
python manage.py test polls

# updaete migration file
python manage.py makemigrations

python manage.py migrate

# run server
python manage.py runserver 0:8000
```
