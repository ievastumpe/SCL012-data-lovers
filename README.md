# Data Lovers - Harry Potters

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Historias de usuario](#2-historias-de-usuario)
* [3. Diseño](#3-diseño)
* [4. UX y feedback de usuarios](#4-UX-y-feedback-de-usuarios)
* [5. Javascript & DOM](#5-Javascript-&-DOM)
* [6. Pruebas Unitarias](#6-pruebas-Unitarias)
* [7. Estrategia de trabajo](#7-estrategia-de-trabajo)

***

## 1. Resumen del proyecto

En este proyecto construimos laa página web para visualizar datos de juego [Harry Potter: Wizards Unite](https://www.wizardingworld.com)

El objetivo principal de este proyecto es diseñar y construir una interfaz web donde los ususarios puedan:
1) ver los datos de los personajes del juego;
2) manipular data a la necessidad filtrar por casa, rol, nucleo o tipo de sangre.

Nuestro objetivo era tener la pagina donde el usuario puede visualizar los personajes del juego y filtar por:
- casas (Griffindor, Hufflepuff, Ravenclaw, Slyterin);
- rol (estudente, personal);
- nucleo (unicorn tail-hair, dragon heartstring, phoenix feather);
- tipo de sangre (pure-blood, half-blood, muggleborn).
Los filtros elegimos por comentarios de usuarios del una investigación hacha por el equipo de Laboratoria. 

Los principales usuarios de producto son: jugadores del Harry Potter: Wizards Unite
Los objetivos de estos usuarios en relación con el producto son:

Los datos más relevantes que quieren ver en la interfaz y por qué:

Utilizan o utilizarían el producto cuando quiere obtener información especifica sobre algun de los personajes y depende de criterios de seleccion. 

### 2. Historias de usuario

Despues de entender las necesidades de tus usuarios, escribimos las Historias
de Usuario incluiendo la definición de terminado (_definition of done_) y los
Criterios de Aceptación para cada una.

_Cumple con Definición de Terminado + Criterios de Aceptación_

### 3. Diseño

Para satisfacer las necesidades del usuario elegimos mostrar los datos en formato simple y bien entendimo:

Al primero , hicimos sketches en papel:
![sketch](sketch.png)

Despues los prototipos en Figma (pensando en los dos opciones, como para tamaño computadora y tamaño de telefono mobile).
![sketch](prototipo para android.png)

Agregamos codigo en CSS para implementar el diseño planeado (maquetación), incluyiendo los principios de diseño visual (contraste, alineación, jerarquía), y también del _flexbox_.

### 4. UX y feedback de usuarios

Despues de diseño inicial hablamos con usuarios y entendimos, que necessitamos cambiar imagen del fondo, y aplicamos los cambios necesarios. 

Para obtener el feedback contactamos usuarios potenciales desde pagina Facebook de jugadores. 

### 5. Javascript & DOM

Al principio agregamos ES Modules (export, import), 
Despues experimentamos y aprendimos sobre arrays (filter, map) para entender como aplicarlos. 
Para correr los datos usamos bucle _for_ 
Agregamos funciones a los botones (con addEventListener)

Para funcion de filtrar teniamos dos opciones con que experimentamos:
1) usar _createElement_ y _appendchild_ para crear objetos de tipo boton y agregar imagen y nombre al este objeto usando appendChild;
o
2) mostrar las imagenes y texto seleccionado con HTML dinamico (_innerHTML_);

Elegimos el segundo opcion que apareció más rapido y más simple solucion en nuestro caso. 


### 6. Pruebas Unitarias

Despues de hacer los primeros tests, aparecieron errores de tipo semántico. 
Al primero corregimos estos errores para poder continuar con tests de funciones. 
Para escibir el codigo de tests, usamos ejemplos del [Jest] (https://jestjs.io/docs/en/using-matchers)

### 7. Estrategia de trabajo

Estrategia de trabajo
1) individual 
y de equipo.

Regularmente actualizamos nuestro trabajo y subimos al remote Github. 
Aprendimos y mejoramos nuestra capacidad ejecutar comandos de git (add, commit, pull, status, push)

Planificamos nuestro trabajo diarmente. Usamos trello.com pero también conversamos frequente para cambiar opiniones, comparar codigo actual o decidir por el proximos pasos. 

A pesar de que estábamos dividiendo las tareas entre nosotras, también cambiamos donde era necesario.







