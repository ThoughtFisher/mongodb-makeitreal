/**
 * Ejercicios MongoDB
 *
 * Se les entregará una calleción de restaurantes
 * que será similares al siguiente objecto literal
 */

const restaurant = {
  address: {
    building: '1007',
    coord: [-73.856077, 40.848447],
    street: 'Morris Park Ave',
    zipcode: '10462'
  },
  borough: 'Bronx',
  cuisine: 'Bakery',
  grades: [
    { date: { $date: 1393804800000 }, grade: 'A', score: 2 },
    { date: { $date: 1378857600000 }, grade: 'A', score: 6 },
    { date: { $date: 1358985600000 }, grade: 'A', score: 10 },
    { date: { $date: 1322006400000 }, grade: 'A', score: 9 },
    { date: { $date: 1299715200000 }, grade: 'B', score: 14 }
  ],
  name: 'Morris Park Bake Shop',
  restaurant_id: '30075445'
}

/**
1. Escriba una consulta MongoDB para mostrar todos los documentos en los restaurantes de la colección.

2. Escriba una consulta MongoDB para mostrar los campos restaurant_id, name, burough y cuisine para todos los documentos en el restaurante de la colección.

3. Escriba una consulta MongoDB para mostrar los campos restaurant_id, name, burough y cuisine, pero excluya el campo _id para todos los documentos en el restaurante de la colección.

4. Escriba una consulta MongoDB para mostrar los campos restaurant_id, name, burough y zip code, pero excluya el campo _id para todos los documentos en el restaurante de la colección.

5. Escriba una consulta MongoDB para mostrar todo el restaurante que se encuentra en el distrito del Bronx.

6) Escriba una consulta MongoDB para mostrar los primeros 5 restaurantes que se encuentran en el distrito del Bronx.

7. Escriba una consulta MongoDB para mostrar los siguientes 5 restaurantes después de omitir los primeros 5 que se encuentran en el condado de Bronx.

8. Escriba una consulta MongoDB para encontrar los restaurantes que obtuvieron una puntuación de más de 90. Vaya al editor

9. Escriba una consulta MongoDB para encontrar los restaurantes que obtuvieron una puntuación, más de 80 pero menos de 100. Vaya al editor

10. Escriba una consulta MongoDB para encontrar los restaurantes que se encuentran en un valor de latitud inferior a -95.754168.

11. Escriba una consulta de MongoDB para encontrar los restaurantes que no preparan ninguna cocina de 'American' y su puntaje de calificación es superior a 70 y latitud inferior a -65.754168.

12. Escriba una consulta MongoDB para encontrar los restaurantes que no preparan ninguna cocina de 'American' y obtuvieron un puntaje de más de 70 y se ubicaron en la longitud de menos de -65.754168.
Nota: Realice esta consulta sin usar $ y el operador.

13. Escriba una consulta MongoDB para encontrar los restaurantes que no preparan ninguna cocina de 'American' y obtuvieron un punto de calificación 'A' que no pertenece al distrito de Brooklyn. El documento debe mostrarse según la cocina en orden descendente.

14. Escriba una consulta MongoDB para encontrar la identificación, el nombre, el distrito y la cocina del restaurante para aquellos restaurantes que contienen 'Wil' como las primeras tres letras para su nombre.

15. Escriba una consulta de MongoDB para encontrar la identificación, el nombre, el distrito y la cocina del restaurante para aquellos restaurantes que contienen 'ces' como las últimas tres letras para su nombre.

16. Escriba una consulta MongoDB para encontrar la identificación, el nombre, el distrito y la cocina del restaurante para aquellos restaurantes que contienen 'Reg' como tres letras en algún lugar de su nombre.

17. Escriba una consulta de MongoDB para encontrar los restaurantes que pertenecen al condado de Bronx y que prepararon platos estadounidenses o chinos.

18. Escriba una consulta de MongoDB para encontrar la identificación, el nombre, el distrito y la cocina del restaurante de los restaurantes que pertenecen al distrito Staten Island o Queens o Bronxor Brooklyn.

19. Escriba una consulta de MongoDB para encontrar la identificación, el nombre, el distrito y la cocina del restaurante para aquellos restaurantes que no pertenecen al distrito Staten Island o Queens o Bronxor Brooklyn.

20. Escriba una consulta MongoDB para encontrar la identificación, el nombre, el distrito y la cocina del restaurante para aquellos restaurantes que obtuvieron una puntuación que no es más de 10. Vaya al editor

21. Escriba una consulta de MongoDB para encontrar la identificación, el nombre, el distrito y la cocina del restaurante para aquellos restaurantes que prepararon platos, excepto 'American' y 'Chinees' o el nombre del restaurante comienza con la letra 'Wil'.

22. Escriba una consulta de MongoDB para encontrar la identificación, el nombre y las calificaciones del restaurante para aquellos restaurantes que obtuvieron una calificación de "A" y obtuvieron 11 en un ISODate "2014-08-11T00: 00: 00Z" entre muchas de las fechas de la encuesta. Ve al editor

23. Escriba una consulta MongoDB para encontrar la identificación, el nombre y las calificaciones de los restaurantes en los que el segundo elemento de la matriz de calificaciones contiene una calificación de "A" y una calificación de 9 en un ISODate "2014-08-11T00: 00: 00Z".

24. Escriba una consulta MongoDB para encontrar el Id, nombre, dirección y ubicación geográfica del restaurante para aquellos restaurantes donde el segundo elemento de la matriz de coordenadas contiene un valor que es más de 42 y hasta 52 .. Vaya al editor

25. Escriba una consulta MongoDB para organizar el nombre de los restaurantes en orden ascendente junto con todas las columnas.

26. Escriba una consulta MongoDB para organizar el nombre de los restaurantes en orden descendente junto con todas las columnas.

27. Escriba una consulta MongoDB para organizar el nombre de la cocina en orden ascendente y para ese mismo distrito de cocina debe estar en orden descendente.

28. Escriba una consulta MongoDB para saber si todas las direcciones contienen la calle o no.

29. Escriba una consulta MongoDB que seleccionará todos los documentos en la colección de restaurantes donde el valor del campo coord es Doble.

30. Escriba una consulta MongoDB que seleccionará la identificación, el nombre y las calificaciones del restaurante para esos restaurantes que devuelve 0 como resto después de dividir la puntuación entre 7. Vaya al editor

31. Escriba una consulta MongoDB para encontrar el nombre del restaurante, la ciudad, la longitud y la actitud y la cocina de esos restaurantes que contiene 'mon' como tres letras en algún lugar de su nombre.

32. Escriba una consulta MongoDB para encontrar el nombre del restaurante, ciudad, longitud y latitud y cocina para aquellos restaurantes que contienen 'Mad' como las primeras tres letras de su nombre. 
 */
