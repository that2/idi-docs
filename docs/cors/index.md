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

## 1️⃣ Estaciones

| Estación | Ubicación | Mountpoint |
|---|---|---|
| **IDi-GUA** | Guatemala | `IDi-GUA` |
| **IDi-QUE** | Quetzaltenango | `IDi-QUE` |
| **IDi-COAT** | Coatepeque | `IDi-COAT` |

El estado de cada estación (operativa, transmisión NTRIP y último reporte) se muestra en vivo en la plataforma, en **Estaciones - RINEX**.

---

## 2️⃣ Servicios

### RINEX histórico

Archivos RINEX diarios de cada estación, a **1 segundo** de intervalo. Están disponibles los días del **mes en curso y los dos meses anteriores** (hora de Guatemala). Seleccione la estación y el día en el calendario y descárguelo.

### RINEX del día en curso

Si necesita datos de **hoy**, puede solicitar el RINEX del día en curso: abarca desde las 00:00 (hora de Guatemala) hasta el momento de la solicitud. La generación toma unos minutos y, cuando está listo, recibe un **correo con el enlace de descarga**. La estación debe estar transmitiendo en ese momento.

### Correcciones NTRIP (RTK)

Acceso a las correcciones en tiempo real de una estación, para 1 a 3 rovers, por los períodos que ofrece la plataforma (actualmente **día** o **semana**). Al comprar, la plataforma le muestra su usuario y contraseña en la sección **NTRIP**.

| Parámetro | Valor |
|---|---|
| Servidor | `ntrip.idi.com.gt` |
| Puerto | `2101` |
| Mountpoint | El de la estación contratada (tabla de arriba) |
| Usuario / contraseña | Los de su acceso, en la sección **NTRIP** de la plataforma |

:::tip[Formato de las correcciones]

Las estaciones transmiten **RTCM 3** con mensajes **MSM7** de GPS, GLONASS, Galileo y BeiDou, compatibles con la mayoría de receptores y drones actuales.

:::

---

## 3️⃣ Cómo empezar

1. Ingrese a **[cors.idi.com.gt](https://cors.idi.com.gt)** y cree su cuenta.
2. Complete su perfil (nombre, teléfono y **NIT** o **CF** para la factura) y acepte los **[Términos y Condiciones](https://cors.idi.com.gt/app/terminos)**.
3. Elija la estación y el servicio. Los **precios vigentes** se muestran en la plataforma antes de pagar.
4. Pague con tarjeta. Su descarga o su acceso NTRIP quedan disponibles de inmediato en la plataforma.

---

## 4️⃣ Coordenadas de las estaciones

:::info[Coordenadas, marco de referencia y época]

Las coordenadas de la estación y el modelo de antena están indicados en el encabezado de cada archivo RINEX y en las correcciones NTRIP.

Para consultas sobre el **marco de referencia** y la **época** de las coordenadas, escriba a **[info@idi.com.gt](mailto:info@idi.com.gt)**.

:::

---

## 5️⃣ Soporte

¿Necesita ayuda? Escríbanos a **[soporte@idi.com.gt](mailto:soporte@idi.com.gt)**.
