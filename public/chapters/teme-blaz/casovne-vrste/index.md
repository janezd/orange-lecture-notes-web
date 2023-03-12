---
title: 'Časovne vrste'
date: 'March 2023'
---

<!!! float-aside !!!>
V angleščini se za ta postopek strojnega učenja z možnostjo zavrnitve uporablja izraz "machine learning with reject option". Glej npr. nedavno spisan [pregledni članek](https://arxiv.org/abs/2107.11277) s tega področja.

Točnost napovedi modelov strojnega učenja lahko izboljšamo, če napoved upoštevamo samo takrat, ko je model v napoved preprična. Pri razvrščanju bi to na primer pomenilo, da uporabimo napoved le tedaj, ko je verjetnost napovedanega razreda dovolj visoka. 

V analizi časovnih vrstah nas mnogokrat ne zanima samo napoved njihovega trenda ali pa prihodnje vrednosti, marveč te vežemo na akcije. Na primer, če bo vrednost določene delnice zrasla za 5% v naslednjih dneh, se jo morda splača kupiti, sicer pa prodati.

**V predlagani temi raziščite, ali je moč strojno učenje z možnostjo zavrnitve uporabiti na področju učenja trendov časovnih vrst.** Cilj naj bo napovedati, kdaj se relativni tečaj kriptovalute zviša ali zniža za $d$ v danem časovnem intervalu $t$ (npr. $d=3\%$ in $t=3{\rm h}$). Za to nalogo bo potrebno:

- pripraviti ustrezno bazo podatkov s tečaji, podatke lahko dobite npr. na portalu [binance](https://www.binance.com/en/landing/data)
- podatke primerno obdelati oziroma izbrati primerno časovno resolucijo,
- časovne vrste opremiti z oznakami razreda glede na zgoraj določeni cilj,
- poročati o osnovnih porazdelitvah tako določenih razredov v podatkih in na podlati tega izbrati primeren $t$ in $d$,
- predlagati tehniko učenja; predvidoma bi tu uporabili naključne gozdove in te primerjali s konvolucijskimi globokimi mrežami,
- izdelati postopek za ocenjevanje uspešnosti in poročati o aplikaciji izdelanega modeliranja (npr. AUC).

Naloga ni enostavna in zahteva precej dela pri pripravi podatkov. Možno jo je še dodatno razširiti s postopki učenja na več valutnih parih, učenja s prenosom in optimizacije parametrov učenja.