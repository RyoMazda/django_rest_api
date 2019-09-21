FROM python:3.7-buster

RUN apt-get update && apt-get install -y --no-install-recommends \
    vim \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /work

COPY requirements.txt .
RUN pip install --upgrade pip && pip install -r requirements.txt

EXPOSE 8000

