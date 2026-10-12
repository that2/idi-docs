---
id: sw-maps
title: Configuración NTRIP en SW Maps
sidebar_label: SW Maps
sidebar_position: 1
description: Cómo conectar SW Maps a la red IDi-CORS mediante NTRIP para obtener posiciones RTK FIX con su receptor GNSS.
tags: [cors, ntrip, rtk, sw-maps, gnss]
---

# 📱 Configuración NTRIP en SW Maps

Esta guía describe cómo conectar **SW Maps** (Android) a la red **IDi-CORS** para recibir correcciones RTK con su receptor GNSS.

:::tip[Antes de empezar]

- Un receptor GNSS con soporte RTK, emparejado por **Bluetooth** con su teléfono.
- **SW Maps** instalado y conexión a internet en el teléfono (datos móviles o WiFi).
- Un **acceso NTRIP activo**: su usuario, contraseña y mountpoint se muestran en la sección **NTRIP** de **[cors.idi.com.gt](https://cors.idi.com.gt)**.

:::

---

## 1️⃣ Conexión del receptor GNSS

Abra SW Maps y, en **GNSS Connection**, conéctese a su receptor:

| Campo | Valor |
|---|---|
| Connection Mode | `Bluetooth` |
| Devices | Seleccione su receptor en la lista |
| Instrument Model | El de su receptor (o `Generic NMEA`) |
| Instrument Height (m) | La altura de su antena sobre el punto |

Toque **Connect** y espere a que el receptor quede conectado.

<img src={require('./sw-maps-images/01-conexion-gnss.jpg').default} alt="Conexión del receptor GNSS por Bluetooth en SW Maps" width="320" />

---

## 2️⃣ Configuración del cliente NTRIP

Abra **NTRIP Client** y toque **+** para crear una conexión nueva. Ingrese los datos de su acceso:

| Campo | Valor |
|---|---|
| Name | Un nombre a su elección, por ejemplo `IDi NTRIP GUA` |
| NTRIP Version | `V1` |
| NTRIP Address | `ntrip.idi.com.gt` (o la IP que muestra la plataforma) |
| NTRIP Port | `2101` |
| Mount Point | El de su estación: `IDi-GUA`, `IDi-QUE` o `IDi-COAT` |
| Username / Password | Los de su acceso NTRIP en la plataforma |
| Send NMEA GGA to Base Station | Sin marcar |

Toque **Save** y luego **Connect**.

<img src={require('./sw-maps-images/02-cliente-ntrip.jpg').default} alt="Formulario Edit NTRIP Client de SW Maps con los datos de la red IDi-CORS" width="320" />

:::caution[Mountpoint]

Use el mountpoint de la estación de su acceso NTRIP, tal como aparece en la plataforma. Con otro mountpoint la conexión es rechazada.

:::

---

## 3️⃣ Verificación de la conexión

Si los datos son correctos y su acceso está activo, en **NTRIP Status** aparece **Connected**, con las coordenadas de la base y la tasa de datos recibida (**Data Rate**).

<img src={require('./sw-maps-images/03-ntrip-conectado.jpg').default} alt="Estado Connected del cliente NTRIP en SW Maps" width="320" />

:::note[Base Antenna: ADVNULLANTENNA]

SW Maps muestra `ADVNULLANTENNA` como antena de la base sin importar lo que transmita la estación. Es una etiqueta propia de la aplicación; el modelo real de las antenas está en la página **[Red IDi-CORS](/docs/cors)**.

:::

---

## 4️⃣ RTK FIX

En la barra superior, el estado pasa a **RTK FLOAT** y después a **RTK FIX**. Con **RTK FIX**, la precisión estimada (**ΔH** / **ΔV**) es de milímetros a pocos centímetros.

<img src={require('./sw-maps-images/04-rtk-fix.jpg').default} alt="Estado RTK FIX en la barra superior de SW Maps" width="320" />

Para llegar a **RTK FIX** su receptor necesita:

- suficientes satélites a la vista, con el cielo despejado;
- estar dentro de una distancia adecuada a la estación base;
- correcciones recientes: el valor **Age** debe mantenerse en pocos segundos.

---

## ✅ Resumen

| Paso | Acción |
|---|---|
| 1 | Conectar el receptor GNSS por Bluetooth en **GNSS Connection** |
| 2 | Crear la conexión en **NTRIP Client**: `ntrip.idi.com.gt`, puerto `2101`, `V1`, mountpoint, usuario y contraseña |
| 3 | Confirmar **Connected** en **NTRIP Status** |
| 4 | Esperar **RTK FIX** en la barra superior |

¿No logra conectarse? Escríbanos a **[soporte@idi.com.gt](mailto:soporte@idi.com.gt)** con una captura de pantalla de **NTRIP Status**.
