document.addEventListener('DOMContentLoaded', function() {
    const elencoRischi = document.getElementById('elenco-rischi');
    const visualizzaProceduraButton = document.getElementById('visualizza-procedura');
    const visualizzazioneProceduraSection = document.getElementById('visualizzazione-procedura');
    const titoloProcedura = document.getElementById('titolo-procedura');
    const contenutoProcedura = document.getElementById('contenuto-procedura');
    const tornaSelezioneButton = document.getElementById('torna-selezione');
    const inserimentoDatiSection = document.getElementById('inserimento-dati');
    const apriInserimentoDatiButton = document.getElementById('apri-inserimento-dati');
    const annullaInserimentoButton = document.getElementById('annulla-inserimento');
    const formInserimentoDati = document.getElementById('form-inserimento-dati');

    // Funzione per caricare dinamicamente le procedure (potrebbe essere da un file JSON o un database)
    function caricaProcedura(rischio) {
        // In questo esempio, le procedure sono hardcoded.
        // In un'applicazione reale, le recupereresti da una fonte dati.
        switch (rischio) {
            case 'incendio-boschivo':
                titoloProcedura.textContent = 'Incendio Boschivo';
                contenutoProcedura.innerHTML = `
                    <h3>Fase di Allarme</h3>
                    <ol>
                        <li>Ricevere la segnalazione.</li>
                        <li>Verificare la posizione e l'entità.</li>
                        <li>Allertare le squadre AIB.</li>
                        <li>Comunicare con la sala operativa regionale.</li>
                    </ol>
                    <h3>Fase Operativa</h3>
                    <ul>
                        <li>Dirigere le operazioni di spegnimento.</li>
                        <li>Coordinare le risorse aeree e terrestri.</li>
                        <li>Mantenere i contatti con le autorità locali.</li>
                    </ul>
                    <button class="apri-form-dati" data-rischio="${rischio}">Inserisci Dati Evento</button>
                `;
                break;
            case 'alluvione':
                titoloProcedura.textContent = 'Alluvione/Esondazione';
                contenutoProcedura.innerHTML = `
                    <h3>Fase di Pre-Allarme</h3>
                    <ol>
                        <li>Monitorare i livelli idrometrici.</li>
                        <li>Verificare le previsioni meteo.</li>
                        <li>Informare la popolazione a rischio.</li>
                    </ol>
                    <h3>Fase di Emergenza</h3>
                    <ul>
                        <li>Attivare i piani di evacuazione.</li>
                        <li>Gestire i soccorsi alle persone isolate.</li>
                        <li>Coordinare gli interventi di ripristino.</li>
                    </ul>
                    <button class="apri-form-dati" data-rischio="${rischio}">Inserisci Dati Evento</button>
                `;
                break;
            case 'terremoto':
                titoloProcedura.textContent = 'Terremoto';
                contenutoProcedura.innerHTML = `
                    <h3>Fase di Scossa</h3>
                    <ol>
                        <li>Mantenere la calma e cercare riparo.</li>
                        <li>Verificare la presenza di feriti.</li>
                        <li>Non utilizzare ascensori.</li>
                    </ol>
                    <h3>Fase Post-Sisma</h3>
                    <ul>
                        <li>Valutare i danni strutturali.</li>
                        <li>Attivare le squadre di ricerca e soccorso.</li>
                        <li>Fornire assistenza agli sfollati.</li>
                    </ul>
                    <button class="apri-form-dati" data-rischio="${rischio}">Inserisci Dati Evento</button>
                `;
                break;
            case 'maltempo':
                titoloProcedura.textContent = 'Maltempo (vento forte, neve, ghiaccio)';
                contenutoProcedura.innerHTML = `
                    <h3>Vento Forte</h3>
                    <ul>
                        <li>Mettere in sicurezza oggetti esterni.</li>
                        <li>Monitorare le allerte meteo.</li>
                    </ul>
                    <h3>Neve e Ghiaccio</h3>
                    <ul>
                        <li>Spargere sale sulle strade.</li>
                        <li>Verificare la viabilità.</li>
                    </ul>
                    <button class="apri-form-dati" data-rischio="${rischio}">Inserisci Dati Evento</button>
                `;
                break;
            case 'incidente-stradale':
                titoloProcedura.textContent = 'Incidente Stradale';
                contenutoProcedura.innerHTML = `
                    <h3>Fase di Segnalazione</h3>
                    <ol>
                        <li>Segnalare l'incidente alle autorità competenti.</li>
                        <li>Fornire la posizione precisa.</li>
                    </ol>
                    <h3>Fase di Intervento</h3>
                    <ul>
                        <li>Assicurare l'area.</li>
                        <li>Prestare il primo soccorso (se sicuri di farlo).</li>
                        <li>Collaborare con le forze dell'ordine e i sanitari.</li>
                    </ul>
                    <button class="apri-form-dati" data-rischio="${rischio}">Inserisci Dati Evento</button>
                `;
                break;
            default:
                titoloProcedura.textContent = '';
                contenutoProcedura.innerHTML = '<p>Nessuna procedura definita per questo rischio.</p>';
                break;
        }
        // Aggiungi un listener per il pulsante "Inserisci Dati Evento" creato dinamicamente
        const apriFormDatiButtonDinamico = contenutoProcedura.querySelector('.apri-form-dati');
        if (apriFormDatiButtonDinamico) {
            apriFormDatiButtonDinamico.addEventListener('click', function() {
                const rischioSelezionato = this.dataset.rischio;
                // Potresti voler passare il rischio al form di inserimento dati
                console.log('Apertura form dati per:', rischioSelezionato);
                visualizzazioneProceduraSection.classList.add('hidden');
                inserimentoDatiSection.classList.remove('hidden');
            });
        }
    }

    visualizzaProceduraButton.addEventListener('click', function() {
        const rischioSelezionato = elencoRischi.value;
        if (rischioSelezionato) {
            caricaProcedura(rischioSelezionato);
            visualizzazioneProceduraSection.classList.remove('hidden');
            selezioneRischiSection.classList.add('hidden');
            inserimentoDatiSection.classList.add('hidden');
        } else {
            alert('Seleziona un tipo di rischio.');
        }
    });

    tornaSelezioneButton.addEventListener('click', function() {
        visualizzazioneProceduraSection.classList.add('hidden');
        selezioneRischiSection.classList.remove('hidden');
    });

    apriInserimentoDatiButton.addEventListener('click', function() {
        selezioneRischiSection.classList.add('hidden');
        visualizzazioneProceduraSection.classList.add('hidden');
        inserimentoDatiSection.classList.remove('hidden');
        formInserimentoDati.reset(); // Pulisce il form
    });

    annullaInserimentoButton.addEventListener('click', function() {
        inserimentoDatiSection.classList.add('hidden');
        selezioneRischiSection.classList.remove('hidden');
    });

    formInserimentoDati.addEventListener('submit', function(event) {
        event.preventDefault(); // Impedisce l'invio predefinito del form
        const formData = new FormData(this);
        const datiEvento = {};
        formData.forEach((value, key) => datiEvento[key] = value);
        console.log('Dati evento inseriti:', datiEvento);
        alert('Dati evento salvati (simulazione).'); // Sostituisci con la logica di salvataggio reale
        inserimentoDatiSection.classList.add('hidden');
        selezioneRischiSection.classList.remove('hidden');
    });

    const selezioneRischiSection = document.getElementById('selezione-rischio');
});
