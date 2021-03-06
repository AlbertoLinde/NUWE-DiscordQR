# [Nuwe] 🤖 Discord BOT

[![CodeFactor](https://www.codefactor.io/repository/github/albertolinde/nuwe-discordqr/badge/main)](https://www.codefactor.io/repository/github/albertolinde/nuwe-discordqr/overview/main)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=AlbertoLinde_NUWE-DiscordQR&metric=alert_status)](https://sonarcloud.io/dashboard?id=AlbertoLinde_NUWE-DiscordQR)

<p align="center">
 <img src="https://user-images.githubusercontent.com/44638858/128610951-27be03dd-5afa-4a55-b7b9-de4d460f3dab.PNG"/>
</p>

------------

Este proyecto consiste en la realización de un Discord BOT en el que podemos interactuar con el para generar códigos QR. Consiste en una serie de retos semanales que se están realizando en la plataforma [Nuwe](https://nuwe.io/).

## Indice

- [[Nuwe] 🤖 Discord BOT](#nuwe--discord-bot)
  - [Construido con 🛠️](#construido-con-🛠️)
  - [Invitar 📩](#invitar-📩)
  - [Instalación (Local)](#instalación-local)
  - [Features 🔨](#features-🔨)
  - [Features || Ideas Pendientes 🔨](#features--ideas-pendientes-🔨)
  - [Comandos](#comandos)
    - [Nuwe](#nuwe)
    - [Register](#register)
    - [Login](#login)
    - [Comprobación de eMail](#comprobacin-de-email)
    - [Actualización de datos de Git por usuario](#actualizacin-de-datos-de-git-por-usuario)
  - [Contacto 📩](#contacto-📩)

------------

## Construido con 🛠️

* [Node.js](https://nodejs.org/es/)
* [Discord.js](https://discord.js.org/)
* [QR Code Library](https://github.com/soldair/node-qrcode)
* [JavasCript]()

------------



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
* ❗ **Task-5**: Agregar algún tipo de testing, ya sea utilizando Insomnia, postman o testing unitario.
* ✅ **Task-6**: Permitir que el usuario pueda escoger el color del QR generado.
* ✅ **Task-7**: Generar un comando que devuelva un QR que se generará a partir del nombre de usuario.

## Features || Ideas Pendientes 🔨

* ❗ Realizar los Test con la librería [Corde](https://cordejs.org/docs/)
* ❗ Refactorizar
* ❗ Implementar un CLI completo a través de los comandos. (Pruebas anteriores)

------------

## Comandos

Si no especificas ningún color por defecto se utilizará el negro como color principal para el QR.

### QR String

![QR_STRING](https://user-images.githubusercontent.com/44638858/128610786-ab47d479-ddda-4e9c-9afa-1602331e6202.gif)

### QR URL

![QRURL_COLOR](https://user-images.githubusercontent.com/44638858/128610788-91ae4bd6-62b8-4d3a-a03d-d09399e30755.gif)

![QRURL_NOCOLOR](https://user-images.githubusercontent.com/44638858/128610782-e8b42302-068a-4cfb-a467-7698e7250a17.gif)

### USER

![QRUSER](https://user-images.githubusercontent.com/44638858/128610784-37a5339a-34b7-4169-86bd-951a5257d256.gif)

### HELP

![QRHELP](https://user-images.githubusercontent.com/44638858/128610787-9d172d3e-7f3f-4cfa-ab18-c38cbaf963ac.gif)

------------

## Contacto 📩

[LinkedIn](www.linkedin.com/in/albertolinde "LinkedIn") - [Twitter](https://twitter.com/AlberALinde "Twitter") - [Web](https://www.albertolinde.com/ "Web") - [✉](abreulindealberto@gmail.com)
