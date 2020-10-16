testisuunnitelma
Projektin id: Lintukoto_1
Versio: 0.0.0
12-14.3.2020

sprintti 3 (9.3-20.3.2020)

## Yleiskuvaus
Tämä dokumentti sisältää testitapauksia, joita olisi voitu testata Lintukoto-sovellusta kolmannessa sprintissä, joka alkoi 9.3.2020 ja päättyi 23.3.2020. Siinä testattiin kuitenkin negatiivisisssa testitapauksissa käsiteltyjä asioita, vaikkei testitapauksia testattu.

## Saavutettavuustestauksen testitapaukset
Huomautus: S-merkintä tapauksen edessä tarkoittaa sitä, että kyseinen testittapaus liittyy saavutettavuuteen. Ne on luokiteltu sivukohtaisesti (S1-S6), jotka vastaavat Kalenteri-, Aktiiviset kurssit-, Henkipöllön pesä-, Suoritetut kurssit--, Asetukset- ja Kirjautumissivua. Kaikki tapaukset testataan parhaaksi katsotuilla ruudunlukuohhelmilla (tässä JAWS- ja NVDA).


S1 (Kalenteri-sivu)
- S1.1 (Sibulla ei ole <label>-elementtejä 
 - S1.1.1. Ruudunlukuohjelma 1 (JAWS)
 - S1.1.2. Ruudunlukuohjelma 2 (NVDA)
- S1.2 (Sivun otsikko-rakenne on puutteellinen) 
 - S1.2.1. Ruudunlukuohjelma 1 (JAWS)
 - S1.2.2. Ruudunlukuohjelma 2 (NVDA)
- S1.3 (Sivulla olevista kuvista puuttuu ALT-teksti) 
 - S1.3.1. Ruudunlukuohjelma 1 (JAWS)
 - S1.3.2. Ruudunlukuohjelma 2 (NVDA)
- S1.4 (Sivulla on muita puutteellisia elementtejä (kuten linkkejä, joissa on puutteellisia tekstejä) 
 - S1.4.1. Ruudunlukuohjelma 1 (JAWS)
 - S1.4.2. Ruudunlukuohjelma 2 (NVDA)
- S1.5. Ruudunlukuohjelman tuloste ei ole selkeä liikuttaessa nuolinäppäimillä elementtien ja komponenttien välillä.
 - S1.5.1. Ruudunlukuohjelma 1 (JAWS)
 - S1.5.2. Ruudunlukuohjelma 2 (NVDA)
- S1.6. Ruudunlukuohjelman tuloste ei ole selkeä liikuttaessa sarkainnäppäimillä elementtien ja komponenttien välillä.
 - S1.6.1. Ruudunlukuohjelma 1 (JAWS)
 - S1.6.2. Ruudunlukuohjelma 2 (NVDA)
- S1.7. Ruudunlukuohjelman tuloste ei ole selkeä liikuttaessa ruudunlukuohjelman navigointikomennoilla (näppäinkomennot) elementtien ja komponenttien välillä.
 - S1.7.1. Ruudunlukuohjelma 1 (JAWS)
 - S1.7.2. Ruudunlukuohjelma 2 (NVDA)

S2 (Aktiiviset kurssit --sivu)
- S2.1 (Sibulla ei ole <label>-elementtejä 
 - S2.1.1. Ruudunlukuohjelma 1 (JAWS)
 - S2.1.2. Ruudunlukuohjelma 2 (NVDA)
- S2.2 (Sivun otsikko-rakenne on puutteellinen)
 - S2.2.1. Ruudunlukuohjelma 1 (JAWS)
 - S2.2.2. Ruudunlukuohjelma 2 (NVDA)

- S2.3 (Sivulla olevista kuvista puuttuu ALT-teksti)
 - S2.3.1. Ruudunlukuohjelma 1 (JAWS)
 - S2.3.2. Ruudunlukuohjelma 2 (NVDA)
- S2.4 (Sivulla on muita puutteellisia elementtejä (kuten linkkejä, joissa on puutteellisia tekstejä) 
 - S2.4.1. Ruudunlukuohjelma 1 (JAWS)
 - S2.4.2. Ruudunlukuohjelma 2 (NVDA)
- S2.5. Ruudunlukuohjelman tuloste ei ole selkeä liikuttaessa nuolinäppäimillä elementtien ja komponenttien välillä.
 - S2.5.1. Ruudunlukuohjelma 1 (JAWS)
 - S2.5.2. Ruudunlukuohjelma 2 (NVDA)
- S2.6. Ruudunlukuohjelman tuloste ei ole selkeä liikuttaessa sarkainnäppäimillä elementtien ja komponenttien välillä.
 - S2.6.1. Ruudunlukuohjelma 1 (JAWS)
 - S2.6.2. Ruudunlukuohjelma 2 (NVDA)
- S2.7. Ruudunlukuohjelman tuloste ei ole selkeä liikuttaessa ruudunlukuohjelman navigointikomennoilla (näppäinkomennot) elementtien ja komponenttien välillä.
 - S2.7.1. Ruudunlukuohjelma 1 (JAWS)
 - S2.7.2. Ruudunlukuohjelma 2 (NVDA)
- S2.8. Aktiivisen kurssin poisto ei onnistu ruudunlukuohjelmalla.
 - S2.8.1. Ruudunlukuohjelma 1 (JAWS)
 - S2.8.2. Ruudunlukuohjelma 2 (NVDA)

S3. (Henkipöllön pesä -sivu)
- S3.1. (Sibulla ei ole <label>-elementtejä 
 - S3.1.1. Ruudunlukuohjelma 1 (JAWS)
 - S3.1.2. Ruudunlukuohjelma 2 (NVDA)
- S3.2. (Sivun otsikko-rakenne on puutteellinen) | 12-14.3.2020 | Testi toteutui (Sivulla ei ollut ykköstason otsikoita ja siinä oli myös ylihypättyjä otsikoita) 
 - S3.2.1. Ruudunlukuohjelma 1 (JAWS)
 - S3.2.2. Ruudunlukuohjelma 2 (NVDA)
- S3.3. (Sivulla olevista kuvista puuttuu ALT-teksti)
 - S3.3.1. Ruudunlukuohjelma 1 (JAWS)
 - S3.3.2. Ruudunlukuohjelma 2 (NVDA)

- S3.4. (Sivulla on muita puutteellisia elementtejä (kuten linkkejä, joissa on puutteellisia tekstejä) 
 - S3.4.1. Ruudunlukuohjelma 1 (JAWS)
 - S3.4.2. Ruudunlukuohjelma 2 (NVDA)
- S3.5. Ruudunlukuohjelman tuloste ei ole selkeä liikuttaessa nuolinäppäimillä elementtien ja komponenttien välillä.
 - S3.5.1. Ruudunlukuohjelma 1 (JAWS)
 - S3.5.2. Ruudunlukuohjelma 2 (NVDA)
- S3.6. Ruudunlukuohjelman tuloste ei ole selkeä liikuttaessa sarkainnäppäimillä elementtien ja komponenttien välillä.
 - S3.6.1. Ruudunlukuohjelma 1 (JAWS)
 - S3.6.2. Ruudunlukuohjelma 2 (NVDA)
- S3.7. Ruudunlukuohjelman tuloste ei ole selkeä liikuttaessa ruudunlukuohjelman navigointikomennoilla (näppäinkomennot) elementtien ja komponenttien välillä.
 - S3.7.1. Ruudunlukuohjelma 1 (JAWS)
 - S3.7.2. Ruudunlukuohjelma 2 (NVDA)

S4. Suoritetut kurssit -sivu
- S4.1. (Sibulla ei ole <label>-elementtejä
 - S4.1.1. Ruudunlukuohjelma 1 (JAWS)
 - S4.1.2. Ruudunlukuohjelma 2 (NVDA)
- S4.2. (Sivun otsikko-rakenne on puutteellinen) 
 - S4.2.1. Ruudunlukuohjelma 1 (JAWS)
 - S4.2.2. Ruudunlukuohjelma 2 (NVDA)
- S4.3. (Sivulla olevista kuvista puuttuu ALT-teksti) 
 - S4.3.1. Ruudunlukuohjelma 1 (JAWS)
 - S4.3.2. Ruudunlukuohjelma 2 (NVDA)
- S4.4. (Sivulla on muita puutteellisia elementtejä (kuten linkkejä, joissa on puutteellisia tekstejä) 
 - S4.4.1. Ruudunlukuohjelma 1 (JAWS)
 - S4.4.2. Ruudunlukuohjelma 2 (NVDA)
- S4.5. Ruudunlukuohjelman tuloste ei ole selkeä liikuttaessa nuolinäppäimillä elementtien ja komponenttien välillä.
 - S4.5.1. Ruudunlukuohjelma 1 (JAWS)
 - S4.5.2. Ruudunlukuohjelma 2 (NVDA)
- S4.6. Ruudunlukuohjelman tuloste ei ole selkeä liikuttaessa sarkainnäppäimillä elementtien ja komponenttien välillä.
 - S4.6.1. Ruudunlukuohjelma 1 (JAWS)
 - S4.6.2. Ruudunlukuohjelma 2 (NVDA)
- S4.7. Ruudunlukuohjelman tuloste ei ole selkeä liikuttaessa ruudunlukuohjelman navigointikomennoilla (näppäinkomennot) elementtien ja komponenttien välillä.
 -S4.7.1. Ruudunlukuohjelma 1 (JAWS)
 - S4.7.2. Ruudunlukuohjelma 2 (NVDA)

S5 (Asetukset-sivu)
- S5.1. (Sibulla ei ole <label>-elementtejä)
 - S5.1.1. Ruudunlukuohjelma 1 (JAWS)
 - S5.1.2. Ruudunlukuohjelma 2 (NVDA)
- S5.2. (Sivun otsikko-rakenne on puutteellinen) 
 - S5.2.1. Ruudunlukuohjelma 1 (JAWS)
 - S5.2.2. Ruudunlukuohjelma 2 (NVDA)
- S5.3. (Sivulla olevista kuvista puuttuu ALT-teksti) 
 - S5.3.1. Ruudunlukuohjelma 1 (JAWS)
 - S5.3.2. Ruudunlukuohjelma 2 (NVDA)
- S5.4. (Sivulla on muita puutteellisia elementtejä (kuten linkkejä, joissa on puutteellisia tekstejä) 
 - S5.4.1. Ruudunlukuohjelma 1 (JAWS)
 - S5.4.2. Ruudunlukuohjelma 2 (NVDA)
- S5.5. Ruudunlukuohjelman tuloste ei ole selkeä liikuttaessa nuolinäppäimillä elementtien ja komponenttien välillä.
 - S5.5.1. Ruudunlukuohjelma 1 (JAWS)
 - S5.5.2. Ruudunlukuohjelma 2 (NVDA)
S5.6. Ruudunlukuohjelman tuloste ei ole selkeä liikuttaessa sarkainnäppäimillä elementtien ja komponenttien välillä.
 - S5.6.1. Ruudunlukuohjelma 1 (JAWS)
 - S5.6.2. Ruudunlukuohjelma 2 (NVDA)
- S5.7. Ruudunlukuohjelman tuloste ei ole selkeä liikuttaessa ruudunlukuohjelman navigointikomennoilla (näppäinkomennot) elementtien ja komponenttien välillä.
 - S5.7.1. Ruudunlukuohjelma 1 (JAWS)
 - S5.7.2. Ruudunlukuohjelma 2 (NVDA)

S6 (Kirjautumis_sivu)
- S6.1. (Sibulla ei ole <label>-elementtejä | 12-14.3.2020 | Testi toteutui (labeleita puuttui 89 kpl ja otpoja lomakekenttiä oli 162 kpl eikä niitä oltu liitetty oikein säätimiin) | - | - | Juho Tuomainen | -
 - S6.1.1. Ruudunlukuohjelma 1 (JAWS)
 - S6.1.2. Ruudunlukuohjelma 2 (NVDA)
- S6.2. (Sivun otsikko-rakenne on puutteellinen) | 12-14.3.2020 | Testi toteutui (Sivulla ei ollut ykköstason otsikoita ja siinä oli myös ylihypättyjä otsikoita) | - | - | Juho Tuomainen | -
 - S6.2.1. Ruudunlukuohjelma 1 (JAWS)
 - S6.2.2. Ruudunlukuohjelma 2 (NVDA)
- S6.3. (Sivulla olevista kuvista puuttuu ALT-teksti) | 12-14.3.2020 | Testi toteutui (alt-tekstejä ei ollut tai ne olivat puutteellisia) | - | - | Juho Tuomainen | -
 - S6.3.1. Ruudunlukuohjelma 1 (JAWS)
 - S6.3.2. Ruudunlukuohjelma 2 (NVDA)
- S6.4. (Sivulla on muita puutteellisia elementtejä (kuten linkkejä, joissa on puutteellisia tekstejä) 
 - S6.4.1. Ruudunlukuohjelma 1 (JAWS)
 - S6.4.2. Ruudunlukuohjelma 2 (NVDA)
- S6.5. Ruudunlukuohjelman tuloste ei ole selkeä liikuttaessa nuolinäppäimillä elementtien ja komponenttien välillä.
 - S6.5.1. Ruudunlukuohjelma 1 (JAWS)
 - S6.5.2. Ruudunlukuohjelma 2 (NVDA)
- S6.6. Ruudunlukuohjelman tuloste ei ole selkeä liikuttaessa sarkainnäppäimillä elementtien ja komponenttien välillä.
 - S6.6.1. Ruudunlukuohjelma 1 (JAWS)
 - S6.6.2. Ruudunlukuohjelma 2 (NVDA)
- S6.7. Ruudunlukuohjelman tuloste ei ole selkeä liikuttaessa ruudunlukuohjelman navigointikomennoilla (näppäinkomennot) elementtien ja komponenttien välillä.
 - S6.7.1. Ruudunlukuohjelma 1 (JAWS)
 - S6.7.2. Ruudunlukuohjelma 2 (NVDA)



