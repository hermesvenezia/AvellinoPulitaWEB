//ProgrammaDifferenziata 
const programmaList = document.getElementById("programma-list");
database.collection('programmaRaccolta').get().then(snapshot => {
	programmaListFunction(snapshot.docs);
});

function programmaListFunction(data){
	let html = '';
	data.forEach(doc => {
		const obj = doc.data();
		const li = `
		<li>
		 <div class="collapsible-header grey lighten-4">Lunedì</div>
		 <div class="collapsible-body white" id="0"> <b><p color="#76b852">Il Lunedi si raccoglie: </b> ${obj.Lunedì}<br><br><p align="center"> <input type="button" onClick="cambioProgramma('Lunedi')" value="Modifica Programma" /></p> </div>
		</li>
		<li>
		 <div class="collapsible-header grey lighten-4">Martedi</div>
		 <div class="collapsible-body white" id="1"> <b><p color="#76b852">Il Martedì si raccoglie: </b>${obj.Martedì}<br><br><p align="center"><input type="button" onClick="cambioProgramma('Martedi')" value="Modifica Programma" /></p> </div>
		</li>
		<li>
		 <div class="collapsible-header grey lighten-4">Mercoledi</div>
		 <div class="collapsible-body white" id="2"> <b><p color="#76b852">Il Mercoledi si raccoglie: </b>${obj.Mercoledì}<br><br><p align="center"><input type="button" onClick="cambioProgramma('Mercoledi')" value="Modifica Programma" /></p> </div>
		</li>
		<li>
		 <div class="collapsible-header grey lighten-4">Giovedi</div>
		 <div class="collapsible-body white" id="3"> <b><p color="#76b852">Il Giovedi si raccoglie: </b>${obj.Giovedì}<br><br><p align="center"><input type="button" onClick="cambioProgramma('Giovedi')" value="Modifica Programma" /></p> </div>
		</li>
		<li>
		 <div class="collapsible-header grey lighten-4">Venerdi</div>
		 <div class="collapsible-body white" id="4"> <b><p color="#76b852">Il Venerdi si raccoglie:</b> ${obj.Venerdì}<br><br><p align="center"><input type="button" onClick="cambioProgramma('Venerdi')" value="Modifica Programma" /></p> </div>
		</li>
		<li>
		 <div class="collapsible-header grey lighten-4">Sabato</div>
		 <div class="collapsible-body white" id="5"> <b><p color="#76b852">Il Sabato si raccoglie:</b> ${obj.Sabato}<br><br><p align="center"><input type="button" onClick="cambioProgramma('Sabato')" value="Modifica Programma" /></p> </div>
		</li>
		<li>
		 <div class="collapsible-header grey lighten-4">Domenica</div>
		 <div class="collapsible-body white" id="6"> <b><p color="#76b852">La Domenica si raccoglie: </b>${obj.Domenica}<br><br><p align="center"><input type="button" onClick="cambioProgramma('Domenica')" value="Modifica Programma" /></p> </div>
		</li>
		`; 
		html += li;
		programmaList.innerHTML += html;
	});
}

function cambioProgramma(value){
	window.open("cambiaProgramma.html?giorno=" + value,"Cambio Programma","height=300,width=300");
	/*
		var flag = true;
		var program = prompt("Inserisci il programma: (Es: Carta , Vetro, Organico, Multimateriale, Indifferenziato) [Inserisci Null per programma vuoto]"); 
				if(program == "null" || program == "Null"){
					var arrayProgram = [];
				}else{
					var arrayProgram = []; 
					if(program.indexOf(',') == -1){
						program = program.toLowerCase().trim();
						if( program == "carta" || program == "cartone" || program == "carta e cartone" || program == "cartone e carta"){
								program = "Carta e Cartone";
							}else if(program == "indiferenziato" || program == "indifferenziato" || program == "indifferenzziato" || program == "indifferenziat" || program == "indifferenziato") {
								program = "Indifferenziato";
							}else if(program == "vetro" || program == "vetr"){
								program = "Vetro"
							}else if(program == "organico" || program == "organic"){
								program = "Organico"
							}else if(program == "multimateriale" || program == "multi materiale" || program == "multimaterial"  || program == "multimatariale"){
								program = "Multimateriale"
							}else{
								alert("NOME DI UN MATERIALE NON RICONISCIUTA! MODIFICA PROGRAMMA ANNULATA!");
								flag = false; 
							}
							arrayProgram = program;
					}else{
						arrayProgram = program.split(",");
						for( i = 0; i < arrayProgram.length; i++){
							var temp = arrayProgram[i].toLowerCase();
							temp = temp.trim();
							if( temp == "carta" || temp == "cartone" || temp == "carta e cartone" || temp == "cartone e carta"){
								arrayProgram[i] = "Carta e Cartone";
							}else if(temp == "indiferenziato" || temp == "indifferenziato" || temp == "indifferenzziato" || temp == "indifferenziat" || temp == "indifferenziato") {
								arrayProgram[i] = "Indifferenziato";
							}else if(temp == "vetro" || temp == "vetr"){
								arrayProgram[i] = "Vetro"
							}else if(temp == "organico" || temp == "organic"){
								arrayProgram[i] = "Organico"
							}else if(temp == "multimateriale" || temp == "multi materiale" || temp == "multimaterial" || temp == "multimatariale"){
								arrayProgram[i] = "Multimateriale"
							}else{
								alert("NOME DI UN MATERIALE NON RICONISCIUTA! MODIFICA PROGRAMMA ANNULATA!");
								flag = false; 
							}
						}
					}
				}
	switch(value){
		case "Lunedi": 
				if(flag){
					database.collection('programmaRaccolta').doc('o8GvKyplciY400fuTfFl').update({Lunedi: arrayProgram});
				}
				break;
		case "Martedi": 
				if(flag){
					database.collection('programmaRaccolta').doc('o8GvKyplciY400fuTfFl').update({Martedi: arrayProgram});
				}
				break; 
		case "Mercoledi": 
				if(flag){
					database.collection('programmaRaccolta').doc('o8GvKyplciY400fuTfFl').update({Mercoledi: arrayProgram});
				}
				break; 
		case "Giovedi":
				if(flag){
					database.collection('programmaRaccolta').doc('o8GvKyplciY400fuTfFl').update({Giovedi: arrayProgram});
				}
				break;
		case "Venerdi": 
				if(flag){
					database.collection('programmaRaccolta').doc('o8GvKyplciY400fuTfFl').update({Venerdi: arrayProgram});
				}
				break; 
		case "Sabato": 
				if(flag){
					database.collection('programmaRaccolta').doc('o8GvKyplciY400fuTfFl').update({Sabato: arrayProgram});
				}
				break; 
		case "Domenica": 
				if(flag){
					database.collection('programmaRaccolta').doc('o8GvKyplciY400fuTfFl').update({Domenica: arrayProgram});
				}
				break;
		alert("Aggiornare per vedere le modifiche!"); */
	}
