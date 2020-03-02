//SEGNALAZIONI 
const segnalazioneList = document.getElementById("segnalazioni-list");
database.collection('segnalazioni').get().then(snapshot => {
	segnalazioniList(snapshot.docs);
});

function segnalazioniList(data){
	let html = '';
	data.forEach(doc => {
		const segnalazione = doc.data();
		const li = ` 
			<li> 
				<div class="collapsible-header grey lighten-4">${segnalazione.via}</div>
				<div class="collapsible-body white"><p align="center"><img src="${segnalazione.foto}" style="max-width:600px;max-height:600px"></p> <br>
				${segnalazione.descrizione}<br> <p align="center"><button onClick="elimina('${doc.id}')">Elimina Segnalazione</button> </p></div>
			</li>
		`;
		html += li;
	});
	segnalazioneList.innerHTML = html;
}

function elimina(value){
	database.collection('segnalazioni').doc(value).delete();
	const segnalazioneList = document.getElementById("segnalazioni-list");
	database.collection('segnalazioni').get().then(snapshot => {
	segnalazioniList(snapshot.docs);
});
	
}