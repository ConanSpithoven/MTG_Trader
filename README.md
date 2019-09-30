# Development Branch
Deze branch wordt gebruikt voor het toevoegen van changes zodat de `master` niet stuk gaat. `master` zal gezien worden als de release branch

# MTG_Trader
project voor CMTPRG02-5

## MVC
Het MVC framework waar ik gebruik van maak is NestJS, hierin gebruik ik MySQL als database door gebruik te maken van TypeORM.

## Product
Een website waarop Magic The Gathering(trading card game) de kaarten die zij willen ruilen online kunnen zetten en een wishlist aan kunnen maken. Dit word samen met de locatie van de gebruiker gebruikt om deals aan te raden voor de gebruikers.
Hierdoor werkt de website als een tussenpersoon voor gebruikers die hun kaarten willen ruilen of verkopen/kopen

## ERD
  ![MVC ERD](https://user-images.githubusercontent.com/22493336/65430004-6d3f7480-de17-11e9-9817-5326483d8d52.PNG)
  
## Eind opdracht eisen planning:
Beveiliging: 
  -	Bericht sturen naar gebruikers of reageren op trade deals kan alleen gedaan worden door gebruikers
  -	Bij het aanmaken van een account moet een geldig email adres gebruikt worden.
  -	OWASP top 10 wordt aan voldaan.
  
Verschillende rollen en rechten:
  -	Admin, controle over zichtbaarheid van andere accounts en hun deals. Krijgt reports over andere gebruikers binnen.
  -	Standaard gebruiker, kan kaarten online zetten en een wishlist aanmaken om kaarten te kunnen ruilen/kopen/verkopen.
  
Zoeken & Filteren:
  -	Er kan gezocht worden naar de naam van de gewenste kaart.
  -	Er kan gefilterd worden op:
    Kaart type / Kleur / cmc
  -	Er kan gezocht worden naar kaarten met de naam -goblin- en een cmc van 3, hierdoor worden alle kaart getoond waar goblin in de naam zit en de cmc 3 is.
  
OTAP:
  -	Iteraties van de website worden live gehost, hierover word een kort document opgesteld.
  -	De configuraties van het framework en hun locaties word genoteerd.
  -	Er zijn verschillende versies van het product doormiddel van branches, om zo een OTAP proces op te stellen.
  
Switch Button:
  -	Kaarten die door de gebruiker zijn ingevoerd kunnen op zichtbaar en niet zichtbaar gezet worden met een simpele switch knop in een       lijst.
  
Complex Eager Loading:
  -	Een lijst die de kaarten van de gebruiker laat zien, en hoeveel mensen die kaart in hun regio willen hebben of aanbieden.
  -	Een zelfde lijst is er voor de kaarten die de gebruiker op zijn wishlist heeft staan, hierin word aangegeven hoeveel van deze           kaarten er aangeboden worden in hun regio.
