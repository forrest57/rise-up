# Rise Up!

### Vuejs + Vuetify & bulma spike as a Social network, inspired by reddit and made mainly for free speech-related sites.

---

## This project has two backend implementations, which were made as spikes, you pick your favourite:

### 1) Node,Express,Mongo backend
This backend was made with the MEAN stack in mind, to run just start up a local mongoDb session and cd into the  Expressjs_backend folder, then run 

    $ npm i
    $ npm i -g nodemon
    $ nodemon serve

### 2) FastAPI, sqlalchemy, pydantic mysql backend
This backend was made as a love letter to python from an older project of mine. to run it simply create a riseup_development MySQL DB and cd into the fastApi_backend folder, then:
   
    $ source ./env/bin/activate 
    $ pip3 install pymysql fastapi sqlalchemy pydantic uvicorn
    $ uvicorn main:app --reload
        OR, if you're on Windows
    $ source ./env/scripts/activate
    $ pip install pymysql fastapi sqlalchemy pydantic uvicorn
    $ uvicorn main:app --reload

##### Then you're all set! the documentation will be automatically generated at localhost:8000/docs 
