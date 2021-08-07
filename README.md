# [Nuwe] 🤖 Discord BOT

![nuweHeader](https://user-images.githubusercontent.com/44638858/126885085-bf4ccd48-55f6-474b-b51f-48c21bcece26.PNG)

------------

Este proyecto consiste en la realización de un Discord BOT en el que podemos interactuar con el para generar códigos QR. Consiste en una serie de retos semanales que se están realizando en la plataforma [Nuwe](https://nuwe.io/).

## Construido con 🛠️

* [Node.js](https://nodejs.org/es/)
* [Discord.js](https://discord.js.org/)
* [QR Code Library](https://github.com/soldair/node-qrcode)
* [JavasCript]()

## Invitar 📩

Si quieres invitar al BOT que he desarrollado simplemente agregalo a tu servidor [🤖 Invitar a tu servidor](https://discord.com/api/oauth2/authorize?client_id=873295524013437029&permissions=8&scope=bot)

De esta manera invitarás al BOT que he desarrollado directamente a tu servidor, ten en cuenta que lo tengo lanzado en local, por lo tanto, puede que lo invites y no esté encendido. Puedes hablarme por Discord y lo enciendo para que realices algunas pruebas iAbdy#2553.

------------

## Instalación (Local)

1. Comprueba que tienes en tu equipo instalado Node. Abre CMD o PowerShell y escribe:

   ```sh

     node -v

   ```

2. Clona este repositorio

   ```sh

     git clone https://github.com/AlbertoLinde/NUWE-DiscordQR

   ```

3. Instala todas las dependencias necesarias

   ```sh

     cd folder/project

     npm install

   ```

4. Para poder ejecutar tu propio BOT necesitarás un TOKEN de Discord. Tendrás que generar un bot en el siguiente enlace [Discord Developer Portal](https://discord.com/developers/applications). Genera un bot con los permisos que desees.

5. Renombra el fichero llamado .env.rename => .env y en su interior coloca el valor de tu TOKEN.

6. Para activar el BOT (local) simplemente poniendote en la ruta del proyecto escribe el siguiente comando y este se encenderá si toda la configuración es correcta.

```sh
   node .
```

7. Invitar al BOT a tu servidor: Para realizar esto, en el portal de developers encontrarás la URL que has generado para invitar al bot a tu servidor.

------------

## Features 🔨

* ✅ **Task-1**: Configurar el bot de discord y poder instalarlo en otros servers.
* ✅ **Task-2**: Crear un endpoint que permita recibir un string y a través de una API devuelva el código QR. (En un principio utilizaba la API de Google pero he encontrado una librería mejor ya que puedo aportar color y otras configuraciones).
* ✅ **Task-3**: Hacer que el bot discord tenga un comando en el cual se pueda enviar un string, conecte con el endpoint anterior y devuelva al usuario el código QR.
* ✅ **Task-4**: QR para URLs, implementar una función que permita revisar si el código enviado es un URL o no, para que así asegurar que el código QR redirija hacía algún punto.
* ✅ **Task-5**:
* ✅ **Task-6**: Permitir que el usuario pueda escoger el color del QR generado.
* ✅ **Task-7**: Generar un comando que devuelva un QR que se generará a partir del nombre de usuario.

## Features || Ideas Pendientes 🔨

* ❗ Implementar un CLI completo a través de los comandos. (Pruebas anteriores)

------------

## Comandos

### Nuwe

![1 (1)](https://user-images.githubusercontent.com/44638858/126886114-474781fb-ccd7-4925-815f-f439e2b6e2f7.gif)

### Register

![2](https://user-images.githubusercontent.com/44638858/126886118-b0012b8c-bdc8-4799-8702-42edc36bebe4.gif)

### Login

![3_login](https://user-images.githubusercontent.com/44638858/126886117-50af29cd-2424-46a2-83fc-600324a96f2a.gif)

### Comprobación de eMail

![4_email](https://user-images.githubusercontent.com/44638858/126886116-7fd494bd-558c-4c4e-be45-d66fbdc7b88c.gif)

### Actualización de datos de Git por usuario

![5_configgit](https://user-images.githubusercontent.com/44638858/126886115-b8460194-2471-4a7c-978b-9b1dfeaf1ea2.gif)

## Contacto 📩

[LinkedIn](www.linkedin.com/in/albertolinde "LinkedIn") - [Twitter](https://twitter.com/AlberALinde "Twitter") - [Web](https://www.albertolinde.com/ "Web") - [✉](abreulindealberto@gmail.com)
