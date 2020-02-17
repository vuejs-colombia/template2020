---
pageClass: instalacion-class
sidebar: auto
--- 


# Instalacion

Para poder aprovechar el tiempo que tenemos para desarrolles el taller, es necesario que previamente hayas hecho la instalacion de algunas herramientas. Si este no es el caso, te guiaremos para que puedas instalar en este momento todo.


## git

git es un manejador de versiones ampliamente usado en nuestra industria, GitHub es una compañía sin fines de lucro que ofrece un servicio de hosting de repositorios almacenados en la nube. Hace que sea más fácil para todos usar git. Con esta linea de comando comprueba que version de git tienes:

```
git --version
```

Y si no lo tienes instalado descargalo en [git](https://git-scm.com/downloads).


## node

Node.js es un entorno de tiempo de ejecución que está diseñado para generar aplicaciones web de forma altamente optimizada. Con esta linea de comando comprueba que version de node tienes:

```
node -v
```

Y si no lo tienes instalado descargalo en [node](https://nodejs.org/en/download/).

El instalador de Node.js incluye el NPM.

## npm

Node Package Manager ( npm ) o simplemente npm es un gestor de paquetes, el cual hará más fáciles nuestras vidas al momento de trabajar con Node, ya que gracias a él podremos tener cualquier librería disponible con solo una línea de código.
Cuando instalamos nuevos paquetes lo que hace npm es instalarlo de manera local en nuestro proyecto dentro de la carpeta node_modules, pero nosotros podemos decirle que lo instale de manera global de ser necesario. Con esta linea de comando comprueba que version de npm tienes:

```
npm -v
```

## Vue

Vue es un framework de JavaScript, es una plataforma que crea interfaces para construir interfaces de usuario y aplicaciones de una sola pagina. Para confirmar que version tienes instalada de vue, prueba con esta linea de comando:

```
vue --version
```

Si no lo tienes instalado incluye esta linea de comando en la terminal y aguarda: 

```
npm install vue --save
```

## Vue-Cli

Instala vue-cli en tu equipo: 

```
npm install -g @vue/cli
```


## Crea tu proyecto

Iniciemos creando

```
vue create NOMBREDELPROYECTO
```

