# api-wrapper-project

1. Abrimos la terminal y vamos a la raíz del proyecto(dónde esté el package.json)
2. Ejecutamos para instalar las dependencias y todo lo que necesitamos para que funcione el proyecto. Si esto ha funcionado bien deberías tener en un directorio llamado node_modules en el directorio raíz dónde ejecutaste el comando. 
```
npm i
```

3. Una vez se haya instalado todo. Debemos usar el siguiente comando para arrancar la aplicación.

```
npm run start
```

4. Tras darle a enter deberías ver algo como esto:

```
$ npm run start

> api-wrapper-project@0.0.0 start /home/adrgrr/Repositorios/api-wrapper-project
> node ./bin/www
```

5. Ahora para comprobar que todo funciona como debe abre una pestaña del navegador e introduce la siguiente url:

```
http://localhost:3000/
```

6. Cuando terminéis es importante cerrar o matar el proceso. Si se te olvida, el puerto 3000 seguirá estando en uso y si vuelves a tratar de arrancar la app te fallará.


### Documentación del cliente de javascript para la api de rick and morty

https://github.com/afuh/rick-and-morty-api-node


### Documentación para express

https://expressjs.com/en/guide/routing.html
