/*Mahdollisiman yksinkertinen chatti Socket.io:lla
 * Socket.io:n toiminta perustuu eventteihin. Socket
 * perii Noden events.eventEmitter -luokan  joten se
 * voi emittoida eventtejä.
 * 
 * Projektiin tarvitsee asentaa vain yksi kirjasto: socket.io
 * Serveri käynnistyy komennolla node server ja clientit ovat
 * osoitteissa http://localhost:3010/client.html
 */

const http = require('http');
const fs = require('fs');
// arvattava luku-muuttuja, josssa on tieto koneen arpomasta luvusta
let arvattavaLuku = 0;
// kutsutaan metodia arvoLuku, jotta jo ensimmäisellä kierroksella on satunnaisesti arvottu luku varmuudella. Tällöin arvattavaLuku-muuttujan arvo ei ole 0.
arvoLuku();
// muuttuja, jossa säilötään tietoa pelaajan satunnaisesta nimestä.
let satunnainenNimi = ['Pekka Pekkanen', 'Samuli Sihvonen', 'Irmeli Itävalko', 'Annneli Auvinen', 'Jaakko Junnila'];
//http-serveri joka laitetaan muuttujaan app servaa sivun client.html
const app = http.createServer((req, res) => {
    fs.readFile("client.html", 'utf-8', (error, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
}).listen(3010);
console.log('Http server in port 3010');

//Socket-serveri io luodaan ja liitetään http-serveriin app
const io = require('socket.io')(app);

/*'connection'-tapahtuma suoritetaan joka kerta kun joku clientin 
socket ottaa yhteyden serveriin. Parametrina oleva muuttuja socket on 
viittaus clientin socketiin
*/
io.sockets.on('connection', (socket) => {
    // kun clientilta tulee 'message to server' -tapahtuma saadaan clientilta data
    // data -muuttuja on olio joka sisältää on avain-arvo-pareja, indeksinä avaimet
    // Alustetaan muuttuja arvattavaLuku, jota verrataan data-muuttujaan.
        // Tässä oli ennen arvottuLuku-muuttuja, mutta se poistettiin, koska samanniminen muuttuja oli alustettu aiemmin tässä tiedostossa.
// Alustetaan muuttuja arvottuNimi, jossa pidetään tietoa pelaajan satunnaisesti arvotusta nimestä.
let arvottuNimi ='';
    socket.on('message_to_server', (data) => {
        // lähetetään tullut data takaisin kaikille clientin socketeille
        // emitoimalla tapahtuma 'message_to_client'.
    // kutsutaan funktiota tarkistaTulos. Mukana kutsussa on parametrin data (data-olion) message-ominaisuuden  kutsu. Lisäksi parametrina socket-kirjasto, koska muuten tarkistaTulos-funktio ei löydä kirjastoa eikä täten pysty hyödyntämään sitä.
    tarkistaTulos(data.message, socket);
	});

// Käyttäjän nimen satunnaisesti arpova funktio. Sen sisällä luodaan tapahtuma kutsumalla emit-metodia socket-luokan kautta. Se on tullut perinnän seurauksena socket-luokalle.
socket.on('arvoSatunnaisnimi', () => {
/* arvotaan satunnaisluku väliltä 0-taulukon mitta. Käytetään Math-luokan randomia ja math.flooria, joka pyöristää luvun alaspäin. Alun perin ajattelin käyttää Math.ceiliä, mutten tehnyt  niin, koska lukua laskettaessa olisi saattanut tulla indexOutOfRangeException. KOskaan ei olisi tullut indeksiä 0, koska metodi pyöristää sen ylöspäin. Käytännössä Mathh.floorin parametrit ovat seuraavat: Math.random ja tyhjät sulut (atunnaisluvun arvonta väliltä 0-1), kertomerkki (*), satunnainenNimi-taulukon mitta (satunnainenNimi.length). Näiden avulla saadaan toiminnallisuus, joka arpoo luvun, joka täsmää loogisimmmin taulukon indeksiä. */
arvottuNimi = Math.floor( Math.random() * satunnainenNimi.length);
// Etsitään luku indeksistä arvottuNimi (siis äsken lasketun arvottuNimi-muuttujan osoittamasta indeksistä, joka on laskutoimituksen tuloksena muuttujaan tallentunut lu,u).
arvottuNimi = satunnainenNimi[arvottuNimi];
// Tallennetaan pelaajan nimi socket-sessioon kutsumalla nimi-muuttujaa socket-luoakn kautta ja antamalla sen arvoksi arvottuNimi-muuttuja.
    socket.pelaajanNimi = arvottuNimi;    

// lähetetään nimi asiakasohjelmalle sokettia käyttäen.
socket.emit('satunnainenNimi', arvottuNimi);
/* Tulostetaan aloitusviesti pelistä kierroksen aluksi liittyneelle pelaajalle, ilmoituksen tulostus kaikille pelaajille saattaa hämmentää peliä. sockets-olion emit-metodia käyttämällä (ensin parametrina merkkijono message_to_servewr (viittaus palvelimen message_to_client-funktioon ja toisena marametrina message ja sen arvona pelistä kertova viesti. */
socket.emit('message_to_client', {message: 'Pelin tavoitteena on arvata luku väliltä 0-20. Nopeimmin oikean luvun arvannut voittaa pelin.'});
});
});    

// Functio arvaaLuku (emitointi), joka käsittelee käyttäjän arvaaman luvun
// Arvattavan luvun laskeva funktio. tapahtuma kutsumalla emit-metodia socket-luokan kautta. Se on tullut perinnän seurauksena socket-luokalle.
function arvoLuku() { 
// Alustetaan funktion toiminnan kannalta keskeiset muuttujat.
let maxLuku =20;
let minLuku =0;
// Lasketaan arvattava luku. Tieto siitä tallennetaan arvattavaLuku-muuttujaan.
//let arvattavaLuku = Math.floor(Math.random() * (maxLuku +1 - minLuku)) + minLuku);
arvattavaLuku = Math.floor(Math.random() * (maxLuku +1 - minLuku) + minLuku);
// Tulostetaan arvattava luku konsoliin.
console.log(arvattavaLuku);
// Luodaan tapahtuma arvattavaLuku, jossa muuttuja välitetän eteenpäin käyttöliittymään (html-sivu) yhdessä arvaaLuku-funktion kanssa (viittaus käyttöliittymän HTML:ssä olevaan arvaaLuku-funktioon.
// Emitointirivi kommentointiin, koska tieto tallennetaan backend-sovelluksessa socket.emit('arvattavaLuku', arvaaLuku);


}

/* Metodit, joilla pelin voittajan kertominen. Alun perin metodin nimio li kayttajaVoittaaPelin, mutta järkevyyden vuoksi käytetään tarkistaTulos-nimeä, koska se sopii paremmin funktion tarkoitukseen. Parametreina data (käyttäjän vastaus) ja socket, koska muuten tarkistaTulos-funktio ei pysty löytämään sitä.
*/
function tarkistaTulos(data, socket) {
/* Jos käyttäjän luku on pienempi, frontendiin lähetetään viesti "Ajattelen suurempaa lukua". Alun perin funktio oli socket.on-tyyppienn. */
if (data < arvattavaLuku) {
    //Tulostetaan olio, jolla arvona on "ajattelen suurempaa lukua"-viesti. Käyttäjät eivät näe noistensa numeroarvauksia socket.emitillä dataa läheetettäessä. Muutetaan muotoon osckets.io.
    io.sockets.emit('message_to_client', {message: 'Pelaajan' + socket.pelaajanNimi + 'vastaus: ' + data + '. Ajattelen suurempaa lukua.'});
}

/* Jos Käyttäjän arvaama luku (data) uku on suurempi kuin tietokoneen arpoma luku (arvattavaLuku-muuttuja), frontendiin lähetetään emitoimalla viesti "Ajattelen pienempää lukua. */
if (data > arvattavaLuku) {
//Tulostetaan olio, jolla arvona on "ajattelenpienempää lukua"-viesti.
    io.sockets.emit('message_to_client', {message: 'Pelaajan ' + socket.pelaajanNimi + ' vastaus: ' + data + '. Ajattelen pienempää lukua.'});
}

/* Muutoin tulostetaan käyttäjä, joka voitti pelin, kun käyttäjän vastaus ja koneen arpoma luku ovat yhtäsuuret. Käytetään löysää yhtäläisyyttä (loose equality), jolloin tarkistetaan vain muuttujan arvo, ei tyyppiä. */
if (data == arvattavaLuku) {

//Tulostetaan olio, jolla arvona on "a-viesti. Se tulostetaan kaikille pelaajille socket.io-kirjaston io-luokan sockets-olion metodia emit ja antamalla sille parametriksi message_to_server ja tulostettava viesti.
    io.sockets.emit('message_to_client', {message: 'Pelaaja ' + socket.pelaajanNimi + ' voitti pelin arvauksella ' + data + '!'});
// Tulostetaan tieto uuden kierroksen alkamisesta. Se tallennetaan olioon (avain message ja arvon aviesti asiasta). Toteutuksena jälleen io-luokan kautta ktusutun sockets-olion emit-metodin kutsuminen, jonka parametreja siis message_to_client ja toisena parametrina message-olio.
io.sockets.emit('message_to_client', {message: 'Uusi kierros alkaa. Arvotaan luku väliltä 0-20.'});
// Arvotaan uusi luku kutsumalla tässä palvelintiedostossa (server.js) arvoLuku-funktiota arvoLuku.
arvoLuku();
}

}
