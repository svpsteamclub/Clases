sl-desafio-2026",
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
    analogWrite(5, velocidadMax);
    analogWrite(6, velocidadMin);
    analogWrite(3, velocidadMax);
    analogWrite(9, velocidadMin);
++     ultimaDir = 5;
  }
  else if (analogRead(A6) > umbral) { 
    analogWrite(5, velocidadMedia);
    analogWrite(6, velocidadMin);
    analogWrite(3, velocidadMax);
    analogWrite(9, velocidadMin);
++     ultimaDir = 6;
  }
  else if (analogRead(A4) > umbral) { 
    analogWrite(5, velocidadMax);
    analogWrite(6, velocidadMin);
    analogWrite(3, velocidadMedia);
    analogWrite(9, velocidadMin);
++     ultimaDir = 4;
  }
  else if (analogRead(A7) > umbral) {
    analogWrite(5, velocidadMin);
    analogWrite(6, velocidadMin);
    analogWrite(3, velocidadMax);
    analogWrite(9, velocidadMin);
++     ultimaDir = 7;
  }
  else if (analogRead(A3) > umbral) {
    analogWrite(5, velocidadMax);
    analogWrite(6, velocidadMin);
    analogWrite(3, velocidadMin);
    analogWrite(9, velocidadMin);
++     ultimaDir = 3;
  }
++   // 6. PÉRDIDA DE LÍNEA (Todos los sensores en blanco)
++   else if (analogRead(A5) <= umbral && analogRead(A6) <= umbral && analogRead(A4) <= umbral && analogRead(A7) <= umbral && analogRead(A3) <= umbral) {
++     if (ultimaDir == 5) {
++       analogWrite(5, velocidadMax);
++       analogWrite(6, velocidadMin);
++       analogWrite(3, velocidadMax);
++       analogWrite(9, velocidadMin);
++     }
++     else if (ultimaDir == 6) {
++       analogWrite(5, velocidadMedia);
++       analogWrite(6, velocidadMin);
++       analogWrite(3, velocidadMax);
++       analogWrite(9, velocidadMin);
++     }
++     else if (ultimaDir == 4) {
++       analogWrite(5, velocidadMax);
++       analogWrite(6, velocidadMin);
++       analogWrite(3, velocidadMedia);
++       analogWrite(9, velocidadMin);
++     }
++     else if (ultimaDir == 7) {
++       analogWrite(5, velocidadMin);
++       analogWrite(6, velocidadMin);
++       analogWrite(3, velocidadMax);
++       analogWrite(9, velocidadMin);
++     }
++     else if (ultimaDir == 3) {
++       analogWrite(5, velocidadMax);
++       analogWrite(6, velocidadMin);
++       analogWrite(3, velocidadMin);
++       analogWrite(9, velocidadMin);
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
    analogWrite(5, velocidadMax);
    analogWrite(6, velocidadMin);
    analogWrite(3, velocidadMax);
    analogWrite(9, velocidadMin);
    ultimaDir = 5;
  }
  else if (analogRead(A6) > umbral) { 
    analogWrite(5, velocidadMedia);
    analogWrite(6, velocidadMin);
    analogWrite(3, velocidadMax);
    analogWrite(9, velocidadMin);
    ultimaDir = 6;
  }
  else if (analogRead(A4) > umbral) { 
    analogWrite(5, velocidadMax);
    analogWrite(6, velocidadMin);
    analogWrite(3, velocidadMedia);
    analogWrite(9, velocidadMin);
    ultimaDir = 4;
  }
  else if (analogRead(A7) > umbral) {
    analogWrite(5, velocidadMin);
    analogWrite(6, velocidadMin);
    analogWrite(3, velocidadMax);
    analogWrite(9, velocidadMin);
    ultimaDir = 7;
  }
  else if (analogRead(A3) > umbral) {
    analogWrite(5, velocidadMax);
    analogWrite(6, velocidadMin);
    analogWrite(3, velocidadMin);
    analogWrite(9, velocidadMin);
    ultimaDir = 3;
  }
  else if (analogRead(A5) <= umbral && analogRead(A6) <= umbral && analogRead(A4) <= umbral && analogRead(A7) <= umbral && analogRead(A3) <= umbral) {
    if (ultimaDir == 5) {
      analogWrite(5, velocidadMax);
      analogWrite(6, velocidadMin);
      analogWrite(3, velocidadMax);
      analogWrite(9, velocidadMin);
    }
    else if (ultimaDir == 6) {
      analogWrite(5, velocidadMedia);
      analogWrite(6, velocidadMin);
      analogWrite(3, velocidadMax);
      analogWrite(9, velocidadMin);
    }
    else if (ultimaDir == 4) {
      analogWrite(5, velocidadMax);
      analogWrite(6, velocidadMin);
      analogWrite(3, velocidadMedia);
      analogWrite(9, velocidadMin);
    }
    else if (ultimaDir == 7) {
      analogWrite(5, velocidadMin);
      analogWrite(6, velocidadMin);
      analogWrite(3, velocidadMax);
      analogWrite(9, velocidadMin);
    }
    else if (ultimaDir == 3) {
      analogWrite(5, velocidadMax);
      analogWrite(6, velocidadMin);
      analogWrite(3, velocidadMin);
      analogWrite(9, velocidadMin);
    }
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
++     analogWrite(5, 0);
++     analogWrite(6, 0);
++     analogWrite(3, 0);
++     analogWrite(9, 0);
++   }
++   else {
    if (analogRead(A5) > umbral) { 
      analogWrite(5, velocidadMax);
      analogWrite(6, velocidadMin);
      analogWrite(3, velocidadMax);
      analogWrite(9, velocidadMin);
      ultimaDir = 5;
    }
    else if (analogRead(A6) > umbral) { 
      analogWrite(5, velocidadMedia);
      analogWrite(6, velocidadMin);
      analogWrite(3, velocidadMax);
      analogWrite(9, velocidadMin);
      ultimaDir = 6;
    }
    else if (analogRead(A4) > umbral) { 
      analogWrite(5, velocidadMax);
      analogWrite(6, velocidadMin);
      analogWrite(3, velocidadMedia);
      analogWrite(9, velocidadMin);
      ultimaDir = 4;
    }
    else if (analogRead(A7) > umbral) {
      analogWrite(5, velocidadMin);
      analogWrite(6, velocidadMin);
      analogWrite(3, velocidadMax);
      analogWrite(9, velocidadMin);
      ultimaDir = 7;
    }
    else if (analogRead(A3) > umbral) {
      analogWrite(5, velocidadMax);
      analogWrite(6, velocidadMin);
      analogWrite(3, velocidadMin);
      analogWrite(9, velocidadMin);
      ultimaDir = 3;
    }
    else if (analogRead(A5) <= umbral && analogRead(A6) <= umbral && analogRead(A4) <= umbral && analogRead(A7) <= umbral && analogRead(A3) <= umbral) {
      if (ultimaDir == 5) {
        analogWrite(5, velocidadMax);
        analogWrite(6, velocidadMin);
        analogWrite(3, velocidadMax);
        analogWrite(9, velocidadMin);
      }
      else if (ultimaDir == 6) {
        analogWrite(5, velocidadMedia);
        analogWrite(6, velocidadMin);
        analogWrite(3, velocidadMax);
        analogWrite(9, velocidadMin);
      }
      else if (ultimaDir == 4) {
        analogWrite(5, velocidadMax);
        analogWrite(6, velocidadMin);
        analogWrite(3, velocidadMedia);
        analogWrite(9, velocidadMin);
      }
      else if (ultimaDir == 7) {
        analogWrite(5, velocidadMin);
        analogWrite(6, velocidadMin);
        analogWrite(3, velocidadMax);
        analogWrite(9, velocidadMin);
      }
      else if (ultimaDir == 3) {
        analogWrite(5, velocidadMax);
        analogWrite(6, velocidadMin);
        analogWrite(3, velocidadMin);
        analogWrite(9, velocidadMin);
      }
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
    analogWrite(5, 0);
    analogWrite(6, 0);
    analogWrite(3, 0);
    analogWrite(9, 0);
  }
++   else if (tiempoActual > 10000 && tiempoActual < 10300) {
++     // Giro ciego a la izquierda por 300ms
++     analogWrite(5, velocidadMin);
++     analogWrite(6, velocidadMin);
++     analogWrite(3, velocidadMax);
++     analogWrite(9, velocidadMin);
++   }
  else {
    if (analogRead(A5) > umbral) { 
      analogWrite(5, velocidadMax);
      analogWrite(6, velocidadMin);
      analogWrite(3, velocidadMax);
      analogWrite(9, velocidadMin);
      ultimaDir = 5;
    }
    else if (analogRead(A6) > umbral) { 
      analogWrite(5, velocidadMedia);
      analogWrite(6, velocidadMin);
      analogWrite(3, velocidadMax);
      analogWrite(9, velocidadMin);
      ultimaDir = 6;
    }
    else if (analogRead(A4) > umbral) { 
      analogWrite(5, velocidadMax);
      analogWrite(6, velocidadMin);
      analogWrite(3, velocidadMedia);
      analogWrite(9, velocidadMin);
      ultimaDir = 4;
    }
    else if (analogRead(A7) > umbral) {
      analogWrite(5, velocidadMin);
      analogWrite(6, velocidadMin);
      analogWrite(3, velocidadMax);
      analogWrite(9, velocidadMin);
      ultimaDir = 7;
    }
    else if (analogRead(A3) > umbral) {
      analogWrite(5, velocidadMax);
      analogWrite(6, velocidadMin);
      analogWrite(3, velocidadMin);
      analogWrite(9, velocidadMin);
      ultimaDir = 3;
    }
    else if (analogRead(A5) <= umbral && analogRead(A6) <= umbral && analogRead(A4) <= umbral && analogRead(A7) <= umbral && analogRead(A3) <= umbral) {
      if (ultimaDir == 5) {
        analogWrite(5, velocidadMax);
        analogWrite(6, velocidadMin);
        analogWrite(3, velocidadMax);
        analogWrite(9, velocidadMin);
      }
      else if (ultimaDir == 6) {
        analogWrite(5, velocidadMedia);
        analogWrite(6, velocidadMin);
        analogWrite(3, velocidadMax);
        analogWrite(9, velocidadMin);
      }
      else if (ultimaDir == 4) {
        analogWrite(5, velocidadMax);
        analogWrite(6, velocidadMin);
        analogWrite(3, velocidadMedia);
        analogWrite(9, velocidadMin);
      }
      else if (ultimaDir == 7) {
        analogWrite(5, velocidadMin);
        analogWrite(6, velocidadMin);
        analogWrite(3, velocidadMax);
        analogWrite(9, velocidadMin);
      }
      else if (ultimaDir == 3) {
        analogWrite(5, velocidadMax);
        analogWrite(6, velocidadMin);
        analogWrite(3, velocidadMin);
        analogWrite(9, velocidadMin);
      }
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
    if (analogRead(A5) > umbral) {
      avanzar();
      ultimaDir = 5;
    }
    else if (analogRead(A6) > umbral) {
      curvaSuaveIzq();
      ultimaDir = 6;
    }
    else if (analogRead(A4) > umbral) {
      curvaSuaveDer();
      ultimaDir = 4;
    }
    else if (analogRead(A7) > umbral) {
      girarRapidoIzq();
      ultimaDir = 7;
    }
    else if (analogRead(A3) > umbral) {
      girarRapidoDer();
      ultimaDir = 3;
    }
    else if (analogRead(A5) <= umbral && analogRead(A6) <= umbral && analogRead(A4) <= umbral && analogRead(A7) <= umbral && analogRead(A3) <= umbral) {
if (ultimaDir == 5) {
        avanzar();
      }
else if (ultimaDir == 6) {
        curvaSuaveIzq();
      }
else if (ultimaDir == 4) {
        curvaSuaveDer();
      }
else if (ultimaDir == 7) {
        girarRapidoIzq();
      }
else if (ultimaDir == 3) {
        girarRapidoDer();
      }
    }
  }
}

// === FUNCIONES DE CONTROL DE MOTORES ===

void detenerse() {
  analogWrite(5, velocidadMin);
  analogWrite(6, velocidadMin);
  analogWrite(3, velocidadMin);
  analogWrite(9, velocidadMin);
}

void avanzar() {
  analogWrite(5, velocidadMax);
  analogWrite(6, velocidadMin);
  analogWrite(3, velocidadMax);
  analogWrite(9, velocidadMin);
}

void curvaSuaveIzq() {
  analogWrite(5, velocidadMedia);
  analogWrite(6, velocidadMin);
  analogWrite(3, velocidadMax);
  analogWrite(9, velocidadMin);
}

void curvaSuaveDer() {
  analogWrite(5, velocidadMax);
  analogWrite(6, velocidadMin);
  analogWrite(3, velocidadMedia);
  analogWrite(9, velocidadMin);
}

void girarRapidoIzq() {
  analogWrite(5, velocidadMin);
  analogWrite(6, velocidadMin);
  analogWrite(3, velocidadMax);
  analogWrite(9, velocidadMin);
}

void girarRapidoDer() {
  analogWrite(5, velocidadMax);
  analogWrite(6, velocidadMin);
  analogWrite(3, velocidadMin);
  analogWrite(9, velocidadMin);
}`
        }
      ]
    },
    {
      