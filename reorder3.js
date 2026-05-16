const fs = require('fs');

let code = fs.readFileSync('content.js', 'utf8');

function findStart(idString) {
    let idIdx = code.indexOf(idString);
    if (idIdx === -1) return -1;
    let braceIdx = code.lastIndexOf('{', idIdx);
    // Find the whitespace before '{' to include it
    while (braceIdx > 0 && (code[braceIdx-1] === ' ' || code[braceIdx-1] === '\t')) {
        braceIdx--;
    }
    return braceIdx;
}

let idxPlaca = findStart('id: "entrenamiento-placa-pruebas"');
let endIdx = code.lastIndexOf('  ]');

let startCourses = code.indexOf('courses: [') + 'courses: ['.length;
// skip spaces and newlines after `[`
while (startCourses < code.length && (code[startCourses] === ' ' || code[startCourses] === '\n' || code[startCourses] === '\r')) {
    startCourses++;
}

// Extract placa
let chunkPlaca = code.substring(idxPlaca, endIdx);
chunkPlaca = chunkPlaca.trimEnd();
// Remove the preceding comma if any, since it was the last element
// Actually, placa is at the end, so its preceding element has a comma. We need to strip the comma from the preceding element.
let beforePlaca = code.substring(startCourses, code.lastIndexOf(',', idxPlaca));
beforePlaca = beforePlaca.trimEnd();

let chunkElectronica = `    {
      id: "electronica-discreta",
      title: "Electrónica Discreta",
      description: "Aprende los fundamentos de la electrónica componente a componente, desde LEDs hasta transistores.",
      icon: "Cpu",
      color: "amber",
      image: "Imagenes/topic_sensor.png",
      classes: [
        {
          id: "paso-1-led-resistencia",
          title: "Paso 1: LED y Resistencia",
          subtitle: "Fundamentos",
          icon: "Zap",
          explanation: \`<div class="space-y-4">
            <p>El primer paso es entender cómo encender un LED correctamente con una batería de 5V.</p>
            <div class="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl mt-2">
              <h4 class="font-bold text-amber-800 mb-2">⚠️ Importancia de la Resistencia</h4>
              <p class="text-sm text-amber-900 leading-relaxed">Si conectamos el LED directamente a los 5V, la corriente será tan alta que el LED <strong>se quemará al instante</strong>. La resistencia limita esa corriente a un nivel seguro.</p>
            </div>
            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl mt-2">
              <h4 class="font-bold text-blue-800 mb-2">💡 Diagrama vs Protoboard</h4>
              <p class="text-sm text-blue-900 leading-relaxed">No trates de replicar la forma o figura geométrica del diagrama electrónico en el protoboard. En electrónica, <strong>la forma no importa, lo único que importa es el camino y las conexiones</strong> entre los componentes.</p>
            </div>
            <p>En el diagrama puedes ver que la resistencia va en serie con el LED. No importa si va antes o después del LED, lo importante es que estén en el mismo camino.</p>
          </div>\`,
          diagramImage: "Imagenes/ElecDiscretaPaso1Circuito.jpg",
          simulationImage: "Imagenes/ElecDiscretaPaso1Sim.jpg",
          realityImage: "Imagenes/realidad_placeholder.png"
        },
        {
          id: "paso-2-pulsador",
          title: "Paso 2: Pulsador en Serie",
          subtitle: "Control Básico",
          icon: "Power",
          explanation: \`<div class="space-y-4">
            <p>Ahora agregamos un <strong>pulsador</strong> en serie con nuestro circuito para poder encender y apagar el LED manualmente.</p>
            <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl mt-2">
              <h4 class="font-bold text-slate-700 mb-2">⚡ Limitaciones de la conexión en serie</h4>
              <p class="text-sm text-slate-600 leading-relaxed">En este circuito, <strong>toda la energía que consume el LED pasa físicamente a través del pulsador</strong>. Para un LED pequeño no hay problema porque consume muy poco.</p>
              <p class="text-sm text-slate-600 leading-relaxed mt-2">Sin embargo, si quisieras controlar algo que consume mucha más energía (como un motor grande o un bombillo de casa), el switch se derretiría porque no está diseñado para soportar tanta corriente. Lo ideal es que el switch de control no esté en el mismo camino de alta corriente que la carga pesada.</p>
            </div>
          </div>\`,
          diagramImage: "Imagenes/ElecDiscretaPaso2Circuito.jpg",
          simulationImage: "Imagenes/ElecDiscretaPaso2Sim.jpg",
          realityImage: "Imagenes/realidad_placeholder.png"
        },
        {
          id: "paso-3-transistor-teoria",
          title: "Paso 3: El Transistor",
          subtitle: "Teoría",
          icon: "Cpu",
          explanation: \`<div class="space-y-4">
            <p>Aquí es donde entra el <strong>Transistor</strong>. Es un componente que funciona como un switch, pero en lugar de presionarlo con el dedo, se "presiona" usando una pequeña corriente eléctrica.</p>
            <div class="grid grid-cols-2 gap-4 mt-4">
                <div class="bg-blue-50 p-3 rounded-lg border border-blue-100">
                    <h4 class="font-bold text-blue-800 text-sm mb-1">Transistor NPN</h4>
                    <p class="text-[12px] text-blue-900 leading-relaxed">Se activa cuando le aplicamos voltaje POSITIVO a su base. Es el más usado para controlar cargas desde un microcontrolador como Arduino.</p>
                </div>
                <div class="bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                    <h4 class="font-bold text-emerald-800 text-sm mb-1">Transistor PNP</h4>
                    <p class="text-[12px] text-emerald-900 leading-relaxed">Se activa cuando le quitamos el voltaje positivo a su base (con voltaje negativo/GND). Funciona al revés que el NPN.</p>
                </div>
            </div>
            <p class="mt-4">El transistor tiene 3 patas: <strong>Base</strong> (el botón), <strong>Colector</strong> (por donde entra la corriente principal) y <strong>Emisor</strong> (por donde sale).</p>
          </div>\`,
          diagramImage: "Imagenes/ElecDiscretaPaso3Circuito.jpg",
          simulationImage: "Imagenes/ElecDiscretaPaso3Sim.jpg",
          realityImage: "Imagenes/realidad_placeholder.png"
        },
        {
          id: "paso-4-circuito-transistor",
          title: "Paso 4: Transistor + LED",
          subtitle: "Práctica",
          icon: "Zap",
          explanation: \`<div class="space-y-4">
            <p>Vamos a armar el circuito usando un transistor NPN. El pulsador ya no estará en serie con el LED, sino que estará conectado a la <strong>Base</strong> del transistor.</p>
            <div class="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded-r-xl mt-2">
              <h4 class="font-bold text-indigo-800 mb-2">🎯 ¿Por qué hacer esto?</h4>
              <p class="text-sm text-indigo-900 leading-relaxed">Si bien usar un transistor para encender un solo LED parece innecesario, <strong>esta es la base de todo</strong>.</p>
              <p class="text-sm text-indigo-900 leading-relaxed mt-2">Imagina que reemplazas el LED por un motor gigante. Ahora, tu pequeño pulsador (o un Arduino) envía una señal débil a la Base del transistor, y el transistor se encarga de dejar pasar la corriente gigante desde la batería hasta el motor, sin que esa energía dañe tu botón o tu placa.</p>
            </div>
          </div>\`,
          diagramImage: "Imagenes/ElecDiscretaPaso4Circuito.jpg",
          simulationImage: "Imagenes/ElecDiscretaPaso4Sim.jpg",
          realityImage: "Imagenes/realidad_placeholder.png"
        }
      ]
    }`;

let newCode = code.substring(0, startCourses) +
  chunkElectronica + ",\n" +
  chunkPlaca + ",\n" +
  beforePlaca + "\n" +
  code.substring(endIdx);

fs.writeFileSync('content.js', newCode);
console.log('Done!');
