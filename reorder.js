const fs = require('fs');
let code = fs.readFileSync('content.js', 'utf8');

let startIdx = code.indexOf('courses: [\n') + 'courses: [\n'.length;

let idxAventura = code.indexOf('    {\n      id: "sl-aventura-2026"');
let idxDesafio = code.indexOf('    {\n      id: "sl-desafio-2026"');
let idxLarense = code.indexOf('    {\n      id: "agv-larense"');
let idxSeguidor = code.indexOf('    {\n      id: "sl-seguidor-2026"');
let idxPasillos = code.indexOf('    {\n      id: "sl-pasillos-2026"');
let idxPlaca = code.indexOf('    {\n\n      id: "entrenamiento-placa-pruebas"');
let idxElectronica = code.indexOf('    {\n      id: "electronica-discreta"');
let endIdx = code.indexOf('  ]\n};\n');

function getChunk(start, nextStart) {
    if (nextStart === endIdx) {
        let str = code.substring(start, endIdx);
        return str.trimEnd(); 
    }
    let str = code.substring(start, nextStart);
    return str.replace(/,\s*$/, '');
}

let chunkAventura = getChunk(idxAventura, idxDesafio);
let chunkDesafio = getChunk(idxDesafio, idxLarense);
let chunkLarense = getChunk(idxLarense, idxSeguidor);
let chunkSeguidor = getChunk(idxSeguidor, idxPasillos);
let chunkPasillos = getChunk(idxPasillos, idxPlaca);
let chunkPlaca = getChunk(idxPlaca, idxElectronica);
let chunkElectronica = getChunk(idxElectronica, endIdx);

let newCode = code.substring(0, startIdx) +
  chunkElectronica + ",\n" +
  chunkPlaca + ",\n" +
  chunkAventura + ",\n" +
  chunkDesafio + ",\n" +
  chunkLarense + ",\n" +
  chunkSeguidor + ",\n" +
  chunkPasillos + "\n" +
  code.substring(endIdx); 

fs.writeFileSync('content.js', newCode);
console.log('Reordered successfully.');
