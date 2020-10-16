/* Huomautus: tarvitset tämän sovelluksen käynnistämiseen Noden ja ReadLineSync-kirjaston. Kirjoita Noden asennuksen jälkeen komentokehotteessa (kuten Windowsin komentokehote) komento "npm install readline-sync" ilman lainausmerkkejä.
Please note: In order to run this application, you will need the node JavaScript engine and the readline-sync module. After installing the NodeJS, please type the following command in a terminal (such as on the command prompt of Windows): "npm install readline-sync" without quotes. The comments of this programme are in Finnish. */
// Otetaan readlineSync-kirjasto käyttöön
const readlineSync = require('readline-sync');
// Alustetaan vakiomuuttujat minLuku ja maxLuku.
const minLuku = 1;
const maxLuku = 30;
// Alustetaan muuttuja arvattava, jossa on tiedot käyttäjän syöttämästä luvusta
let arvattava = 0;
// Alustetaan käyttäjän vastauksen sisältävä muuttuja arvaus
let arvaus = 0;
// Alustetaan muuttuja arvaustenLkm, joka pitää yllä tietoa arvausten lukumäärästä.
let arvaustenLkm = 0;
// luodaan silmukka, joka tioimii niin kauan kunnes 
do
{
// Tulostetaan tieto käyttäjälle pelistä.
console.log('*** Numeron arvaus (Guess The Number) ***');
// Tulostetaan kysymys käyttäjälle (console.log)
console.log('Ajattelen lukua väliltä 1-30. Tehtäväsi on arvata se mahdollisimman nopeasti.');
// Asetetaan arvaustenLkm-muuttujan arvo nollaksi
arvaustenLkm = 0;
/* Arvotaan uusi numero arvattava-muuttujaan, joka sisältää tietokoneohjelman arpoman luvun väliltä 1-30. Se toteutetaan lausekkeella, jossa Math.floor-metodi saa parametrikseen Math.random()-metodin, jonka jälkeen tehdään seuraava laskutoimitus: sulkujen sisään kirjoitetaan laskutoimitus, joka lisää maxLuku-muuttujaan yhden ja vähentää minLuku-muuttujan arvon. Tämän jälkeen edelliseen laskutoimituksen moudusamaan summaan  lisätään uudelleen minLuku-muuttujan arvo. */
arvattava = Math.floor(Math.random() * (maxLuku + 1 - minLuku)) + minLuku;
// luodaan toistosilmukka, jossa tutkitaan henkilön syöttämää arvoa. Ehtona on , että jos silmukka on totta, (while (true)), se suoritetaan.Muutoin silmukkaan ei mennä lainkaan.
while (true)
{
// Tulostetaan kysymys käyttäjälle, jossa häntä kehotetaan syöttämään luku väliltä 1-30. Käytännössä arvaus-muuttujan arvo on seuraava: readline-sync-kirjastossa olevan .question-metodin avulla. Parametriksi annetaan heittomerkkien sisään haluttu teksti. 
arvaus = readlineSync.question('Anna luku alueelta 1-30. ');

// muunnetaankäyttäjän syöte numeroksi Number-luokan avulla. 
arvaus = Number(arvaus);
// luodaan muuttujaj kelvollinen, jossa pidetään yllä tietoa käyttäjän syötteen kelvollisuudesta (onko numero). Määritellään sille uusi totuusarvo (vastauksen tulee olla numero (typeOf-metodi), se ei saa olla NAN (Not a Number) ja sen tulee olla suurempi tai yhtäsuuri kuin 0).
let kelvollinen = (typeof(arvaus) === 'number' && !isNaN(arvaus) && arvaus >= 1 && arvaus <= 30);
// if-lause, jossa tutkitaan käyttäjän syötteen kelvollisuutta
if (! kelvollinen)
{
process.stdout.write('Älä pelleile, numeron pitää olla väliltä 1-30.');
}
// muutoin osio
else
{
// kasvatetaan arvaustenLkm-muuttujan arvoa yhdellä.
arvaustenLkm ++;

// verrataan onko käyttäjän arvaus (arvaus-muuttujan arvo) yhtäsuuri, suurempi tai pienempi kkuin tietokoneen arpoma luku (arvattava-muuttujan arvo)
// ensimmäinen ehto: arvattava ja arvaus-muuttujien arvot yhtäsuuret
if (arvattava === arvaus)
{
/* Tulostus console.log:lla onnistuneesta arvauksesta. Tuloksessa on siis tekstiä (heittomerkkien sisässä oleva teksti), arvattava-muuttujan nimi, sitten taas heittomerkeissä haluttu teksti, sitten arvaustenLkm-muuttuja ja lopuksi taas tekstiä. Ne on yhdistetty toisiinsa plus-operaattorilla (+) */
console.log('Hienoa! Luku oli ' + arvattava + '. Arvasit sen oikein ' + arvaustenLkm + ' yrittämällä.');
// Asetetaan arvaustenLkm-muuttujan arvo nollaksi, jotta peli voi alkaa alusta
Arvausten_lkm =0;
// Ulos silmukasta break:lla
break;
}
// Toinen ehto: arvattava suurempi kuin arvaus
if (arvattava > arvaus)
{
// tulostus, jossa teksti "ajattelen suurempaa lukua."
console.log('Ajattelen suurempaa lukua.');
}
// Kolmas ehto: jos arvattava pienempi kuin arvaus
if (arvattava < arvaus)
{
// Tulostetaan console.log:lla ilmoitus "Ajattelen pienempää lukua".
console.log('Ajattelen pienempää lukua.');
}

}

}
}
// wile... do-rakenteen while-ehto, päättyy puiolipisteeseen (ehto siis: kun käyttäjä on painanut n:ää silmukka päättyy. Muutoin sen pöritys jatkuu.
while (readlineSync.keyInYNStrict('Uusi peli?'));