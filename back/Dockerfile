# syntax=docker/dockerfile:1

FROM python:alpine3.15

WORKDIR /python-docker

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY ./src .

CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]
