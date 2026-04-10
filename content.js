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
          title: "Configuración de Entradas y Salidas",
          subtitle: "Paso 1",
          icon: "Settings",
          explanation: `<div class="space-y-4">
            <p>Todo programa de Arduino comienza definiendo los pines en la función <code>setup</code>.</p>
            <div class="bg-blue-50/50 p-4 rounded-lg border border-blue-100 text-sm mt-4">
              <div class="flex items-center gap-2 text-blue-800 font-bold mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                ¡Pruébalo en el Simulador!
              </div>
              <p class="text-blue-700 leading-relaxed">Ahora que cargaste tu robot en el simulador, ve a la pestaña <strong>"Editor de código"</strong>. Puedes escribir o pegar el código aquí para ver cómo funciona el robot en la pista virtual.</p>
            </div>
          </div>`,
          code: `void setup() {
++   pinMode(2, INPUT); // Sensor Izquierdo
++   pinMode(3, INPUT); // Sensor Central
++   pinMode(4, INPUT); // Sensor Derecho
++   pinMode(5, OUTPUT); // Motor Izquierdo
++   pinMode(6, OUTPUT);
++   pinMode(9, OUTPUT); // Motor Derecho
++   pinMode(10, OUTPUT);
}

void loop() {
  // El bucle principal inicia vacío
}`
        },
        {
          id: "paso-2-avanzar",
          title: "Prueba de Motores: Avanzar",
          subtitle: "Paso 2",
          icon: "Move",
          explanation: `<div class="space-y-4">
            <p class="font-medium text-slate-800">Probamos que ambos motores funcionen correctamente hacia adelante.</p>
            <p class="text-[15px] text-slate-600 leading-relaxed">Antes de usar los sensores, debemos asegurar que los motores giren en el sentido correcto. Con la función <code>analogWrite</code> enviamos potencia a los motores. El valor 0 significa detenido y 255 es la velocidad máxima.</p>
            <p class="text-[15px] text-slate-600 leading-relaxed">Carga este código en tu robot o en el simulador y verifica que ambos motores avancen a la misma velocidad y en línea recta.</p>
          </div>`,
          code: `void setup() {
  pinMode(2, INPUT);
  pinMode(3, INPUT);
  pinMode(4, INPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(9, OUTPUT);
  pinMode(10, OUTPUT);
}

void loop() {
++   // Ambos motores giran hacia adelante (Pin 5 y Pin 9 activos)
++   analogWrite(5, 180);
++   analogWrite(6, 0);
++   analogWrite(9, 180);
++   analogWrite(10, 0);
}`
        },
        {
          id: "paso-3-izquierda",
          title: "Prueba de Motores: Girar Izquierda",
          subtitle: "Paso 3",
          icon: "RefreshCw",
          explanation: `<div class="space-y-4">
            <p class="font-medium text-slate-800">Programamos el robot para que gire a la izquierda moviendo solo el motor derecho.</p>
            <p class="text-[15px] text-slate-600 leading-relaxed">Para girar a la izquierda, detenemos el motor izquierdo y activamos el motor derecho. Como el motor derecho sigue empujando, el robot rotará hacia la izquierda sobre su propio eje.</p>
            <p class="text-[15px] text-slate-600 leading-relaxed">Verifica en el simulador que el robot gire hacia la izquierda. Si gira hacia el otro lado, revisa que los números de los pines en el código coincidan con tus conexiones físicas.</p>
          </div>`,
          code: `void setup() {
  pinMode(2, INPUT);
  pinMode(3, INPUT);
  pinMode(4, INPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(9, OUTPUT);
  pinMode(10, OUTPUT);
}

void loop() {
++   // Motor izquierdo se detiene, motor derecho avanza
++   analogWrite(5, 0);
++   analogWrite(6, 0);
++   analogWrite(9, 180);
++   analogWrite(10, 0);
}`
        },
        {
          id: "paso-4-derecha",
          title: "Prueba de Motores: Girar Derecha",
          subtitle: "Paso 4",
          icon: "RefreshCw",
          explanation: `<div class="space-y-4">
            <p class="font-medium text-slate-800">Programamos el robot para que gire a la derecha moviendo solo el motor izquierdo.</p>
            <p class="text-[15px] text-slate-600 leading-relaxed">De forma opuesta al paso anterior, para girar a la derecha detenemos el motor derecho y activamos el motor izquierdo. Es fundamental verificar estos movimientos antes de pasar a la lógica de los sensores.</p>
            <p class="text-[15px] text-slate-600 leading-relaxed">Una vez que hayas verificado que el robot puede avanzar y girar hacia ambos lados, estarás listo para programar el control automático con los sensores.</p>
          </div>`,
          code: `void setup() {
  pinMode(2, INPUT);
  pinMode(3, INPUT);
  pinMode(4, INPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(9, OUTPUT);
  pinMode(10, OUTPUT);
}

void loop() {
++   // Motor izquierdo avanza, motor derecho se detiene
++   analogWrite(5, 180);
++   analogWrite(6, 0);
++   analogWrite(9, 0);
++   analogWrite(10, 0);
}`
        },
        {
          id: "paso-5-logica",
          title: "Lógica de Movimiento por Sensores",
          subtitle: "Paso 5",
          icon: "Move",
          explanation: `<div class="space-y-4">
            <p>Es el momento de conectar los sensores con los motores. Usaremos estas tres reglas básicas:</p>
            <ul class="list-disc ml-5 space-y-2 text-slate-700">
              <li>Si el <strong>sensor central</strong> se activa (detecta la línea), ambos motores avanzan.</li>
              <li>Si el <strong>sensor derecho</strong> se activa (detecta la línea), el motor derecho se detiene para corregir el rumbo.</li>
              <li>Si el <strong>sensor izquierdo</strong> se activa (detecta la línea), el motor izquierdo se detiene para corregir el rumbo.</li>
            </ul>
            <div class="bg-amber-50 border border-amber-200 p-4 rounded-xl mt-4">
              <h4 class="font-bold text-amber-800 mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                Memoria de Estado
              </h4>
              <p class="text-sm text-amber-700 leading-relaxed">
                Como no escribimos un código para cuando los tres sensores están sobre fondo blanco, el Arduino <strong>conservará el último estado ejecutado</strong>. Esto funciona como una "memoria": si el robot se sale de la línea en una curva, seguirá girando en la misma dirección hasta encontrar la línea nuevamente.
              </p>
            </div>
          </div>`,
          code: `void setup() {
  pinMode(2, INPUT);
  pinMode(3, INPUT);
  pinMode(4, INPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(9, OUTPUT);
  pinMode(10, OUTPUT);
}

void loop() {
++   if (digitalRead(3) == HIGH) { // Recto
++     analogWrite(5, 180);
++     analogWrite(6, 0);
++     analogWrite(9, 180);
++     analogWrite(10, 0);
++   }
++   else if (digitalRead(2) == HIGH) { // Toca izquierda
++     analogWrite(5, 0);
++     analogWrite(6, 0);
++     analogWrite(9, 180);
++     analogWrite(10, 0);
++   }
++   else if (digitalRead(4) == HIGH) { // Toca derecha
++     analogWrite(5, 180);
++     analogWrite(6, 0);
++     analogWrite(9, 0);
++     analogWrite(10, 0);
++   }
}`
        },
        {
          id: "paso-3-timer",
          title: "Incorporación del Temporizador",
          subtitle: "Paso 6",
          icon: "Clock",
          explanation: `<div class="space-y-4">
            <p class="font-medium text-slate-800">Usamos una variable para medir el tiempo transcurrido desde que se encendió el robot.</p>
            <p class="text-[15px] text-slate-600 leading-relaxed">En las competencias, a veces necesitamos que el robot realice acciones en un momento exacto (como detenerse o girar después de unos segundos). El Arduino tiene un reloj interno que cuenta los milisegundos transcurridos, y podemos consultar este tiempo con la función <code>millis()</code>.</p>
            <p class="text-[15px] text-slate-600 leading-relaxed">Al guardar este valor en la variable <code>tiempoActual</code>, el robot sabe cuánto tiempo lleva corriendo. Esto nos permitirá programar eventos especiales sin dejar de leer los sensores.</p>
          </div>`,
          code: `void setup() {
  pinMode(2, INPUT);
  pinMode(3, INPUT);
  pinMode(4, INPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(9, OUTPUT);
  pinMode(10, OUTPUT);
}

void loop() {
++   unsigned long tiempoActual = millis(); // Inicia el cronómetro

  if (digitalRead(3) == HIGH) { 
    analogWrite(5, 180);
    analogWrite(6, 0);
    analogWrite(9, 180);
    analogWrite(10, 0);
  }
  else if (digitalRead(2) == HIGH) { 
    analogWrite(5, 0);
    analogWrite(6, 0);
    analogWrite(9, 180);
    analogWrite(10, 0);
  }
  else if (digitalRead(4) == HIGH) { 
    analogWrite(5, 180);
    analogWrite(6, 0);
    analogWrite(9, 0);
    analogWrite(10, 0);
  }
}`
        },
        {
          id: "paso-4-pausa",
          title: "El Primer Evento Especial (Pausa)",
          subtitle: "Paso 7",
          icon: "Timer",
          explanation: `<div class="space-y-4">
            <p class="font-medium text-slate-800">Programamos el robot para que se detenga por completo entre los 5 y 7 segundos de la carrera.</p>
            <p class="text-[15px] text-slate-600 leading-relaxed">Algunos desafíos requieren que el robot haga una pausa obligatoria. Al usar una condición de tiempo (<code>if</code>), podemos ordenar al robot que ignore los sensores y se detenga cuando el cronómetro esté en una ventana específica.</p>
            <p class="text-[15px] text-slate-600 leading-relaxed">En este código, si <code>tiempoActual</code> está entre 5000 y 7000 milisegundos (2 segundos), los motores se apagan. Cuando pase ese tiempo, el robot volverá automáticamente a seguir la línea.</p>
          </div>`,
          code: `void setup() {
  pinMode(2, INPUT);
  pinMode(3, INPUT);
  pinMode(4, INPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(9, OUTPUT);
  pinMode(10, OUTPUT);
}

void loop() {
  unsigned long tiempoActual = millis();

++   // Detenerse por 2 segundos a los 5 segundos de carrera
++   if (tiempoActual > 5000 && tiempoActual < 7000) {
++     analogWrite(5, 0);
++     analogWrite(6, 0);
++     analogWrite(9, 0);
++     analogWrite(10, 0);
++   } 
++   else {
    if (digitalRead(3) == HIGH) { 
      analogWrite(5, 180);
      analogWrite(6, 0);
      analogWrite(9, 180);
      analogWrite(10, 0);
    }
    else if (digitalRead(2) == HIGH) { 
      analogWrite(5, 0);
      analogWrite(6, 0);
      analogWrite(9, 180);
      analogWrite(10, 0);
    }
    else if (digitalRead(4) == HIGH) { 
      analogWrite(5, 180);
      analogWrite(6, 0);
      analogWrite(9, 0);
      analogWrite(10, 0);
    }
++   }
}`
        },
        {
          id: "paso-5-giro",
          title: "Código Final con Giro Ciego",
          subtitle: "Paso 8",
          icon: "RotateCcw",
          explanation: `<div class="space-y-4">
            <p class="font-medium text-slate-800">Agregamos un giro automático (giro ciego) a los 10 segundos para realizar una maniobra especial.</p>
            <p class="text-[15px] text-slate-600 leading-relaxed">Un "giro ciego" es cuando el robot gira por un tiempo determinado sin usar los sensores. Esto es útil para superar partes de la pista donde la línea desaparece o para tomar atajos programados.</p>
            <p class="text-[15px] text-slate-600 leading-relaxed">En este ejemplo, a los 10 segundos el robot girará a la izquierda durante 300 milisegundos. Después de ese tiempo, la lógica de los sensores se activará de nuevo para que el robot encuentre la línea y continúe el recorrido.</p>
          </div>`,
          code: `void setup() {
  pinMode(2, INPUT);
  pinMode(3, INPUT);
  pinMode(4, INPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(9, OUTPUT);
  pinMode(10, OUTPUT);
}

void loop() {
  unsigned long tiempoActual = millis();

  if (tiempoActual > 5000 && tiempoActual < 7000) {
    analogWrite(5, 0);
    analogWrite(6, 0);
    analogWrite(9, 0);
    analogWrite(10, 0);
  } 
++   else if (tiempoActual > 10000 && tiempoActual < 10300) {
++     // Giro ciego a la izquierda por 300 milisegundos
++     analogWrite(5, 0);
++     analogWrite(6, 0);
++     analogWrite(9, 180);
++     analogWrite(10, 0);
++   }
  else {
    if (digitalRead(3) == HIGH) { 
      analogWrite(5, 180);
      analogWrite(6, 0);
      analogWrite(9, 180);
      analogWrite(10, 0);
    }
    else if (digitalRead(2) == HIGH) { 
      analogWrite(5, 0);
      analogWrite(6, 0);
      analogWrite(9, 180);
      analogWrite(10, 0);
    }
    else if (digitalRead(4) == HIGH) { 
      analogWrite(5, 180);
      analogWrite(6, 0);
      analogWrite(9, 0);
      analogWrite(10, 0);
    }
  }
}`
        },
        {
          id: "paso-6-funciones",
          title: "Organización Profesional con Funciones",
          subtitle: "Paso 9",
          icon: "Code",
          explanation: `<div class="space-y-4">
            <p class="font-medium text-slate-800">Organizamos el código usando funciones para que sea mucho más ordenado y fácil de leer.</p>
            <p class="text-[15px] text-slate-600 leading-relaxed">Cuando el código se vuelve largo, es difícil encontrar errores. Usar funciones nos permite agrupar instrucciones de movimiento bajo un nombre simple como <code>avanzar()</code> o <code>detenerse()</code>.</p>
            <p class="text-[15px] text-slate-600 leading-relaxed">De esta manera, el bucle principal (<code>loop</code>) solo contiene los nombres de las acciones, mientras que los detalles técnicos de cada movimiento se escriben aparte. Esto hace que sea más fácil de entender y de corregir en plena competencia.</p>
          </div>`,
          code: `void setup() {
  pinMode(2, INPUT);
  pinMode(3, INPUT);
  pinMode(4, INPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(9, OUTPUT);
  pinMode(10, OUTPUT);
}

void loop() {
  unsigned long tiempoActual = millis();

  if (tiempoActual > 5000 && tiempoActual < 7000) {
    detenerse();
  } 
  else if (tiempoActual > 10000 && tiempoActual < 10300) {
    girarIzquierda();
  }
  else {
    if (digitalRead(3) == HIGH) {
      avanzar();
    }
    else if (digitalRead(2) == HIGH) {
      girarIzquierda();
    }
    else if (digitalRead(4) == HIGH) {
      girarDerecha();
    }
  }
}

// --- DEFINICIÓN DE NUESTROS COMANDOS ---

void detenerse() {
  analogWrite(5, 0);
  analogWrite(6, 0);
  analogWrite(9, 0);
  analogWrite(10, 0);
}

void avanzar() {
  analogWrite(5, 180);
  analogWrite(6, 0);
  analogWrite(9, 180);
  analogWrite(10, 0);
}

void girarIzquierda() {
  analogWrite(5, 0);
  analogWrite(6, 0);
  analogWrite(9, 180);
  analogWrite(10, 0);
}

void girarDerecha() {
  analogWrite(5, 180);
  analogWrite(6, 0);
  analogWrite(9, 0);
  analogWrite(10, 0);
}`
        }
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
              <a href="Archivos/SLC%20Desafio%20v2.json" download="SLC Desafio v2.json" class="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-lg font-bold text-sm tracking-wide transition-all shadow-md shadow-purple-200 hover:translate-y-[-2px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                Descargar SLC Desafio v2.json
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
  pinMode(A3, INPUT);
  pinMode(A4, INPUT);
  pinMode(A5, INPUT);
  pinMode(A6, INPUT);
  pinMode(A7, INPUT);
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
  pinMode(A3, INPUT);
  pinMode(A4, INPUT);
  pinMode(A5, INPUT);
  pinMode(A6, INPUT);
  pinMode(A7, INPUT);
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
  pinMode(A3, INPUT);
  pinMode(A4, INPUT);
  pinMode(A5, INPUT);
  pinMode(A6, INPUT);
  pinMode(A7, INPUT);
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
  pinMode(A3, INPUT);
  pinMode(A4, INPUT);
  pinMode(A5, INPUT);
  pinMode(A6, INPUT);
  pinMode(A7, INPUT);
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
          title: "Lógica de 5 Sensores",
          subtitle: "Paso 5",
          icon: "Move",
          explanation: `<div class="space-y-4">
            <p class="font-medium text-slate-800">Implementamos el control proporcional según qué sensor detecte la línea.</p>
            <ul class="list-disc ml-5 space-y-2 text-[15px] text-slate-700">
              <li>Si el <strong>sensor central (A5)</strong> se activa, ambos motores avanzan.</li>
              <li>Si los <strong>sensores medios (A4 o A6)</strong> se activan, el motor de ese lado baja su velocidad a la mitad (giro suave).</li>
              <li>Si los <strong>sensores extremos (A3 o A7)</strong> se activan, el motor de ese lado se detiene (giro rápido).</li>
            </ul>
            <div class="bg-amber-50 border border-amber-200 p-4 rounded-xl mt-4">
              <h4 class="font-bold text-amber-800 mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                Memoria de Estado
              </h4>
              <p class="text-sm text-amber-700 leading-relaxed">
                Si ningún sensor detecta la línea, el robot conservará el último estado para intentar volver a encontrar el camino.
              </p>
            </div>
          </div>`,
          code: `int umbral = 500;

void setup() {
  pinMode(3, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(9, OUTPUT);
  pinMode(A3, INPUT);
  pinMode(A4, INPUT);
  pinMode(A5, INPUT);
  pinMode(A6, INPUT);
  pinMode(A7, INPUT);
}

void loop() {
  if (analogRead(A5) > umbral) { 
    analogWrite(5, 180);
    analogWrite(6, 0);
    analogWrite(3, 180);
    analogWrite(9, 0);
  }
  else if (analogRead(A6) > umbral) { 
    analogWrite(5, 90);
    analogWrite(6, 0);
    analogWrite(3, 180);
    analogWrite(9, 0);
  }
  else if (analogRead(A4) > umbral) { 
    analogWrite(5, 180);
    analogWrite(6, 0);
    analogWrite(3, 90);
    analogWrite(9, 0);
  }
  else if (analogRead(A7) > umbral) { 
    analogWrite(5, 0);
    analogWrite(6, 0);
    analogWrite(3, 180);
    analogWrite(9, 0);
  }
  else if (analogRead(A3) > umbral) { 
    analogWrite(5, 180);
    analogWrite(6, 0);
    analogWrite(3, 0);
    analogWrite(9, 0);
  }
}`
        },
        {
          id: "paso-6-timer",
          title: "Incorporación del Temporizador",
          subtitle: "Paso 6",
          icon: "Clock",
          explanation: `<div class="space-y-4">
            <p class="font-medium text-slate-800">Usamos el tiempo para programar eventos específicos.</p>
            <p class="text-[15px] text-slate-600 leading-relaxed">Con la variable <code>tiempoActual</code> podemos saber cuántos milisegundos han pasado desde que encendimos el robot.</p>
          </div>`,
          code: `int umbral = 500;

void setup() {
  pinMode(3, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(9, OUTPUT);
  pinMode(A3, INPUT);
  pinMode(A4, INPUT);
  pinMode(A5, INPUT);
  pinMode(A6, INPUT);
  pinMode(A7, INPUT);
}

void loop() {
  unsigned long tiempoActual = millis();

  if (analogRead(A5) > umbral) { 
    analogWrite(5, 180);
    analogWrite(6, 0);
    analogWrite(3, 180);
    analogWrite(9, 0);
  }
  else if (analogRead(A6) > umbral) { 
    analogWrite(5, 90);
    analogWrite(6, 0);
    analogWrite(3, 180);
    analogWrite(9, 0);
  }
  else if (analogRead(A4) > umbral) { 
    analogWrite(5, 180);
    analogWrite(6, 0);
    analogWrite(3, 90);
    analogWrite(9, 0);
  }
  else if (analogRead(A7) > umbral) { 
    analogWrite(5, 0);
    analogWrite(6, 0);
    analogWrite(3, 180);
    analogWrite(9, 0);
  }
  else if (analogRead(A3) > umbral) { 
    analogWrite(5, 180);
    analogWrite(6, 0);
    analogWrite(3, 0);
    analogWrite(9, 0);
  }
}`
        },
        {
          id: "paso-7-pausa",
          title: "Pausa en Carrera",
          subtitle: "Paso 7",
          icon: "Timer",
          explanation: `<div class="space-y-4">
            <p class="font-medium text-slate-800">Detenemos el robot automáticamente en un tiempo determinado.</p>
            <p class="text-[15px] text-slate-600 leading-relaxed">Programamos una pausa completa entre los 5 y 7 segundos de la carrera usando una condición IF.</p>
          </div>`,
          code: `int umbral = 500;

void setup() {
  pinMode(3, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(9, OUTPUT);
  pinMode(A3, INPUT);
  pinMode(A4, INPUT);
  pinMode(A5, INPUT);
  pinMode(A6, INPUT);
  pinMode(A7, INPUT);
}

void loop() {
  unsigned long tiempoActual = millis();

  if (tiempoActual > 5000 && tiempoActual < 7000) {
    analogWrite(5, 0);
    analogWrite(6, 0);
    analogWrite(3, 0);
    analogWrite(9, 0);
  } 
  else {
    if (analogRead(A5) > umbral) { 
      analogWrite(5, 180);
      analogWrite(6, 0);
      analogWrite(3, 180);
      analogWrite(9, 0);
    }
    else if (analogRead(A6) > umbral) { 
      analogWrite(5, 90);
      analogWrite(6, 0);
      analogWrite(3, 180);
      analogWrite(9, 0);
    }
    else if (analogRead(A4) > umbral) { 
      analogWrite(5, 180);
      analogWrite(6, 0);
      analogWrite(3, 90);
      analogWrite(9, 0);
    }
    else if (analogRead(A7) > umbral) { 
      analogWrite(5, 0);
      analogWrite(6, 0);
      analogWrite(3, 180);
      analogWrite(9, 0);
    }
    else if (analogRead(A3) > umbral) { 
      analogWrite(5, 180);
      analogWrite(6, 0);
      analogWrite(3, 0);
      analogWrite(9, 0);
    }
  }
}`
        },
        {
          id: "paso-8-giro",
          title: "Giro Ciego",
          subtitle: "Paso 8",
          icon: "RotateCcw",
          explanation: `<div class="space-y-4">
            <p class="font-medium text-slate-800">Programamos un giro forzado para superar intersecciones.</p>
            <p class="text-[15px] text-slate-600 leading-relaxed">A los 10 segundos, ordenamos un giro a la izquierda de 300 milisegundos, ignorando los sensores por un breve instante.</p>
          </div>`,
          code: `int umbral = 500;

void setup() {
  pinMode(3, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(9, OUTPUT);
  pinMode(A3, INPUT);
  pinMode(A4, INPUT);
  pinMode(A5, INPUT);
  pinMode(A6, INPUT);
  pinMode(A7, INPUT);
}

void loop() {
  unsigned long tiempoActual = millis();

  if (tiempoActual > 5000 && tiempoActual < 7000) {
    analogWrite(5, 0);
    analogWrite(6, 0);
    analogWrite(3, 0);
    analogWrite(9, 0);
  } 
  else if (tiempoActual > 10000 && tiempoActual < 10300) {
    analogWrite(5, 0);
    analogWrite(6, 0);
    analogWrite(3, 180);
    analogWrite(9, 0);
  }
  else {
    if (analogRead(A5) > umbral) { 
      analogWrite(5, 180);
      analogWrite(6, 0);
      analogWrite(3, 180);
      analogWrite(9, 0);
    }
    else if (analogRead(A6) > umbral) { 
      analogWrite(5, 90);
      analogWrite(6, 0);
      analogWrite(3, 180);
      analogWrite(9, 0);
    }
    else if (analogRead(A4) > umbral) { 
      analogWrite(5, 180);
      analogWrite(6, 0);
      analogWrite(3, 90);
      analogWrite(9, 0);
    }
    else if (analogRead(A7) > umbral) { 
      analogWrite(5, 0);
      analogWrite(6, 0);
      analogWrite(3, 180);
      analogWrite(9, 0);
    }
    else if (analogRead(A3) > umbral) { 
      analogWrite(5, 180);
      analogWrite(6, 0);
      analogWrite(3, 0);
      analogWrite(9, 0);
    }
  }
}`
        },
        {
          id: "paso-9-funciones",
          title: "Limpieza con Funciones",
          subtitle: "Paso 9",
          icon: "Code",
          explanation: `<div class="space-y-4">
            <p class="font-medium text-slate-800">Organizamos el código usando funciones personalizadas.</p>
            <p class="text-[15px] text-slate-600 leading-relaxed">Esto hace que el <code>loop</code> principal sea mucho más corto y fácil de entender al leerlo como si fuera lenguaje natural.</p>
          </div>`,
          code: `int umbral = 500;

void setup() {
  pinMode(3, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(9, OUTPUT);
  pinMode(A3, INPUT);
  pinMode(A4, INPUT);
  pinMode(A5, INPUT);
  pinMode(A6, INPUT);
  pinMode(A7, INPUT);
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
    if (analogRead(A5) > umbral) avanzar();
    else if (analogRead(A6) > umbral) curvaSuaveIzq();
    else if (analogRead(A4) > umbral) curvaSuaveDer();
    else if (analogRead(A7) > umbral) girarRapidoIzq();
    else if (analogRead(A3) > umbral) girarRapidoDer();
  }
}

void detenerse() {
  analogWrite(5, 0); analogWrite(6, 0);
  analogWrite(3, 0); analogWrite(9, 0);
}

void avanzar() {
  analogWrite(5, 180); analogWrite(6, 0);
  analogWrite(3, 180); analogWrite(9, 0);
}

void curvaSuaveIzq() {
  analogWrite(5, 90); analogWrite(6, 0);
  analogWrite(3, 180); analogWrite(9, 0);
}

void curvaSuaveDer() {
  analogWrite(5, 180); analogWrite(6, 0);
  analogWrite(3, 90); analogWrite(9, 0);
}

void girarRapidoIzq() {
  analogWrite(5, 0); analogWrite(6, 0);
  analogWrite(3, 180); analogWrite(9, 0);
}

void girarRapidoDer() {
  analogWrite(5, 180); analogWrite(6, 0);
  analogWrite(3, 0); analogWrite(9, 0);
}`
        }
      ]
    },
    {
      id: "agv-larense",
      title: "AGV Larense",
      description: "Desarrollo de vehículos autónomos guiados para logística industrial.",
      icon: "Cpu",
      color: "emerald",
      classes: [
        {
          id: "intro-agv",
          title: "Arquitectura del AGV",
          subtitle: "Sistemas",
          icon: "Layout",
          explanation: `<p>El AGV Larense utiliza sensores de proximidad y mapeo básico para navegar en entornos controlados.</p>`,
          code: `// Arquitectura AGV
void setup() {
  // Configuración AGV
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
