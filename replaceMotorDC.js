const fs = require('fs');
let code = fs.readFileSync('content.js', 'utf8');

let newStr = `<p>Para mover un <strong>Motor DC</strong> necesitamos controlar su dirección usando dos pines de control (<strong>IN1</strong> y <strong>IN2</strong>).</p>
            <div class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-xl">
              <h4 class="font-bold text-blue-800 mb-2">🔄 Controlando la Dirección</h4>
              <p class="text-sm text-blue-900 leading-relaxed">Los pines de control actúan como si fueran los cables del motor. En la vida real, para que un motor gire al revés, tendrías que desconectar los cables e invertirlos físicamente. Aquí, lo hacemos por código: si escribes <code class="bg-blue-100 px-1 rounded">HIGH</code> en uno y <code class="bg-blue-100 px-1 rounded">LOW</code> en el otro el motor gira en un sentido. Si los inviertes, el motor gira al revés.</p>
            </div>
            <p>El tercer pin (<strong>ENA</strong>) se usa exclusivamente para controlar la <strong>velocidad</strong> mandando una señal PWM.</p>
            <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl mt-2">
              <h4 class="font-bold text-slate-700 mb-1">💡 Nota sobre los métodos de control</h4>
              <p class="text-sm text-slate-600 leading-relaxed">En esta placa de pruebas usamos el método de <strong>3 pines por motor</strong> (dos para dirección y uno para velocidad). Sin embargo, notarás que en los robots usamos otro método: <strong>2 pines PWM por motor</strong>. Ambos métodos son completamente válidos y muy comunes en robótica.</p>
            </div>`;

let regex = /<p>Para mover un <strong>Motor DC<\/strong> necesitamos controlar su direcci[\s\S]*?ENA \(D3\)\.<\/p>/g;
code = code.replace(regex, newStr);

fs.writeFileSync('content.js', code);
console.log('Done replacement.');
