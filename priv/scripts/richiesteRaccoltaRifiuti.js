//SEGNALAZIONI 
const richiesteList = document.getElementById("richieste-list");
database.collection('richiestaRifiutiSpeciali').get().then(snapshot => {
	segnalazioniList(snapshot.docs);
});

function segnalazioniList(data){
	let html = '';
	data.forEach(doc => {
		const richiesta = doc.data();
		const li = ` 
			<li> 
				<div class="collapsible-header grey lighten-4">${richiesta.nome} ${richiesta.cognome} </div>
				<div class="collapsible-body white"><p align="center"><img src="${richiesta.foto}" style="max-width:300px;max-height:300px"></p> <br> <b> Tipo di oggetto: </b>
				${richiesta.oggetto}<br> <b> Richiedente smaltimento: </b> ${richiesta.nome} ${richiesta.cognome} <br>
				<b>Indirizzo: </b> ${richiesta.via}<br>
				<b>email: </b> ${richiesta.email}<p align="center"><button onClick="elimina('${doc.id}')">Elimina Richiesta</button> </p></div>
			</li>
		`;
		html += li;
	});
	richiesteList.innerHTML = html;
}

function elimina(value){
	database.collection('richiestaRifiutiSpeciali').doc(value).delete();
	const segnalazioneList = document.getElementById("richieste-list");
	database.collection('richiestaRifiutiSpeciali').get().then(snapshot => {
	segnalazioniList(snapshot.docs);
});
	
}