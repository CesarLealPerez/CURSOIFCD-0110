const obscenidades = ['baboso', 'beocio', 'beocia', 'besugo', 'besuga', 'bobo', 'boba', 'bruto', 'bruta', 'bucéfalo', 'bucefalo', 'calilo', 'calila', 'lilo', 'lila', 'calzonudo', 'calzonuda', 'capullo', 'carechimba', 'cazurro', 'cazurra', 'cebollino', 'cebollina', 'cenutrio', 'ceporro', 'cipote', 'zipote', 'cojudo', 'cojuda', 'cojonudo', 'cojonuda', 'cretino', 'cretina', 'cutama', 'cutre', 'chango', 'changa', 'chorra', 'estúpido', 'estúpida', 'estupido', 'estupida', 'ganso', 'gansa', 'gilí', 'gili', 'gilipollas', 'jilipollas', 'gonorrea', 'gordo', 'gorda', 'idiota', 'insensato', 'insensata', 'lerdo', 'lerda', 'lipendi', 'madero', 'madrero', 'malparido', 'mamacallos', 'mameluco', 'mastuerzo', 'maricón', 'maricón', 'maricona', 'melón', 'melon', 'melona', 'memo', 'mema', 'mendrugo', 'mendruga', 'menguado', 'menguada', 'menso', 'mensa', 'mentecato', 'mentecata', 'merluzo', 'minguado', 'minguada', 'molondro', 'muérgano', 'pendejo', 'puto', 'puta', 'rácano', 'racano', 'esgraciado', 'desgraciada', 'tarado', 'tarada', 'tolondrón', 'tolondróna', 'valeverga', 'verga', 'polla', 'mierda', 'mohon', 'shit', 'fuck', 'fook', 'motherfucker', 'zopenco', 'zopenca', 'cabron', 'bastardo', 'bastarda', 'asqueroso', 'asquerosa', 'feo', 'fea', 'tarado', 'tarada', 'puñetas', 'culero', 'carechimba', 'gonorrea', 'chocho', 'coño', 'zoro', 'zorra', 'tetas', 'pito', 'webos', 'follar', 'cascarla', 'faggot', 'chuparla', 'mamarla', 'correrse', 'sobar', 'sobarsela', 'soplapollas', 'tortillera', 'cornudo', 'zorrilla', 'cagar', 'cago', 'cagada', 'mierda', 'meada', 'cajetuda', 'argolluda', 'cojón', 'cojon', 'cojones', 'comemierda', 'culeado', 'facha', 'fachas', 'chapas', 'joputa', 'joeputa', 'pinche', 'bambarria', 'boludo', 'pelotudo', 'arsehole', 'barmpot', 'barmy', 'berk', 'billy', 'bint', 'blighter', 'bloody', 'blooming', 'bollocks', 'charva', 'chav', 'cheeky', 'codger', 'dago', 'divvy', 'dodgy', 'dozy', 'eejit', 'git', 'gormless', 'grotty', 'manky', 'munter', 'nancy', 'numpty', 'nutter', 'pikey', 'pillock', 'poxy', 'prat', 'scrubber', 'shite', 'skanky', 'wazzack', 'goofy', 'bobalias', 'bobatel', 'silly', 'fool', 'putain', 'chienne', 'salaud', 'salope', 'chatte', 'chatte', 'bite', 'merde', 'paja'];

let texto = prompt("Introduce el texto a moderar");

document.getElementById('textArea').innerHTML  = texto;

let obscenidades_texto = [''];
let textoReemplazado;

function escribe(texto) {
    document.getElementsByTagName("h1").innerHTML = texto;
    console.log(texto);
}


function comprobarObscenidades() {

    obscenidades_texto = [];
    document.getElementsByTagName("h1").clear;
    document.getElementById('resultado').innerHTML = " ";

    for (let obscenidad of obscenidades) {

        textoReemplazado = texto.replace(obscenidad, '***')
        
        if (texto.toLowerCase() != textoReemplazado) {
            obscenidades_texto.push(obscenidad);
        }
        console.log(obscenidades_texto.length);
    }
    if (obscenidades_texto.length > 0) {
        escribe(`Este texto contiene ${obscenidades_texto.length} obscenidades`);
        alert(`Este texto contiene ${obscenidades_texto.length} obscenidades`);
        console.log(textoReemplazado);
        console.log(obscenidades_texto);

        
    } else {

        escribe('Este texto no contiene obscenidades.')
        alert('Felicidades!!! Este texto es apto para todos los públicos.')
        document.getElementById('resultado').innerHTML = "0";

    }
    
    document.getElementById('textArea').innerHTML  = textoReemplazado;}

function verObscenidades() {
    document.getElementById('resultado').innerHTML = obscenidades_texto;
}