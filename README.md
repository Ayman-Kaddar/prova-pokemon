# Prova Teorica

1. **Quins problemes detectes a l'operació i raona la resposta**
    - Barreja de responsabilitats: getTotal fa càlculs de preu directament en lloc de delegar-ho.
    - Poc extensible: cada nou tipus de servei o recàrrec obliga a modificar el mètode.
    - Ús potencial de valors numèrics simples per diners.
    - Manca de validacions.

    Imagínate que getTotal és una cuina on el cuiner (el mètode) ho fa TOT: compra ingredients, cuina, serveix el plat, cobra, hi ha de recordar totes les receptes.

    El problema és que:
    - Si vols afegir una nova recepta (nou tipus de servei), has d’entrar a la cuina i canviar-ho tot.
    - Si el cuiner s’equivoca amb una mesura (errors de diners), surt malament el plat (total incorrecte).
    - Tot està barrejat en un sol lloc, i si vols fer canvis, és fàcil trencar alguna altra cosa.

2. **Proposa una solució alternativa (també en pseudocodi del mateix estil) que corregeixi els problemes de l'operació getTotal de      Registered User que has detectat en la pregunta anterior. Realitza tots els canvis que consideris necessaris en qualsevol de les classes del model de l'enunciat**


# Prova Tècnica 

Funcionalitats implementades

1. **Llistat de Pokémon amb paginació**
   - Mostra 20 Pokémon per pàgina.
   - Paginació amb botons "Anterior i Següent".
   - Dades obtingudes de l'API .

2. **Canvi de vista (llistat / graella)**
   - Opció de canviar entre:
     - **Llistat** "La llista es mostra en vertical"
     - **Graella** "4 columnes en escriptori, 3 en tablet, 2 en mòbil"
   - L'estat de la vista es manté durant la navegació.

3. **Detall del Pokémon**
   - Pàgina accessible mitjançant la URL: `/pokemon/:id` 
   - Mostra el nom i la imatge del Pokémon.
   - Es pot tornar al llistat anterior amb el botó "Tornar al llistat".

4. **Manteniment d’estat en tornar del detall**
   - En tornar del detall, "es recupera la vista (llistat o graella) i la pàgina actual".
   - Implementat amb:
   - `state` de `react-router-dom` (per navegacions normals)
   - `localStorage` com a resguàrdia.

 5. **Responsive**
   - Adaptat a escriptori, tablet i mòbil.
   - Utilitza `@media` en CSS pur per ajustar la graella segons la mida de la pantalla.
    
6. **Tests unitaris**
   - Test unitari per al component `PokemonCard`.
   - Verifica que el nom i la imatge del Pokémon es mostren correctament.

## Com executar el projecte

   - Clona el repositori:
   - git clone https://github.com/Ayman-Kaddar/prova-pokemon.git
   - cd prova-pokemon
   - npm install
   - npm run dev

## Com executar els tests

   - npm run test

