# DIU20
Prácticas Diseño Interfaces de Usuario 2019-20 (Economía Colaborativa) 

Grupo: DIU3_Lutece.  Curso: 2019/20 

Proyecto: Experiencias de compartir ocio 

Descripción: 

Logotipo: 

Miembros
 * :bust_in_silhouette:   José Manuel Navarro Cuartero     :octocat: ([@9pepe7](https://github.com/9pepe7))
 * :bust_in_silhouette:  Iván Valero Rodríguez     :octocat: ([@IvanitiX](https://github.com/IvanitiX))
----- 

En esta práctica estudiaremos un caso de plataforma de economía colaborativa y realizaremos una propuesta para su diseño Web/movil. Utilizaremos herramientas y entregables descritos en el siguiente CheckList (https://github.com/mgea/UX-DIU-Checklist) 


Qué es economia colaborativa: Martínez-Polo, J. (2019). **El fenómeno del consumo colaborativo: del intercambio de bienes y servicios a la economía de las plataformas**, *Sphera Publica, 1*(19), 24-46. http://sphera.ucam.edu/index.php/sphera-01/article/view/363/14141434

# Proceso de Diseño 

## Paso 1. UX Desk Research & Analisis 

![Método UX](img/Competitive.png) 1.a Competitive Analysis
-----

Se ha estudiado tres páginas relacionadas con el tema (MeetUp, Eatwith y Artery) y se ha visto que en general son páginas de ocio donde los *hosts* hacen *eventos* en un lugar concreto y permite que la 
gente se apunte.Dan toda la información sobre el evento, quien lo lleva y quien asiste. Elegimos MeetUp al final por la completitud de opciones que trae. 

![Método UX](img/Persona.png) 1.b Persona
-----
*Travis*: Sería un caso donde se enfatiza el caso de uso de la página de asistir a eventos.
*Laura*: Sería el caso contrario, aquella que quiere crear un evento a través de la página para que la gente asista a esta.

![Método UX](img/JourneyMap.png) 1.c User Journey Map
----

Hemos escogido estas dos experiencias de usuario por ser opuestas, a saber, por un lado la de alguien que desea publicar una actividad, y por otro, alguien que busca realizarla.
*Travis*: Busca un plan para salir por la zona.
*Laura*: Trata de usar su local para hacer eventos.

![Método UX](img/usabilityReview.png) 1.d Usability Review
----

[Enlace al Usability Review en Excel](https://github.com/IvanitiX/DIU20/blob/master/P1/Usability-review-template.xlsx)
**Valoración** : 78. 
*En general, la experiencia es muy buena, es una página muy completa y bastante user-friendly. Pero a la hora de buscar las actividades, no hay muchas opciones de búsqueda, hay categorías malamente etiquetadas , y no permite hacer cosas más avanzadas y rápidas para usuarios expertos. Nuestras personas, en general, podrían navegar por la página sin muchas dificultades.*

## Paso 2. UX Design  


![Método UX](img/feedback-capture-grid.png) 2.a Feedback Capture Grid
----



 Interesante | Críticas     
| ------------- | -------|
| Crear un grupo es bastante fácil (al menos hasta llegar al proceso de pago)| Homepage para usuarios registrados está mal estructurado.|
|Información de eventos a golpe de vista| Búsqueda de eventos pobre y poco amigable.|
|Fácil de encontrar por los buscadores|No hay versión para imprimir tampoco se puede imprimir la página del evento correctamente.|
|  **Preguntas** | **Nuevas ideas**|
|Pagar por publicitar eventos por la página o anuncios de la web.|Usando geolocalización, que se avise de eventos cercanos a la ubicación del usuario|
|Sistema de verificación para no crear eventos “falsos”|Grupo de Whatsapp/Telegram/Otra aplicación de mensajería integrada o externa para coordinación.|
|Sistema de valoración|Posibilidad de clasificar a los asistentes según sean VIPs, prensa....|
|Poder compartir los eventos vía RRSS|Posibilidad de "leer la página" para ciegos
  
#### Sobre la propuesta de valor
 La aplicación se basa en un conjunto de grupos que se reunen en una localización, y estos hacen una serie de eventos. Por ello, la aplicación deberá visualizar información sobre los grupos, y cada uno de los eventos que hacen. Cualquier persona que entre a la aplicación podrá ver esos eventos y unirse a ellos.

Al haber posibilidad de que los eventos sean de paga, habría que permitir pasar por una plataforma de pago sencilla y fácil de usar. Una vez finalice el evento el usuario podría valorarlo y unirse al grupo que lo ha hecho por si quiere asistir a más eventos. Por otra parte, habrá gente que tendrá que crear tales grupos y eventos . Estos podrán crear grupos y, a través de ellos, los eventos.

![Método UX](img/Sitemap.png) 2.b Tasks & Sitemap 
-----


||Grupo 1 (Creadores)|Grupo 2 (Usuarios Asiduos)|Grupo 3 (Usuarios casuales)|
|-|------------------|--------------------------|---------------------------|
|Crear un grupo|M|||
|Crear un evento|H|||
|Unirse a un grupo|L|M|L|
|Unirse a un evento|M|H|M|
|Registrarse|L|L|L|
|Mandar un mensaje|M|M|L|
|Hacer una valoración|L|M|L|
|Publicitar un evento|L|||
|Consultar ayuda|H|M|M|
|Solicitar contacto(grupo)|L|L|L|
|Solicitar contacto(app)|L|L|L|
|Pagar por un evento||M|M|
|Consultar "Acerca de..."|L|L|L|
|Consultar Términos y Condiciones|H|L|L|
|Consultar eventos|M|H|H
|Consultar grupos|M|M|M
Consultar perfil de usuario|L|L|L
Consultar mensajes|M|M|M
Consultar notificaciones|H|M|M|


## Sitemap

![Sitemap](P2/img/Sitemap.png)


![Método UX](img/labelling.png) 2.c Labelling 
----


Término | Significado     
| ------------- | -------
  Login  | Acceder a plataforma
  Pagina principal| Pagina donde se llega desde el buscador
  Grupos| Conjunto específico de personas que hacen eventos
  Eventos| Reuniones donde se hablan de temas concretos
  Ayuda| Sección para resolver aquellas dudas sobre la página
  Contacto| Sección para contactar con el webmaster
  Reserva de plaza| Solicitud para participar en el evento
  Plataforma de pago| Lugar donde se redirecciona en caso de requerir pago
  Contactar con el organizador| Lugar de la página donde aclara dudas o referir incidentes al organizador del evento
  Panel de control de grupos| Zona exclusiva para organizadores o creadores de eventos para gestionar los grupos que dirigen y los eventos correspondientes
  Gestión de grupos| Zona de organizadores/creadores de eventos para gestionar los grupos pertenecientes.
  Gestión de eventos| Zona de gestión para organizadores dirigido a crear, notificar o modificar eventos
  Crear (evento/grupo)| Permite crear un nuevo grupo(o evento)
  Modificar (evento/grupo)| Permite modificar los datos o eliminar un grupo (o evento)
  Publicidad de eventos| Zona de gestión de marketing de eventos a través de agencias de publicidad por Internet
  Temas de ayuda| Tópicos o temas en los que se dividen las distintas posibles preguntas de la página de ayuda
  FAQs|Del Inglés "Frequently Asked Questions", se tratan de las preguntas frecuentes sobre tal tópico
  Pregunta| La página correspondiente a tal pregunta.
  Acerca de | Información sobre la aplicación y la empresa.
  Términos y Condiciones | Información y bases legales del us de la aplicación.
  Usuario| Perfil y algunos datos personales básicos del usuario.


![Método UX](img/Wireframes.png) 2.d Wireframes
-----

[>> Míralo aquí](https://github.com/IvanitiX/DIU20/tree/master/P2)


## Paso 3. Mi equipo UX-Case Study 


![Método UX](img/moodboard.png) 3.a ¿Como se cuenta un UX-Case Study?
-----


>>> Analizar lo aprendido de la experiencia MuseApp 

![Método UX](img/landing-page.png)  3.b Logotipo
----


>>> Si diseña un logotipo, explique la herramienta utilizada y la resolución empleada. ¿Puede usar esta imagen como cabecera de Twitter, por ejemplo, o necesita otra?

![Método UX](img/guidelines.png) 3.c Guidelines
----

>>> Tras documentarse, muestre las deciones tomadas sobre Patrones IU a usar para la fase siguiente de prototipado. 

![Método UX](img/mockup.png)  3.d Video
----

>>> Documente y resuma el diseño de su producto en forma de video de 90 segundos aprox


## Paso 4. Evaluación 


![Método UX](img/ABtesting.png) 4.a Casos asignados
----


>>> Descripción de las asignaciones (3 UX Case Study) y enlace a  sus repositorios.

>>>> En la seccioón P4/readme.md se debe acceder además a sus respectivas hojas de evaluación y conclusiones 


![Método UX](img/usability-testing.png) 4.b User Testing
----

>>> Seleccione a una de sus personas ficticias. Exprese las ideas de posibles situaciones conflictivas de esa persona en las propuestas evaluadas


![Método UX](img/Survey.png). 4.c Ranking 
----

>>> Concluya con un ranking de los casos evaluados 

>>> Valoración personal 


## Paso 5. Evaluación de Accesibilidad  


![Método UX](img/Accesibility.png)  5.a Accesibility evaluation Report
----

>>> Indica qué pretendes evaluar (de accesibilidad) y qué resultados has obtenido + Valoración personal

>>> Evaluación de la Accesibilidad (con simuladores o verificación de WACG) 



## Conclusión final / Valoración de las prácticas


>>> (90-150 palabras) Opinión del proceso de desarrollo de diseño siguiendo metodología UX y valoración (positiva /negativa) de los resultados obtenidos  






