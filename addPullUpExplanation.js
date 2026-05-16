const fs = require('fs');
let code = fs.readFileSync('content.js', 'utf8');

let newStr = `<div class="space-y-4">
            <p>Un botón es una "entrada". Usaremos el <strong>Botón 2 (Sistema)</strong> en el pin 12 con la resistencia interna <code>INPUT_PULLUP</code>.</p>
            <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl mt-2">
              <h4 class="font-bold text-slate-700 mb-2">🔌 ¿Pull-Up Interno o Externo?</h4>
              <p class="text-sm text-slate-600 leading-relaxed">Normalmente, al conectar un botón se necesita agregar físicamente una <strong>resistencia externa</strong> (pull-down o pull-up) para evitar que el pin lea "ruido" cuando el botón no está presionado.</p>
              <p class="text-sm text-slate-600 leading-relaxed mt-2">En nuestras placas de pruebas utilizamos <code>INPUT_PULLUP</code> por <strong>simplicidad</strong>. Esto activa una resistencia que ya viene dentro del Arduino, ahorrándonos componentes y conexiones extras en el circuito.</p>
            </div>
            <div class="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-r-xl">
              <p class="text-[14px] text-blue-900 leading-relaxed"><strong>¡Ojo a la lógica invertida!</strong> Al usar PULLUP, el pin descansa en <code class="bg-blue-100 px-1 rounded">HIGH</code>. Al presionar el botón, el pin se conecta a tierra y baja a <code class="bg-blue-100 px-1 rounded">LOW</code>.</p>
            </div>
          </div>`;

let regex = /<div class="space-y-4">\s*<p>Un botón es una "entrada"\. Usaremos el <strong>Botón 2 \(Sistema\)<\/strong> en el pin 12 con la resistencia interna <code>INPUT_PULLUP<\/code>\.<\/p>\s*<p class="text-\[15px\] text-slate-600 leading-relaxed">Con PULLUP, el botón descansa en HIGH\. Al presionarlo, baja a LOW\.<\/p>\s*<\/div>/g;

let matches = code.match(regex);
if (matches) {
    code = code.replace(regex, newStr);
    fs.writeFileSync('content.js', code);
    console.log('Replaced successfully.');
} else {
    console.log('Could not find match.');
}
