const fs = require('fs');
let code = fs.readFileSync('content.js', 'utf8');

let newStr = `<div class="bg-blue-50 border border-blue-200 p-3 rounded-xl text-sm leading-relaxed">
          <h4 class="font-bold text-blue-800 mb-1">🔌 ¿Con qué placa funciona?</h4>
          <p class="text-blue-900">Todo lo aprendido aquí funciona con <strong>cualquier placa compatible con el Arduino IDE</strong>. Usamos un <strong>Arduino UNO</strong> en los ejemplos, pero en competencia puede aparecer otra placa — mismo método, solo debes <strong>ajustar los pines</strong> según la tabla que te entreguen.</p>
        </div>
        <div class="bg-indigo-50 border border-indigo-200 p-3 rounded-xl text-sm leading-relaxed mt-3">
          <h4 class="font-bold text-indigo-800 mb-1">💻 Simulador en Tinkercad</h4>
          <p class="text-indigo-900">Puedes explorar esta placa completa en línea: <a href="https://www.tinkercad.com/things/jXqMikxzo6j-placa-de-pruebas-ind-programacion" target="_blank" class="font-bold underline hover:text-indigo-600 transition-colors">Abrir proyecto en Tinkercad</a></p>
        </div>`;

let regex = /<div class="bg-blue-50 border border-blue-200 p-3 rounded-xl text-sm leading-relaxed">\s*<h4 class="font-bold text-blue-800 mb-1">🔌 ¿Con qué placa funciona\?<\/h4>\s*<p class="text-blue-900">Todo lo aprendido aquí funciona con <strong>cualquier placa compatible con el Arduino IDE<\/strong>\. Usamos un <strong>Arduino UNO<\/strong> en los ejemplos, pero en competencia puede aparecer otra placa — mismo método, solo debes <strong>ajustar los pines<\/strong> según la tabla que te entreguen\.<\/p>\s*<\/div>/g;

code = code.replace(regex, newStr);
fs.writeFileSync('content.js', code);
console.log('Done Tinkercad.');
