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
          id: "intro-aventura",
          title: "Introducción y Setup",
          subtitle: "Paso 1",
          icon: "Settings",
          explanation: `<div class="space-y-4">
            <p>Todo programa de Arduino comienza con el <code>void setup()</code>. Aquí preparamos el hardware antes de empezar.</p>
            <div class="bg-blue-50/50 p-4 rounded-lg border border-blue-100 text-sm">
              <p class="font-bold text-blue-900 mb-2 underline decoration-blue-200">Explicación técnica:</p>
              <ul class="space-y-2">
                <li><strong><code>pinMode(pin, modo)</code>:</strong> Define si el pin envía energía o recibe datos.</li>
                <li><strong><code>OUTPUT</code>:</strong> Pin de salida (Motores: pines 5, 6, 9, 10).</li>
                <li><strong><code>INPUT</code>:</strong> Pin de entrada (Sensores: pines 2, 3, 4).</li>
                <li><strong><code>Serial.begin(9600)</code>:</strong> Abre el Monitor Serial para ver qué piensa el robot.</li>
              </ul>
            </div>
          </div>`,
          code: `void setup() {
  // Configuración de Motores (Salidas)
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(9, OUTPUT);
  pinMode(10, OUTPUT);
  
  // Configuración de Sensores (Entradas)
  pinMode(2, INPUT); 
  pinMode(3, INPUT); 
  pinMode(4, INPUT);

  // Iniciamos comunicación Serial
  Serial.begin(9600);
}

void loop() {
  // El loop se repite infinitamente
}`
        },
        {
          id: "movimiento-basico",
          title: "¡A mover los motores!",
          subtitle: "Paso 2",
          icon: "Move",
          explanation: `<div class="space-y-6 text-[15px]">
            <section>
              <h3 class="text-lg font-bold text-slate-800 flex items-center gap-2 mb-3 leading-tight underline decoration-blue-200">
                La Analogía de la Batería
              </h3>
              <p class="mb-4">Imagina que cada motor de tu robot es un motorcito normal con <strong>dos cables sueltos</strong>.</p>
              <ul class="space-y-3 mb-4">
                <li class="flex items-start gap-3">
                  <span class="text-blue-500 mt-1">✓</span>
                  <span>Si conectas un cable al <strong>Positivo (+)</strong> y otro al <strong>Negativo (-)</strong>, el motor gira hacia adelante.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-red-500 mt-1">↻</span>
                  <span>Si <strong>inviertes los cables</strong> en la batería, el motor gira hacia atrás.</span>
                </li>
              </ul>
              <p>Usamos <code>analogWrite(pin, velocidad)</code> para controlar la energía. El valor va de 0 a 255.</p>
            </section>
          </div>`,
          code: `void setup() {
  pinMode(5, OUTPUT); pinMode(6, OUTPUT);
  pinMode(9, OUTPUT); pinMode(10, OUTPUT);
}

void loop() {
  // Motor Izquierdo adelante (pines 5 y 6)
  analogWrite(5, 150); 
  analogWrite(6, 0);
  
  // Motor Derecho adelante (pines 9 y 10)
  analogWrite(9, 150); 
  analogWrite(10, 0);
}`
        },
        {
          id: "lectura-sensores",
          title: "Leyendo la Pista",
          subtitle: "Paso 3",
          icon: "Eye",
          explanation: `<div class="space-y-4">
            <p>Los sensores infrarrojos nos dicen si están sobre blanco o negro. Usamos <code>digitalRead(pin)</code>.</p>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <ul class="space-y-2 text-sm">
                <li><strong>1:</strong> Detecta Negro (Línea)</li>
                <li><strong>0:</strong> Detecta Blanco (Fondo)</li>
              </ul>
            </div>
            <p>Es vital usar el Monitor Serial para calibrar los sensores antes de correr.</p>
          </div>`,
          code: `void loop() {
  int sIzq = digitalRead(2);
  int sCen = digitalRead(3);
  int sDer = digitalRead(4);

  Serial.print("S: ");
  Serial.print(sIzq); Serial.print(" ");
  Serial.print(sCen); Serial.print(" ");
  Serial.println(sDer);
  delay(100);
}`
        },
        {
          id: "logica-siguelineas",
          title: "Lógica de Seguimiento",
          subtitle: "Paso 4",
          icon: "Cpu",
          explanation: `<div class="space-y-4">
            <p>Aquí unimos todo usando condicionales <code>if / else if</code>.</p>
            <p>La lógica es simple: si el sensor central ve la línea, vamos recto. Si el de la derecha la ve, giramos a la derecha, y viceversa.</p>
          </div>`,
          code: `void loop() {
  if (digitalRead(3)) { // Centro
    avanzar();
  } else if (digitalRead(2)) { // Izquierda
    girarIzquierda();
  } else if (digitalRead(4)) { // Derecha
    girarDerecha();
  }
}

void avanzar() {
  analogWrite(5, 150); analogWrite(6, 0);
  analogWrite(9, 150); analogWrite(10, 0);
}`
        }
      ]
    },
    {
      id: "sl-desafio-2026",
      title: "Robot Sigue Líneas Desafío 2026",
      description: "Estrategias avanzadas y control PID para robots de alta velocidad.",
      icon: "Trophy",
      color: "indigo",
      classes: [
        {
          id: "intro-desafio",
          title: "Conceptos de Alta Velocidad",
          subtitle: "Teoría",
          icon: "Info",
          explanation: `<p>En la categoría Desafío, la velocidad es clave. No solo basta con seguir la línea, hay que hacerlo de forma fluida.</p>`,
          code: `// Código de ejemplo para Desafío
int baseSpeed = 200;
// Próximamente más contenido...`
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
