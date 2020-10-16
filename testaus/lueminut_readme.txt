Testaus-opintojakso, TiCorporate VII (Kevät 2020)
Juho Tuomainen (HTK18S1)

Alkuperäiset tavoitteet
Alkuperäisenä tavoitteena oli perehtyä normaaliin- ja saavutettavuustestaukseen, jotta minulla olisi osaamista kummastakin osa-alueesta. Käytännössä saavutettavuustestaukseen perehtymiseen meni kuitenkin sen verran aikaa, etten ehtinyt ja muistanut perehtyä normaaliin testaukseen käytännössä. Sen sijaan luin testauskirjan ja osallistuin sen pohjalta pidettyyn akvaariokeskusteluun 14.2.2020. Perehdyin myös itsenäisesti BVA- ja EP-analysoinnin perusteisiin opettajalta saamieni linkkien kautta. Sovin toisen testaajan kanssa, että hän tekee sovelluksen toimintaan ja ulkoasuun liittyvän testauksen ja minä saavutettavuustestauksen, jotta pystyisin oppimaan jotakin testauksesta. Näin ollen toinen testaaja kirjoitti suurimmaksi osaksi yleisen testaussuunnitelman ja -raportin, mutta itse lisäsin siihen saavutettavuuskriteeristöä joihinkin kohtiin - toiminnallisiin asioihin. Mielestäni näin kannatti tehdä, jotta muille ja minulle tulisi selkeä käsitys siitä, että saavutettavuustestaus on osa projektin testausta.

Saavutettavuustestauksessa opitut asiat
Tein saavutettavuustestausta, minkä perusteella kirjoitin 11-sivuisen saavutettavuustestausraportin. Siinä oli ruudunlukuohjelmasta (NVDA:n puheesta) otettuja näytteitä, itse tekemiäni havaintoja ja WAVE-saavutettavuustyökalun tekemän analyysin tulokset. Sen perusteella voin sanoa, että testaukseni oli tehokasta, vaikken kirjoittanutkaan saavutettavuustestaussuunnitelmaa etu- vaan jälkikäteen. Se vastasi tiedoiltaan ja tarkkuudeltaan korkean tason testisuunnitelmaa (HLTP eli High Level Test Plan). Tein jälkikäteen myös esimerkin kolmossprintin saavutettavuustestaussuunnitelmasta, jota en siis virallisesti toteuttanut, sillä en testannut testitapauksia ollenkaan. Tähän tosin vaikutti merkittävästi myös se, etten tiennyt testauksen aloitushetkellä koronavirustilanteen vaikutusta projektiin, mikä toteutui 13.3.2020 alkaen. Lisäksi liiallinen hätiköinti johtui siitä, etten tiennyt, kuinka paljon testaus ja bugien raportointi veisi aikaa. Nyt voin sanoa, että kahden viikon sprinttiperiaatteella pienen  sovelluksen (kuten Lintukoto) saavutettavuustestaukseen tarvitaan aikaa puolitoista tai kaksi sprinttiä. Kuukauden sprinttitahdilla sen pystyisi tekemään yhden sprintin aikana.

Kirjoitin myös osittain ennen testausta ja myös sen jälkeen käyttäjäkertomuksista luotuihin testitapauksiin saavutettavuuskriteereitä. Seuraavassa on esimerkkinäyte testisuunnitelmasta löytyvästä, käyttäjäkertomukseen 6 (US 6) liittyvä testitapaus 6.2: "Arkistosivulla tulee näkyä myös mittari sille missä suhteessa opintoni edistyvät oletusaikaan. Se näkyy myös näppäimistöä tai ruudunlukuohjelmaa käyttävälle henkilölle."
Seuraavassa on esimerkit löytämistäni bugeista (Major, Minor ja Feature). Tiedot on otettu suoraan Excel-taulukosta, joka sisälsi sekä testisuunnitelman (välilehti 1) että bugiraportin (välilehti 2). Merkintä SBUG bugin id:n edessä tarkoittaa sitä, että se liittyy saavutettavuuteen:
Merkittävä bugi (Major,löytyi kaikilta sivuilta):
"
-Bugin ID: SBUG1.1
-Käyttäjäkertomuksesta tehty testitapaus, johon liittyy: 11.1
-Kuvaus: Kaikilta sivuilta puuttuu <label>-elementtejä (vika korjaantunee SyncFusionin saavutettavuusohjeiden lukemisen jälkeen). Kalenteri-sivulla niitä on 10, Aktiiviset kurssit -sivulla 189 ja Asetukset-sivulla 11 kappaletta.
-Vaikuttavuus: MAJOR
-Tila: Osittain korjattu
-Vaikuttavuuden selitys: MAJOR = Merkittävä
"
Tämän bugin korjaamisen haasteena on se, että <label> ym. elementtien laittaminen sivulle sotki angular-pohjaista käyttöliittymää niin, ettei näkevä käyttäjä saanut asiasta selvää. Esimerkiksi kun sivu näytti ruudunlukuohjelman näkökulmasta oikein hyvältä, näkevät kolleegani kertoivat valintaruutujen olevan niille kuuluvan tekstin päällä, minkä vuoksi käyttöliittymän käyttö näkevänä oli vaikeaa. Onneksi bugi on nyt korjattu siten, että käyttöliittymä näyttää siistiltä. Kaikkia bugissa kuvattuja ongelmia ei pystytty korjaamaan, koska TiCorporaten aika ei enää riitä siihen.

Esimerkki pienestä bugista (minor, löytyi kaikilta sivuilta):
"
-Bugin ID: SBUG1.6
-Käyttäjäkertomuksesta tehty testitapaus, johon liittyy: 11.6
-Kuvaus: Kaikkien sivujen (Kalenteri, Aktiiviset kurssit, Suritetut kurssit, Kauppa, Asetukset ja kirjautumissivu) otsikko ei ole havainnollinen (esimerkiksi Asetukset-sivulla "Asetukset | Lintukoto").
-Vaikuttavuus: MINOR
-Tila: Korjaamatta
-Vaikuttavuuden selitys: MINOR = Pieni
"

Esimerkki ominaisuusbugista (feature, löytyi Suoritetut kurssit -sivulta):
"
-Bugin ID: SBUG4.4
-Käyttäjäkertomuksesta tehty testitapaus, johon liittyy: 11.18
-Kuvaus: Puutteellisesti merkitty lang-elementti (eri kuin koko sivun <html lang>-elementti).
-Vaikuttavuus: FEATURE
-Tila: Korjaamatta
-Vaikuttavuuden selitys: Feature = Ominaisuus
"

WCAG 2.1
Testauksen ohella perehdyin WCAG-standardiin (Web Content Accessibility Guidelines eli Verkkosisällön saavutettavuusohjeet) ja tein siitä muistiinpanot. Niissä oli hahmoteltu se, mitä saavutettavuusstandardilla tarkoitetaan, ketkä sitä tarvitsevat ja mitä osioita siihen kuuluu. Kirjoitin myös ylös tärkeiksi määrittelemieni kohtien (huomautuksia sisältäneiden, ruudunlukuohjelman käyttäjään liittyvien kohtien) sisältöä. Nyt minulla on peruskäsitys WCAG:stä teoriassa ja hieman myös käytännössä, sillä löysin 46 saavutettavuusbugia ja olen korjannut niistä yhtä (SBUG1.1). Olen oppinut kyseisen pubin korjaamisen myötä - joka on siis valitettavasti vielä kesken - sen, että se on erittäin haastavaa ja siinä pitää huomioida monta asiaa, kuten oikea <fieldset> ja <legend>-tagien järjestys. Raportoin kaikki löytämäni bugit yhteisen testareiden käytänteen mukaisesti Excel-taulukkoon. Tulevissa projekteissa kannattaa käyttää toista formaattia, sillä OneDriveen tallennettu ja työpöytäsovelluksesta muokattu Excel-taulukko ei toiminut ruudunlukuohjelmalla kunnolla, sillä sen muokkaus oli takkuista ja varsinkin JAWS-ruudunlukuohjelma kaatui usein, kun pilvipalvelussa olevaa taulukkoa muokattiin.
Seuraava näyte on WCAG-ohjeistuksen pohjalta tekemistäni muistiinpanoista. Koska nykyisiä WCAG:n onnisvumiskriteereitä ei ollut järjestetty saavutettavuustasoittain (alimmasta ylimpään A, AA ja AAA-tasot), tein itse tällaisen tasoluokituksen. Olen ohjeen 1.2 toteutuminen kaikilla tasoilla eli olen ryhmitellyt onnistumiskriteerit saavutettavuustasoihin. Olen käyttänyt sen pohjana suomenkielistä WCAG:n tekstiä (https://www.w3.org/Translations/WCAG21-fi/) ja mukana on myös termejä englanninkielisestä WCAG:stä (https://www.w3.org/TR/2018/REC-WCAG21-20180605/). (linkkien toimivuus tarkistettu 4.5.2020)
"
--Taso A: onnistumisriteerit 1.2.1 ("Pelkkä audio tai pelkkä video (tallennettu)" ("Audio-only and Video-only (Prerecorded)"), 1.2.2 ("Tekstitys (tallennettu)", "Captions (Prerecorded)"") 1.2.3 "Kuvailutulkkaus tai mediavastine (tallennettu)", "Audio Description or Media Alternative (Prerecorded)"
--Taso AA: onnistumiskriteerit 1.2.4 ("Tekstitys suorissa lähetyksissä", "Captions (Live)") ja 1.2.5 ("Kuvailutulkkaus (tallennettu)", "Audio Description (Prerecorded)")
--Taso AAA: onnistumiskriteerit 1.2.6 ("Viittomakieli (tallennettu)", "Sign Language (Prerecorded)"), 1.2.7 ("Pidennetty kuvailutulkkaus (tallennettu)", "Extended Audio Description (Prerecorded)", 1.2.8 ("Mediavastine (tallennettu)", 
"

Yhteenveto osaamisesta
Olen kokonaisuudessaan melko tyytyväinen testaustuloksiin, vaikka minua harmittaa alokasmainen virheiden tekeminen - siis asioissa, joissa en alun perin edes odottanutkaantekeväni virheitä, kuten asioiden toteutus ennen niiden suunnittelua. Täytyy toki muistaa, että tein asioita ensimmäistä kertaa ja että muissa, yksinkertaisissa asioissa, kuten nettisivujen siirrossa palvelimelle, meni enemmän aikaa odotuksiini verrattuna. Uskon kuitenkin, että olen suorittanut testausosion hyväksytysti.
HUOM: Tässä palautuskansiossa ei ole konseptitestiraporttia eikä normaalin (muun kuin saavutettavuutta testaavan) testauksen testiraportteja tai muita dokumentteja normaalista testauksesta, sillä toinen testaaja palauttaa ne omassa .zip-tiedostossaan. Sen vuoksi oma .zip-palautukseni sisältää vain saavutettavuustestaukseen liittyvät asiat.
