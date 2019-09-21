#/bin/bash

set -eu -o pipefail

echo hello from run.sh

if [[ ${APP_ENV} = "local" ]]; then
  echo "with APP_ENV=local"
  echo "waiting for the db to be ready..."
  sleep 3
  # check
  python manage.py check
  # make migration
  python manage.py makemigrations
  python manage.py migrate
  # test apps
  # python manage.py test shop --noinput
elif [[ ${APP_ENV} = "gachi" ]]; then
  echo "with APP_ENV=gachi"
  # migration
  python manage.py migrate
else
  echo "APP_ENV (${APP_ENV})が不正です。localまたはgachiと指定して下さい。"
  exit 1
fi

# admin
# python manage.py createsuperuser
# Ref: https://stackoverflow.com/questions/6244382/how-to-automate-createsuperuser-on-django
# cat create_admin_user.py | python manage.py shell

# Initial Data
if [[ ${APP_ENV} = "local" ]]; then
  echo "Creating initial data..."
  # python manage.py loaddata apiv1/fixtures/initial_data
  # python manage.py loaddata shop/fixtures/initial_data
fi

python manage.py runserver 0:8000
