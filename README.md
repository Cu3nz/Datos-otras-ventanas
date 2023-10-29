# Datos-otras-ventanas
Mostrar datos en otras ventanas

# Formulario con Gestión de Cookies

Este proyecto implementa un formulario sencillo que permite introducir información sobre una persona, almacenarla en cookies y mostrarla tanto directamente como a través de las cookies.

## Estructura del Proyecto

El proyecto está compuesto por:

1. **formulario.html**: Página principal donde se encuentra el formulario que permite introducir los datos.
2. **Mostrar_datos_input.html**: Página que muestra los datos ingresados directamente desde el formulario.
3. **Mostrar_datos_cookies.html**: Página que muestra los datos obtenidos de las cookies almacenadas en el navegador.
4. **prueba.js**: Archivo de JavaScript que contiene las funciones de gestión, almacenamiento y recuperación de datos.

## Funcionalidades principales

1. **setCookie(cname, cvalue, exhours)**: Esta función permite establecer una cookie en el navegador con un tiempo de expiración determinado.
2. **getCookie(cname)**: Recupera el valor de una cookie específica.
3. **validar()**: Valida y recopila los datos del formulario, los muestra en la página y los almacena en cookies. Además, abre una nueva ventana para mostrar los datos introducidos directamente.
4. **devolver()**: Devuelve los datos directamente desde los campos del formulario.
5. **devolverCookie()**: Recupera los datos almacenados en las cookies.
6. **valorCookies()**: Abre una nueva ventana para mostrar los datos almacenados en las cookies.
7. **borrarCookies()**: Elimina todas las cookies creadas por el formulario.

## Uso

1. Abra **formulario.html** en su navegador.
2. Introduzca los datos en los campos correspondientes.
3. Haga clic en "Validar" para visualizar los datos introducidos y almacenarlos en cookies.
4. Haga clic en "Abrir ventana mostrar valor cookies" para visualizar los datos almacenados en las cookies.
5. Haga clic en "Borrar cookies" para eliminar todas las cookies creadas por el formulario.

## Consideraciones

- Las cookies establecidas por este proyecto tienen una duración de 1 hora.
- Asegúrese de permitir cookies en su navegador para que esta aplicación funcione correctamente.

## Contribuciones

Si desea contribuir a este proyecto o tiene alguna sugerencia, no dude en hacer un fork o abrir un issue.

