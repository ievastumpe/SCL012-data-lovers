# Data Lovers - Harry Potters

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Historias de usuario](#2-historias-de-usuario)
* [3. Diseño](#3-diseño)
* [4. UX y feedback de usuarios](#4-UX-y-feedback-de-usuarios)
* [5. Javascript y DOM](#5-Javascript-y-DOM)
* [6. Pruebas Unitarias](#6-pruebas-Unitarias)
* [7. Estrategia de trabajo](#7-estrategia-de-trabajo)

***

## 1. Resumen del proyecto

En este proyecto construimos una página web para visualizar datos cada personaje del juego [Harry Potter: Wizards Unite](https://www.wizardingworld.com).

Los principales usuarios de este producto son: jugadores del Harry Potter: Wizards Unite.


El objetivo principal de este proyecto es diseñar y construir una interfaz web donde los ususarios puedan:
1) Ver los datos de los personajes del juego;
2) Filtrar la data de cada personaje según la necesidad de los jugadores.

Por lo que las características de los personajes ayudan a conocer la historia del mundo mágico (nombre, especie, casa, edad, rol etc.), es importante mostrar esta información del personajes en la pagina.

Los filtros que hemos elegido en este proyecto fue en base a comentarios de usuarios que respeondieron a una investigación hecha por el equipo de Laboratoria donde se encuentra que:

- Antes de ir a una batalla contra un incontratus los usuarios pueden cambiar su varita con nucleo para sentirse más confiados. Los filtros permite seleccionar los personajes por nucleo de varita. 

- Los personajes de la saga tienen distintos roles como por ejemplo, profesores. Esta característica es importante cuando un mago o bruja elige una profesión, ya que toma de referencia a su personaje favorito. Por ello, es importante para un mago o bruja poder filtrar por esta característica.

- Los personajes de la saga pertenecen a distintas casas y es importante para un mago o bruja estar en la casa de su personaje favorito.

Por esto definimos los objetivos especificos, que son:
- La pagina permite al usuario visualizar los personajes del juego y filtar por:
- Casas (Gryffindor, Hufflepuff, Ravenclaw, Slyterin);
- Rol (estudiante, personal);
- Nucleo (unicorn tail-hair, dragon heartstring, phoenix feather);
- Tipo de sangre (pure-blood, half-blood, muggleborn).


### 2. Historias de usuario

Despues de entender las necesidades de los usuarios, escribimos las Historias de Usuario:

![userhistory](https://github.com/ievastumpe/SCL012-data-lovers/blob/master/src/historiasDeUsuario.png?raw=true) 

Por ejemplo, historia usuario 1:

Yo como : Jugador

Quiero : Filtrar a los jugadores por casas

Para: Poder saber donde estan sus personajes favoritos.


### 3. Diseño

Para satisfacer las necesidades del usuario elegimos mostrar los datos en formato simple y bien entendimo:

Al primero, hicimos sketches en papel:

![sketch en papel](https://github.com/ievastumpe/SCL012-data-lovers/blob/master/src/scketch.png?raw=true)

Despues los prototipos en Figma:

1) Para tamaño computadora:

![figma para desktop](https://raw.githubusercontent.com/ievastumpe/SCL012-data-lovers/master/src/Figma_Desktop.png)

2) Tamaño de telefono mobile:

![figma para android](https://github.com/ievastumpe/SCL012-data-lovers/blob/master/src/prototipoParaAndroid.png?raw=true)

Agregamos codigo en CSS para implementar el diseño planeado (maquetación), incluyiendo los principios de diseño visual (contraste, alineación, jerarquía), y también de _flexbox_.

### 4. UX y feedback de usuarios

Despues del diseño inicial hablamos con usuarios y entendimos, que necesitamos cambiar imagen de fondo, y aplicamos los cambios necesarios. 

![paginaweb](https://github.com/ievastumpe/SCL012-data-lovers/blob/master/src/paginaweb.png?raw=true)


### 5. Javascript y DOM

Al principio agregamos ES Modules (export, import), 
despues experimentamos y aprendimos sobre arrays (filter, map). 

Para mostrar los objetos filtrados teniamos dos opciones con las cuales experimentamos:
1) Usar _createElement_ para crear objetos de tipo boton y agregar imagen y nombre al este objeto usando appendChild;
o
2) Mostrar las imagenes y texto seleccionado con HTML dinamico (_innerHTML_);

![dos opciones](https://github.com/ievastumpe/SCL012-data-lovers/blob/master/src/dosopciones.png?raw=true)

Elegimos el segundo opcion que nos parecio mas util y más simple para nuestro caso. 


### 6. Pruebas Unitarias

Despues de hacer los primeros tests, aparecieron errores de tipo semántico. 
Al primero corregimos estos errores para poder continuar con tests de funciones. 
Para escribir el codigo de tests, usamos ejemplos del [Jest](https://jestjs.io/docs/en/using-matchers/).

![test1](https://github.com/ievastumpe/SCL012-data-lovers/blob/master/src/test1.png?raw=true)

![test1](https://github.com/ievastumpe/SCL012-data-lovers/blob/master/src/test2.png?raw=true)

### 7. Estrategia de trabajo

Planificamos nuestro trabajo diariamente. 

1) Usamos Trello: https://trello.com/b/V4cpyap1/harry-potter-wizarding-world

2) También conversamos frecuentemente para cambiar opiniones, comparar codigo actual o y asi poder decidir los proximos pasos. 

![trello](https://github.com/ievastumpe/SCL012-data-lovers/blob/master/src/trello.png?raw=true)

A pesar de que estábamos dividiendo las tareas entre nosotras, también cambiamos donde era necesario.


Regularmente actualizamos nuestro trabajo y subimos al remote Github. 
Mejoramos nuestra capacidad ejecutar comandos de git (add, commit, pull, status, push).




