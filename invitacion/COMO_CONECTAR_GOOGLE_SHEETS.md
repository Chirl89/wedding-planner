# 📊 Guía Paso a Paso: Conectar el Formulario Web con vuestra Hoja de Google Sheets

Con este método gratuito (Google Apps Script), **todas las respuestas de vuestros invitados se guardarán automáticamente en una sola hoja de cálculo de Google Sheets en tiempo real.**

---

### Paso 1: Crear la Hoja de Google Sheets
1. Entrad en [Google Sheets](https://sheets.google.com) y cread una nueva hoja de cálculo llamada **"RSVP Boda Carlos y Andrea"**.
2. En la **primera fila (fila 1)**, poned estos encabezados exactos en las columnas:

| A | B | C | D | E | F | G | H |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Fecha Registro** | **Nombre Completo** | **Asistencia** | **Acompañantes** | **Alergias / Menú** | **Autobús** | **Canción DJ** | **Notas** |

---

### Paso 2: Crear el Script Receptor (Google Apps Script)
1. En la misma hoja de Google Sheets, en el menú superior hace clic en **Extensiones** > **Apps Script**.
2. Borra el código que aparece por defecto y pega este código:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.timestamp || new Date(),
      data.fullName || "",
      data.attendance || "",
      data.companions || "",
      data.dietary || "",
      data.busRequired || "",
      data.songRequest || "",
      data.notes || ""
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Guarda el proyecto haciendo clic en el icono del **Disco (Guardar)** 💾.

---

### Paso 3: Publicar como Aplicación Web (Obtener la URL Webhook)
1. Arriba a la derecha, haz clic en el botón azul **Desplegar** > **Nuevo despliegue**.
2. Haz clic en el icono de engranaje ⚙️ junto a "Seleccionar tipo" y elige **Aplicación Web**.
3. Configura los campos exactamente así:
   * **Descripción:** `RSVP Webhook Boda`
   * **Ejecutar como:** `Yo` (tu cuenta de Google)
   * **Quién tiene acceso:** `Cualquier persona` (*Esto es fundamental para que el formulario de la web pueda enviar datos sin pedir login a los invitados*).
4. Haz clic en **Desplegar**.
5. Autoriza el acceso cuando Google lo pida (Aceptar permisos).
6. Al finalizar, copia la **URL de la aplicación web** generada (empieza por `https://script.google.com/macros/s/...`).

---

### Paso 4: Conectar la URL en vuestra Invitación
1. Abre el archivo `rsvp_config.js` dentro de la carpeta `invitacion`.
2. Pega tu URL en la variable `webhookUrl`:

```javascript
  rsvp: {
    webhookUrl: "TU_URL_DE_GOOGLE_APPS_SCRIPT_AQUI",
    saveToLocalStorage: true
  }
```

¡Y listo! Cada vez que un invitado rellene la invitación, la respuesta aparecerá instantáneamente en vuestra hoja de Google Sheets.
