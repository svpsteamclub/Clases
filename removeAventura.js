const fs = require('fs');
let code = fs.readFileSync('content.js', 'utf8');

// The exact string to remove:
let regex = /<div class="bg-slate-100 border border-slate-200 p-4 rounded-xl text-sm leading-relaxed text-slate-700">\s*<h4 class="font-bold text-slate-800 mb-2">📚 ¿De qué trata este curso\?<\/h4>\s*<p>En este entrenamiento aprenderás a controlar <strong>cada componente electrónico por separado<\/strong>, paso a paso, e irás integrando lógica de control progresivamente hasta llegar a proyectos completos\. La idea es que cuando llegues a una competencia, ya sepas cómo funciona cada pieza\.<\/p>\s*<\/div>\s*<div class="bg-blue-50 border border-blue-200 p-4 rounded-xl text-sm leading-relaxed">\s*<h4 class="font-bold text-blue-800 mb-2">🏁 ¿Cómo funciona en competencia\?<\/h4>\s*<p class="text-blue-900">En las competencias te suministrarán una <strong>placa ya armada<\/strong> con todos los componentes conectados, junto con una <strong>tabla de conexiones<\/strong> \(qué pin controla qué componente\) y un <strong>enunciado<\/strong> que describe la lógica que debes programar\. Tu trabajo es leer esa tabla y ese enunciado, y traducirlo a código Arduino\.<\/p>\s*<\/div>\s*/g;

let matches = code.match(regex);
if (matches) {
    code = code.replace(regex, '');
    fs.writeFileSync('content.js', code);
    console.log('Removed paragraphs successfully.');
} else {
    console.log('Could not find paragraphs to remove.');
}
