# MongoDB

## Base de datos NOSQL

###### Tipo Documental

**MongoDB** es una base de datos NO SQL de tipo documental.
Puede ser una de las más usadas o la más usada cuando de no relacionales se trata.

Una cosa importante sobre MongoDB es que es gratis y _open source_ lo cual lo hace
genial para comenzar a desarrollar. Addicionalmente, existe soporte pago de algunas plataformas
en caso de hacer despliegues más complejos.

## ¿Pero qué es una base de datos?

Es una forma de persistir información en el tiempo.

### ¿Como hace MongoDB para almacenar la información?

#### Colecciones

En mongo los datos son almacenados como _Colleciones_ las cuales por dentro estan constituidas por Documentos

#### Documentos

Su estructura es parecida a los _**Objectos literales de JS**(JSON)_ pero estos son llamados **BSON _(Binary JSON)_**.

### Estructura

Un ejemplo de estructura podría se la siguiente.

```
 {
   username: 'jasmo2',
   name: 'jaime',
   hobbies: ['coding', 'bikes', 'family time']
   jobs: [
     {
       employeer: 'make it real',
       role: 'mentor'
     },
     {
       employeer: 'MSCo',
       role: 'Technologist'
     }
   ]
 }
```

Si aun usado alguna vez Bases de datos relacionales, verán que `Jobs` tendría una tabla aparte con los campos _employeer, role_

En cambio e nuestra base de **MongoDB** tenemos la realación como documentos internos.

## Instalación

#### ==> [Mongo community](https://docs.mongodb.com/manual/administration/install-community/)

###### MacOS sudo brew services start mongodb-community; mongo

Dependiendo del sistema operativo escojen su instalador.

Después de instalado probar el comando `mongo` esto deberia abrirles la terminal.

## Primeros pasos

creemos una base de datos para jugar un poco.
llamemola `make_it_real_mongo`

- `mongo`
- `show dbs`
- `use make_it_real_mongo`
  - Este comando puede hacer dos cosas:
    - Crear una base de datos nueva.
    - Usar una ya existente.
- `db.createCollection("users");`
  - Creemos una colleción llamada `users`.
- `show collections`
- `db.users.insertOne(...);`
  - Se crea un registro
  - `db.users.insert([...])` el metodo anterior es lo mismo pero mara multiples inserciones al tiempo.

###### data to insert: { username: "jasmo2", name: "jaime", hobbies: ['coding', 'bikes', 'family time'] }

### Filtrando y Listando documentos

Muchas veces necesitamos obtener los registros en nuestra DB, por lo tanto. Auquí los podriamos obtener por id o por otro atributo que se tenga en el documento.

Ej:

- `db.users.find({_id: ObjectId(...)})`
- `db.users.find({name: 'jaime'})`

También existen varias palabras clave que nos ayudarán a filtrar a la hora de listar resultados.

- \$or
- \$gt
- \$lt
- \$gte
- \$lte
- \$in
- \$and

##### Entre otros.

### Actualizando documentos

Aquí mostraremos los casos con los cuales se puede actulizar un solo registro o todos los de la colección.

##### `db.users.updateOne({ _id: ObjectId(...) }, { $set: { email: "jasmo2@example.com", name: "example" } });`

Y para ultiples registros usamos:

##### `db.users.update(<query>,<update>)`
