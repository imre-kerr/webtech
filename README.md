webtech
=======

Project work for IT2805 - Web Technologies

By: Knut Aron Fludal, Imre Kerr og Kathrine Steffensen

Forskjellig teknologi vi har brukt på denne sida:

PureCSS. (http://purecss.io/ ) Dette er ein grid-layout i CSS, som vi har brukt som eit starting-punkt for sida vår. Dette har vi gjort for å spare litt tid. Vi har selvsagt vært nødt til å forandre på den for at den skal tilpasses våre behov, og vi har også lagd ikonene våre selv. 

Forms: Vi bruker forms for å ta input til søket vårt. Søket vårt foregår kun på oppskrift-titlene og ikkje innhold. 

XML: Vi lagrer oppskriftene våre i xml. Vi bruker et tredjepartsbibliotek (http://goessner.net/download/prj/jsonxml/) for å oversette XMLen til Json, som er lettere å jobbe med i JavaScript-kode. Fordelene med dette er at vi slipper å lage ei nettside for hver oppskrift, men bare kan lage xml-filer etter en gitt mal. 

Ulempen med å gjøre det på denne måten er at hele siden slutter å fungerer hvis man ikke har JavaScript.  Dette er en ulempe som vi er klar over, men ikke kommer til å gjøre noe med, da vi ikke har tid til å implementere en annen løsning. 

Client-side-programming:  Som nevnt over, bruker vi JavaScript til å hente oppskrifter og metadata i XML-format, parse dette, og sette inn innholdet på siden. Med andre ord er HTML-sidene våre en form for templates, med en grunnleggende template-motor implementert i JavaScript. Søk og filtrering gjøres også client-side.

Server-side Programming: Vi har ikke server-side programmering, da vi fant ut at vi kunne gjøre alt vi ville gjøre med JavaScript, og det da betyr at vi slipper å styre med å ha en server. 

Lineær navigering: Dette ser litt styggt ut, men man kan gå fra side til side, lineært. Dette er noe som egentlig ikke gir mening å ha med, da man gjerne vil ha relaterte oppskrifter( dette er ikke implementert), og ikke neste oppskrift i rekka. Dette er ett problem siden vår "database" over oppskrifter ikke er sortert etter emner. Hadde ikke dette vært en del av det obligatoriske i oppgaven hadde vi droppet det.


TODO-liste som vi ville implementert hvis vi hadde hatt tid/prosjektet hadde vært større: 
 - Søk på innhold
 - non-javascript solution
 - Søk basert på vanskelighetsgrad
 - rangere søk-resultatet. 
 - legge til felere oppskrifter