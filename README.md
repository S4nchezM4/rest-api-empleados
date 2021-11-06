# DB Rest API
in thes repository i will upload the avances and changes in the REST API i will use in my project web app MyPlant, an aplication where u can have all the information u require to have plants in your house.
## Local Use
to use this api you need nodejs installed in your computer.
1. import the database to MySQL WorkBench in your pc
2. Import the mothods to the db
3. open the project using vscode
4. use the terminal incorporated in vscode and run this command: npm run dev
5. test the api using "Postman"
## change the port
you can change the port used to this project or however if you'll run it in a cloud server, the scripts are programed to use the defaultr port in your server.



# Rest API Base de datos
en este repositorio voy a subir todo el proceso de creacion de la api que se va a usar en el proyecto de myplant.
## Uso local
Para usar la API de forma local en tu pc necesitas seguir los siguientes pasos
1. Descargar MySQL server y MySQL WorkBench para manejar las bases de datos
2. Importar la base de datos que esta dentro de la carpeta *db* e importar el procedimiento almacenado *employeesAddOrEdit*
3. Abrir la carpeta del proyecto en VsCode (cabe recalcar que tienes que tener instalado nodejs para poder correr el proyecto)
4. Una vez tengas el proyecto abierto en VsCode abre una terminal y escribe *npm run dev* para iniciar el servidor de express, si en la terminal te sale el mensaje *DB is connected* todo esta funcionando correctamente
5. Utiliza *Postman* para hacer peticiones de añadir, editar o eliminar usuarios de la api.
## Puertos dedicados 
Recuerda que para utilizar esta api esta desarrollada de forma local y le eh asignado el puerto 3000, sin embargo, si la quieres utilizar en un servidor web, lo mas comun es que te den un puerto, debes utilizar ese puerto para acceder a la api.