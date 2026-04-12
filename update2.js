const fs = require('fs');

let text = fs.readFileSync('content.js', 'utf8');

const new_step = `        {
          id: "paso-variables",
          title: "Incorporación de Variables de Velocidad",
          subtitle: "Paso 6",
          icon: "Settings",
          explanation: \`<div class="space-y-4">
            <h3 class="font-bold text-slate-800 flex items-center gap-2 underline decoration-blue-200">
              ¿Por qué usar variables para la velocidad?
            </h3>
            <p>En lugar de escribir "180" o "0" todas las veces, vamos a crear dos variables: <code>velocidadMax</code> y <code>velocidadMin</code>.</p>
            <p>Hacemos esto para <strong>poder modificar y probar velocidades distintas de manera rápida.</strong> Si en competencia el robot patina de largo, sólo bajamos \`velocidadMax\` en la parte superior y automáticamente los cuatro casos de la pista actualizarán sus giros y avances.</p>
          </div>\`,
          code: \`++ int velocidadMax = 180;
++ int velocidadMin = 0;

void setup() {
  pinMode(2, INPUT);
  pinMode(3, INPUT);
  pinMode(4, INPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(9, OUTPUT);
  pinMode(10, OUTPUT);
}

void loop() {
  // 1. CASO RECTO (Sensor central en pin 3)
  if (digitalRead(3) == HIGH) { 
++     analogWrite(5, velocidadMax);
++     analogWrite(6, velocidadMin);
++     analogWrite(9, velocidadMax);
++     analogWrite(10, velocidadMin);
  }
  // 2. CASO IZQUIERDA (Sensor izq en pin 2)
  else if (digitalRead(2) == HIGH) { 
++     analogWrite(5, velocidadMin);
++     analogWrite(6, velocidadMin);
++     analogWrite(9, velocidadMax);
++     analogWrite(10, velocidadMin);
  }
  // 3. CASO DERECHA (Sensor der en pin 4)
  else if (digitalRead(4) == HIGH) { 
++     analogWrite(5, velocidadMax);
++     analogWrite(6, velocidadMin);
++     analogWrite(9, velocidadMin);
++     analogWrite(10, velocidadMin);
  }
}\`
        },
`;

text = text.replace(/subtitle:\s*"Paso 6",\s*icon:\s*"Trophy",/g, 'subtitle: "Paso 7",\n          icon: "Trophy",');
text = text.replace(/subtitle:\s*"Paso 7",\s*icon:\s*"Clock",/g, 'subtitle: "Paso 8",\n          icon: "Clock",');
text = text.replace(/subtitle:\s*"Paso 8",\s*icon:\s*"Timer",/g, 'subtitle: "Paso 9",\n          icon: "Timer",');
text = text.replace(/subtitle:\s*"Paso 9",\s*icon:\s*"RotateCcw",/g, 'subtitle: "Paso 10",\n          icon: "RotateCcw",');
text = text.replace(/subtitle:\s*"Paso 10",\s*icon:\s*"Code",/g, 'subtitle: "Paso 11",\n          icon: "Code",');

text = text.replace(/{\s*id:\s*"paso-memoria",/g, new_step.trim() + '\n        {\n          id: "paso-memoria",');

function update_code_block(c) {
    if (c.includes('++ int ultimaDir = 3;')) {
        c = c.replace('++ int ultimaDir = 3;', 'int velocidadMax = 180;\nint velocidadMin = 0;\n++ int ultimaDir = 3;');
    } else if (c.includes('int ultimaDir = 3;')) {
        c = c.replace('int ultimaDir = 3;', 'int velocidadMax = 180;\nint velocidadMin = 0;\nint ultimaDir = 3;');
    }
    
    // Solo cambiar si está dentro de analogWrite
    c = c.replace(/analogWrite\(([^,]+),\s*180\)/g, 'analogWrite($1, velocidadMax)');
    c = c.replace(/analogWrite\(([^,]+),\s*0\)/g, 'analogWrite($1, velocidadMin)');
    return c;
}

const ids = ["paso-memoria", "paso-3-timer", "paso-4-pausa", "paso-5-giro", "paso-6-funciones"];
for (let block_id of ids) {
    let regex = new RegExp('id:\\s*"' + block_id + '"');
    let match = text.match(regex);
    if (match) {
        let idx = match.index;
        let c_start = text.indexOf('code: `', idx);
        if (c_start !== -1) {
            let c_end = text.indexOf('`', c_start + 7);
            let orig = text.substring(c_start + 7, c_end);
            let new_c = update_code_block(orig);
            text = text.substring(0, c_start + 7) + new_c + text.substring(c_end);
        }
    }
}

fs.writeFileSync('content.js', text, 'utf8');
console.log("DONE");
