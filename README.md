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

En este proyecto construimos la página web para visualizar datos de juego [Harry Potter: Wizards Unite](https://www.wizardingworld.com)

Los principales usuarios de producto son: jugadores del Harry Potter: Wizards Unite.


El objetivo principal de este proyecto es diseñar y construir una interfaz web donde los ususarios puedan:
1) Ver los datos de los personajes del juego;
2) Filtrar data a la necessidades de jugadores.


Por lo que las características de los personajes ayudan a conocer la historia del mundo mágico (nombre, especie, casa, edad, rol etc.), es importante mostrar esta infromacion del personajes en la pagina.

Los filtros elegimos por comentarios de usuarios del una investigación hacha por el equipo de Laboratoria donde se encuentra que:
- Antes de ir a una batalla contra un incontratus los usuarios pueden cambiar su varita con nucleo para sentirse más confiados. Los filtros permite seleccionar los personajes por nucleo de varita. 
- Los personajes de la saga tienen distintos roles como por ejemplo, profesores. Esta característica es importante cuando un mago o bruja elige una profesión, ya que toma de referencia a su personaje favorito. Por ello, es importante para un mago o bruja poder filtrar por esta característica.
- Los personajes de la saga pertenecen a distintas casas y es importante para un mago o bruja estar en la casa de su personaje favorito.

Por esto definimos los objetivos especificos, que son:
- La pagina permite al usuario visualizar los personajes del juego y filtar por:
- Casas (Griffindor, Hufflepuff, Ravenclaw, Slyterin);
- Rol (estudente, personal);
- Nucleo (unicorn tail-hair, dragon heartstring, phoenix feather);
- Tipo de sangre (pure-blood, half-blood, muggleborn).


### 2. Historias de usuario

Despues de entender las necesidades de tus usuarios, escribimos las Historias de Usuario incluiendo la definición de terminado (_definition of done_) y los
Criterios de Aceptación para cada una.

![userhistory](https://github.com/ievastumpe/SCL012-data-lovers/blob/master/src/historiasDeUsuario.png?raw=true) 

Historia Usuario 1:

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

Agregamos codigo en CSS para implementar el diseño planeado (maquetación), incluyiendo los principios de diseño visual (contraste, alineación, jerarquía), y también del _flexbox_.

### 4. UX y feedback de usuarios

Despues de diseño inicial hablamos con usuarios y entendimos, que necessitamos cambiar imagen del fondo, y aplicamos los cambios necesarios. 

![paginaweb](paginaweb.png)

Para obtener el feedback contactamos usuarios potenciales desde pagina Facebook de jugadores. 

### 5. Javascript y DOM

Al principio agregamos ES Modules (export, import), 
Despues experimentamos y aprendimos sobre arrays (filter, map) para entender como aplicarlos. 
Para correr los datos usamos bucle _for_ 
Agregamos funciones a los botones (con addEventListener)

Para mostrar los objetos filtrados teniamos dos opciones con que experimentamos:
1) Usar _createElement_ y _appendchild_ para crear objetos de tipo boton y agregar imagen y nombre al este objeto usando appendChild;
o
2) Mostrar las imagenes y texto seleccionado con HTML dinamico (_innerHTML_);

![dos opciones](https://github.com/ievastumpe/SCL012-data-lovers/blob/master/src/dos%20opciones.png?raw=true)

Elegimos el segundo opcion que apareció más rapido y más simple solucion en nuestro caso. 


### 6. Pruebas Unitarias

Despues de hacer los primeros tests, aparecieron errores de tipo semántico. 
Al primero corregimos estos errores para poder continuar con tests de funciones. 
Para escibir el codigo de tests, usamos ejemplos del [Jest](https://jestjs.io/docs/en/using-matchers/).

### 7. Estrategia de trabajo


Planificamos nuestro trabajo diarmente. 
1) Usamos Trello: https://trello.com/b/V4cpyap1/harry-potter-wizarding-world

2) También conversamos frequente para cambiar opiniones, comparar codigo actual o decidir por el proximos pasos. 

![trello](trello.png)

A pesar de que estábamos dividiendo las tareas entre nosotras, también cambiamos donde era necesario.


Regularmente actualizamos nuestro trabajo y subimos al remote Github. 
Mejoramos nuestra capacidad ejecutar comandos de git (add, commit, pull, status, push).




