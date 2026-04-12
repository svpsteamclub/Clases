const content = {
  title: "SVP Steam Club",
  subtitle: "Contenido",
  courses: [
    {
      id: "sl-aventura-2026",
      title: "Robot sigue lineas Aventura 2026",
      description: "Aprende las bases de la robótica de competición con nuestro robot de 3 sensores.",
      icon: "Zap",
      color: "blue",
      classes: [
        {
          id: "intro-fisica",
          title: "Descripción Física del Robot",
          subtitle: "Preparación",
          icon: "Layout",
          explanation: `<div class="space-y-4">
            <p>El diseño de nuestro robot está basado en un chasis personalizado fabricado con impresión 3D.</p>
            <ul class="space-y-2 text-[15px] list-disc ml-4 text-slate-700">
              <li><strong>Cerebro y Control:</strong> Usamos un Arduino NANO y un driver de motores MX1616.</li>
              <li><strong>Sensores:</strong> En la parte delantera tiene una base para 3 sensores infrarrojos TCRT5000.</li>
              <li><strong>Tracción y Movilidad:</strong> 2 motores DC para la tracción principal y una metra como rueda loca de apoyo.</li>
              <li><strong>Energía:</strong> Portabaterías de 2 pilas 18650 instalado entre los ejes.</li>
            </ul>
            <p>Todo está bien conectado y soldado para evitar fallas durante el funcionamiento.</p>
          </div>`,
          code: `// --- COMPONENTES FISICOS DEL ROBOT AVENTURA 2026 ---

// 1x Arduino NANO (Microcontrolador Principal)
// 1x Driver MX1616 (Controlador Dual de Motores)
// 3x Sensores IR TCRT5000 (Ojos del robot)
// 2x Motores DC con reducción (Tracción)
// 1x Chasis Impreso en 3D (Estructura)
// 1x Rueda Loca tipo Metra (Soporte)
// 1x Portabaterías 2x 18650 (Energía)

// Estado de hardware: Verificado y Soldado.`
        },
        {
          id: "conexiones-esquema",
          title: "Conexiones Físicas y Esquema",
          subtitle: "Preparación",
          icon: "Cpu",
          explanation: `<div class="space-y-4">
            <p>Las conexiones físicas dictan exactamente cómo debemos programar el código a continuación.</p>
            <p>Fíjate detalladamente en este esquema eléctrico para tu robot Aventura:</p>
            <div class="relative cursor-pointer border border-slate-200 rounded-xl overflow-hidden mt-4 shadow-sm hover:shadow-md transition-shadow group inline-block w-full">
                <img src="Imagenes/Esquema%20SLC%20Aventura%2026_2_P%C3%A1gina%205.jpg" alt="Esquema Conexiones Robot" class="w-full group-hover:scale-[1.02] transition-transform duration-300" />
                <div class="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md text-white px-3 py-1.5 rounded-lg flex items-center gap-2 pointer-events-none shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                  <span class="text-[10px] font-bold tracking-widest uppercase">Ampliar</span>
                </div>
            </div>
            <div class="bg-blue-50/50 p-4 rounded-lg border border-blue-100 mt-4 text-sm">
              <ul class="space-y-2">
                <li><strong>Sensores:</strong> Izquierdo al pin 2, Central al pin 3, Derecho al pin 4.</li>
                <li><strong>Motor Izquierdo:</strong> Controlado desde pines 5 y 6.</li>
                <li><strong>Motor Derecho:</strong> Controlado desde pines 9 y 10.</li>
              </ul>
            </div>
            
            <div class="mt-8 bg-indigo-50 border border-indigo-100 p-5 rounded-xl">
              <div class="flex items-center gap-3 text-indigo-800 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h4l2-9 5 18 2-9h5"/></svg>
                <h3 class="font-black tracking-tight text-lg">Simulación Virtual</h3>
              </div>
              <p class="text-[15px] text-indigo-700 leading-relaxed mb-4">Puedes probar el código de tu robot de forma virtual matemáticamente. Sigue estos pasos:</p>
              <ol class="list-decimal ml-5 text-[15px] text-indigo-800 space-y-2 font-medium mb-6">
                <li>Haz clic en el botón de abajo para descargar la estructura de la placa.</li>
                <li>Abre el simulador oficial en <a href="https://svpsteamclub.github.io/Sim/" target="_blank" class="font-black text-indigo-600 underline hover:text-indigo-900 transition-colors">svpsteamclub.github.io/Sim/</a></li>
                <li>Ve a la pestaña superior <strong>"Editor de Robot"</strong>.</li>
                <li>Busca y presiona el botón <strong>"Cargar Robot"</strong> y selecciona el archivo <code>.json</code> descargado de aquí.</li>
              </ol>
              <a href="Archivos/Robot%20Aventura%202026%20v1.json" download="Robot Aventura 2026 v1.json" class="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-lg font-bold text-sm tracking-wide transition-all shadow-md shadow-indigo-200 hover:translate-y-[-2px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                Descargar Robot Aventura 2026.json
              </a>
            </div>
          </div>`,
          code: `// Correspondencia de Pines (Esquema Físico -> Código)

// --- SENSORES INFRARROJOS ---
// Pin 2 -> Sensor Izquierdo
// Pin 3 -> Sensor Central
// Pin 4 -> Sensor Derecho

// --- MOTORES DC ---
// Pin 5 & 6   -> Motor Izquierdo
// Pin 9 & 10  -> Motor Derecho`
        },
        {
          id: "paso-1-io",
          title: "Configuración y Umbral Analógico",
          subtitle: "Paso 1",
          icon: "Settings",
          explanation: `<div class="space-y-4">
            <p>Configuramos los pines de los motores como salidas. Los pines analógicos no necesitan configuración previa.</p>
            <p class="text-[15px] text-slate-600 leading-relaxed">Como los sensores analógicos entregan valores entre 0 y 1023, usamos un <strong>umbral</strong> (ej. 500) para decidir si estamos viendo color negro o blanco.</p>
          </div>`,
          code: `int umbral = 500; 

void setup() {
  pinMode(3, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(9, OUTPUT);
}

void loop() {
  // El ciclo permanece mudo por ahora
}`
        },
        {
          id: "paso-2-avanzar",
          title: "Prueba de Motores: Avanzar",
          subtitle: "Paso 2",
          icon: "Move",
          explanation: `<div class="space-y-4">
            <p class="font-medium text-slate-800">Verificamos que el robot avance en línea recta.</p>
            <p class="text-[15px] text-slate-600 leading-relaxed">Activamos ambos motores a una potencia moderada (180 de 255) para asegurar que el hardware esté bien conectado.</p>
          </div>`,
          code: `int umbral = 500;

void setup() {
  pinMode(3, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(9, OUTPUT);
}

void loop() {
  // Avanzar
  analogWrite(5, 180);
  analogWrite(6, 0);
  analogWrite(3, 180);
  analogWrite(9, 0);
}`
        },
        {
          id: "paso-3-izquierda",
          title: "Prueba de Motores: Girar Izquierda",
          subtitle: "Paso 3",
          icon: "RefreshCw",
          explanation: `<div class="space-y-4">
            <p class="font-medium text-slate-800">Verificamos el giro hacia la izquierda.</p>
            <p class="text-[15px] text-slate-600 leading-relaxed">Para girar a la izquierda, detenemos el motor de ese lado y mantenemos el derecho activo.</p>
          </div>`,
          code: `int umbral = 500;

void setup() {
  pinMode(3, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(9, OUTPUT);
}

void loop() {
  // Girar a la izquierda
  analogWrite(5, 0);
  analogWrite(6, 0);
  analogWrite(3, 180);
  analogWrite(9, 0);
}`
        },
        {
          id: "paso-4-derecha",
          title: "Prueba de Motores: Girar Derecha",
          subtitle: "Paso 4",
          icon: "RefreshCw",
          explanation: `<div class="space-y-4">
            <p class="font-medium text-slate-800">Verificamos el giro hacia la derecha.</p>
            <p class="text-[15px] text-slate-600 leading-relaxed">Detenemos el motor derecho y activamos el izquierdo para completar las pruebas básicas de movimiento.</p>
          </div>`,
          code: `int umbral = 500;

void setup() {
  pinMode(3, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(9, OUTPUT);
}

void loop() {
  // Girar a la derecha
  analogWrite(5, 180);
  analogWrite(6, 0);
  analogWrite(3, 0);
  analogWrite(9, 0);
}`
        },
        {
          id: "paso-5-logica",
          title: "Lógica Analógica de 5 Sensores",
          subtitle: "Paso 5",
          icon: "Move",
          explanation: `<div class="space-y-4">
            <p class="font-medium text-slate-800">Implementamos el control según qué sensor detecte la línea.</p>
            <ul class="list-disc ml-5 space-y-2 text-[15px] text-slate-700">
              <li>Si el <strong>sensor central (A5)</strong> se activa, ambos motores avanzan.</li>
              <li>Si los <strong>sensores medios (A4 o A6)</strong> se activan, el motor de ese lado baja su velocidad a la mitad (giro suave).</li>
              <li>Si los <strong>sensores extremos (A3 o A7)</strong> se activan, el motor de ese lado se detiene (giro rápido).</li>
            </ul>
          </div>`,
          code: `int umbral = 500;

void setup() {
  pinMode(3, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(9, OUTPUT);
}

void loop() {
++   if (analogRead(A5) > umbral) { // Centro
++     analogWrite(5, 180);
++     analogWrite(6, 0);
++     analogWrite(3, 180);
++     analogWrite(9, 0);
++   }
++   else if (analogRead(A6) > umbral) { // Medio Izq
++     analogWrite(5, 90);
++     analogWrite(6, 0);
++     analogWrite(3, 180);
++     analogWrite(9, 0);
++   }
++   else if (analogRead(A4) > umbral) { // Medio Der
++     analogWrite(5, 180);
++     analogWrite(6, 0);
++     analogWrite(3, 90);
++     analogWrite(9, 0);
++   }
++   else if (analogRead(A7) > umbral) { // Extremo Izq
++     analogWrite(5, 0);
++     analogWrite(6, 0);
++     analogWrite(3, 180);
++     analogWrite(9, 0);
++   }
++   else if (analogRead(A3) > umbral) { // Extremo Der
++     analogWrite(5, 180);
++     analogWrite(6, 0);
++     analogWrite(3, 0);
++     analogWrite(9, 0);
++   }
}`
        },
        {
          id: "paso-variables",
          title: "Incorporación de Variables Topológicas",
          subtitle: "Paso 6",
          icon: "Settings",
          explanation: `<div class="space-y-4">
            <p>Haremos que sea más fácil afinar el robot añadiendo variables globales.</p>
            <p class="text-[15px] text-slate-600 leading-relaxed">Tener 5 sensores implica usar una velocidad intermedia (<code>velocidadMedia</code>) para los sensores A4 y A6, permitiendo correcciones mucho más suaves al tomar curvas de radio amplio sin perder velocidad.</p>
          </div>`,
          code: `int umbral = 500;
++ int velocidadMax = 180;
++ int velocidadMedia = 90;
++ int velocidadMin = 0;

void setup() {
  pinMode(3, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(9, OUTPUT);
}

void loop() {
  if (analogRead(A5) > umbral) { // Centro
++     analogWrite(5, velocidadMax);
++     analogWrite(6, velocidadMin);
++     analogWrite(3, velocidadMax);
++     analogWrite(9, velocidadMin);
  }
  else if (analogRead(A6) > umbral) { // Medio Izq
++     analogWrite(5, velocidadMedia);
++     analogWrite(6, velocidadMin);
++     analogWrite(3, velocidadMax);
++     analogWrite(9, velocidadMin);
  }
  else if (analogRead(A4) > umbral) { // Medio Der
++     analogWrite(5, velocidadMax);
++     analogWrite(6, velocidadMin);
++     analogWrite(3, velocidadMedia);
++     analogWrite(9, velocidadMin);
  }
  else if (analogRead(A7) > umbral) { // Extremo Izq
++     analogWrite(5, velocidadMin);
++     analogWrite(6, velocidadMin);
++     analogWrite(3, velocidadMax);
++     analogWrite(9, velocidadMin);
  }
  else if (analogRead(A3) > umbral) { // Extremo Der
++     analogWrite(5, velocidadMax);
++     analogWrite(6, velocidadMin);
++     analogWrite(3, velocidadMin);
++     analogWrite(9, velocidadMin);
  }
}`
        },
        {
          id: "paso-memoria",
          title: "Incorporar Memoria 5 Estados",
          subtitle: "Paso 7",
          icon: "Trophy",
          explanation: `<div class="space-y-4">
            <h3 class="font-bold text-slate-800 flex items-center gap-2 underline decoration-blue-200">
              Persistencia de estado escalada a 5 sectores
            </h3>
            <p>Usaremos <code>ultimaDir</code> y en cada estado guardaremos el número del cable Analógico que leyó línea por última vez (3, 4, 5, 6, 7).</p>
            <p>Si todos están en blanco (menores al umbral), copiamos la acción correspondientemente.</p>
          </div>`,
          code: `int umbral = 500;
int velocidadMax = 180;
int velocidadMedia = 90;
int velocidadMin = 0;
++ int ultimaDir = 5;

void setup() {
  pinMode(3, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(9, OUTPUT);
}

void loop() {
  if (analogRead(A5) > umbral) { 
    analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin);
++     ultimaDir = 5;
  }
  else if (analogRead(A6) > umbral) { 
    analogWrite(5, velocidadMedia); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin);
++     ultimaDir = 6;
  }
  else if (analogRead(A4) > umbral) { 
    analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMedia); analogWrite(9, velocidadMin);
++     ultimaDir = 4;
  }
  else if (analogRead(A7) > umbral) {
    analogWrite(5, velocidadMin); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin);
++     ultimaDir = 7;
  }
  else if (analogRead(A3) > umbral) {
    analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMin); analogWrite(9, velocidadMin);
++     ultimaDir = 3;
  }
++   else if (analogRead(A5) <= umbral && analogRead(A6) <= umbral && analogRead(A4) <= umbral && analogRead(A7) <= umbral && analogRead(A3) <= umbral) {
++     if (ultimaDir == 5) { // Estaba central
++       analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin);
++     } else if (ultimaDir == 6) { // Estaba medio izq
++       analogWrite(5, velocidadMedia); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin);
++     } else if (ultimaDir == 4) { // Estaba medio der
++       analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMedia); analogWrite(9, velocidadMin);
++     } else if (ultimaDir == 7) { // Estaba ext izq
++       analogWrite(5, velocidadMin); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin);
++     } else if (ultimaDir == 3) { // Estaba ext der
++       analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMin); analogWrite(9, velocidadMin);
++     }
++   }
}`
        },
        {
          id: "paso-timer",
          title: "Incorporación del Temporizador",
          subtitle: "Paso 8",
          icon: "Clock",
          explanation: `<div class="space-y-4">
            <p class="font-medium text-slate-800">Iniciamos el cronómetro interno.</p>
            <p class="text-[15px] text-slate-600 leading-relaxed">Con la variable <code>tiempoActual</code> preparada en memoria usando <code>millis()</code>, nuestro cerebro lógico ya está preparado para inyección de eventos temporales.</p>
          </div>`,
          code: `int umbral = 500;
int velocidadMax = 180;
int velocidadMedia = 90;
int velocidadMin = 0;
int ultimaDir = 5;

void setup() {
  pinMode(3, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(9, OUTPUT);
}

void loop() {
++   unsigned long tiempoActual = millis();

  if (analogRead(A5) > umbral) { 
    analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin);
    ultimaDir = 5;
  }
  else if (analogRead(A6) > umbral) { 
    analogWrite(5, velocidadMedia); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin);
    ultimaDir = 6;
  }
  else if (analogRead(A4) > umbral) { 
    analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMedia); analogWrite(9, velocidadMin);
    ultimaDir = 4;
  }
  else if (analogRead(A7) > umbral) {
    analogWrite(5, velocidadMin); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin);
    ultimaDir = 7;
  }
  else if (analogRead(A3) > umbral) {
    analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMin); analogWrite(9, velocidadMin);
    ultimaDir = 3;
  }
  else if (analogRead(A5) <= umbral && analogRead(A6) <= umbral && analogRead(A4) <= umbral && analogRead(A7) <= umbral && analogRead(A3) <= umbral) {
    if (ultimaDir == 5) { analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin); } 
    else if (ultimaDir == 6) { analogWrite(5, velocidadMedia); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin); } 
    else if (ultimaDir == 4) { analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMedia); analogWrite(9, velocidadMin); } 
    else if (ultimaDir == 7) { analogWrite(5, velocidadMin); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin); } 
    else if (ultimaDir == 3) { analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMin); analogWrite(9, velocidadMin); }
  }
}`
        },
        {
          id: "paso-pausa",
          title: "Pausa en Carrera",
          subtitle: "Paso 9",
          icon: "Timer",
          explanation: `<div class="space-y-4">
            <p class="font-medium text-slate-800">Detenemos el robot automáticamente.</p>
            <p class="text-[15px] text-slate-600 leading-relaxed">Detendremos completamente el flujo hacia los motores usando los pines entre los segundos 5 y 7 de carrera.</p>
          </div>`,
          code: `int umbral = 500;
int velocidadMax = 180;
int velocidadMedia = 90;
int velocidadMin = 0;
int ultimaDir = 5;

void setup() {
  pinMode(3, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(9, OUTPUT);
}

void loop() {
  unsigned long tiempoActual = millis();

++   if (tiempoActual > 5000 && tiempoActual < 7000) {
++     analogWrite(5, 0); analogWrite(6, 0); analogWrite(3, 0); analogWrite(9, 0);
++   } 
++   else {
    if (analogRead(A5) > umbral) { 
      analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin);
      ultimaDir = 5;
    }
    else if (analogRead(A6) > umbral) { 
      analogWrite(5, velocidadMedia); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin);
      ultimaDir = 6;
    }
    else if (analogRead(A4) > umbral) { 
      analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMedia); analogWrite(9, velocidadMin);
      ultimaDir = 4;
    }
    else if (analogRead(A7) > umbral) {
      analogWrite(5, velocidadMin); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin);
      ultimaDir = 7;
    }
    else if (analogRead(A3) > umbral) {
      analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMin); analogWrite(9, velocidadMin);
      ultimaDir = 3;
    }
    else if (analogRead(A5) <= umbral && analogRead(A6) <= umbral && analogRead(A4) <= umbral && analogRead(A7) <= umbral && analogRead(A3) <= umbral) {
      if (ultimaDir == 5) { analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin); } 
      else if (ultimaDir == 6) { analogWrite(5, velocidadMedia); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin); } 
      else if (ultimaDir == 4) { analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMedia); analogWrite(9, velocidadMin); } 
      else if (ultimaDir == 7) { analogWrite(5, velocidadMin); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin); } 
      else if (ultimaDir == 3) { analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMin); analogWrite(9, velocidadMin); }
    }
++   }
}`
        },
        {
          id: "paso-giro",
          title: "Giro Ciego",
          subtitle: "Paso 10",
          icon: "RotateCcw",
          explanation: `<div class="space-y-4">
            <p class="font-medium text-slate-800">Programamos un giro forzado para superar intersecciones.</p>
            <p class="text-[15px] text-slate-600 leading-relaxed">A los 10 segundos, ordenamos un giro ciego a la izquierda de 300 milisegundos ignorando temporalmente la lógica visual de los sensores.</p>
          </div>`,
          code: `int umbral = 500;
int velocidadMax = 180;
int velocidadMedia = 90;
int velocidadMin = 0;
int ultimaDir = 5;

void setup() {
  pinMode(3, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(9, OUTPUT);
}

void loop() {
  unsigned long tiempoActual = millis();

  if (tiempoActual > 5000 && tiempoActual < 7000) {
    analogWrite(5, 0); analogWrite(6, 0); analogWrite(3, 0); analogWrite(9, 0);
  } 
++   else if (tiempoActual > 10000 && tiempoActual < 10300) {
++     // Extremo Giro a la Izquierda forzado
++     analogWrite(5, velocidadMin); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin);
++   }
  else {
    if (analogRead(A5) > umbral) { 
      analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin);
      ultimaDir = 5;
    }
    else if (analogRead(A6) > umbral) { 
      analogWrite(5, velocidadMedia); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin);
      ultimaDir = 6;
    }
    else if (analogRead(A4) > umbral) { 
      analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMedia); analogWrite(9, velocidadMin);
      ultimaDir = 4;
    }
    else if (analogRead(A7) > umbral) {
      analogWrite(5, velocidadMin); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin);
      ultimaDir = 7;
    }
    else if (analogRead(A3) > umbral) {
      analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMin); analogWrite(9, velocidadMin);
      ultimaDir = 3;
    }
    else if (analogRead(A5) <= umbral && analogRead(A6) <= umbral && analogRead(A4) <= umbral && analogRead(A7) <= umbral && analogRead(A3) <= umbral) {
      if (ultimaDir == 5) { analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin); } 
      else if (ultimaDir == 6) { analogWrite(5, velocidadMedia); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin); } 
      else if (ultimaDir == 4) { analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMedia); analogWrite(9, velocidadMin); } 
      else if (ultimaDir == 7) { analogWrite(5, velocidadMin); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin); } 
      else if (ultimaDir == 3) { analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMin); analogWrite(9, velocidadMin); }
    }
  }
}`
        },
      ]
    },
    {
      id: "sl-desafio-2026",
      title: "Robot Sigue Líneas Desafío 2026",
      description: "Dominio y escalabilidad analógica a través de un cerebro pentasensorial.",
      icon: "Cpu",
      color: "purple",
      classes: [

        {
          id: "intro-fisica",
          title: "Descripción Física del Robot",
          subtitle: "Preparación",
          icon: "Layout",
          explanation: `<div class="space-y-4">
            <p>Nuestro robot Desafío utiliza el mismo chasis base, pero con una placa frontal expandida para colocar 5 sensores y lograr mayor precisión.</p>
            <div class="bg-amber-50 border border-amber-200 p-4 rounded-xl mt-4">
              <h4 class="font-bold text-amber-800 mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8l8-4 8 4-8 4-8-4z"/><path d="M4 12l8 4 8-4"/><path d="M4 16l8 4 8-4"/></svg>
                Diseño tipo "Sandwich"
              </h4>
              <p class="text-sm text-amber-700 leading-relaxed mb-3">
                Los pines de los sensores y motores han sido seleccionados estratégicamente para permitir que las placas electrónicas se apilen una sobre otra, ahorrando espacio y mejorando la conexión.
              </p>
              <div class="relative cursor-pointer border border-amber-200 rounded-lg overflow-hidden group">
                <img src="Imagenes/20260326_082452.jpg" alt="Stacking Sandwich" class="w-full group-hover:scale-105 transition-transform duration-500" />
                <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              </div>
            </div>
            <ul class="space-y-2 text-[15px] list-disc ml-4 text-slate-700">
              <li><strong>Cerebro y Control:</strong> Usamos un Arduino NANO y un driver de motores MX1616.</li>
              <li><strong>Sensores Analógicos:</strong> Cuenta con 5 sensores infrarrojos conectados a los pines analógicos A3 a A7.</li>
              <li><strong>Tracción y Energía:</strong> 2 motores DC, una metra de apoyo y un portabaterías doble para la alimentación.</li>
            </ul>
          </div>`,
          code: `// --- EXPANSIÓN A 5 SENSORES ANALÓGICOS ---

// A7 -> Sensor Lateral Extremo Izquierdo
// A6 -> Sensor Medio Izquierdo
// A5 -> Sensor Eje Central
// A4 -> Sensor Medio Derecho
// A3 -> Sensor Lateral Extremo Derecho`
        },
        {
          id: "conexiones-esquema",
          title: "Conexiones Físicas y Esquema",
          subtitle: "Preparación",
          icon: "Zap",
          explanation: `<div class="space-y-4">
            <p>Las conexiones físicas analógicas dictan la simetría del código.</p>
            <p>Inspecciona minuciosamente la nueva topología de cables de tu robot Desafío:</p>
            <div class="relative cursor-pointer border border-slate-200 rounded-xl overflow-hidden mt-4 shadow-sm hover:shadow-md transition-shadow group inline-block w-full">
                <img src="Imagenes/Esquema%20SLC%20Desafio%2026_1_Page%201.jpg" alt="Esquema Conexiones Robot" class="w-full group-hover:scale-[1.02] transition-transform duration-300" />
                <div class="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md text-white px-3 py-1.5 rounded-lg flex items-center gap-2 pointer-events-none shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                  <span class="text-[10px] font-bold tracking-widest uppercase">Ampliar</span>
                </div>
            </div>
            
            <div class="bg-blue-50/50 p-4 rounded-lg border border-blue-100 mt-4 text-sm">
              <ul class="space-y-2">
                <li><strong>Sensores:</strong> A7 (Ext. Izq), A6 (Medio Izq), A5 (Centro), A4 (Medio Der), A3 (Ext. Der).</li>
                <li><strong>Motores:</strong> Motor A (Izq) en pines 5 y 6. Motor B (Der) en pines 3 y 9.</li>
              </ul>
            </div>
            
            <div class="mt-8 bg-purple-50 border border-purple-100 p-5 rounded-xl">
              <div class="flex items-center gap-3 text-purple-800 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h4l2-9 5 18 2-9h5"/></svg>
                <h3 class="font-black tracking-tight text-lg">Simulaciones y Archivos</h3>
              </div>
              <p class="text-[15px] text-purple-700 leading-relaxed mb-4">Puedes probar tu lógica en el simulador oficial:</p>
              <ol class="list-decimal ml-5 text-[15px] text-purple-800 space-y-2 font-medium mb-6">
                <li>Descarga el archivo del robot Desafío.</li>
                <li>Abre el simulador en <a href="https://svpsteamclub.github.io/Sim/" target="_blank" class="font-black text-purple-600 underline hover:text-purple-900 transition-colors">svpsteamclub.github.io/Sim/</a></li>
                <li>Ve a <strong>"Editor de Robot"</strong>, presiona <strong>"Cargar Robot"</strong> y selecciona el archivo <code>.json</code>.</li>
              </ol>
              <a href="Archivos/SLC%20Desafio%202026.json" download="SLC Desafio 2026.json" class="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-lg font-bold text-sm tracking-wide transition-all shadow-md shadow-purple-200 hover:translate-y-[-2px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                Descargar SLC Desafio 2026.json
              </a>
            </div>
          </div>`,
          code: `// Mapeo de Pins - Robot Desafío 2026

// Sensores Analógicos (A3-A7)
// Motor A (Izquierdo): 5 y 6
// Motor B (Derecho): 3 y 9`
        },
        {
          id: "paso-1-io",
          title: "Configuración y Umbral Analógico",
          subtitle: "Paso 1",
          icon: "Settings",
          explanation: `<div class="space-y-4">
            <p>Configuramos los pines de los motores como salidas. Los pines analógicos no necesitan configuración previa.</p>
            <p class="text-[15px] text-slate-600 leading-relaxed">Como los sensores analógicos entregan valores entre 0 y 1023, usamos un <strong>umbral</strong> (ej. 500) para decidir si estamos viendo color negro o blanco.</p>
          </div>`,
          code: `int umbral = 500; 

void setup() {
  pinMode(3, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(9, OUTPUT);
}

void loop() {
  // El ciclo permanece mudo por ahora
}`
        },
        {
          id: "paso-2-avanzar",
          title: "Prueba de Motores: Avanzar",
          subtitle: "Paso 2",
          icon: "Move",
          explanation: `<div class="space-y-4">
            <p class="font-medium text-slate-800">Verificamos que el robot avance en línea recta.</p>
            <p class="text-[15px] text-slate-600 leading-relaxed">Activamos ambos motores a una potencia moderada (180 de 255) para asegurar que el hardware esté bien conectado.</p>
          </div>`,
          code: `int umbral = 500;

void setup() {
  pinMode(3, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(9, OUTPUT);
}

void loop() {
  // Avanzar
  analogWrite(5, 180);
  analogWrite(6, 0);
  analogWrite(3, 180);
  analogWrite(9, 0);
}`
        },
        {
          id: "paso-3-izquierda",
          title: "Prueba de Motores: Girar Izquierda",
          subtitle: "Paso 3",
          icon: "RefreshCw",
          explanation: `<div class="space-y-4">
            <p class="font-medium text-slate-800">Verificamos el giro hacia la izquierda.</p>
            <p class="text-[15px] text-slate-600 leading-relaxed">Para girar a la izquierda, detenemos el motor de ese lado y mantenemos el derecho activo.</p>
          </div>`,
          code: `int umbral = 500;

void setup() {
  pinMode(3, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(9, OUTPUT);
}

void loop() {
  // Girar a la izquierda
  analogWrite(5, 0);
  analogWrite(6, 0);
  analogWrite(3, 180);
  analogWrite(9, 0);
}`
        },
        {
          id: "paso-4-derecha",
          title: "Prueba de Motores: Girar Derecha",
          subtitle: "Paso 4",
          icon: "RefreshCw",
          explanation: `<div class="space-y-4">
            <p class="font-medium text-slate-800">Verificamos el giro hacia la derecha.</p>
            <p class="text-[15px] text-slate-600 leading-relaxed">Detenemos el motor derecho y activamos el izquierdo para completar las pruebas básicas de movimiento.</p>
          </div>`,
          code: `int umbral = 500;

void setup() {
  pinMode(3, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(9, OUTPUT);
}

void loop() {
  // Girar a la derecha
  analogWrite(5, 180);
  analogWrite(6, 0);
  analogWrite(3, 0);
  analogWrite(9, 0);
}`
        },
        {
          id: "paso-5-logica",
          title: "Lógica Analógica de 5 Sensores",
          subtitle: "Paso 5",
          icon: "Move",
          explanation: `<div class="space-y-4">
            <p class="font-medium text-slate-800">Implementamos el control proporcional según qué sensor detecte la línea.</p>
            <ul class="list-disc ml-5 space-y-2 text-[15px] text-slate-700">
              <li>Si el <strong>sensor central (A5)</strong> se activa, ambos motores avanzan.</li>
              <li>Si los <strong>sensores medios (A4 o A6)</strong> se activan, el motor de ese lado baja a la mitad (giro suave).</li>
              <li>Si los <strong>sensores extremos (A3 o A7)</strong> se activan, el motor de ese lado se detiene (giro brusco).</li>
            </ul>
            <div class="bg-emerald-50 border-emerald-500 border-l-4 p-4 mt-6 rounded-r-xl">
              <h4 class="font-bold text-emerald-800 mb-2">🎉 ¡Código Mínimo Funcional!</h4>
              <p class="text-emerald-900 text-sm leading-relaxed">
                Hasta este <strong>Paso 5</strong>, tienes el código mínimo indispensable para un seguidor de líneas de 5 sensores. Lo que viene a continuación son módulos adicionales para hacerlo más robusto y de competición.
              </p>
            </div>
            <div class="bg-orange-50 border-l-4 border-orange-500 p-4 mt-4 rounded-r-xl">
              <h4 class="font-bold text-orange-800 mb-2">⚠️ Limitaciones de la Persistencia de Estado</h4>
              <p class="text-orange-900 text-sm leading-relaxed">
                Hasta este paso, la persistencia de estado Arduino mantiene los últimos comandos. El <strong>problema</strong> es que para resolver esquinas de 90 grados, ejecutar paradas y configurar giros ciegos, esto no nos sirve de mucho. Necesitamos control absoluto con memoria explícita.
              </p>
            </div>
          </div>`,
          code: `int umbral = 500;

void setup() {
  pinMode(3, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(9, OUTPUT);
}

void loop() {
++   if (analogRead(A5) > umbral) { // Centro
++     analogWrite(5, 180);
++     analogWrite(6, 0);
++     analogWrite(3, 180);
++     analogWrite(9, 0);
++   }
++   else if (analogRead(A6) > umbral) { // Medio Izq
++     analogWrite(5, 90);
++     analogWrite(6, 0);
++     analogWrite(3, 180);
++     analogWrite(9, 0);
++   }
++   else if (analogRead(A4) > umbral) { // Medio Der
++     analogWrite(5, 180);
++     analogWrite(6, 0);
++     analogWrite(3, 90);
++     analogWrite(9, 0);
++   }
++   else if (analogRead(A7) > umbral) { // Extremo Izq
++     analogWrite(5, 0);
++     analogWrite(6, 0);
++     analogWrite(3, 180);
++     analogWrite(9, 0);
++   }
++   else if (analogRead(A3) > umbral) { // Extremo Der
++     analogWrite(5, 180);
++     analogWrite(6, 0);
++     analogWrite(3, 0);
++     analogWrite(9, 0);
++   }
}`
        },
        {
          id: "paso-variables",
          title: "Incorporación de Variables de Velocidad",
          subtitle: "Paso 6",
          icon: "Settings",
          explanation: `<div class="space-y-4">
            <p>En lugar de usar números directos, declaramos variables globales de velocidad para poder afinar el robot de manera rápida.</p>
            <p class="text-[15px] text-slate-600 leading-relaxed">Con 5 sensores, necesitamos una velocidad intermedia (<code>velocidadMedia</code>) para correcciones suaves al tomar curvas de radio amplio sin perder velocidad.</p>
          </div>`,
          code: `int umbral = 500;
++ int velocidadMax = 180;
++ int velocidadMedia = 90;
++ int velocidadMin = 0;

void setup() {
  pinMode(3, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(9, OUTPUT);
}

void loop() {
  if (analogRead(A5) > umbral) { // Centro
++     analogWrite(5, velocidadMax);
++     analogWrite(6, velocidadMin);
++     analogWrite(3, velocidadMax);
++     analogWrite(9, velocidadMin);
  }
  else if (analogRead(A6) > umbral) { // Medio Izq
++     analogWrite(5, velocidadMedia);
++     analogWrite(6, velocidadMin);
++     analogWrite(3, velocidadMax);
++     analogWrite(9, velocidadMin);
  }
  else if (analogRead(A4) > umbral) { // Medio Der
++     analogWrite(5, velocidadMax);
++     analogWrite(6, velocidadMin);
++     analogWrite(3, velocidadMedia);
++     analogWrite(9, velocidadMin);
  }
  else if (analogRead(A7) > umbral) { // Extremo Izq
++     analogWrite(5, velocidadMin);
++     analogWrite(6, velocidadMin);
++     analogWrite(3, velocidadMax);
++     analogWrite(9, velocidadMin);
  }
  else if (analogRead(A3) > umbral) { // Extremo Der
++     analogWrite(5, velocidadMax);
++     analogWrite(6, velocidadMin);
++     analogWrite(3, velocidadMin);
++     analogWrite(9, velocidadMin);
  }
}`
        },
        {
          id: "paso-memoria",
          title: "Incorporar Memoria de 5 Estados",
          subtitle: "Paso 7",
          icon: "Trophy",
          explanation: `<div class="space-y-4">
            <h3 class="font-bold text-slate-800 flex items-center gap-2 underline decoration-blue-200">
              Memoria escalada a 5 sectores
            </h3>
            <p>Usaremos <code>ultimaDir</code> para guardar el número analógico (3, 4, 5, 6, 7) que leyó la línea por última vez.</p>
            <p>Si todos están en blanco, ejecutamos la misma acción que correspondía al último sensor activo.</p>
          </div>`,
          code: `int umbral = 500;
int velocidadMax = 180;
int velocidadMedia = 90;
int velocidadMin = 0;
++ int ultimaDir = 5; // Memoria: A3(ext der), A4(med der), A5(centro), A6(med izq), A7(ext izq)

void setup() {
  pinMode(3, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(9, OUTPUT);
}

void loop() {
  if (analogRead(A5) > umbral) { 
    analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin);
++     ultimaDir = 5;
  }
  else if (analogRead(A6) > umbral) { 
    analogWrite(5, velocidadMedia); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin);
++     ultimaDir = 6;
  }
  else if (analogRead(A4) > umbral) { 
    analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMedia); analogWrite(9, velocidadMin);
++     ultimaDir = 4;
  }
  else if (analogRead(A7) > umbral) {
    analogWrite(5, velocidadMin); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin);
++     ultimaDir = 7;
  }
  else if (analogRead(A3) > umbral) {
    analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMin); analogWrite(9, velocidadMin);
++     ultimaDir = 3;
  }
++   // 6. PÉRDIDA DE LÍNEA (Todos los sensores en blanco)
++   else if (analogRead(A5) <= umbral && analogRead(A6) <= umbral && analogRead(A4) <= umbral && analogRead(A7) <= umbral && analogRead(A3) <= umbral) {
++     if (ultimaDir == 5) { analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin); }
++     else if (ultimaDir == 6) { analogWrite(5, velocidadMedia); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin); }
++     else if (ultimaDir == 4) { analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMedia); analogWrite(9, velocidadMin); }
++     else if (ultimaDir == 7) { analogWrite(5, velocidadMin); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin); }
++     else if (ultimaDir == 3) { analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMin); analogWrite(9, velocidadMin); }
++   }
}`
        },
        {
          id: "paso-timer",
          title: "Incorporación del Temporizador",
          subtitle: "Paso 8",
          icon: "Clock",
          explanation: `<div class="space-y-4">
            <p class="font-medium text-slate-800">Iniciamos el cronómetro interno.</p>
            <p class="text-[15px] text-slate-600 leading-relaxed">Con la variable <code>tiempoActual</code> ({millis()}) disponible en el loop, ya podemos programar eventos temporales precisos sin interrumpir la lectura de sensores.</p>
          </div>`,
          code: `int umbral = 500;
int velocidadMax = 180;
int velocidadMedia = 90;
int velocidadMin = 0;
int ultimaDir = 5;

void setup() {
  pinMode(3, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(9, OUTPUT);
}

void loop() {
++   unsigned long tiempoActual = millis();

  if (analogRead(A5) > umbral) { 
    analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin);
    ultimaDir = 5;
  }
  else if (analogRead(A6) > umbral) { 
    analogWrite(5, velocidadMedia); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin);
    ultimaDir = 6;
  }
  else if (analogRead(A4) > umbral) { 
    analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMedia); analogWrite(9, velocidadMin);
    ultimaDir = 4;
  }
  else if (analogRead(A7) > umbral) {
    analogWrite(5, velocidadMin); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin);
    ultimaDir = 7;
  }
  else if (analogRead(A3) > umbral) {
    analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMin); analogWrite(9, velocidadMin);
    ultimaDir = 3;
  }
  else if (analogRead(A5) <= umbral && analogRead(A6) <= umbral && analogRead(A4) <= umbral && analogRead(A7) <= umbral && analogRead(A3) <= umbral) {
    if (ultimaDir == 5) { analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin); }
    else if (ultimaDir == 6) { analogWrite(5, velocidadMedia); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin); }
    else if (ultimaDir == 4) { analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMedia); analogWrite(9, velocidadMin); }
    else if (ultimaDir == 7) { analogWrite(5, velocidadMin); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin); }
    else if (ultimaDir == 3) { analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMin); analogWrite(9, velocidadMin); }
  }
}`
        },
        {
          id: "paso-pausa",
          title: "Pausa en Carrera",
          subtitle: "Paso 9",
          icon: "Timer",
          explanation: `<div class="space-y-4">
            <p class="font-medium text-slate-800">Detenemos el robot automáticamente en un tiempo determinado.</p>
            <p class="text-[15px] text-slate-600 leading-relaxed">Programamos una pausa completa entre los 5 y 7 segundos de la carrera usando una condición IF con tiempoActual.</p>
          </div>`,
          code: `int umbral = 500;
int velocidadMax = 180;
int velocidadMedia = 90;
int velocidadMin = 0;
int ultimaDir = 5;

void setup() {
  pinMode(3, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(9, OUTPUT);
}

void loop() {
  unsigned long tiempoActual = millis();

++   if (tiempoActual > 5000 && tiempoActual < 7000) {
++     analogWrite(5, 0); analogWrite(6, 0); analogWrite(3, 0); analogWrite(9, 0);
++   }
++   else {
    if (analogRead(A5) > umbral) { 
      analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin);
      ultimaDir = 5;
    }
    else if (analogRead(A6) > umbral) { 
      analogWrite(5, velocidadMedia); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin);
      ultimaDir = 6;
    }
    else if (analogRead(A4) > umbral) { 
      analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMedia); analogWrite(9, velocidadMin);
      ultimaDir = 4;
    }
    else if (analogRead(A7) > umbral) {
      analogWrite(5, velocidadMin); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin);
      ultimaDir = 7;
    }
    else if (analogRead(A3) > umbral) {
      analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMin); analogWrite(9, velocidadMin);
      ultimaDir = 3;
    }
    else if (analogRead(A5) <= umbral && analogRead(A6) <= umbral && analogRead(A4) <= umbral && analogRead(A7) <= umbral && analogRead(A3) <= umbral) {
      if (ultimaDir == 5) { analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin); }
      else if (ultimaDir == 6) { analogWrite(5, velocidadMedia); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin); }
      else if (ultimaDir == 4) { analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMedia); analogWrite(9, velocidadMin); }
      else if (ultimaDir == 7) { analogWrite(5, velocidadMin); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin); }
      else if (ultimaDir == 3) { analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMin); analogWrite(9, velocidadMin); }
    }
++   }
}`
        },
        {
          id: "paso-giro",
          title: "Giro Ciego",
          subtitle: "Paso 10",
          icon: "RotateCcw",
          explanation: `<div class="space-y-4">
            <p class="font-medium text-slate-800">Programamos un giro forzado para superar intersecciones.</p>
            <p class="text-[15px] text-slate-600 leading-relaxed">A los 10 segundos, ordenamos un giro ciego a la izquierda de 300 milisegundos, ignorando los sensores durante ese instante.</p>
          </div>`,
          code: `int umbral = 500;
int velocidadMax = 180;
int velocidadMedia = 90;
int velocidadMin = 0;
int ultimaDir = 5;

void setup() {
  pinMode(3, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(9, OUTPUT);
}

void loop() {
  unsigned long tiempoActual = millis();

  if (tiempoActual > 5000 && tiempoActual < 7000) {
    analogWrite(5, 0); analogWrite(6, 0); analogWrite(3, 0); analogWrite(9, 0);
  }
++   else if (tiempoActual > 10000 && tiempoActual < 10300) {
++     // Giro ciego a la izquierda por 300ms
++     analogWrite(5, velocidadMin); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin);
++   }
  else {
    if (analogRead(A5) > umbral) { 
      analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin);
      ultimaDir = 5;
    }
    else if (analogRead(A6) > umbral) { 
      analogWrite(5, velocidadMedia); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin);
      ultimaDir = 6;
    }
    else if (analogRead(A4) > umbral) { 
      analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMedia); analogWrite(9, velocidadMin);
      ultimaDir = 4;
    }
    else if (analogRead(A7) > umbral) {
      analogWrite(5, velocidadMin); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin);
      ultimaDir = 7;
    }
    else if (analogRead(A3) > umbral) {
      analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMin); analogWrite(9, velocidadMin);
      ultimaDir = 3;
    }
    else if (analogRead(A5) <= umbral && analogRead(A6) <= umbral && analogRead(A4) <= umbral && analogRead(A7) <= umbral && analogRead(A3) <= umbral) {
      if (ultimaDir == 5) { analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin); }
      else if (ultimaDir == 6) { analogWrite(5, velocidadMedia); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin); }
      else if (ultimaDir == 4) { analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMedia); analogWrite(9, velocidadMin); }
      else if (ultimaDir == 7) { analogWrite(5, velocidadMin); analogWrite(6, velocidadMin); analogWrite(3, velocidadMax); analogWrite(9, velocidadMin); }
      else if (ultimaDir == 3) { analogWrite(5, velocidadMax); analogWrite(6, velocidadMin); analogWrite(3, velocidadMin); analogWrite(9, velocidadMin); }
    }
  }
}`
        },
        {
          id: "paso-funciones",
          title: "Organización Profesional con Funciones",
          subtitle: "Paso 11",
          icon: "Code",
          explanation: `<div class="space-y-4">
            <p class="font-medium text-slate-800">Encapsulamos toda la lógica de motores en funciones propias para un código limpio y legible.</p>
            <p class="text-[15px] text-slate-600 leading-relaxed">Con 5 sensores más memoria y eventos de tiempo, el loop principal puede ser difícil de leer. Usando funciones, el loop vuelve a ser una historia corta y clara de acciones.</p>
          </div>`,
          code: `int umbral = 500;
int velocidadMax = 180;
int velocidadMedia = 90;
int velocidadMin = 0;
int ultimaDir = 5;

void setup() {
  pinMode(3, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(9, OUTPUT);
}

void loop() {
  unsigned long tiempoActual = millis();

  if (tiempoActual > 5000 && tiempoActual < 7000) {
    detenerse();
  }
  else if (tiempoActual > 10000 && tiempoActual < 10300) {
    girarRapidoIzq();
  }
  else {
    if (analogRead(A5) > umbral) { avanzar(); ultimaDir = 5; }
    else if (analogRead(A6) > umbral) { curvaSuaveIzq(); ultimaDir = 6; }
    else if (analogRead(A4) > umbral) { curvaSuaveDer(); ultimaDir = 4; }
    else if (analogRead(A7) > umbral) { girarRapidoIzq(); ultimaDir = 7; }
    else if (analogRead(A3) > umbral) { girarRapidoDer(); ultimaDir = 3; }
    else if (analogRead(A5) <= umbral && analogRead(A6) <= umbral && analogRead(A4) <= umbral && analogRead(A7) <= umbral && analogRead(A3) <= umbral) {
      if (ultimaDir == 5) avanzar();
      else if (ultimaDir == 6) curvaSuaveIzq();
      else if (ultimaDir == 4) curvaSuaveDer();
      else if (ultimaDir == 7) girarRapidoIzq();
      else if (ultimaDir == 3) girarRapidoDer();
    }
  }
}

// === FUNCIONES DE CONTROL DE MOTORES ===

void detenerse() {
  analogWrite(5, velocidadMin); analogWrite(6, velocidadMin);
  analogWrite(3, velocidadMin); analogWrite(9, velocidadMin);
}

void avanzar() {
  analogWrite(5, velocidadMax); analogWrite(6, velocidadMin);
  analogWrite(3, velocidadMax); analogWrite(9, velocidadMin);
}

void curvaSuaveIzq() {
  analogWrite(5, velocidadMedia); analogWrite(6, velocidadMin);
  analogWrite(3, velocidadMax); analogWrite(9, velocidadMin);
}

void curvaSuaveDer() {
  analogWrite(5, velocidadMax); analogWrite(6, velocidadMin);
  analogWrite(3, velocidadMedia); analogWrite(9, velocidadMin);
}

void girarRapidoIzq() {
  analogWrite(5, velocidadMin); analogWrite(6, velocidadMin);
  analogWrite(3, velocidadMax); analogWrite(9, velocidadMin);
}

void girarRapidoDer() {
  analogWrite(5, velocidadMax); analogWrite(6, velocidadMin);
  analogWrite(3, velocidadMin); analogWrite(9, velocidadMin);
}`
        }
      ]
    },
    {
      id: "agv-larense",
      title: "AGV Larense",
      description: "Vehículo autónomo guiado por RFID para logística: navega, detecta estaciones y entrega materiales sin intervención humana.",
      icon: "Cpu",
      color: "emerald",
      classes: [
        {
          id: "agv-intro-fisica",
          title: "¿Qué es el AGV Larense?",
          subtitle: "Introducción",
          icon: "Layout",
          explanation: `<div class="space-y-4">
            <p>El <strong>AGV Larense</strong> (Automated Guided Vehicle) es la evolución final del proyecto de robótica. A diferencia de los robots anteriores que usaban tiempo para decidir cuándo actuar, este robot <strong>lee etiquetas RFID incrustadas en la pista</strong> para saber exactamente dónde está y qué hacer a continuación.</p>
            <div class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl mt-2">
              <h4 class="font-bold text-emerald-800 mb-2">La diferencia clave con los robots anteriores</h4>
              <ul class="list-disc ml-5 space-y-2 text-sm text-emerald-700">
                <li><strong>Robots Aventura / Desafío:</strong> usan <code>millis()</code> para ejecutar acciones en momentos fijos de tiempo.</li>
                <li><strong>AGV Larense:</strong> usa tags RFID como "señales de tráfico" — cada tag le dice al robot dónde está y qué acción ejecutar en ese punto exacto de la pista.</li>
              </ul>
            </div>
            <p>El resultado es un sistema verdaderamente autónomo y adaptable: un robot de logística que puede programarse para recoger y entregar materiales en hasta 4 estaciones ("tolvas"), navegando solo por una pista bidireccional sin necesidad de recompilar el código.</p>
            <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl mt-2 text-sm">
              <h4 class="font-bold text-slate-700 mb-2">Capacidades del sistema</h4>
              <ul class="list-disc ml-5 space-y-1 text-slate-600">
                <li>Navegación bidireccional sin giro de 180° (usa dos caras de sensores).</li>
                <li>Mapa de pista aprendido mediante un "Modo Escaneo" inicial.</li>
                <li>Programación de pedidos por tolva desde el menú OLED.</li>
                <li>Parámetros de velocidad guardados en EEPROM (memoria no volátil).</li>
                <li>Secuencia de entrega automática tipo coreografía al llegar a cada tolva.</li>
              </ul>
            </div>
          </div>`,
          code: `// === RESUMEN DEL SISTEMA AGV LARENSE ===

// ENTRADAS (sensores y botones):
// - 6x Sensores IR TCRT5000 (Cara A: frente | Cara B: atrás)
// - 1x Lector RFID MFRC522 (detecta tags en la pista)
// - 4x Botones (SEL, INC, OK, CLR) para el menú
// - 1x Pantalla OLED SSD1306 (feedback visual)

// SALIDAS (actuadores):
// - 4x Pines PWM al driver MX1616 → 2 motores DC

// LÓGICA CENTRAL:
// El robot navega continuamente leyendo sus sensores IR.
// Cuando detecta un tag RFID, consulta su mapa interno
// y ejecuta la acción correspondiente (entregar, girar, fin).`
        },
        {
          id: "agv-hardware",
          title: "Hardware y Componentes",
          subtitle: "Preparación",
          icon: "Cpu",
          explanation: `<div class="space-y-4">
            <p>El AGV comparte el mismo chasis base con los robots anteriores, pero añade componentes críticos para la logística autónoma:</p>

            <h4 class="font-semibold text-slate-700 mt-4">Vista 3D del robot</h4>
            <div class="relative cursor-pointer border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group inline-block w-full">
              <img src="Imagenes/esquema_2_P%C3%A1gina%202.jpg" alt="Diagrama de componentes AGV" class="w-full group-hover:scale-[1.02] transition-transform duration-300" />
              <div class="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md text-white px-3 py-1.5 rounded-lg flex items-center gap-2 pointer-events-none shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                <span class="text-[10px] font-bold tracking-widest uppercase">Ampliar</span>
              </div>
            </div>

            <h4 class="font-semibold text-slate-700 mt-4">Diagrama de conexiones eléctricas</h4>
            <div class="relative cursor-pointer border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group inline-block w-full">
              <img src="Imagenes/Diagrama%20AGV.jpg" alt="Diagrama de conexiones AGV" class="w-full group-hover:scale-[1.02] transition-transform duration-300" />
              <div class="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md text-white px-3 py-1.5 rounded-lg flex items-center gap-2 pointer-events-none shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                <span class="text-[10px] font-bold tracking-widest uppercase">Ampliar</span>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-3 mt-4">
              <div class="bg-blue-50 border border-blue-100 p-3 rounded-lg text-sm">
                <h4 class="font-bold text-blue-800 mb-1">🧠 Cerebro</h4>
                <p class="text-blue-700"><strong>Arduino MEGA 2560</strong> — Necesario por la cantidad de pines requeridos para los dos juegos de sensores, RFID (SPI), OLED (I2C), botones y LEDs.</p>
              </div>
              <div class="bg-red-50 border border-red-100 p-3 rounded-lg text-sm">
                <h4 class="font-bold text-red-800 mb-1">⚡ Driver de Motores</h4>
                <p class="text-red-700"><strong>MX1616</strong> — Controla los dos motores DC recibiendo señales PWM del Arduino. Acepta 4 señales de control (IN1–IN4) que permiten mover cada motor hacia adelante o atrás de forma independiente.</p>
              </div>
              <div class="bg-emerald-50 border border-emerald-100 p-3 rounded-lg text-sm">
                <h4 class="font-bold text-emerald-800 mb-1">📡 Navegación Inteligente</h4>
                <p class="text-emerald-700"><strong>Lector RFID MFRC522</strong> — Montado en la base inferior del chasis. Lee las tarjetas NFC embebidas en la superficie de la pista para identificar cada estación y punto clave.</p>
              </div>
              <div class="bg-purple-50 border border-purple-100 p-3 rounded-lg text-sm">
                <h4 class="font-bold text-purple-800 mb-1">👁️ Sensores Dobles (Bidireccionalidad)</h4>
                <p class="text-purple-700">El robot tiene <strong>dos grupos de 3 sensores IR TCRT5000</strong>: <strong>Cara A</strong> (frontal) y <strong>Cara B</strong> (trasera). Cuando el AGV invierte su marcha, activa el grupo de cara B en vez de hacer un giro de 180°. Esto permite operar en pasillos estrechos.</p>
              </div>
              <div class="bg-amber-50 border border-amber-100 p-3 rounded-lg text-sm">
                <h4 class="font-bold text-amber-800 mb-1">🖥️ Interfaz de Usuario</h4>
                <p class="text-amber-700"><strong>Pantalla OLED SSD1306</strong> + <strong>4 botones</strong> (SEL, INC, OK, CLR) para navegar el menú, programar pedidos y ajustar velocidades. Dos LEDs indican cuál cara está activa.</p>
              </div>
            </div>

            <div class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl mt-2 text-sm">
              <h4 class="font-bold text-emerald-800 mb-2">🏭 La pista actual: 3 estaciones</h4>
              <p class="text-emerald-700 mb-2">La pista de prueba cuenta con <strong>3 estaciones</strong>, cada una identificada por un tag RFID distinto:</p>
              <ul class="list-disc ml-5 space-y-1 text-emerald-700">
                <li><strong>Estación 1 y 2 — Tolvas de despacho:</strong> el robot ejecuta la coreografía de entrega automática, embistiendo la tolva para que dispense metras.</li>
                <li><strong>Estación 3 — Estación de carga:</strong> el robot llega, se detiene y espera a que el operador cargue material manualmente antes de continuar.</li>
              </ul>
            </div>
          </div>`,
          code: `// === HARDWARE AGV LARENSE ===

// MICROCONTROLADOR
// 1x Arduino MEGA 2560

// COMUNICACIÓN
// 1x Lector RFID MFRC522 (protocolo SPI)
//    RST_PIN → pin 5 | SS_PIN → pin 53

// MOTORES
// 1x Driver MX1616
//    IN1 (Der. adelante) → pin 7
//    IN2 (Der. atrás)    → pin 6
//    IN3 (Izq. adelante) → pin 3
//    IN4 (Izq. atrás)    → pin 2
// 2x Motores DC con reducción

// SENSORES IR (dos grupos, 3 sensores cada uno)
// CARA A (frente): IZQ→38 | CEN→40 | DER→36
// CARA B (atrás):  DER→34 | CEN→32 | IZQ→30

// INTERFAZ
// 1x OLED SSD1306 0.96" (I2C, dirección 0x3C)
// 4x Botones: SEL→22 | INC→24 | OK→26 | CLR→28
// 2x LEDs: LED_A→44 | LED_B→45

// ENERGÍA
// 2x Baterías 18650`
        },
        {
          id: "agv-mapa-rfid",
          title: "El Concepto del Mapa RFID",
          subtitle: "Concepto Clave",
          icon: "Map",
          explanation: `<div class="space-y-4">
            <p>El corazón del AGV es su capacidad de aprender el mapa de la pista <strong>leyendo tags RFID en orden</strong> durante un recorrido inicial.</p>
            <div class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl">
              <h4 class="font-bold text-emerald-800 mb-3">¿Cómo funciona el Modo Escaneo?</h4>
              <ol class="list-decimal ml-5 space-y-2 text-sm text-emerald-700">
                <li>El operador activa el <strong>Modo Escaneo</strong> desde el menú.</li>
                <li>El robot empieza a circular por la pista siguiendo la línea.</li>
                <li>Cada vez que pasa sobre un tag RFID nuevo, lo guarda en orden en su lista interna.</li>
                <li>El <strong>primer tag leído</strong> se guarda como <code>uidInicio</code> (punto de salida/llegada).</li>
                <li>Los tags del medio se guardan como <code>uidPila[]</code> (las estaciones de tolva).</li>
                <li>El <strong>penúltimo tag</strong> se guarda como <code>uidRetorno</code> (señal para invertir marcha).</li>
                <li>Cuando el robot pasa <em>de nuevo</em> por el tag de inicio, el mapa está completo.</li>
              </ol>
            </div>
            <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl text-sm mt-2">
              <h4 class="font-bold text-slate-700 mb-2">Ejemplo de un mapa real</h4>
              <div class="font-mono text-xs bg-white border rounded p-3 space-y-1">
                <p><span class="text-emerald-600 font-bold">uidInicio</span>  = "A1B2C3D4"  ← Punto base</p>
                <p><span class="text-blue-600 font-bold">uidPila[0]</span> = "11223344"  ← Tolva 1</p>
                <p><span class="text-blue-600 font-bold">uidPila[1]</span> = "AABBCCDD"  ← Tolva 2</p>
                <p><span class="text-blue-600 font-bold">uidPila[2]</span> = "55667788"  ← Tolva 3</p>
                <p><span class="text-amber-600 font-bold">uidRetorno</span> = "DEADBEEF"  ← Señal de giro</p>
              </div>
              <p class="text-slate-500 mt-2">Una vez guardado, el robot sabe exactamente qué hacer en cada punto de la pista sin necesidad de recompilar el código.</p>
            </div>
            <div class="mt-4 bg-indigo-50 border border-indigo-100 p-5 rounded-xl">
              <div class="flex items-center gap-3 text-indigo-800 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h4l2-9 5 18 2-9h5"/></svg>
                <h3 class="font-black tracking-tight text-lg">Simulador del AGV</h3>
              </div>
              <p class="text-[15px] text-indigo-700 leading-relaxed mb-4">Puedes probar la lógica completa del AGV en el simulador interactivo:</p>
              <a href="https://guaroduino.github.io/AGVSim2/" target="_blank" class="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-lg font-bold text-sm tracking-wide transition-all shadow-md shadow-indigo-200 hover:translate-y-[-2px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                Abrir Simulador AGV
              </a>
            </div>
          </div>`,
          code: `// Variables que forman el MAPA del AGV
String uidInicio = "";      // Tag del punto de partida/llegada
String uidPila[4] = {"","","",""}; // Tags de las estaciones (tolvas)
String uidRetorno = "";     // Tag que indica "invertir marcha"

// El modo escaneo llena estas variables en orden:
// tags[0] → uidInicio
// tags[1..n-2] → uidPila[0..n-3]
// tags[n-1] → uidRetorno
//
// Una vez que el robot vuelve a ver tags[0] por segunda
// vez, el mapa está completo y el robot queda listo
// para recibir pedidos y ejecutar misiones.`
        },
        {
          id: "agv-loop-principal",
          title: "El Bucle Principal (loop)",
          subtitle: "Lógica Central",
          icon: "RefreshCw",
          explanation: `<div class="space-y-4">
            <p>El bucle principal (<code>loop</code>) es el "cerebro de operación" del AGV. Se ejecuta miles de veces por segundo y toma decisiones en tiempo real según lo que el robot detecta.</p>
            <div class="relative cursor-pointer border border-slate-200 rounded-xl overflow-hidden mt-4 shadow-sm hover:shadow-md transition-shadow group inline-block w-full">
              <img src="Imagenes/loop_diagram.jpeg" alt="Diagrama del loop principal" class="w-full group-hover:scale-[1.02] transition-transform duration-300" />
              <div class="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md text-white px-3 py-1.5 rounded-lg flex items-center gap-2 pointer-events-none shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                <span class="text-[10px] font-bold tracking-widest uppercase">Ampliar</span>
              </div>
            </div>
            <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl text-sm mt-4">
              <h4 class="font-bold text-slate-700 mb-3">¿Qué decide el loop en cada ciclo?</h4>
              <ol class="list-decimal ml-5 space-y-2 text-slate-600">
                <li><strong>¿Estamos en el menú?</strong> → Ejecutar menú y salir. El robot no se mueve.</li>
                <li><strong>Navegar:</strong> Llamar a <code>navegacionBasica()</code> para seguir la línea.</li>
                <li><strong>Leer tag RFID:</strong> Llamar a <code>leerTag()</code>. Si no se detecta nada, continuar.</li>
                <li><strong>¿Es el tag de inicio?</strong> → Misión completada: frenar, mostrar "FIN", volver al menú.</li>
                <li><strong>¿Es el tag de retorno y la cara cambió?</strong> → Girar 180°, activar cara A.</li>
                <li><strong>¿Es una estación con pedidos pendientes?</strong> → Ejecutar <code>secuenciaEntrega()</code>.</li>
              </ol>
            </div>
            <div class="bg-amber-50 border border-amber-200 p-3 rounded-lg text-sm mt-2">
              <p class="text-amber-700"><strong>Importante:</strong> Los pasos 2 y 3 siempre se ejecutan juntos. El robot <em>nunca se detiene</em> esperando un tag — sigue moviéndose y lee el RFID "al vuelo" mientras navega.</p>
            </div>
          </div>`,
          code: `void loop() {
  // PASO 1: ¿Estamos en el menú interactivo?
  if (enMenu) { ejecutarMenu(); return; }

  // PASO 2: Navegar por la pista (siempre activo)
  navegacionBasica();

  // PASO 3: Intentar leer un tag RFID
  String tag = leerTag();

  // PASO 4: Evaluar qué tag se detectó
  if (tag != "") {

    // ¿Llegamos al punto de inicio? → Fin de misión
    if (tag == uidInicio) {
      frenar();
      mostrarPantalla("FIN", "MISION OK");
      for(int i=0; i<4; i++) pedidos[i]=0;
      delay(3000);
      enMenu = true;
    }

    // ¿Tag de retorno y cara B activa? → Girar 180°
    else if (tag == uidRetorno && !caraA_Activa) {
      girar(180);
      caraA_Activa = true;
    }

    // ¿Es una estación con pedidos? → Entregar
    else {
      for (int i = 0; i < 4; i++) {
        if (tag == uidPila[i] && pedidos[i] > 0)
          secuenciaEntrega(i);
      }
    }
  }
}`
        },
        {
          id: "agv-navegacion",
          title: "navegacionBasica(): Seguir la Línea",
          subtitle: "Función Clave",
          icon: "Move",
          explanation: `<div class="space-y-4">
            <p>Esta función es la responsable de mantener al robot sobre la línea en todo momento. Es idéntica en concepto a los robots anteriores, pero con una diferencia fundamental: <strong>maneja dos grupos de sensores según la dirección de marcha.</strong></p>
            <div class="relative cursor-pointer border border-slate-200 rounded-xl overflow-hidden mt-4 shadow-sm hover:shadow-md transition-shadow group inline-block w-full">
              <img src="Imagenes/navegacionBasica_diagram.jpeg" alt="Diagrama navegacionBasica" class="w-full group-hover:scale-[1.02] transition-transform duration-300" />
              <div class="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md text-white px-3 py-1.5 rounded-lg flex items-center gap-2 pointer-events-none shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                <span class="text-[10px] font-bold tracking-widest uppercase">Ampliar</span>
              </div>
            </div>
            <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl text-sm mt-4">
              <h4 class="font-bold text-slate-700 mb-2">Lógica de corrección de trayectoria</h4>
              <ul class="list-disc ml-5 space-y-2 text-slate-600">
                <li><strong>Sensor central activo:</strong> Avanzar recto a <code>velBase</code>. Resetear memoria.</li>
                <li><strong>Sensor izquierdo activo:</strong> Reducir velocidad izquierda (<code>velCorreccion</code>), el robot gira suavemente a la izquierda. Guardar memoria = 1.</li>
                <li><strong>Sensor derecho activo:</strong> Reducir velocidad derecha, girar suavemente a la derecha. Guardar memoria = 2.</li>
                <li><strong>Ningún sensor activo:</strong> Usar la variable <code>memoriaLado</code> para continuar girando en la última dirección detectada (con <code>velCorreccion2</code>, más suave).</li>
              </ul>
            </div>
            <div class="bg-purple-50 border border-purple-100 p-3 rounded-lg text-sm mt-2">
              <p class="text-purple-700"><strong>La variable <code>caraA_Activa</code></strong> determina cuál grupo de sensores se usa. Si es <code>true</code>, se leen los sensores del frente (S_A). Si es <code>false</code>, se leen los del atrás (S_B). La función <code>mover()</code> también invierte internamente los motores al cambiar de cara, por lo que el código de corrección es idéntico en ambas direcciones.</p>
            </div>
          </div>`,
          code: `void navegacionBasica() {
  int izq, cen, der;

  // Seleccionar grupo de sensores según la cara activa
  if (caraA_Activa) {
    izq = digitalRead(S_A_IZQ);
    cen = digitalRead(S_A_CEN);
    der = digitalRead(S_A_DER);
  } else {
    izq = digitalRead(S_B_IZQ);
    cen = digitalRead(S_B_CEN);
    der = digitalRead(S_B_DER);
  }

  // Corrección según sensor activo
  if (cen == 1) {
    mover(velBase, velBase);  // Recto
    memoriaLado = 0;
  }
  else if (izq == 1) {
    mover(velCorreccion, velBase); // Girar izq (suave)
    memoriaLado = 1;
  }
  else if (der == 1) {
    mover(velBase, velCorreccion); // Girar der (suave)
    memoriaLado = 2;
  }
  else {
    // Ningún sensor: usar memoria del último giro
    if (memoriaLado == 1)      mover(velCorreccion2, velBase);
    else if (memoriaLado == 2) mover(velBase, velCorreccion2);
    else                       mover(velBase, velBase);
  }
}`
        },
        {
          id: "agv-girar",
          title: "girar(): Giro Inteligente con Sensores",
          subtitle: "Función Clave",
          icon: "RotateCcw",
          explanation: `<div class="space-y-4">
            <p>A diferencia de un "giro ciego" por tiempo, el AGV usa sus propios sensores para saber cuándo completar el giro. Esto lo hace <strong>preciso sin importar variaciones de batería o superficie.</strong></p>
            <div class="relative cursor-pointer border border-slate-200 rounded-xl overflow-hidden mt-4 shadow-sm hover:shadow-md transition-shadow group inline-block w-full">
              <img src="Imagenes/girar_diagram.jpeg" alt="Diagrama función girar" class="w-full group-hover:scale-[1.02] transition-transform duration-300" />
              <div class="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md text-white px-3 py-1.5 rounded-lg flex items-center gap-2 pointer-events-none shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                <span class="text-[10px] font-bold tracking-widest uppercase">Ampliar</span>
              </div>
            </div>
            <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl text-sm mt-4">
              <h4 class="font-bold text-slate-700 mb-2">¿Cómo sabe el robot cuándo terminar el giro?</h4>
              <ol class="list-decimal ml-5 space-y-2 text-slate-600">
                <li><strong>Frenar</strong> para detener el impulso previo.</li>
                <li><strong>Dar un impulso inicial</strong>: para 180° dura el doble que para 90°, asegurando que el robot salga de la línea.</li>
                <li><strong>Bucle de espera:</strong> continuar girando mientras el sensor central <em>no detecte</em> la línea (<code>== 0</code>).</li>
                <li>En cuanto el sensor central vuelve a ver la línea → <strong>frenar</strong>. El giro terminó.</li>
              </ol>
            </div>
            <div class="bg-amber-50 border border-amber-200 p-3 rounded-lg text-sm mt-2">
              <p class="text-amber-700"><strong>El giro de 180°</strong> siempre usa el sensor central de la <strong>Cara A</strong> (sensor fijo). El giro de 90° usa el sensor central de la cara actualmente seleccionada.</p>
            </div>
          </div>`,
          code: `void girar(int grados) {
  frenar(); // Detener impulso previo

  if (grados == 180) {
    // Impulso doble para asegurar salida de la línea
    mover(velGiro, -velGiro);
    delay(800);
    // Esperar a encontrar la línea con el sensor frontal fijo
    while (digitalRead(S_A_CEN) == 0)
      mover(velGiro, -velGiro);

  } else { // 90 grados
    // Impulso normal
    mover(velGiro, -velGiro);
    delay(400);
    // Esperar con el sensor de la cara activa
    while (digitalRead(caraA_Activa ? S_A_CEN : S_B_CEN) == 0)
      mover(velGiro, -velGiro);
  }

  frenar(); // Detener al encontrar la línea
}

// La función mover() acepta velocidades negativas
// para invertir el sentido de un motor individual.
// Esto permite el giro sobre el propio eje del robot.`
        },
        {
          id: "agv-entrega",
          title: "secuenciaEntrega(): La Coreografía",
          subtitle: "Función Clave",
          icon: "Package",
          explanation: `<div class="space-y-4">
            <p>Cuando el AGV llega a una estación (tolva) con pedidos pendientes, ejecuta esta secuencia completamente autónoma. Es la función más compleja del sistema.</p>
            <div class="relative cursor-pointer border border-slate-200 rounded-xl overflow-hidden mt-4 shadow-sm hover:shadow-md transition-shadow group inline-block w-full">
              <img src="Imagenes/secuenciaEntrega_diagram.jpeg" alt="Diagrama secuenciaEntrega" class="w-full group-hover:scale-[1.02] transition-transform duration-300" />
              <div class="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md text-white px-3 py-1.5 rounded-lg flex items-center gap-2 pointer-events-none shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                <span class="text-[10px] font-bold tracking-widest uppercase">Ampliar</span>
              </div>
            </div>
            <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl text-sm mt-4">
              <h4 class="font-bold text-slate-700 mb-3">Fases de la secuencia</h4>
              <ol class="list-decimal ml-5 space-y-2 text-slate-600">
                <li><strong>Entrada:</strong> Girar 90° para meterse al carril de la tolva.</li>
                <li><strong>Avanzar embistiendo:</strong> Moverse hacia la tolva hasta que el sensor lateral izquierdo detecte el fondo.</li>
                <li><strong>Frenar y esperar:</strong> Pausa de 1 segundo (la tolva dispensa el material).</li>
                <li><strong>Retroceder si quedan pedidos:</strong> Si <code>pedidos[id] > 0</code>, retroceder para tomar impulso y repetir.</li>
                <li><strong>Cambiar cara:</strong> Al terminar todos los pedidos, invertir <code>caraA_Activa</code> (ahora el robot mira hacia afuera del carril).</li>
                <li><strong>Salir del carril:</strong> Navegar hasta que el RFID detecte la pista central.</li>
                <li><strong>Giro de salida:</strong> Girar 90° para volver a alinearse con la pista principal.</li>
              </ol>
            </div>
            <div class="bg-blue-50 border border-blue-100 p-3 rounded-lg text-sm mt-2">
              <p class="text-blue-700"><strong>Bloqueo de RFID al salir:</strong> Al terminar la entrega, se resetea <code>tiempoBloqueoRFID</code> para ignorar el mismo tag RFID durante 1.5 segundos, evitando que el robot lo vuelva a leer inmediatamente al salir de la tolva.</p>
            </div>
          </div>`,
          code: `void secuenciaEntrega(int id) {
  mostrarPantalla("ENTREGA", "TOLVA " + String(id + 1));

  // FASE 1: Girar para entrar al carril de la tolva
  girar(90);

  // FASE 2 y 3: Bucle de entregas
  while (pedidos[id] > 0) {
    // Avanzar hasta tocar el fondo de la tolva
    while (digitalRead(S_A_IZQ) == 0)
      mover(30, 30);

    frenar();
    delay(1000); // Espera a que la tolva actúe
    pedidos[id]--;

    // Retroceder para tomar impulso en el siguiente disparo
    if (pedidos[id] > 0) {
      mover(-30, -30);
      delay(300);
      frenar();
    }
  }

  // FASE 4: Cambiar cara para salir mirando la pista
  caraA_Activa = !caraA_Activa;
  digitalWrite(LED_A, caraA_Activa);
  digitalWrite(LED_B, !caraA_Activa);

  // FASE 5: Salir del carril de la tolva
  mover(35, 35);
  delay(500);
  while (digitalRead(caraA_Activa ? S_A_CEN : S_B_CEN) == 0)
    navegacionBasica();

  // FASE 6: Girar de vuelta a la pista principal
  girar(90);

  // FASE 7: Ignorar el RFID por 1.5 segundos al salir
  tiempoBloqueoRFID = millis();
}`
        },
        {
          id: "agv-codigo-completo",
          title: "Código Completo del AGV",
          subtitle: "Paso Final",
          icon: "Code",
          explanation: `<div class="space-y-4">
            <p>A continuación se presenta el código completo y funcional del AGV Larense v1. Este es el código real que corre en el robot físico.</p>
            <div class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl">
              <h4 class="font-bold text-emerald-800 mb-2">Librerías necesarias</h4>
              <p class="text-sm text-emerald-700">Antes de compilar, instala estas librerías desde el Gestor de Librerías de Arduino IDE:</p>
              <ul class="list-disc ml-5 text-sm text-emerald-700 mt-2 space-y-1">
                <li><code>MFRC522</code> — por miguelbalboa</li>
                <li><code>Adafruit GFX Library</code></li>
                <li><code>Adafruit SSD1306</code></li>
              </ul>
            </div>
<div class="space-y-4">
            <p>El cerebro del AGV es un Arduino Mega, que controla los motores a través de un <strong>driver MX1616</strong>, capaz de manejar dos motores DC con inversión de giro. La estructura física permite una configuración de <strong>3 estaciones de carga</strong>, donde el robot recorre una pista cerrada detectando tags RFID en cada punto de entrega.</p>
            <div class="relative cursor-pointer border border-slate-200 rounded-xl overflow-hidden mt-4 shadow-sm hover:shadow-md transition-shadow group inline-block w-full">
              <img src="Imagenes/Diagrama AGV.jpg" alt="Diagrama de cableado del AGV" class="w-full group-hover:scale-[1.02] transition-transform duration-300" />
              <div class="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md text-white px-3 py-1.5 rounded-lg flex items-center gap-2 pointer-events-none shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                <span class="text-[10px] font-bold tracking-widest uppercase">Ampliar</span>
              </div>
            </div>
            <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl text-sm mt-4">
              <h4 class="font-bold text-slate-700 mb-2">Flujo de uso del sistema</h4>
              <ol class="list-decimal ml-5 space-y-2 text-slate-600">
                <li>Encender el robot. Aparece el menú en el OLED.</li>
                <li>Navegar con <strong>SEL</strong> hasta <strong>"MODO ESCANEO"</strong> y presionar <strong>OK</strong>.</li>
                <li>El robot recorre la pista y mapea todos los tags RFID.</li>
                <li>Volver al menú. Usar <strong>SEL + INC</strong> para ajustar los pedidos por tolva.</li>
                <li>Ir a <strong>"INICIAR MISION!"</strong> y presionar <strong>OK</strong>.</li>
                <li>El robot ejecuta la misión autónomamente hasta regresar al inicio.</li>
              </ol>
            </div>
          </div>`,
          code: `#include <SPI.h>
#include <Wire.h>
#include <MFRC522.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include <EEPROM.h> // LIBRERÍA AÑADIDA PARA GUARDAR EN MEMORIA

// ====================================================================
// 1. CONFIGURACIÓN DE PINES (MEGA - HARDWARE REAL)
// ====================================================================

#define ANCHO_PANTALLA 128
#define ALTO_PANTALLA 64
#define OLED_RESET -1
#define DIRECCION_PANTALLA 0x3C
Adafruit_SSD1306 pantalla(ANCHO_PANTALLA, ALTO_PANTALLA, &Wire, OLED_RESET);

// Lector RFID
#define RST_PIN  5
#define SS_PIN   53
MFRC522 mfrc522(SS_PIN, RST_PIN);

// Motores MX1616
const int IN1 = 7; // Derecho ADELANTE
const int IN2 = 6; // Derecho ATRÁS
const int IN3 = 3; // Izquierdo ADELANTE
const int IN4 = 2; // Izquierdo ATRÁS

// Sensores
const int S_A_IZQ = 38; const int S_A_CEN = 40; const int S_A_DER = 36;
const int S_B_DER = 34; const int S_B_CEN = 32; const int S_B_IZQ = 30;

// Botones e Interfaz
const int BTN_SEL = 22; const int BTN_INC = 24; const int BTN_OK = 26; const int BTN_CLR = 28;
const int LED_A = 44; const int LED_B = 45;

// ====================================================================
// 2. VARIABLES GLOBALES Y PARÁMETROS
// ====================================================================
int velBase = 45;
int velCorreccion = 30;
int velCorreccion2 = 10;
int velGiro = 45;

int pedidos[4] = {0, 0, 0, 0};
String uidInicio = "";
String uidPila[4] = {"", "", "", ""};
String uidRetorno = "";
bool caraA_Activa = true;
bool enMenu = true;

int memoriaLado = 0;
int menuSeleccion = 0;
unsigned long tiempoBloqueoRFID = 0;
String ultimoUID = "";

// ====================================================================
// 3. FUNCIONES DE MEMORIA EEPROM
// ====================================================================

void cargarAjustes() {
  byte firma;
  EEPROM.get(0, firma);
  if (firma == 0xAA) {
    EEPROM.get(1, velBase);
    EEPROM.get(3, velCorreccion);
    EEPROM.get(5, velCorreccion2);
  } else {
    EEPROM.put(0, (byte)0xAA);
    EEPROM.put(1, velBase);
    EEPROM.put(3, velCorreccion);
    EEPROM.put(5, velCorreccion2);
  }
}

void guardarAjustes() {
  EEPROM.put(1, velBase);
  EEPROM.put(3, velCorreccion);
  EEPROM.put(5, velCorreccion2);
}

// ====================================================================
// 4. FUNCIONES BÁSICAS Y UTILIDADES
// ====================================================================

void mostrarPantalla(String l1, String l2) {
  pantalla.clearDisplay();
  pantalla.setTextSize(1);
  pantalla.setTextColor(SSD1306_WHITE);
  pantalla.setCursor(0, 0); pantalla.println(l1);
  pantalla.setCursor(0, 30); pantalla.setTextSize(2); pantalla.println(l2);
  pantalla.display();
}

void mostrarProgresoEscaneo(String tags[], int n) {
  pantalla.clearDisplay();
  pantalla.setTextSize(1);
  pantalla.setTextColor(SSD1306_WHITE);
  pantalla.setCursor(0, 0);
  pantalla.println("=== MAPEANDO PISTA ===");
  for (int i = 0; i < n; i++) {
    if (i == 0) pantalla.print("INIC: ");
    else pantalla.print("TAG" + String(i) + ": ");
    pantalla.println(tags[i]);
  }
  pantalla.setCursor(110, 0);
  if((millis() / 500) % 2 == 0) pantalla.print("[*]");
  else pantalla.print("[ ]");
  pantalla.display();
}

String leerTag() {
  if (millis() - tiempoBloqueoRFID < 1500) return "";
  if (!mfrc522.PICC_IsNewCardPresent() || !mfrc522.PICC_ReadCardSerial()) return "";
  String uid = "";
  for (byte i = 0; i < mfrc522.uid.size; i++) {
    if(mfrc522.uid.uidByte[i] < 0x10) uid += "0";
    uid += String(mfrc522.uid.uidByte[i], HEX);
  }
  uid.toUpperCase();
  mfrc522.PICC_HaltA();
  return uid;
}

void mover(int vI, int vD) {
  int realI = caraA_Activa ? vI : -vD;
  int realD = caraA_Activa ? vD : -vI;
  if (realI >= 0) { analogWrite(IN3, constrain(realI, 0, 80)); analogWrite(IN4, 0); }
  else { analogWrite(IN3, 0); analogWrite(IN4, constrain(abs(realI), 0, 80)); }
  if (realD >= 0) { analogWrite(IN1, constrain(realD, 0, 80)); analogWrite(IN2, 0); }
  else { analogWrite(IN1, 0); analogWrite(IN2, constrain(abs(realD), 0, 80)); }
}

void frenar() {
  analogWrite(IN1, 255); analogWrite(IN2, 255); analogWrite(IN3, 255); analogWrite(IN4, 255);
  delay(100);
  analogWrite(IN1,0); analogWrite(IN2,0);
  analogWrite(IN3,0); analogWrite(IN4,0);
}

// Ver explicaciones de navegacionBasica(),
// girar() y secuenciaEntrega() en los pasos anteriores.

// ====================================================================
// 5. LÓGICA DE NAVEGACIÓN Y COREOGRAFÍA
// ====================================================================

void navegacionBasica() {
  int izq, cen, der;
  if (caraA_Activa) { izq = digitalRead(S_A_IZQ); cen = digitalRead(S_A_CEN); der = digitalRead(S_A_DER); }
  else { izq = digitalRead(S_B_IZQ); cen = digitalRead(S_B_CEN); der = digitalRead(S_B_DER); }
  if (cen == 1) { mover(velBase, velBase); memoriaLado = 0; }
  else if (izq == 1) { mover(velCorreccion, velBase); memoriaLado = 1; }
  else if (der == 1) { mover(velBase, velCorreccion); memoriaLado = 2; }
  else {
    if (memoriaLado == 1) mover(velCorreccion2, velBase);
    else if (memoriaLado == 2) mover(velBase, velCorreccion2);
    else mover(velBase, velBase);
  }
}

void girar(int grados) {
  frenar();
  if (grados == 180) {
    mover(velGiro, -velGiro); delay(800);
    while (digitalRead(S_A_CEN) == 0) mover(velGiro, -velGiro);
  } else {
    mover(velGiro, -velGiro); delay(400);
    while (digitalRead(caraA_Activa ? S_A_CEN : S_B_CEN) == 0) mover(velGiro, -velGiro);
  }
  frenar();
}

void secuenciaEntrega(int id) {
  mostrarPantalla("ENTREGA", "TOLVA " + String(id + 1));
  girar(90);
  while (pedidos[id] > 0) {
    while (digitalRead(S_A_IZQ) == 0) mover(30, 30);
    frenar(); delay(1000);
    pedidos[id]--;
    if (pedidos[id] > 0) { mover(-30, -30); delay(300); frenar(); }
  }
  caraA_Activa = !caraA_Activa;
  digitalWrite(LED_A, caraA_Activa); digitalWrite(LED_B, !caraA_Activa);
  mover(35, 35); delay(500);
  while (digitalRead(caraA_Activa ? S_A_CEN : S_B_CEN) == 0) navegacionBasica();
  girar(90);
  tiempoBloqueoRFID = millis();
}

void iniciarEscaneo() {
  String tags[10];
  int n = 0;
  mostrarPantalla("MODO ESCANEO", "Iniciando pista...");
  delay(2000);
  caraA_Activa = true;
  ultimoUID = "";
  unsigned long tiempoUltimaPantalla = 0;
  while (true) {
    if (digitalRead(BTN_CLR) == LOW) {
      frenar(); mostrarPantalla("ATENCION", "CANCELADO!"); delay(1500); break;
    }
    navegacionBasica();
    if (millis() - tiempoUltimaPantalla > 300) {
      mostrarProgresoEscaneo(tags, n); tiempoUltimaPantalla = millis();
    }
    String tag = leerTag();
    if (tag != "" && tag != ultimoUID) {
      ultimoUID = tag;
      frenar();
      bool repetido = false;
      for (int i = 0; i < n; i++) if (tags[i] == tag) repetido = true;
      if (!repetido) {
        tags[n++] = tag;
        mostrarProgresoEscaneo(tags, n);
        delay(1000);
      } else if (tag == tags[0] && n > 1) {
        mostrarPantalla("MAPA COMPLETO", "Guardando...");
        uidInicio = tags[0];
        uidRetorno = tags[n - 1];
        for (int i = 0; i < 4; i++) {
          if (i < (n - 2)) uidPila[i] = tags[i + 1];
          else uidPila[i] = "";
        }
        delay(2000); break;
      }
    }
  }
  enMenu = true;
}

// ====================================================================
// 6. INTERFAZ DE USUARIO (MENÚ)
// ====================================================================

void ejecutarMenu() {
  if (digitalRead(BTN_SEL) == LOW) { menuSeleccion++; if(menuSeleccion > 8) menuSeleccion = 0; delay(200); }
  if (digitalRead(BTN_INC) == LOW) {
    if(menuSeleccion < 4) { pedidos[menuSeleccion] = (pedidos[menuSeleccion] + 1) % 6; }
    else if(menuSeleccion == 5) { velBase += 5; guardarAjustes(); }
    else if(menuSeleccion == 6) { velCorreccion += 5; guardarAjustes(); }
    else if(menuSeleccion == 7) { velCorreccion2 += 5; guardarAjustes(); }
    delay(200);
  }
  if (digitalRead(BTN_CLR) == LOW) {
    if(menuSeleccion < 4) { for (int i = 0; i < 4; i++) pedidos[i] = 0; mostrarPantalla("LISTA", "BORRADA"); delay(500); }
    else if(menuSeleccion == 5) { velBase -= 5; if(velBase < 0) velBase = 0; guardarAjustes(); }
    else if(menuSeleccion == 6) { velCorreccion -= 5; guardarAjustes(); }
    else if(menuSeleccion == 7) { velCorreccion2 -= 5; guardarAjustes(); }
    delay(200);
  }
  if (digitalRead(BTN_OK) == LOW) {
    if (menuSeleccion == 4) iniciarEscaneo();
    else if (menuSeleccion == 8 || menuSeleccion < 4) {
      if (uidInicio != "") { enMenu = false; mostrarPantalla("AGV", "GO!"); delay(1000); }
      else { mostrarPantalla("ERROR", "ESCANEAR!"); delay(1000); }
    }
    return;
  }
  pantalla.clearDisplay();
  pantalla.setTextSize(1);
  pantalla.setTextColor(SSD1306_WHITE);
  pantalla.setCursor(0, 0);
  if (menuSeleccion < 5) {
    pantalla.println("== PEDIDOS (PAG 1) ==");
    for (int i = 0; i < 4; i++) {
      if (i == menuSeleccion) pantalla.print("> "); else pantalla.print("  ");
      pantalla.print("TOLVA "); pantalla.print(i + 1); pantalla.print(": "); pantalla.println(pedidos[i]);
    }
    if (menuSeleccion == 4) pantalla.println("> MODO ESCANEO"); else pantalla.println("  MODO ESCANEO");
  } else {
    pantalla.println("== AJUSTES (PAG 2) ==");
    if (menuSeleccion == 5) pantalla.print("> "); else pantalla.print("  ");
    pantalla.print("VelBase: "); pantalla.println(velBase);
    if (menuSeleccion == 6) pantalla.print("> "); else pantalla.print("  ");
    pantalla.print("V.Corr1: "); pantalla.println(velCorreccion);
    if (menuSeleccion == 7) pantalla.print("> "); else pantalla.print("  ");
    pantalla.print("V.Corr2: "); pantalla.println(velCorreccion2);
    pantalla.println("");
    if (menuSeleccion == 8) pantalla.println("> INICIAR MISION!"); else pantalla.println("  INICIAR MISION!");
  }
  pantalla.display();
}

// ====================================================================
// 7. SETUP Y LOOP PRINCIPAL
// ====================================================================

void setup() {
  pinMode(IN1, OUTPUT); pinMode(IN2, OUTPUT); pinMode(IN3, OUTPUT); pinMode(IN4, OUTPUT);
  pinMode(S_A_IZQ, INPUT); pinMode(S_A_CEN, INPUT); pinMode(S_A_DER, INPUT);
  pinMode(S_B_IZQ, INPUT); pinMode(S_B_CEN, INPUT); pinMode(S_B_DER, INPUT);
  pinMode(BTN_SEL, INPUT_PULLUP); pinMode(BTN_INC, INPUT_PULLUP);
  pinMode(BTN_OK, INPUT_PULLUP); pinMode(BTN_CLR, INPUT_PULLUP);
  pinMode(LED_A, OUTPUT); pinMode(LED_B, OUTPUT);
  cargarAjustes();
  SPI.begin();
  mfrc522.PCD_Init();
  mfrc522.PCD_SetAntennaGain(mfrc522.RxGain_max);
  Wire.begin();
  if(!pantalla.begin(SSD1306_SWITCHCAPVCC, DIRECCION_PANTALLA)) { for(;;); }
  digitalWrite(LED_A, HIGH);
  mostrarPantalla("SVP STEAM", "Larense listo");
  delay(2000);
}

void loop() {
  if (enMenu) { ejecutarMenu(); return; }
  navegacionBasica();
  String tag = leerTag();
  if (tag != "") {
    if (tag == uidInicio) {
      frenar(); mostrarPantalla("FIN", "MISION OK");
      for(int i=0; i<4; i++) pedidos[i]=0;
      delay(3000); enMenu = true;
    }
    else if (tag == uidRetorno && !caraA_Activa) { girar(180); caraA_Activa = true; }
    else {
      for (int i = 0; i < 4; i++) {
        if (tag == uidPila[i] && pedidos[i] > 0) secuenciaEntrega(i);
      }
    }
  }
}`
        }
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = content;
} else {
  window.appContent = content;
}
