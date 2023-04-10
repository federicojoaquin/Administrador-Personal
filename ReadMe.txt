Administrador Personal -
Gestor de finanzas, gastos y tiempos - En desarrollo 

Para este proyecto, estoy utilizando React, Node, Express y Postgre para la base de datos
Se trata de una aplicación CRUD, que está pensada para registrar gastos mediante un formulario 
y poder medir el porcentaje que cada uno de los gastos o la sumatoria representa con respecto a mi sueldo. 

En cuanto al módulo finanzas, está pensado para registrar inversiones personales ya sea cripto o bolsa
y supervizarlas con una API que sincronice el mercado en timepo real, así veo porcentajes de rentabilidad
y que al mismo tiempo me notifique. 

En Gantt, se muestra una grilla en donde se disponen tareas  y se muestran los tiempos que llevan cada una de esas
tareas para una mejora de la productividad. 

La parte desarrollada hasta el momento es la de Gastos. El formulario ya se encuentra disponible para insertar datos. 
Para hacer una prueba se puede clonar el repositorio. Para probar la ruta /gastos de la API 
primero hay que levantar una base de datos de PostgreSQL de manera temporal, ya que para levantarla permanentemente 
se necesita una versión paga en algunas plataformas. Al estar en modo desarrollo, no consideré todavía gastar ese dinero. 
Por lo cuál, se hace lo siguiente: 

1. Abrir la página https://railway.app/new . Esto lo que nos permite es levantar una base de datos de forma temporal. 
2. Seleccionar la opción que dice: Provision PostgreSQL
3. Esperar a que diga: created y la fecha. 
4. Tocar el cuadrado principal que dice Postgres con el created abajo. 
5. Ir a la solapa CONNECT y scrollear hacia abajo hasta la seccíon Available Variables. 
6. Copiar cada una de las variables, situándose en cada una aparecera la opción copy value. Estas variables son: 
DATABASE_URL, PGDATABASE, PGHOST, PGPASSWORD, PGPORT, PGUSER. 
7. En la API, dendtro de src/controllers/index.controllers.js están las funciones getGastos y setGastos. En cada una de ellas hay seteada una constante client. 
Cada una de esas variables deberá ser reemplazada por los nuevos datos: 

const client = new Client({
        user: "//PGUSER", 
        host: "//PGHOST", 
        database: "//DATABASE_URL", 
        password: "//PGPASSWORD", 
        port: "//PGPORT",
});

8. Una vez pegada cada una de las variables, volver a la aplicación de railway y en la solapa que dice QUERY, dentro de las 
mismas opciones en donde accedimos anteriormente, vamos a crear una tabla Gastos de la siguiente manera: 

pegamos lo siguiente el el input que ofrece la oción: 
create table gastos (
	gas_id varchar,
	gas_descripcion varchar, 
	gas_monto float4, 
	gas_fecha date, 
	gas_tipo varchar, 
	gas_fecuencia varchar, 	
  	gas_fecinsercion timestamp
)

y luego daremos en el botón Run Query. 
9. Luego iniciamos la api desde el path de la carpeta raíz backend haciendo: node Index.js
10. Listo ! Ahora se podrá probar el formulario 


