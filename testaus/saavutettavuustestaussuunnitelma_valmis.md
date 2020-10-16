# Lintukoto-projektin saavutettavuustestaussuunnitelma
Tekijä: Juho Tuomainen
ryhmä: Lintukoto
Ryhmän jäsenet:
Juho Tuomainen
Rasmus Savolainen
Henri Parviainen
Siina Kaakinen
Annika Manninen
Tuukka Neijonen

## Johdanto
### Projekti lyhyesti
Projektin tavoitteena on tehdä web-sovellus, jonka tavoitteena on helpottaa opiskelijoiden ajanhallintaa visualisoimalla opiskelijan ajankäyttö ja opintojaksot. Lisäksi sovellukseen kuuluu Henkipöllö, joka opastaa opiskelijaa tarvittaessa opinnoissa niiden edistämiseksi.

### Dokumentin tarkoitus
Tämän dokumentin tarkoituksena on kuvata Lintukoto-projektin saavutettavuustestausta eri näkökulmista hyödyntäen Verkkosivujen saavutettavuusohjeet -standardia (engl. Web Content Accessibility Guidelines, WCAG 2.1). Standardin englanninkielinen versio löytyy osoitteesta [https://www.w3.org/TR/2018/REC-WCAG21-20180605/](https://www.w3.org/TR/2018/REC-WCAG21-20180605/).
Suomenkielinen, virallinen käännös löytyy osoitteesta [https://www.w3.org/Translations/WCAG21-fi/](https://www.w3.org/Translations/WCAG21-fi/). Standardi koostuu ohjeista ja onnistumiskriteereistä, jotka on jaettu neljän perusarvon (hallittava, havaittava, ymmärrettävä ja toimintavarma) ympärille. Lisäksi mukana on ohjeidenmukaisuutta koskevia asioita, sanasto ja kappale, jossa selitetään syötteiden tarkoitukset käyttöliittymäkomponenteissa. Saavutettavuustestauksen tavoitteena on parantaa sovelluksen saavutettavuutta niin, että priorisoinnin vuoksi seuraavat saavutettavuustason A määrityksistä toteutuisivat: Verkkosisällön saavutettavuusohjeiden (WCAG) ohje 1.1 ("Tekstivastineet"), jossa suositellaan laittamaan tekstivastineet muille kuin tekstielementeille (kuten kuville), ja ohjeen 2.5 "Syötetavat" toteutuisi siten, että kaikissa tarpeellisiksi katsotuissa sivun elementeissä on asianmukaiset nimilapputagit (<label>-elementti, ohjeen 2.5 onnistumiskriteeri "2.5.3 Nimilappu nimessä", "Label in Name"). Lisäksi olisi järkevää, jos standardin ohjeessa 1.2 oleva kriteeri 1.2.6 ("Määrittele tarkoitus, "Identify purpose") toteutuisi.

Suunnitelmassa kerrotaan testattavat ominaisuudet eri testausluokkien/kategorioiden avulla, joilla on omat alaluokkansa. Käytännössä testataan visuaalisia ja ei-visuaalisia elementtejä. Ensimmäiseen kategoriaan kuuluu muun muassa käyttöliittymän visuaalinen selkeys, kontrastit, responsiivisuus (tekstin koon asianmukainen muuttuminen sivun kokoa muutettaessa) ja asian testaaminen muilla tavoin, kuten Nielsenin heuristiikkaoppeja hyödyntäen. Ei-visuaalisiin testausmenetelmiin kuuluu kaikki sellainen toiminta, jossa näköä ei tarvita tai sen merkitys on vähäisempi, kuten sovelluksen testaus näppäimistöllä ja ruudunlukuohjelman avulla. Kaikki sovelluksen näkymät tullaan testaamaan samoja menetelmiä hyödyntäen: manuaalisen havainnoinnin jälkeen tehdään asiaa täydentävä ja tarkentava konetestaus, jolloin asiasta muodostuu tarkempi kokonaiskuva.

## Testistrategia
Tässä luvussa kuvataan lyhyesti käytettävä testistrategia eli manuaalisen havainnointitestauksen (Exploratory testing, tutkiva testaus) ja konetestauksen (WAVE-testaus) menetelmiä. Erityisesti tarkkaillaan sitä, noudatetaanko Lintukoto-sovelluksessa WCAG 2.1:tä. Tavoitteena olisi, että ainakin osa saavutettavuustason A asioista täyttyisi (Ks. "Lyhyt yleiskuvaus" otsikko ylempänä). 

### Testin kohteet
Kaikki sovelluksen näkymät (Kirjautumis-, Kalenteri, -Aktiiviset kurssit-, Suoritetut kurssit- ja Asetukset-sivu) testataan seuraavalla tavalla:

- Visuaalinen testaus:
  - Kaikki sovelluksenn sivuilla olevat elementit testataan visuaalisesti näön avulla ja siihen yhdistetään koneellisen testauksen tulokset
- Ei-visuaalinen testaus
  - Kaikki sovelluksen näkymien toiminta testataan ruudunlukuohjelmalla (JAWS ja NVDA)

### Testaustehtävät
Tässä dokumentin aliluvussa on lueteltu kaikki testeihin liittyvät tehtävät sekä ne tehtävät, joita ei testata aika- tai muiden rajoitusten vuoksi.
#### Grafiikka/Visuaalinen testaus
##### Sovelluksen ulkoasu
- Kaikkien sivujen kohdalla toistetaan seuraavat toimenpiteet:
  - Elementtien sijoittelun tarkistus: Ovatko elementit selkeästi sijoitettu ja loogisessa, luonnollisessa järjestyksessä?
  - STest1: Sivuston visuaaliset elementit eivät ole loogisessa järjestyksessä
  - Tekstin koko: Muuttuuko teksti asianmukaisesti?
  - Graafisen sisällön responsiivisuus: onko graafinen sisältö responsiivista?
##### Testaus hiirellä
- Kaikki sivuja testattaessa toistetaan seuraavat toimenpiteet:
  - Elementtien havainnointi niitä klikattaessa:
   - Siirtyykö hiirikohdistus testitapauksissa määriteltyihin kohtiin?  
- Näkymäkohtaiset testitehtävät:
  - Vetämisen ja pudottamisen testaus Kalenteri-näkymässä: Tehtävän vetäminen tehtävälistaan
  - Erot: Käyttäytyvätkö  hiirellä testatut sivut eri tavoin kohdistuksen muuttuessa?


#### Ei-visuaalinen testaus
##### Testaus näppäimistöllä
- Kaikkien näkymien (tällä hetkellä 6 kpl) kohdalla toistetaan samat toimenpiteet:
  - Sivunn toiminta sarkainta käytettäessä (kohdistimen siirto testitapausten mukaan)
  - Näkymän toiminta nuolinäppäimiä käytettäessä: Siirtyykö kohdistus elementistä toiseen?
  - Näkymän toiminta pikanäppäimiä käytettäessä: Toimivatko käyttöohjeissa mainitut pikanäppäimet oikein?

##### Sivujen testaus ruudunlukuohjelmalla
Kaikille sivuille suoritetaan seuraavat testitoimenpiteet, jotka toistetaan kahden ruudunlukuohjelman (JAWSin ja NVDA:n) kohdalla:
- Sivunn testaus ruudunlukuohjelmalla nuolinäppäimiä käytettäessä, sivun selailu ylhäältä alas: Onko ruudunlukuohjelman antama tuloste selkeä ja ymmärrettävä sen käyttäjälle? (mahdollisesti ajan salliessa tuloksia verrataan visuaalisiin testeihin ja raportoidaan visuaalisen ja ei-visuaalisen testauksen eroista)
- Sivunn testaus ruudunlukuohjelmalla Sarkain-näppäintä käytettäessä: Onko ruudunlukuohjelman antama tuloste selkeä ja ymmärrettävä sen käyttäjälle? Eroaako ruudunlukuohjelman antama tuloste nuolinäppäintestissä saadusta?
- Sivun testaus ruudunlukuohjelmaa käytettäessä ruudunlukuohjelman navigointikomennoilla (kuten e, joka siirtää seuraavaan ja edelliseen lomakekenttään): Onko ruudunlukuohjelman antama tuloste selkeä ja ymmärrettävä sen käyttäjälle? Kuinka ruudunlukijapikanäppäintestin tulos eroaa Sarkain-näppäimellä esitetystä tavasta?
- Ruudunlukuohjelmien tulosteista tai omista havainnoista saatujen tulosten vertailu ja analysointi:
  - Vertailu: Mitkä asiat ruudunlukuohjelmat tulkitsevat eri tavoin näkymää selattaessa?
    - Analyysi ja johtopäätökset: Mitä tuloksista voidaan päätellä? Mistä ongelma voisi johtua?
##### Sivustojen konetestaus (WAVE)
Kaikkien sivujen kohdalla (kuusi kappaletta) suoritetaan seuraavat testitoimenpiteet WebAim:in kehittämällä WAVE-työkalulla, joka tarkastelee asioita WCAG-kriteeristön pohjalta::
- Käynnistetään WAVE (tekee automaattisesti analyysin sivusta)
- Tulosten tarkastelu (Summary-välilehti): Montako virhettä, hälytystä, omminaisuutta, kontrastivirhettä ym. löytyi?
- Pääkohtien (Summary-kohdan asiat) merkintä muistiin
- Structure-välilehti: 
  - Valittujen yksityiskohtien (luvut, joissa eniten ongelmia, kuten virheet ja/tai hälytykset) kirjaus muistiin, ajan salliessa muutkin asiat kirjattava ylös
  - Sivuista otetut ruudunkaappaukset ja/tai html-versiot, joissa  näkyy WAVE-työkalun näyttämät asiat (kuten virheet ja hälytykset)

### Testattavat ominaisuudet

Lintukoto-ryhmän tietoon saatetun ja hyväksi havaitun priorisointikäytännön vuoksi toteutetaan vain WAVE- testaus ja ruudunlukuohjelmalla toteutettava, manuaalinen testaus eikä siihen käytetä mitään automatisaatiotyökaluja. Lisäksi nämä testausmuodot ovat käytäntöön soveltuvia myös sen vuoksi, että testaajalla on kokemusta sekä ruudunlukuohjelmista että WAVE-työkalun käytöstä. 

### Ei-testattavat ominaisuudet
Testaajan ja tiimin sopiman prioriteettikäntännön vuoksi ei testata WAVE-työkalun ulkopuolisia, visuaalisia/graafisia asioita, kuten manuaalista, havainnointiin perustuvaa saavutettavuustestausta, sillä nämä asiat eivät ole olennaisimpia eivätkä realistisia toteuttaa TiCorporate Demo Lab -opintojaksolla.

### Lähestymistapa
- Testitehtävät on lueteltu "Testistrategia"-aliluvun "testitehtävät" -osiossa.
- Lähestymistavat: manuaalinen, tutkiva testaus (ruudunlukuohjelmien tulosten havainnointi ja WAVE-testaus sekä niiden analysointi ja bugien merkitseminen Excel-taulukkoon)
- Ohjelmistot: 
 - Ruudunlukuohjelmat: JAWS 2018.1881.30, NVDA 2019.1.1 
 - Internet-selaimet: Mozilla Firefox (kuluttajaversio) 70.0.3, 
 - Käyttöjärjestelmät: 64-bittinen Windows 10 Pro (uusin  versio) 
- Muut ohjelmistot: Angular V9, Nodejs 10.16.3, MonboDB Atlas (tietokanta pilvipalvelussa)
- Laitteisto:
 - Muut apuvälineet: Active Star 40 (pistenäyttö, HelpTech GMBH)
- työkalut:
 - WAVE-lisäosa, versio 3.0.4
- Rajoitukset: aikarajoitteet (aikaa enää yksi kokonainen sprintti), testaajan puutteellinen osaamistaito ja aikarajoitteiden vuoksi rajoitettu testaus

### Hyväksymiskriteerit

Koska saavutettavuus on erityinen, oma testausmuoto muuhun ohjelmiston testaukseen verrattuna, sille ei määritellä erillisiä hyväksymiskriteereitä, vaikka asiasta on tehty erillinen käyttäjäkertomus.

### Testauksen keskeytys ja jatkaminen
Saavutettavuustestaaja päättää itse testauksen keskeyttämisestä ja jatkamisesta, mutta ennen sitä hänen tulee ilmoittaa selkeästi ja todelliseen tietoon pohjautuva, perusteltu päätös siitä muille ryhmän jäsenille. 

## Tuotokset
Lintukoto-projektin saavutettavuustestauksen aikana tuotetaan seuraavat tuotokset:
- Testisuunnitelma: tämä dokumentti, joka sisältää tiedon korkean tason saavutettavuustestauksesta
- Saavutettavuustestausraportti: dokumentti, joka sisältää testien tulokset ja analysin
- Sprinttikohtaiset (kahden viikon välein ilmestyvät) testisuunnitelmat: niissä kerrotaan, mitä asioita olisi tarkoitus testata sprintin aikana

Koska asioita testataan tutkivan testauksen kautta omilla, ruudunlukuohjelman käyttäytymisestä ja/tai puheesta otetuilla näytteillä ja WAVE-testauksen avulla, tuloksissa ei tulla tällä kertaa käyttämään lokien sisältöä. Jos projektia jatketaan kevään jälkeen TiCorporate Product Lab -opintojaksolla, jolla sovelluksesta tehdään tuote, saavutettavuustestausta jatketaan syvällisempään suuntaan ja tuolloin testien analysoinnissa ja tarkastelussa käytetään myös lokien sisältöä.

## Ympäristö
Testit suoritetaan seuraavassa testiympäristössä:
- Työkalut: 
 - WAVE-työkalu, versio 3.0.4
 - Ruudunlukuohjelmat: JAWS 2018.1881.30, NVDA 2019.1.1 
 - Internet-selaimet: Mozilla Firefox (kuluttajaversio) 70.0.3, 
 - Käyttöjärjestelmät: 64-bittinen Windows 10 Pro (uusin  versio) 
 - Muut ohjelmistot: Angular V9, Nodejs 10.16.3, MonboDB Atlas (tietokanta pilvipalvelussa)
- Laitteisto: 
 - Muut apuvälineet: Active Star 40 (pistenäyttö, HelpTech GMBH)

## Velvollisuudet/vastuut
Olemme sopineet, että saavutettavuustestaaja Juho hoitaa saavutettavuustestauksen, joten se on hänen velvollisuutensa ja hän on myös vastuussa siitä. Kehittäjillä on vastuu asiallisesta koodauksesta ja heidän tulee myös toimittaa testattavaksi asianmukaista koodia. Lisäksi testaajilla on oikeus päästä katsomaan sprintin työlistausta (Sprint Packlog) ja tuotelistausta (Product Packlog). Koska Lintukoto-ryhmän jäsenillä ei vielä ole mitään sopimuksia kolmansien osapuolien - lähinnä koulujen ja/tai oppilaitosten - kanssa, projektiin ei liity niiden velvollisuuksia tai vastuita.

## Osaaminen ja sen hankinta
Saavutettavuustestauksessa tulee olla ainakin perustiedot siitä, miten sitä tehdään, minkä lisäksi tulisi uskoa omiin kykyihin. Lisäksi WAVE-työkalun ja ruudunlukuohjelmien peruskäyttö tulisi hallita, minkä saavutettavuustestaaja osaa jo sujuvasti. Osaamista tulisi hankkia seuraavilla tavoilla:
- Perehtymällä WCAG:hen
- Etsimällä tietoa netistä saavutettavuustestausmenetelmiin

## Aikataulu
- Ensimmäinen saavutettavuustestaussprintti (9.3-20.3.2020): todennäköisesti suurin osa saavutettavuusbugeista löydetään
- Toinen saavutettavuustestaussprintti (23.3-3.4.2020): jäljelle jäävien bugien löytäminen ja edellisten havainnointi (taantumatestaus).
- Kolmas (ja viimeinen) saavutettavuustestaussprintti (6.4.2020-31.4.2020): jäljelle jäävien bugien havainti ja edellisten havainnointi (taantumatestaus)

## Riskit
Seuraavat riskit liittyvät projektiin;
- Tekijä väsyy (pisteytys asteikolla 1-10 = 4):
 - Seuraukset: Testaus jää tekemättä kokonaan tai osittain
 - Minimointi: Testaaja pitää arjen rutiineista kiinni esimerkiksi nukkumalla ja syömällä säännöllisesti sekä tekemällä vapaa-ajan asioita, kuten ulkoilua ja kielten opiskelua
- Koronavirus vaikuttaa testaajan ympäristöön ja motivaatioon (toteutunut, vaikuttavuus asteikolla 1-10 =10)
 - Seuraukset: Testaajan laskeneen motivaation seurauksena hänen työtahtinsa hidastuu
 - Minimointi: Testaaja pitää kiinni Matarankadulla hyvin sujuneista rutiineista eikä anna tilanteen hidastaa hänen työskentelyään

## Olettamukset ja riippuvuudet
Testausta suunniteltaessa on tehty seuraavat olettamukset:
- Koska saavutettavuutta testataan jatkuvasti, se jatkuu koko projektin loppuun asti. Koska aikaa on kuitenkin rajoitetusti, oletus on, että suurin osa saavutettavuusvioista (bugeista) havaitaan kuluvan sprintin aikana.
- Mahdolliset havaitsematta jääneet viat havaitaan seuraavassa/seuraavissa sprinteissä tilanteen mukaan

Näiden olettamusten riippuvuus on seuraava: Mitä enemmän bugeja havaitaan ensimmäisessä mainituista sprinteistä, sitä vähemmän niitä havaitaan seuraavassa/seuraavissa sprinteissä. Jos sitä vastoin ensimmäisessä sprintissä havaitaan vähemmän bugeja,  niitä havaitaan todennäköisesti enemmän sprintin aikana. Lisäksi jos saavutettavuustestaaja väsyy, testauksen laatu kärsii ja vauhti hidastuu, mikä vaikuttaa myös negatiivisesti lopputulokseen.

