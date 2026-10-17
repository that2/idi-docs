---
id: datos-tecnicos
title: Datos técnicos de las estaciones
sidebar_label: Datos técnicos
sidebar_position: 2
description: Marco de referencia, coordenadas, altura, antena y contenido de los archivos RINEX de las estaciones IDi-CORS.
tags: [cors, gnss, rinex, coordenadas, antena, ign]
---

# 📐 Datos técnicos de las estaciones

Esta página describe cómo se determinaron las coordenadas de las estaciones **IDi-CORS** y qué contienen sus archivos RINEX, para que pueda procesar sus datos correctamente.

---

## 1️⃣ Marco de referencia

Las coordenadas de las estaciones están referidas al marco de referencia del **Instituto Geográfico Nacional de Guatemala (IGN)**, materializado por sus vértices geodésicos pasivos y por su estación activa **GUAT** (utilizada mientras estuvo disponible; actualmente fuera de servicio).

---

## 2️⃣ Coordenadas de las estaciones

### IDi-QUE e IDi-COAT

Sus coordenadas se establecieron a partir del vértice geodésico oficial **QUETZALTENANGO 2** del IGN, mediante posicionamiento estático convencional realizado en septiembre de 2026. Ambas estaciones se observaron en simultáneo con el vértice, formando un triángulo geodésico.

<img src={require('./datos-tecnicos-images/amarre-quetzaltenango2.jpg').default} alt="Triángulo de amarre entre el vértice QUETZALTENANGO 2 del IGN y las estaciones IDi-QUE e IDi-COAT" width="480" />

| Estación | Precisión estimada |
|---|---|
| IDi-QUE | 5 mm |
| IDi-COAT | 1.5 cm |

### IDi-GUA

Su coordenada se calculó con datos de la estación activa **GUAT** del IGN, de febrero de 2026.

### Dónde encontrar la coordenada exacta

La coordenada exacta de cada estación se encuentra en:

- el **encabezado de cada archivo RINEX** (campo `APPROX POSITION XYZ`);
- las **correcciones NTRIP**, que su rover o colectora recibe al conectarse a la estación.

Las coordenadas que se muestran en la plataforma están redondeadas.

---

## 3️⃣ Sobre la altura

- La coordenada corresponde al **ARP** (*Antenna Reference Point*), el punto de referencia de la antena: la base de su montaje.
- No hay altura de instrumento, pues la antena está fija.
- La altura es **elipsoidal**. Por lo tanto, las coordenadas que usted calcule a partir de una estación IDi-CORS también son elipsoidales.

---

## 4️⃣ Antena

Las estaciones utilizan la antena **Beitian BT-300S** (código IGS `BEIBT300S NONE`), incluida en el listado de antenas calibradas por la NGS de NOAA.

<img src={require('./datos-tecnicos-images/beibt300s-ngs.gif').default} alt="Dimensiones de la antena Beitian BT-300S y ubicación del ARP en la base del montaje (NGS)" width="320" />

- **[Archivo de calibración ANTEX](https://geodesy.noaa.gov/ANTCAL/LoadFile?file=BEIBT300S_NONE.atx)**
- **[Datos de calibración ANTINFO](https://geodesy.noaa.gov/ANTCAL/LoadFile?file=BEIBT300S_NONE.003)**
- **[Dimensiones físicas (NGS)](https://geodesy.noaa.gov/ANTCAL/LoadImage?name=BEIBT300S%26NONE.gif)**

:::tip[Altura de antena en su software]

Ingrese una **altura de antena de 0.000 m** y seleccione la antena **`BEIBT300S NONE`** (indicada en el encabezado RINEX, campo `ANT # / TYPE`). Su software aplicará la corrección del centro de fase con los datos de calibración de la antena.

Verifique que el modelo de antena quede seleccionado: no todos los programas lo toman del encabezado automáticamente.

:::

---

## 5️⃣ Archivos RINEX

### Intervalo de registro

Los datos se registran a **1 segundo (1 Hz)**, es decir 60 épocas por minuto. Si su proceso no requiere ese intervalo, puede decimar el archivo (por ejemplo a 5, 15 o 30 segundos) en su software de posproceso.

### Contenido del archivo ZIP

Cada descarga es un archivo ZIP de aproximadamente **145 MB** por día completo, que contiene:

| Archivo | Contenido | Tamaño aprox. (día completo, sin comprimir) |
|---|---|---|
| `IDi-XXX_AAAA-MM-DD_RINEX.obs` | Observaciones RINEX 3.04 (GPS, GLONASS, Galileo y BeiDou) | ~460 MB (~19 MB por hora) |
| `IDi-XXX_AAAA-MM-DD_RINEX.nav` | Navegación RINEX 3.04 (efemérides) | ~1.7 MB |
| `REGISTRO_RINEX_DDMMAA.txt` | Intervalos de tiempo (UTC) cubiertos por los datos crudos utilizados | menos de 1 KB |

En el archivo de **RINEX actual** (día en curso), los nombres terminan en `_RINEX_REQUEST`, y su tamaño depende de las horas cubiertas.

### Horario de los archivos

:::info[Todos los tiempos están en UTC]

- El **archivo diario** cubre el día UTC completo: de 00:00:00 a 23:59:59 UTC (de 18:00 del día anterior a 17:59:59, hora de Guatemala).
- El **RINEX actual** cubre el día en curso en hora de Guatemala, desde las 00:00 hasta el momento de la solicitud; los tiempos dentro del archivo están en UTC.
- Las épocas del archivo de observación están en tiempo GPS, como lo establece el formato RINEX (tiempo GPS = UTC + 18 s).

:::

---

¿Tiene preguntas sobre estos datos? Escríbanos a **[info@idi.com.gt](mailto:info@idi.com.gt)**.
