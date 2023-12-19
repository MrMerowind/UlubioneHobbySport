import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef } from 'react';

var sports = ['drukowanie 3d', 'Zjazd', 'Gra aktorska', 'Figurka', 'Wyścigi przygodowe', 'Ewolucje', 'Modelowanie lotnicze', 'Agresywna jazda na rolkach', 'Pomoc w wspinaczce', 'Aikido', 'Hokej na powietrzu', 'Wyścigi powietrzne', 'Sporty powietrzne', 'Aerograf', 'Spostrzeganie samolotów', 'Airsoft', 'Airsoftowanie', 'Aizkolaritza', 'narciarstwo alpejskie', 'Amatorska astronomia', 'Radioamatorskie', 'Amatorska astronomia', 'Amatorska geologia', 'Amatorski pankration', 'Radio amatorskie', 'Zapasy amatorskie', 'Rugby z flagą amerykańską', 'Futbol amerykański', 'Amerykańska piłka ręczna', 'Amerykański snooker', 'Starożytne gry', 'Wędkarstwo', 'Zwierzęca fanaberia', 'Zwierzęta/zwierzęta domowe/psy', 'Antyk', 'Starożytności', 'Akwalung', 'Akwarium', 'Aquathlon', 'Łucznictwo', 'Piłka nożna na arenie', 'Arimaa', 'Siłowanie na rękę', 'Kolekcjonowanie dzieł sztuki', 'Artystyczny bilard', 'Kolarstwo artystyczne', 'Gimnastyka artystyczna', 'Basen artystyczny', 'Artystyczna jazda na rolkach', 'Sztuka', 'Związek Piłki Nożnej', 'Astrologia', 'Astronomia', 'Atlatl', 'Futbol australijski', 'Australijska piłka ręczna', 'Australijczyk rządzi futbolem', 'Austu', 'Wyścig samochodowy', 'Automatyczna audiofilia', 'Wyścigi samochodowe', 'Autocross', 'Autotrawa', 'Lotnictwo', 'Rzucanie siekierą', 'Base jumping', 'BMX', 'Ba gra', 'Backgammon', 'Podróżować z plecakiem', 'Styl grzbietowy', 'Badminton', 'Bagatela', 'Baguazhang', 'Równoważnia', 'Balkline i prosta szyna', 'Piłka', 'Piłka do badmintona', 'Hokej na lodzie', 'Bando', 'Kij do hokeja', 'Wyścigi bangerów', 'Basen bankowy', 'Skok spadochronowy w Banzai', 'Bilard barowy', 'Wyścigi beczek', 'Bartitsu', 'Base jumping', 'Baseball', 'Bilard kieszonkowy baseballowy', 'Koszykówka', 'Pelota baskijska', 'Baskijskie sporty wiejskie', 'Nietoperz i pułapka', 'Gry z kijem i piłką', 'Kręcenie pałką', 'Pałka się kręci', 'Gra bitewna', 'Battojutsu', 'Siatkówka plażowa', 'Koszykówka plażowa', 'Piłka ręczna plażowa', 'Plażowe rugby', 'Piłka plażowa', 'Siatkówka plażowa', 'Opalanie na plaży/słońcu', 'Czesanie na plaży', 'Ornament paciorkowy', 'Beagle', 'Beatboxowanie', 'Zostań obrońcą dziecka', 'Pszczelarstwo', 'Piwny Pong', 'Dzwonek dzwoni', 'Taniec brzucha', 'Strzelanie z ławki', 'Biatlon', 'Polo rowerowe', 'Polo rowerowe', 'Jazda na rowerze', 'Wędkarstwo na grubego zwierza', 'Obserwowanie ptaków', 'Ptactwo', 'Obserwowanie ptaków', 'Biribol', 'Głosować przeciw', 'Kowalstwo', 'Blogowanie', 'Gry planszowe', 'Sporty deskowe', 'Wyścigi na desce', 'Gry planszowe', 'Boardercross', 'Żeglarstwo', 'Bobslej', 'Bocce', 'Bocce Volo', 'Boccia', 'Budowa ciała', 'Bodyboarding', 'Kulturystyka', 'Bokator', 'Bolas criollas', 'Boli Khela', 'Drzewo bonsai', 'Kolekcjonowanie książek', 'Renowacja książki', 'Introligatorstwo', 'Bumerangi', 'Bossaball', 'Basen butelkowy', 'Wspinaczka bez liny', 'Bule', 'Kręgle', 'Kręgle', 'Kręgle', 'Pudełko do lacrossea', 'Boks', 'Brazylijskie jiu jitsu', 'Brazylijskie jiu jitsu', 'Breakdance', 'Styl klasyczny', 'Warzenie Piwa', 'Budowa mostu', 'Dostarczanie żywności osobom niepełnosprawnym', 'Buldogi Brytyjskie', 'Brytyjski baseball', 'Miotła', 'Brännboll', 'Wiadro', 'Budowa domu na siedlisko dla ludzkości', 'Budowanie domków dla lalek', 'Bujinkan', 'Basen zderzakowy', 'Skoki na bungee', 'Bunnock', 'Obserwacja autobusu', 'Oglądanie motyli', 'Styl motylkowy', 'Kolekcjonowanie guzików', 'Tyłki w górę', 'Buzkashi', 'Kabaret', 'Caid', 'Dekorowanie ciast', 'Calcio Fiorentino', 'Kaligrafia', 'Calva', 'Calvinball', 'Cammag', 'Camogie', 'Obóz', 'Kemping', 'Kanadyjski futbol', 'Wyrób świec', 'Wyrób świec', 'Kajak polo', 'Kajakarstwo', 'Kanioning', 'Capoeira', 'Zdobyć flagę', 'Samochód wyścigowy', 'Zbieranie kart', 'Bilard karambolowy', 'Kreskówka', 'Hazard w kasynie', 'Casterboarding', 'Odlew', 'Złap zapasy', 'Kategoria:Listy związane ze sportem', 'Nurkowanie w jaskiniach', 'Ceramika', 'Cestoball', 'Wyścigi rydwanów', 'Charreada', 'Warcaby', 'Cheerleading', 'Szachy', 'Boks szachowy', 'Szachy960', 'Chester-le-Street', 'Chicago', 'Chilijskie rodeo', 'Chińskie warcaby', 'Chińska piłka ręczna', 'Chińskie sztuki walki', 'Chinlon', 'Choi Kwang-Do', 'Działalność kościelna/kościelna', 'Palenie cygar', 'Cirit', 'Strzelanie do gołębi glinianych', 'Wspinaczka', 'Oglądanie chmur', 'Balonowanie klastrów', 'Cnapana', 'Wioślarstwo przybrzeżne i oceaniczne', 'Coasteering', 'Walki kogutów', 'Zbieranie monet', 'Zbieranie monet', 'Zbieranie', 'Zbieranie antyków', 'Zbieranie dzieł sztuki', 'Zbieranie kapeluszy', 'Zbieranie albumów muzycznych', 'Zbieranie zapisów RPM', 'Zbieranie kart sportowych', 'Zbieranie mieczy', 'Strażnik koloru', 'Kolorowanie', 'Kolorowanka', 'Robota bojowego', 'Sport walki to sport kontaktowy, w którym liczy się rywalizacja', 'Kolekcjonowanie komiksów', 'Wspólnota', 'Taniec konkurencyjny', 'Konkurencyjne jedzenie', 'Komponować muzykę', 'Zasady złożone shinty-hurling', 'Zajęcia komputerowe', 'Programowanie komputerowe', 'Połącz cztery', 'Konkurowanie', 'Most kontraktowy', 'Konświatowanie', 'Gotowanie', 'Korkowa kula', 'Cornhole', 'Kornwalijski hurling', 'Cosplay', 'Cosplayowanie', 'Kupon', 'Kowboj', 'Kowbojskie strzelanie akcji', 'Kowbojskie polo', 'Rzemieślnictwo', 'Twórcze pisanie', 'Creeking', 'Cribbage', 'Krykiet', 'Szydełkować', 'Szydełkowanie', 'Krokiet', 'Biegi przełajowe', 'Ścieg krzyżowy', 'Jeździectwo przełajowe', 'Kolarstwo górskie przełajowe', 'Rajd terenowy', 'Biegi przełajowe', 'Biegi narciarskie', 'Krzyżówki', 'Krzyżówki', 'Kryptografia', 'Cudowne sporty', 'Cuju', 'Wijący się', 'Poduszki karomowe', 'Nożownik', 'Ciąć', 'Polo rowerowe', 'Żużel rowerowy', 'Kolarstwo', 'Przełaj rowerowy', 'Czeska piłka ręczna', 'Daitō-ryū Aiki-jūjutsu', 'Taniec', 'Taniec', 'Duńska piłka długa', 'Rzutki', 'Głucha koszykówka', 'Debata', 'Dziesięciobój', 'Solówka na głębokich wodach', 'Polowanie na jelenia', 'Deltiologia', 'Derby rozbiórkowe', 'Wyścigi pustynne', 'Układanie kostek', 'Odlewana zabawka', 'Odlewane przedmioty kolekcjonerskie', 'Fotografia cyfrowa', 'Sztuka cyfrowa', 'Żeglowanie pontonem', 'Dyplomacja', 'Skoki po ziemi', 'Wyścigi na torze terenowym', 'Dyskowy pies', 'Dyskgolf', 'Rzut dyskiem', 'Nurkowanie', 'Zrób to sam', 'Unikaj dysku', 'gra w dwa ognie', 'Psi sport', 'Lalki', 'Domino', 'Kort z podwójnym dyskiem', 'Kolarstwo górskie w dół', 'Różdżkarstwo', 'Wyścigi łodzi przeciąganych', 'Drag Racing', 'Smocza łódź', 'Dramat', 'Warcaby', 'Rysunek', 'Konkurs ujeżdżania', 'Dryfowanie', 'Napędowy', 'Korpus bębnów i trąbek', 'Duathlon', 'Dumog', 'Nurkowanie w śmietniku', 'Jedzenie poza domem', 'Kursy edukacyjne', 'Wyścig jajek i łyżek', 'Egipska szermierka z kijów', 'Ósma Bila', 'Ośmioosobowa piłka nożna', 'Elektronika', 'Kolekcjonowanie elementów', 'Polo ze słoniem', 'Haft', 'Wytrzymałość', 'Wyścigi wytrzymałościowe', 'Jazda wytrzymałościowa', 'Enduro', 'Bilard angielski', 'Angielska przyjemność', 'Rozrywkowy', 'Episkyros', 'Skoki jeździeckie', 'Jeździectwo', 'Równanie', 'Eskrima', 'Szkoła Eton', 'Etonowe Piątki', 'Gra terenowa w Eton', 'Gra ścienna Eton', 'WKKW', 'Ćwiczenia', 'Wiertarka wystawowa', 'Ekstremalne prasowanie', 'Mistrzostwa Świata w łodzi motorowej F1', 'Sokolnictwo', 'Moda', 'Szybkie samochody', 'Szybki softball', 'Fastnet', 'Filcowanie', 'Ogrodzenie', 'Łucznictwo polowe', 'Piłka ręczna na boisku', 'Hokej na trawie', 'Lacrosse terenowy', 'Cel terenowy', 'Łyżwiarstwo figurowe', 'Filmowe pamiątki', 'Pływanie w płetwach', 'Ogień Poi', 'Pałka ogniowa kręci się', 'Wędkarstwo', 'Akwarystyka', 'Piłka na pięści', 'Piłka nożna na piątkę', 'Pięć pinów', 'Piątki', 'Flaga piłki nożnej', 'Flagowy futbol', 'Łucznictwo lotnicze', 'Podłoga', 'Unihokej', 'Kompozycje kwiatowe', 'Układanie kwiatów', 'Flutterguty', 'Wiązanie muchowe', 'Wędkarstwo muchowe', 'Flyak', 'Latający dysk', 'Styl dowolny latającego dysku', 'Gry z latającymi dyskami', 'Latający trapez', 'Zapasy ludowe', 'Folkret', 'Torba na buty', 'Siatka na buty', 'Piłka nożna', 'Tenis piłkarski', 'Siatkówka', 'Plądrowanie', 'Formuła Libre', 'Student Formuły', 'Wyścigi formuły', 'Polowanie na skamieniałości', 'Cztery koła', 'Cztery kwadraty', 'Bilard z czterema bilami', 'Polowanie na lisa', 'Swobodne bieganie', 'Darmowa deska', 'Wolna łódka', 'Darmowe nurkowania', 'Freestyle BMX', 'Freestyle Motocross', 'Freestylowa torba na stopy', 'Freestyleowy futbol', 'Hulajnoga freestyleowa', 'Freestyle na nartach', 'Slalom freestyle na łyżwach', 'Freestyle na snowboardzie', 'Pływanie stylem dowolnym', 'Zapasy w stylu dowolnym', 'Akwaria słodkowodne', 'Fikiet', 'Frisbee Golf – Frolf', 'fryzyjska piłka ręczna', 'Biały żuraw Fujian', 'Karabin tarczowy pełnolufowy', 'Futsal', 'Zramolały', 'Futbol gaelicki', 'Gaelicka piłka ręczna', 'Hazard', 'Gry', 'Gry, w których przeciwnicy uderzają piłką w ścianę/ściany za pomocą rakiety lub innego sprzętu, lub po prostu w rękawiczkach/gołych rękach.', 'Wyprzedaż garażowa', 'Prace ogrodowe', 'Bramka', 'Gatka', 'Genealogia', 'Buforowanie geograficzne', 'Geocaching', 'Polowanie na duchy', 'Polowanie na duchy', 'Wyścigi koncertowe', 'Dmuchanie szkła', 'Szybownictwo', 'Glima', 'Świecące', 'Gnomowanie', 'Iść', 'Wyścigi gokartów', 'Go-Moku', 'Piłka bramkowa', 'Bramkarz', 'Idę do kina', 'Golf', 'Gongoozlera', 'Graffiti', 'Wyścigi motocyklowe Grand Prix', 'Ścieżka polna', 'Zapasy grecko-rzymskie', 'Zapasy greckie', 'Gridironowa piłka nożna', 'Siła uścisku', 'Gitara', 'Kolekcjonowanie broni', 'Gundo', 'Rusznikarstwo', 'Wnętrzności', 'Gymkhana', 'Gimnastyka', 'Gyotaku', 'Haggis rzuca', 'Hala', 'Półmaraton', 'Rzut młotem', 'Hana Ichi Monme', 'Gra w piłkę ręczną', 'Analiza pisma ręcznego', 'Lotniarstwo', 'Hapkido', 'Hapsagai', 'Koszulka rowerowa Hardcourt', 'Gonitwa zająca', 'Wyścigi zaprzęgów', 'Harpastum', 'Harrow futbol', 'Haxey Hooda', 'Głowa', 'Siedmiobój', 'Opryszczka', 'Zabawa w chowanego', 'Wysoki skok', 'Karabin dużej mocy', 'Gry górskie', 'Turystyka piesza', 'Wspinaczka górska', 'Historyczne sporty motorowe', 'Hokej', 'Hojōjutsu', 'Piwowarstwo domowe', 'Naprawa domu', 'Kino domowe', 'Domowe palenie kawy', 'Piwowarstwo domowe', 'Obręcz', 'Obręcze', 'Hooverballa', 'Balon Hoppera', 'Poziomy pasek', 'Hornussena', 'Końskie polo', 'Wyścigi konne', 'Jazda konna', 'Jazda konna', 'Piłka konna', 'Podkowa', 'Podkowy', 'Wyścigi balonów na ogrzane powietrze', 'Latanie balonem', 'Gorące pudełko', 'domek z kart', 'Hula-hop', 'Samolot napędzany siłą ludzkich mięśni', 'Pływanie ludzi', 'myśliwy', 'Skoczkowie myśliwscy', 'Polowanie', 'Płotki', 'Rzucanie', 'Hwa Rang Do', 'Hybrydowe gry typu carom-kieszonkowy', 'Kody hybrydowe', 'Wyścigi hydroplanów', 'Hokej stołowy ITHF', 'Iaido', 'Iaijutsu', 'Wspinaczka lodowa', 'Taniec na lodzie', 'Łowienie w przeręblu', 'Hokej na lodzie', 'Wyścigi na lodzie', 'Łyżwiarstwo', 'Hokej na sankach', 'Lodowy żużel', 'Żeglarstwo lodowe', 'Łyżwiarstwo', 'Ikosathlon', 'Iluzja', 'Podszywanie się', 'Halowy futbol amerykański', 'Łucznictwo w pomieszczeniach', 'Krykiet kryty', 'Enduro w pomieszczeniach', 'Hokej na trawie w pomieszczeniach', 'Halowa siatkówka', 'Wewnętrzny zespół perkusyjny', 'Piłka halowa', 'Hokej inline', 'Jazda na rolkach', 'Łyżwiarstwo szybkie na linii', 'Zbieranie owadów', 'Krzyż', 'Międzynarodowy fronton', 'Międzynarodowe zasady futbolu', 'Internet', 'Wynalazek', 'Wyspa Man TT', 'Jacquet', 'Jai Alai', 'Janggi', 'Rzut oszczepem', 'Jeeta Kune Do', 'Silniki odrzutowe', 'Wyścigi łodzi odrzutowych', 'Jeu de paume', 'Prowansalskie', 'Robienie biżuterii', 'Robienie biżuterii', 'Puzzle', 'Puzzle', 'Jogging', 'Jogo do pau', 'Jorkyball', 'Potyczki', 'Dżudo', 'Jugger', 'Żonglerka', 'Klub żonglerski', 'Jujutsu', 'Jukskei', 'Skakanie na skakance', 'Skakanka', 'Skoki', 'Juttejutsu', 'Jodo', 'Jukendo', 'Kabaddi', 'Kajukenbo', 'Kalarippajattu', 'Karate', 'Wyścigi gokartów', 'Spływ kajakowy', 'Prowadź dziennik', 'Trzymaj się z daleka', 'Keepie uppie', 'Basen Kelly’ego', 'Kemari', 'Kendo', 'Kenjutsu', 'Kenpo', 'Cho kho', 'Ki-o-rahi', 'Kopnij puszkę', 'Piłka nożna', 'Kickboxing', 'Kilikiti', 'Zabójca', 'Kin-Ball', 'Kinomichi', 'Chemia kuchenna', 'Latawiec', 'Wejście na pokład latawca', 'Wózek z latawcem', 'Walka z latawcami', 'Puszczanie latawca', 'Lądowanie latawca', 'Latawce', 'Kitesurfing', 'Pukanie', 'Knattleikr', 'Nakolanniki', 'Wyrób noży', 'Rzucanie nożem', 'Robienie na drutach', 'Wiązanie', 'Kombucha', 'Korfball', 'Krabi-krabong', 'Krav Maga', 'Kronum', 'Kubb', 'Kuk Sool wygrał', 'Kumdo', 'Kurasz', 'Kyūdo', 'Kyūjutsu', 'LARPowanie', 'Dusza', 'Sznurówka', 'Rodzaj gry w hokeja', 'Panie Futbol gaelicki', 'Zapasy w Lancashire', 'Żeglarstwo lądowe', 'Rekordy prędkości na lądzie', 'Windsurfing lądowy', 'Klub Lapidarium', 'Łapta', 'Etykieta laserowa', 'Lasery', 'Rzutki trawnikowe', 'Naucz się grać w pokera', 'Uczenie się', 'Uczyć się języka obcego', 'Nauka instrumentu', 'Nauka pilotowania samolotu', 'Rzemiosło skórzane', 'Rzemiosło skórzane', 'Legendy wyścigów samochodowych', 'klocki Lego', 'Lego', 'Lelo Burti', 'Lethwei', 'Skrzynka na listy', 'Krykiet z ograniczoną liczbą overów', 'Lista typów gier', 'Słuchać muzyki', 'Otwieranie zamka', 'Locksport', 'Kumoterstwo', 'Długi skok', 'Longboarding', 'Przegrana w szachy', 'Saneczkarstwo', 'Drwal', 'MCMAP', 'Obróbka', 'Frędzla', 'Frędzla', 'magia', 'Mahjong', 'Tworzenie modeli samochodów', 'Malla-yuddha', 'Mancala', 'Maraton', 'Rzeźby', 'Orkiestra marszowa', 'Celność', 'Marna Grooka', 'Sztuki walki', 'Sztuki walki', 'Mistrzowie futbolu', 'Mistrzowska Liga Rugby', 'Matball', 'Gra meczowa', 'Modelowanie zapałek', 'Średniowieczny futbol', 'Medytacja', 'Pływanie mieszane', 'Megaminx', 'Mezoamerykańska gra w piłkę', 'Wykrywanie metalu', 'Wykrywanie metalu', 'Wykrywacz metali', 'Metaliczna sylwetka', 'Fotografowanie metalicznej sylwetki', 'Obróbka metalu', 'Meteorologia', 'Piłka nożna w metrze', 'Mikroskopia', 'Wyścigi samochodów karłów', 'Zbieranie minerałów', 'Mini piłka nożna', 'Minirugby', 'Miniaturowy golf', 'Wspinaczka mieszana', 'Mieszane Sztuki Walk', 'Piłka nożna mafii', 'Liga modów', 'Modelarstwo kolejowe', 'Modele rakiet', 'Model samolotu', 'Budowa modelu', 'Modelarstwo żeglarskie', 'Modelowanie statków', 'Modele', 'Współczesny Arnis', 'Pięciobój nowoczesny', 'Zapasy mongolskie', 'Monster Truck', 'Moskiewska miotła', 'Motocross', 'Sporty motorowe', 'Wyścigi motocyklowe typu drag', 'Żużel motocyklowy', 'Motocykle', 'Kolarstwo górskie', 'Wspinaczka górska', 'Kolarstwo górskie', 'Górska jazda na monocyklu', 'Mountainboarding', 'Alpinizm', 'Kino', 'Muay Thai', 'Zaleganie w błocie', 'Polowanie na grzyby', 'Muzyka', 'Instrumenty muzyczne', 'Naginatajutsu', 'Sztuka zdobienia paznokci', 'Igła', 'Nepis', 'Siatkówka', 'Piłka Newcomba', 'Walka na kije Nguni', 'Piłka nożna dziewięcioosobowa', 'Dziewięć piłek', 'Dziewięcioosobowa piłka nożna', 'Ninjutsu', 'Makaron', 'kombinacja norweska', 'Łyżwiarstwo nordyckie', 'Narciarstwo nordyckie', 'Modliszka północna', 'Novussa', 'Obracanie się obiektu', 'Różnice w przeszkodach', 'Wyścigi terenowe', 'Jazda terenowa', 'Wyścigi łodzi motorowych na morzu', 'Oina', 'Kobudo z Okinawy', 'Stary kot', 'Podnoszenie ciężarów olimpijskie', 'Międzynarodowy Dzień Jednego', 'Jedna kieszeń', 'Bieg na orientację', 'origami', 'Inny', 'Kajakarstwo z wysięgnikiem', 'Za linią', 'Posiadanie zabytkowego samochodu', 'Oztag', 'Wiosłowanie', 'Paintball', 'Obraz', 'Palanta', 'Pall Mall', 'Okrycie kielicha', 'Pankration', 'Papier mache', 'Papiernictwo', 'Papi fuj', 'Spadochroniarstwo', 'Paragliding', 'Paralotniarstwo lub paralotniarstwo motorowe', 'Równoległe pręty', 'Związek Paraolimpijski w piłce nożnej', 'Paraolimpijska siatkówka', 'Paramotoryzacja', 'Parasailing', 'Parkoura', 'Patball', 'Pato', 'Pehlwanie', 'Pencak Silat', 'Pięciobój', 'Ludzie patrzą', 'Ludzie patrzą', 'Prywatne jednostki pływające', 'Pesäpallo', 'Zwierzak domowy', 'Peteca', 'Fotografia', 'Fortepian', 'Marynata', 'Wyścigi pickupów', 'Wyścigi gołębi', 'Pinochle', 'Palenie fajki', 'Pitch i putt', 'Opierzenie', 'Wirowanie talerzy', 'Platformowy tenis', 'Grać muzykę', 'Uprawianie sportów zespołowych', 'Kieszonkowa kostka', 'Bilard kieszonkowy', 'Poi', 'Poker', 'Taniec na rurze', 'Wspinaczka po rurze', 'Skok o tyczce', 'Gra polo', 'Polocross', 'Koń z łękami', 'Hokej na stawie', 'Goguś', 'Potencjalnie inne sporty są tutaj wymienione.', 'Garncarstwo', 'Hokej na lodzie', 'Powerboksowanie', 'Powerboks', 'Piłka nożna na wózkach inwalidzkich', 'Lotnia z napędem', 'Paralotniarstwo z napędem', 'Trójbój siłowy', 'Praktyczne strzelanie', 'Seria Pradal', 'Prasowane rzemiosło kwiatowe', 'Wyścigi samochodów produkcyjnych', 'Zawodowe zapasy', 'Protestowanie', 'Piłka dziurkowata', 'Punto, raffa, volo', 'Lalkarstwo', 'Puzzle', 'Piramida', 'Pirotechnika', 'Petanka', 'Quidditcha', 'Pikowanie', 'Quiz', 'Łodzie zdalnie sterowane', 'Samochody zdalnie sterowane', 'Helikoptery RC', 'Samoloty zdalnie sterowane', 'Wyścig Mistrzów', 'Chód sportowy', 'Gołębie wyścigowe', 'Raquetball', 'Sterowanie radiowe', 'Akrobacje sterowane radiowo', 'Samochód sterowany radiem', 'Flisactwo', 'Fani kolei', 'Nalot rajdowy', 'Rallycross', 'Rajdy', 'Zjazd na linie', 'Rapowanie', 'Czytanie', 'Czytanie osobom starszym', 'Rekord piłki nożnej', 'Zbieranie rekordów', 'Czerwony łazik', 'Warianty zredukowane', 'Rajd regularności', 'Reininga', 'Odprężający', 'Jarmark Renesansowy', 'Wypożyczanie filmów', 'Sporty wymagające niewielkiego lub żadnego wysiłku fizycznego lub sprawności umysłowej często nie są uważane za prawdziwe sporty. Niektóre sporty umysłowe są uznawane przez federacje sportowe.', 'Ratowanie maltretowanych lub porzuconych zwierząt', 'Rewers', 'Rytmiczna gimnastyka', 'Wstążka', 'Ringball', 'Ringette', 'Ringo', 'Pierścionki', 'Lodowisko', 'Hokej na lodowisku', 'Piłka nożna', 'Ryzyko', 'Riverboarding', 'Wyścigi rowerów szosowych', 'Wyścigi drogowe', 'Bieganie po drogach', 'Walka robotów', 'Robotyka', 'Równoważenie skały', 'Zbieranie skał', 'Równoważenie skał', 'Wspinaczka skałkowa', 'Łowienie skał', 'Rakiety', 'Bujane dzieci z AIDS', 'Rodeo', 'Rogainowanie', 'Odgrywanie ról', 'Derby na rolkach', 'Hokej na rolkach', 'Jazda na rolkach', 'Lina', 'Wspinaczka po linie', 'Hokej Rossall', 'Obrót', 'Zaokrąglacze', 'Wioślarstwo', 'Royak', 'Królewska piłka nożna zapusty', 'Zegar Rubika', 'Kostka Rubika', 'Kostka Rubika jednoręczna', 'Kostka Rubika z zawiązanymi oczami', 'Kostka Rubika ze stopami', 'Zemsta Rubika', 'Rugby Piątki', 'Rugby', 'Liga rugby', 'Dziewiątki ligi rugby', 'Siódemki ligi rugby', 'Rugby siódemki', 'Rugby dziesiątki', 'Związek Rugby', 'Zniszczony', 'Działanie', 'Rosyjska piramida', 'Wyścig workowy', 'Żeglarstwo', 'Akwaria słonowodne', 'Sambo', 'Samoa rządzi', 'San shu', 'Zamki z piasku', 'Sztuka piaskowa i zabawa', 'Sandboarding', 'Sanshou', 'Zapisz', 'Schwingena', 'Zwiady', 'Bazgrać', 'Scrapbooking', 'Szoruj baseball', 'Nurkowanie', 'Nurkowanie', 'Łuskanie', 'Rzeźbienie', 'Szkło morskie', 'Kajakarstwo morskie', 'Muszla', 'Nauczenie się drugiego języka', 'Koszulka polo typu segway', 'Samoobrona', 'Sepak takraw', 'Siódma piłka', 'Szycie', 'Shaolin-kung-fu', 'Łowienie rekinów', 'Karate Shidokan', 'Shinty', 'Shogi', 'Sholo Guti', 'Strzelaj do boksu', 'Strzelanie', 'Strzelanie', 'Strzelectwo sportowe', 'Sporty strzeleckie', 'Zakupy', 'Shorinji Kempo', 'Wyścigi samochodowe na krótkim torze', 'Łyżwiarstwo szybkie na krótkim torze', 'Słuchanie na falach krótkich', 'Pchnięcie kulą', 'Początek strzelby', 'Skoki przez przeszkody', 'Shuai Jiao', 'Tasowanie', 'Shurikenjutsu', 'Shōrin-ryū Shidōkan', 'Sikarana', 'Silambam', 'Silat', 'Śpiewanie', 'Śpiewanie W Chórze', 'Pojedyncza czaszka', 'Sinuca brasileira', 'Sipa', 'Sześcioosobowa piłka nożna', 'Sześcioczerwony snooker', 'Jazda na deskorolce', 'Hokej na łyżwach', 'Piłka do skee', 'Strzelanie do rzutków', 'Strzelanie do rzutków', 'Szkielet', 'Naszkicować', 'Szkicowanie', 'Skewb', 'Latanie na nartach', 'Skoki narciarskie', 'Wycieczka narciarska', 'Jazda na nartach', 'Skiboba', 'Skibobbing', 'Narciarstwo', 'Skijoring', 'Skimboarding', 'Gra w skórki', 'Kręgle', 'Spadochroniarstwo', 'Spadochroniarstwo', 'Podniebny surfing', 'Luźna podszewka', 'Slackline', 'Slamball', 'Spanie', 'Proce', 'Wyścigi samochodowe na automatach', 'Wyścigi samochodowe na automatach', 'Wyścigi ślimaków', 'Snooker', 'Snooker plus', 'Nurkowanie', 'Nurkowanie', 'Kitesurfing na śniegu', 'Rugby śnieżne', 'Snowboard', 'Snowkiting', 'Skuter śnieżny', 'Rakiety śnieżne', 'Produkcja mydła', 'Buty mydlane', 'Produkcja mydła', 'Piłka nożna', 'Spotkania towarzyskie z przyjaciółmi/sąsiadami', 'Softball', 'Więc idź', 'Łowiectwo podwodne', 'Szybkie kostki', 'Szybkiego golfa', 'Pula prędkości', 'Łyżwiarstwo szybkie', 'Narciarstwo szybkie', 'Speedball', 'Speedcubing', 'Spelekowanie', 'Spędzanie czasu z rodziną/dziećmi', 'Gąbka', 'Wspinaczka sportowa', 'Nurkowanie sportowe', 'Wędkarstwo sportowe', 'Latawiec sportowy', 'Sportowe układanie', 'Gliny sportowe', 'Akrobatyka sportowa', 'Aerobik sportowy', 'Wyścigi samochodów sportowych', 'Sprint', 'Wyścigi samochodów sprinterskich', 'Sprint futbolowy', 'Kwadrat', 'Zdusić', 'Squash tenis', 'Tryskająca łódka', 'Ssireum', 'Filatelistyka', 'Filatelistyka', 'Wiosłowanie na stojąco', 'Komedia stand-upowa', 'Statyczny trapez', 'Bieg z przeszkodami', 'Steinstossena', 'Stickball', 'Seria Stihl Timbersports', 'Wyścigi samochodów seryjnych', 'Zbieranie kamieni', 'Skakanie po kamieniach', 'Piłka stołowa', 'Pogoń za burzą', 'Opowiadanie historii', 'Prosty basen', 'Strateg', 'Uliczny futbol', 'Hokej uliczny', 'wyścigi uliczne', 'Uliczna piłka', 'Streetboarding', 'Ulica', 'Lekkoatletyka siłowa', 'Figury sznurkowe', 'Gra udarowa', 'Silny mężczyzna', 'Subak', 'Subbuteo', 'Sudoku', 'Samobójstwo', 'sumo', 'Supersport', 'Wyścigi Superbike’ów', 'Supercross', 'Supermoto', 'Superside', 'Wędkarstwo surfingowe', 'Wędkarstwo surfingowe', 'Surfowanie kajakowe', 'Łódź surfingowa', 'Surfing', 'Przetrwanie', 'Bagienny futbol', 'Pływanie', 'Walka na miecze', 'Jazda na łyżwach synchronicznych', 'Pływanie synchroniczne', 'Systema', 'Sojutsu', 'ai chi chuan', 'Oglądanie telewizji', 'Piłkarzyki', 'Tenis stołowy', 'Taekkyeon', 'Taekwondo', 'Etykietka', 'Oznacz rugby', 'Tai Chi', 'Taido', 'Tang Soo Do', 'Celuj w łucznictwo', 'Strzelanie do celu', 'Frywolitki', 'Wypychanie', 'Tchoukball', 'Degustacja herbaty', 'Pisze zespół', 'Gra drużynowa', 'Sport drużynowy', 'Tee-ball', 'Narciarstwo telemarkowe', 'Dziesięć piłek', 'Tennikoit', 'Tenis', 'Piłka tenisowa', 'Mocowanie namiotu', 'Cewki Tesli', 'Testowy krykiet', 'Piłka na uwięzi', 'Tetrisa', 'Tekstylia', 'SMS-y', 'Trójstronny futbol', 'Trzy piłki', 'Trzy poduszki', 'Wyścig na trzech nogach', 'Rzucać piłkę', 'Rzucanie', 'Walka na kciuki', 'Atak czasu', 'Tobogan', 'Zapasy na palce', 'Pocieranie nagrobka', 'Kolekcjonowanie narzędzi', 'Topiary', 'Torball', 'Żonglerka rzutami', 'Dotknij piłki nożnej', 'Dotknij rugby', 'Wycieczka na łyżwach', 'Wyścigi samochodów turystycznych', 'Bieganie po wieży', 'Piłka miejska', 'Kolekcjonowanie zabawek', 'Kolarstwo torowe', 'Wyścigi torowe', 'Ciągnięcie ciągnika', 'Wspinaczka tradycyjna', 'Zbieranie pociągów', 'Obserwacja pociągu', 'Trainspotting', 'Trampolina', 'Strzelanie do pułapek', 'Trapez', 'Podróżny', 'Poszukiwanie skarbów', 'Trekkie', 'Test', 'Triatlon', 'Podstępny strzał', 'Potrójny skok', 'Polowanie na trofea', 'Wyścigi ciężarówek', 'Trugo', 'Przeciąganie liny', 'Koziołkujący', 'Korepetycje dla dzieci', 'Dwadzieścia20', 'Ostateczny', 'Ostateczny dysk', 'Wyczynowe frisbee', 'Lotnictwo ultralekkie', 'Ultramaraton', 'Podwodna jazda na rowerze', 'Podwodny futbol', 'Podwodny hokej', 'Podwodny hokej na lodzie', 'Podwodny bieg na orientację', 'Fotografia podwodna', 'Podwodne rugby', 'Strzelanie do celu pod wodą', 'Nierówne paski', 'Koszykówka na monocyklu', 'Hokej na monocyklu', 'Próby monocykla', 'Jazda na monocyklu', 'Uniwersalny futbol', 'Uppies i Downies', 'Eksploracja miejska', 'Eksploracja miejska', 'V-Cube 6', 'V-Cube 7', 'Wakacje', 'Wadżra-mushti', 'Vale tudo', 'Front Walencji', 'Pilot Walencji', 'Varzesh-e Pahlavani', 'Sklepienie', 'Renowacja pojazdu', 'Gry wideo', 'Gra wideo', 'Kolekcjonowanie gier wideo', 'Gry wideo', 'Wideofil', 'Vigoro', 'Samochody zabytkowe', 'Skrzypce', 'Wolata', 'Siatkówka', 'Wolontariusz', 'Vovinam', 'Waboba', 'Wakeboarding', 'Wakesurfing', 'Pieszy', 'Wallball', 'Wallyball', 'Warhammera', 'Oglądanie wydarzeń sportowych', 'Koszykówka wodna', 'Wodne polo', 'Sporty wodne', 'Siatkówka wodna', 'Oznaczenie drogi', 'Obserwator pogody', 'Surfowanie po Internecie', 'Trening siłowy', 'Podnoszenie ciężarów', 'Zachodnia przyjemność', 'Obserwowanie wielorybów', 'Koszykówka na wózkach inwalidzkich', 'Wyścigi wózków inwalidzkich', 'Liga rugby na wózkach', 'Konkurs na kółkach', 'Kajakarstwo górskie', 'Struganie', 'Wiffleball', 'Windsurfing', 'Produkcja wina', 'Wing Chun', 'Latanie w kombinezonie Wingsuit', 'Latanie wingsuitem', 'Piłka druciana', 'Woggabalili', 'Polowanie na wilka', 'Lacrosse kobiet', 'Rzeźbienie w drewnie', 'Cięcie drewna', 'Łupanie drewna', 'Woodball', 'Leśnik', 'Obróbka drewna', 'Praca w spiżarni spożywczej', 'Praca przy samochodach', 'Bicie rekordu świata', 'Budowanie świata', 'Zapasy', 'Pismo', 'Pisanie muzyki', 'Pisanie piosenek', 'Wushu', 'Xiangqi', 'Xingyiquan', 'Jakie polo', 'Yağlı Güreş', 'Jo-jo', 'YoYo', 'Joga', 'Yubi Lakpi', 'Yukigassen', 'Ziplinowanie', 'Zurkhaneh', 'Zui quan', 'Zumba'];

function App() {

  const [sportMap, setSportMap] = useState(sports);

  const showItems = 6;

  return (
    <div className="App">
       {sportMap.filter((p, index) => index < showItems).map((value, index) => <a key={index} onClick={() => setSportMap(sportMap.filter((p,indexa) => indexa !== index))} active={sportMap.length > showItems ? 'active' : 'false'} >{value}</a>)}
       <div>{"Pozostało: " + (sportMap.length - showItems)}</div>
    </div>
  );
}

export default App;
