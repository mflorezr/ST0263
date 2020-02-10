Proyecto 1

Registro de datos de un sensor de arduino en una aplicacion web.

Mateo Flórez Restrepo 

Universidad EAFIT.

Requisitos Funcionales 

La aplicación debe contar con un formulario para registrar los datos del sensor.
La aplicación debe mostrar los datos que son registrados del sensor.
La aplicación debe permitir autenticar al usuario mediante un módulo de Log In.
La aplicación debe permitir la eliminación y actualización de los datos del sensor.
La aplicación debe almacenar los datos en una base de datos vía API REST.

Requisitos no funcionales

La aplicación debe permitir la visualización de los datos solo al usuario que los haya registrado.
El tiempo de respuesta correspondiente al registro de los datos del sensor debe ser menor a 0,5 sg.
El tiempo que debe demorar la aplicación en mostrar un nuevo registro debe ser menor  a 0,5 sg.
El tiempo de autenticación de un usuario al hacer Log In debe ser menor a 2 sg.
El tiempo de aprendizaje de la aplicación debe ser menor a 5 minutos.
El tiempo de respuesta de las transacciones borrar y actualizar deben ser menores a 2 sg.
La comunicación entre la vista del usuario y el backend deberá ser por APIREST.
La aplicación debe contener interfaces intuitivas y bien informadas.

Tecnologias Usadas 

Backend: MongoDB, Express, Node.js
Frontend: Vuejs

Algunos de los servicios usados en el backend de APIREST fueron:
Cliente/servidor:  El cliente y el servidor se mantienen débilmente acoplado ya que  el cliente no necesita ver cómo está implementado el servidor, y al servidor no le interesa cómo son usados los datos que son enviados al cliente. 
No estado: Cada petición al servidor es independiente, no es necesario mantener sesiones.
Las operaciones más importantes para el proceso de los datos como: GET para consulta y lectura, POST para crear, PUT para editar y DELETE para eliminar. 
Es importante tener en cuenta que las respuestas a las peticiones deben hacerse en XML o JSON. 
Sistema de capas: Su arquitectura es jerárquica entre sus componentes y cada una de las capas lleva una funcionalidad dentro del sistema.


