---
id: cors
title: Red IDi-CORS
sidebar_label: Red IDi-CORS
sidebar_position: 0
description: Red de estaciones GNSS de operación continua (CORS) de IDISA en Guatemala. Archivos RINEX y correcciones NTRIP en tiempo real.
tags: [cors, gnss, rinex, ntrip, rtk, estaciones-de-referencia]
---

# 📡 Red IDi-CORS

**IDi-CORS** es la red de estaciones GNSS de operación continua (*Continuously Operating Reference Stations*) de **IDISA** en Guatemala. Las estaciones registran datos GNSS las 24 horas y los ponen a su disposición para posicionamiento de precisión:

- **Posproceso (PPK / estático):** archivos **RINEX** de cada estación.
- **Tiempo real (RTK):** correcciones **NTRIP** para su rover, colectora o dron.

Todos los servicios se contratan y se descargan desde la plataforma **[cors.idi.com.gt](https://cors.idi.com.gt)**.

---

## 1️⃣ Cómo empezar

1. Ingrese a **[cors.idi.com.gt](https://cors.idi.com.gt)** y cree su cuenta.
2. Complete su perfil y acepte los **[Términos y Condiciones](https://cors.idi.com.gt/app/terminos)**.
3. Elija la estación y el servicio.
4. Pague con tarjeta. Su descarga o su acceso NTRIP quedan disponibles de inmediato en la plataforma.

Para configurar su equipo con las correcciones NTRIP, consulte las guías de **[Configuración NTRIP](/docs/cors/configuracion-ntrip/sw-maps)**.

---

## 2️⃣ Antenas y coordenadas de las estaciones

:::info[Antenas y coordenadas]

Las estaciones utilizan la antena **Beitian BT-300S** (código IGS `BEIBT300S NONE`). Su calibración puede consultarse en el sitio de calibración de antenas de NOAA: **[NGS ANTCAL](https://geodesy.noaa.gov/ANTCAL/index.xhtml)**.

- **[Archivo ANTEX](https://geodesy.noaa.gov/ANTCAL/LoadFile?file=BEIBT300S_NONE.atx)**
- **[Archivo ANTINFO](https://geodesy.noaa.gov/ANTCAL/LoadFile?file=BEIBT300S_NONE.003)**

Las coordenadas de la estación y el modelo de antena están indicados en el encabezado de cada archivo RINEX y en las correcciones NTRIP.

Para otras consultas escriba a **[info@idi.com.gt](mailto:info@idi.com.gt)**.

:::

---

## 3️⃣ Soporte

¿Necesita ayuda? Escríbanos a **[soporte@idi.com.gt](mailto:soporte@idi.com.gt)**.
