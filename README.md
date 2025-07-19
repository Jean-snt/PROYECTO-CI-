# PROYECTO-CI-
Historia de Usuario 1 – Conversión entre temperaturas

Como usuario, quiero convertir entre Celsius, Fahrenheit y Kelvin, para conocer el valor equivalente en diferentes unidades de temperatura.

Criterios de Aceptación:

Al ingresar un valor en Celsius, veo su conversión a Fahrenheit y Kelvin.

Al ingresar un valor en Fahrenheit, veo su conversión a Celsius y Kelvin.

Al ingresar un valor en Kelvin, veo su conversión a Celsius y Fahrenheit.

Las conversiones son correctas según las fórmulas estándar.

Los resultados aparecen redondeados a 2 decimales.

Tareas Técnicas:

Crear función celsiusToFahrenheit(celsius)

Crear función celsiusToKelvin(celsius)

Crear función fahrenheitToCelsius(f)

Crear función fahrenheitToKelvin(f)

Crear función kelvinToCelsius(k)

Crear función kelvinToFahrenheit(k)

Redondear todos los resultados a 2 decimales

Escribir tests unitarios para cada función usando TDD

Validar fórmulas con casos reales (ej. 0°C = 32°F = 273.15K)

Historia de Usuario 2 – Validación de entrada

Como usuario, quiero que el sistema valide los datos que ingreso, para evitar errores si escribo letras u otros símbolos no válidos.

Criterios de Aceptación:

Si ingreso texto (ej. “abc”) o símbolos no numéricos, el sistema muestra un mensaje de error claro.

Si dejo el campo vacío y presiono convertir, el sistema me advierte que debo ingresar un número.

El sistema no se cae ni lanza errores técnicos si ingreso valores incorrectos.

No permite ingresar temperaturas fuera del rango lógico (ej. Kelvin negativos).

Tareas Técnicas:

Crear función de validación esNumeroValido(valor)

Mostrar alertas o mensajes de error si la validación falla

Evitar que se realice la conversión si el campo está vacío

Prevenir entradas negativas para Kelvin

Escribir pruebas de validación para entradas inválidas (letras, símbolos, vacío, Kelvin negativo)

Historia de Usuario 3 – Interfaz de usuario simple y clara

Como usuario, quiero una interfaz amigable para ingresar el valor y elegir la unidad, para hacer la conversión fácilmente y sin confusiones.

Criterios de Aceptación:

Puedo ingresar un número en un campo claro.

Puedo seleccionar desde qué unidad quiero convertir.

Al presionar el botón “Convertir”, veo los resultados al instante.

Los resultados aparecen en una sección visualmente separada.

Hay etiquetas que indican claramente qué unidad corresponde a cada resultado.

Tareas Técnicas:

Crear campo de entrada para el valor numérico

Crear menú desplegable o botones para seleccionar unidad (°C, °F, K)

Crear botón "Convertir" que ejecute la función correspondiente

Mostrar los resultados con etiquetas (“Resultado en °F:”, “Resultado en K:”, etc.)

Aplicar estilos básicos (CSS) para separar visualmente el resultado

Realizar prueba visual: comprobar que el flujo es claro
