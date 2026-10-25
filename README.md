# Stalla e caseificio — PWA per GitHub Pages

Questa cartella contiene la versione installabile dell'app. L'app funziona offline dopo la prima apertura online. Entrate, uscite, prezzi, scadenze e preventivi restano in IndexedDB nel browser e nel dispositivo che usi: GitHub Pages pubblica soltanto i file dell'app.

## Pubblicazione

1. Crea un repository GitHub e carica **il contenuto di questa cartella** nella radice del repository: `index.html`, `manifest.webmanifest`, `sw.js`, `icons/` e `.nojekyll`. Non caricare i file JSON delle copie di sicurezza.
2. In **Settings → Pages**, scegli **Deploy from a branch**, la branch principale e **/(root)**. Se preferisci pubblicare dalla cartella `docs`, metti tutti questi file in `docs/` e scegli **/docs**.
3. Apri l'indirizzo indicato da GitHub Pages con HTTPS. Per un repository di progetto sarà normalmente `https://NOMEUTENTE.github.io/NOME-REPOSITORY/`.
4. Dal browser usa **Installa l'app**, se compare, oppure l'opzione di installazione nel menu del browser. La prima apertura deve avvenire online per memorizzare i file necessari.

Le istruzioni ufficiali per Pages sono disponibili nella [documentazione GitHub](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

## Trasferimento dei dati esistenti

1. Apri **la copia precedente che mostra i tuoi dati** e vai in **Dati → Scarica copia di sicurezza**.
2. Apri il nuovo indirizzo GitHub Pages e vai in **Dati → Seleziona una copia JSON**.
3. Controlla l'anteprima, premi **Conferma ripristino** e verifica i totali.
4. Conserva il JSON in un luogo sicuro e ripeti le copie di sicurezza regolarmente.

Il file locale e il sito GitHub Pages hanno archivi distinti. Anche browser o dispositivi diversi hanno archivi distinti: questa PWA non sincronizza i dati automaticamente.

## Funzionamento offline e aggiornamenti

- Dopo la prima visita online, l'app e i dati locali restano utilizzabili offline. I collegamenti a listini ufficiali, agevolazioni e WhatsApp richiedono Internet.
- I promemoria dello Scadenzario compaiono quando apri l'app; non sono notifiche push.
- Quando una nuova versione del service worker è pronta, compare **Aggiorna l'app**. L'aggiornamento dei file dell'app non cancella IndexedDB, ma è comunque prudente conservare una copia JSON.
- Per ogni nuova pubblicazione che modifica i file della PWA, cambia il valore `CACHE_NAME` in `sw.js` per distribuire con certezza la nuova versione offline.
