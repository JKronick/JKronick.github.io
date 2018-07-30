window.onload = setUp;
const campers = [


	{
		name: 'Liberty Budman',
		cabin: 1,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Isabella Cobrin',
		cabin: 1,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Isabel Gelman',
		cabin: 1,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'NoraJin Sokoloff',
		cabin: 1,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Ruby Steinberg',
		cabin: 1,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Mira Toledano',
		cabin: 1,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Evan Degani',
		cabin: 3,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Ari Diamond',
		cabin: 3,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Lucas Hart',
		cabin: 3,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'David Sadeh',
		cabin: 3,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Aiden Shlien',
		cabin: 3,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Max Uditsky',
		cabin: 3,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Asher Wolfensohn',
		cabin: 3,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Molly Backler',
		cabin: 4,
		unit: 'gosh',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Chloe Behar',
		cabin: 4,
		unit: 'gosh',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'sophie cobrin',
		cabin: 4,
		unit: 'gosh',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Andrea Cohen',
		cabin: 4,
		unit: 'gosh',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Emma Dixter',
		cabin: 4,
		unit: 'gosh',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Ruby Goldberg',
		cabin: 4,
		unit: 'gosh',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Amanda Gurman',
		cabin: 4,
		unit: 'gosh',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Sophie Kunin',
		cabin: 4,
		unit: 'gosh',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Gabrielle Rothstein',
		cabin: 4,
		unit: 'gosh',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Olivia Rothstein',
		cabin: 4,
		unit: 'gosh',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Joelle Toledano',
		cabin: 4,
		unit: 'gosh',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Robert Cornea',
		cabin: 5,
		unit: 'gosh',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Noah Cziment',
		cabin: 5,
		unit: 'gosh',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Sacha Filger',
		cabin: 5,
		unit: 'gosh',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Ronnie Hartal',
		cabin: 5,
		unit: 'gosh',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Noah Haupt',
		cabin: 5,
		unit: 'gosh',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Kaiden Reinblatt',
		cabin: 5,
		unit: 'gosh',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Felix Roussel-Lustgarten',
		cabin: 5,
		unit: 'gosh',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Noah-Kai Shak',
		cabin: 5,
		unit: 'gosh',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Ryan Stolow',
		cabin: 5,
		unit: 'gosh',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Sean VanFrank',
		cabin: 5,
		unit: 'gosh',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Jonah Warshawsky',
		cabin: 5,
		unit: 'gosh',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Adam Zabitsky',
		cabin: 5,
		unit: 'gosh',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Amanda Benzacar',
		cabin: 6,
		unit: 'gib',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Aliza Burleigh',
		cabin: 6,
		unit: 'gib',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Rachel Cohen',
		cabin: 6,
		unit: 'gib',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Charlotte Diamond',
		cabin: 6,
		unit: 'gib',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Mia Dixter',
		cabin: 6,
		unit: 'gib',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Samara Gorbatyuk',
		cabin: 6,
		unit: 'gib',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Zoe Gutfreund',
		cabin: 6,
		unit: 'gib',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Maya Puterman-Salzman',
		cabin: 6,
		unit: 'gib',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Emma Reiner',
		cabin: 6,
		unit: 'gib',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Leah Sigesmund',
		cabin: 6,
		unit: 'gib',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Jenna Star',
		cabin: 6,
		unit: 'gib',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Hannah Zand',
		cabin: 6,
		unit: 'gib',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Alexa Azran',
		cabin: 8,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Kaitlin"Katie" Chankowsky',
		cabin: 8,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Aidyn Dagenais-Adler',
		cabin: 8,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Talya Elbaz',
		cabin: 8,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Talia Puterman-Salzman',
		cabin: 8,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Rachel Rubin-Strudwick',
		cabin: 8,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Samantha Schwartz',
		cabin: 8,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Zoe Wagman',
		cabin: 8,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Jesse Amar',
		cabin: 9,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Matthew Bard',
		cabin: 9,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Jacob Clarkin',
		cabin: 9,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Daniel Korngold',
		cabin: 9,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Liam Ohayon',
		cabin: 9,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Tyler Patterson',
		cabin: 9,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Isaac Rubinstein',
		cabin: 9,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Jacob Sassoon',
		cabin: 9,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Dylan Savelson',
		cabin: 9,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Matthew Stolow',
		cabin: 9,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Matthew Tessler',
		cabin: 9,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Tyler VanFrank',
		cabin: 9,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Dylan Bola',
		cabin: 10,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Ethan Degani',
		cabin: 10,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Daniel Fishko',
		cabin: 10,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Brandon Steiner',
		cabin: 10,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Jacob Tessler',
		cabin: 10,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Benjamin Berbrier',
		cabin: 11,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Drew Bornstein',
		cabin: 11,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Isaac Cape',
		cabin: 11,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Benjamin Cobrin',
		cabin: 11,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Tyler Dubrofsky',
		cabin: 11,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Andrew Korne',
		cabin: 11,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Ben Korne',
		cabin: 11,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Evan Schachter',
		cabin: 11,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'William Sebag',
		cabin: 11,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Adam Shtern',
		cabin: 11,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Iris Cohen',
		cabin: 12,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Emma Grover',
		cabin: 12,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Lara Kasner-Remer',
		cabin: 12,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Ashley Kastner',
		cabin: 12,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Alexandra Libman',
		cabin: 12,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Sydney Maislin',
		cabin: 12,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Mia Moghrabi',
		cabin: 12,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Jade Ohayon',
		cabin: 12,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Zoe Small',
		cabin: 12,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'SarahQin Sokoloff',
		cabin: 12,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Sahra Zimmer',
		cabin: 12,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Jasmin Behar',
		cabin: 13,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Sony Berlach',
		cabin: 13,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Samantha Chankowsky',
		cabin: 13,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Gabriella Dubrovsky',
		cabin: 13,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Shannon Filger',
		cabin: 13,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Ruby Gelfand',
		cabin: 13,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Chiara Goldig',
		cabin: 13,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Emma Haupt',
		cabin: 13,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Julia Korman',
		cabin: 13,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Jasmine Puterman-Salzman',
		cabin: 13,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Hannah Rouben',
		cabin: 13,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Samantha Schwenger',
		cabin: 13,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Hailey Taiger',
		cabin: 13,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Sari Warshawsky',
		cabin: 13,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Benjamin Alter',
		cabin: 7,
		unit: 'gib',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'William Benzacar',
		cabin: 7,
		unit: 'gib',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'William Cohen',
		cabin: 7,
		unit: 'gib',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Jacob Gordon',
		cabin: 7,
		unit: 'gib',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Nathaniel Kunin',
		cabin: 7,
		unit: 'gib',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Rowen Shak',
		cabin: 7,
		unit: 'gib',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Charlie Shein',
		cabin: 7,
		unit: 'gib',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Samuel Zand',
		cabin: 7,
		unit: 'gib',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Zachary Zand',
		cabin: 7,
		unit: 'gib',
		isParticipating: true,
		isLeader: false,
	},
];

let cabins = [];
let units = [];
let sortedCampers = [];
window.onbeforeunload = function() {
  return "Are you sure you want to navigate away?";
}

function setUp(){
	showMessage();
	$('#messageScreen').click(function() {
		closeMessage();
	});
	$('#HTMLtoPDFcont').click(function() {
		document.getElementById('HTMLtoPDFcont').style.display = 'none'
	});
	$('#viewDocsScreen').click(function() {
		if(document.getElementById('viewDocsScreen').style.display === 'block'){
			closeViewDocs();
		}
	});
	$('.insideScreen').click(function(event){
    	event.stopPropagation();
	});
	setCampData();
	populateTables();
	changePartSection('unit');
	setInfo();
}
function setCampData(){
	for(let i=0; i<campers.length; i++){
		sortedCampers.push({
			name: campers[i].name,
			cabin: campers[i].cabin,
			unit: campers[i].unit,
			index: i,
		});
	}
	let addUnit;
	let addCabin;
	for(let i=0; i<campers.length; i++){
		addUnit = true;
		addCabin = true;
		for(let j=0; j<units.length && addUnit; j++){
			if(units[j].name === campers[i].unit){
				addUnit = false;
			}
		}
		for(let j=0; j<cabins.length && addCabin; j++){
			if(cabins[j].number === campers[i].cabin){
				addCabin = false;
			}
		}
		if(addUnit){
			units.push({name: campers[i].unit, cabinsInUnit: [], isParticipating: true});
		}
		if(addCabin){
			cabins.push({number: campers[i].cabin, unit: campers[i].unit, campers: [i], isParticipating: true})
			for(let j=0; j<units.length; j++){
				if(units[j].name === campers[i].unit){
					units[j].cabinsInUnit.push(cabins.length-1);
				}
			}
		}
	}
	fillCabins();
}
function fillCabins(){
	for(let i=0; i<cabins.length; i++){
		cabins[i].campers = [];
		for(let j=0; j<campers.length; j++){
			if(cabins[i].number === campers[j].cabin){
				cabins[i].campers.push(j);
			}
		}
	}
}
///////////////////////////////////Num Teams Section///////////////////////////////////
let teams = [
	{
		campers: [],
		teamLeaders: [],
		number: 1,
	}

];
function changeTeamNums(change){
	const teamNums = parseInt(document.getElementById('numTeams').innerHTML)
	if(teamNums===1 && change===-1) return;
	document.getElementById('viewCabinDocs').style.display = 'none';
	document.getElementById('viewTeamDocs').style.display = 'none';
	document.getElementById('numTeams').innerHTML = teamNums + change;
	if(change>0){
		teams.push({number: teamNums+1, teamLeaders: [], campers: []})
	}else{
		teams.length+=change;
	}
	setTeamLeaders();
	setTeamLeaders();
	setInfo();
}
//////////////////////////////////////////////////////////////////////

///////////////////////////////////Team Leaders Section///////////////////////////////////
let teamLeaders = false;
let searchOpt = 'name';
let teamNumber;
function setTeamLeaders(){
	if(teamLeaders){
		document.getElementById('addTeamLeaders').innerHTML = 'Add team leaders';
		teamLeaders = false;
		$('#tlDiv').empty();
		setInfo();
		return;
	}
	document.getElementById('addTeamLeaders').innerHTML = 'Remove team leaders';
	teamLeaders = true;
	for(let i=0; i<teams.length; i++){
		$('#tlDiv').append(
			`
			<div class="leaderListCont">
				<div style="margin-top: 20px">
					Team ${teams[i].number}:
					<img width="15" height="15" src="plus.png" onclick="openAddTeamLeadersScreen(${i})">
				</div>
				<ul id="tlList${i}" class="leaderList">	
				</ul>
			</div>
			`
		)
		poplulateLeaderList('tlList'+i, i)
	}
	setInfo();
}

function poplulateLeaderList(id, index){
	$('#'+id).empty();
	for(let i=0; i<teams[index].teamLeaders.length; i++){
		$(`#`+id).append(
			` 
			<li style="margin-bottom: 4px">
				${campers[teams[index].teamLeaders[i]].name}
				<img style="margin-left: 5px" src="minus.png" width="10" height="10" onclick="removeTeamLeader(${index}, ${i})">
			</li>
			`
		);
	}
}
function openAddTeamLeadersScreen(index){
	document.getElementsByTagName("BODY")[0].style.overflow = 'hidden';
	$('#leadersToAdd').empty();
	teamNumber = index;
	for(let i=0; i<teams[index].teamLeaders.length; i++){
		poplulateLeaderList('leadersToAdd', index)
	}
	document.getElementById("addTeamLeaderScreen").style.display = 'block';
	document.getElementById("teamHeading").innerHTML = 'Add leaders for team '+teams[index].number;
}
function closeAddTeamLeadersScreen(){
	document.getElementsByTagName("BODY")[0].style.overflow = 'auto';
	document.getElementById("addTeamLeaderScreen").style.display = 'none';
	setTeamLeaders();
	setTeamLeaders();
}
function addTeamLeader(index){
	teams[teamNumber].teamLeaders.push(index);
	campers[index].isLeader = teams[teamNumber].number;
	campers[index].isParticipating = true;
	disableYesNo(index);
	document.getElementById('resultsDisplay').style.display = "none";
	document.getElementById('search').value = '';
	$('#leadersToAdd').append(
		`
		<li style="margin-bottom: 4px">
			${campers[index].name}
			<img style="margin-left: 5px" src="minus.png" width="10" height="10" onclick="removeTeamLeader(${teamNumber}, ${teams[teamNumber].teamLeaders.length-1})">
		</li>
		`
	);
}
function disableYesNo(index){
	document.getElementById('camperYes'+index).style.display = 'none';
	document.getElementById('camperNo'+index).style.display = 'none';
	document.getElementById('tlIndicator'+index).innerHTML = 'Team leader';
}
function removeTeamLeader(index, i){
	campers[teams[index].teamLeaders[i]].isLeader = false;
	enableYesNo(teams[index].teamLeaders[i]);
	teams[index].teamLeaders = teams[index].teamLeaders.slice(0,i).concat(teams[index].teamLeaders.slice(i+1));
	poplulateLeaderList('leadersToAdd', index);
	poplulateLeaderList('tlList'+index, index);
}
function enableYesNo(index){
	document.getElementById('tlIndicator'+index).innerHTML = '';
	document.getElementById('camperYes'+index).style.display = 'inline-block';
	document.getElementById('camperNo'+index).style.display = 'inline-block';
}
function setSearchOpt(opt){
	searchOpt = opt;
	if(!document.getElementById(opt+'Sopt').className.includes('partSelected')){
		document.getElementById('unitSopt').classList.remove('searchSelected');
		document.getElementById('cabinSopt').classList.remove('searchSelected');
		document.getElementById('nameSopt').classList.remove('searchSelected');
		document.getElementById(opt+'Sopt').className+=" searchSelected";
		setResults(document.getElementById('search').value);
	}
}
function setResults(searchVal){
	const matchedCampers = getMatches(searchVal, searchOpt);
	$('#results').empty();
	if(document.getElementById('search').value && matchedCampers.length===0){
		$('#results').append('<tr><td style="color: #e3e3e3; margin: 10px 10px">No results</td></tr>')
		return;
	}
	if(searchVal){
		document.getElementById('resultsDisplay').style.display = "block";
	}else{
		document.getElementById('resultsDisplay').style.display = "none";
	}

	for(let i=0; i<matchedCampers.length; i++){
		$('#results').append(
			`
			<tr>
				<td>
					${campers[matchedCampers[i]].name}
				</td>
				<td>	
					${campers[matchedCampers[i]].unit}
				</td>
				<td>	
					Cabin: ${campers[matchedCampers[i]].cabin}
				</td>
				<td>
					<button class="addTLButton" onclick="addTeamLeader(${matchedCampers[i]})" >add</button>
				</td>
			</tr>
			`
		);
	}
}
function getMatches(searchVal){
	searchVal = searchVal.toLowerCase();
	if(searchVal.length===0){
		return [];
	}
	let matchedCampers =[];
	if(searchOpt==='unit'){
		for(let i=0; i<campers.length; i++){
			if(campers[i].unit===searchVal && !campers[i].isLeader){
				matchedCampers.push(i);
			}
		}
	}
	else if (searchOpt==='cabin') {
		searchVal = parseInt(searchVal);
		let ind = -1;
		for(let i=0; i<cabins.length; i++){
			if(cabins[i].number ===searchVal){
				ind = i;
				break;
			}
		}
		if(ind<0){
			return [];
		}
		for(let i=0; i<cabins[ind].campers.length; i++){
			if(!cabins[ind].campers[i].isLeader){
				matchedCampers.push(cabins[ind].campers[i]);
			}
		}
	}else if(searchOpt==='name'){
		let name;
		for(let i=0; i<campers.length; i++){
			name = (campers[i].name+" asf").split(' ');
			if(name[0].slice(0, searchVal.length).toLowerCase()===searchVal || name[1].slice(0, searchVal.length).toLowerCase()===searchVal || campers[i].name.slice(0, searchVal.length).toLowerCase()===searchVal){
				if(!campers[i].isLeader){
					matchedCampers.push(i);
				}
			}
		}
	}
	return matchedCampers;
}
//////////////////////////////////////////////////////////////////////

///////////////////////////////////Participation section///////////////////////////////////
function changePartSection(partSect){
	if(!document.getElementById(partSect+"PB").className.includes('partSelected')){
		document.getElementById('unitPart').style.display = 'none';
		document.getElementById('cabinPart').style.display = 'none';
		document.getElementById('camperPart').style.display = 'none';
		document.getElementById('unitPB').classList.remove('partSelected');
		document.getElementById('cabinPB').classList.remove('partSelected');
		document.getElementById('camperPB').classList.remove('partSelected');
		document.getElementById(partSect+'Part').style.display = 'block';
		document.getElementById(partSect+'PB').className+=" partSelected";
	}
}
function populateTables(){
	for(let i = 0; i < units.length; i++){
		let noClass;
		let yesClass;
		$("#unitTable").append(`<tr>
			<td style="width: 30%">
				<div style="margin-left: 10px">
					${units[i].name}
				</div>
			</td>
			<td style="width: 30%">
				<div style="margin: auto; width: 97px;">
					<div id="unitYes${i}" class="toggle yes selected" onclick="changeUnitPart(${i}, true)">Yes</div>
					<div id="unitNo${i}" class="toggle no unselected" onclick="changeUnitPart(${i}, false)">No</div>
				</div>
			</td>
		</tr>`);
	}
	for(let i = 0; i < cabins.length; i++){
		let noClass;
		let yesClass;
		$("#cabinTable").append(`<tr>
			<td style="width: 30%">
				<div style="margin-left: 23px">
					${cabins[i].number}
				</div>
			</td>
			<td style="width: 30%">
				<div>
					${cabins[i].unit}
				</div>
			</td>
			<td style="width: 40%">
				<div style="margin: auto; width: 97px;">
					<div id="cabinYes${i}" class="toggle yes selected" onclick="changeCabinPart(${i}, true)">Yes</div>
					<div id="cabinNo${i}" class="toggle no unselected" onclick="changeCabinPart(${i}, false)">No</div>
				</div>
			</td>
		</tr>`)
	}
	sortTable('firstName');
}
function sortTable(sortOpt){
	sortCampers(sortOpt);
	document.getElementById('firstName').setAttribute('class', 'sortOpt');
	document.getElementById('lastName').setAttribute('class', 'sortOpt');
	document.getElementById('unit').setAttribute('class', 'sortOpt');
	document.getElementById('cabin').setAttribute('class', 'sortOpt');
	document.getElementById(sortOpt).setAttribute('class', 'sortOpt sortSelected');
	$('#camperTable').empty();
	let teamLeader = "";
	let leaderStyle = "";
	for(let i = 0; i < sortedCampers.length; i++){
		teamLeader = "";
		leaderStyle = "";
		if(campers[sortedCampers[i].index].isLeader){
			teamLeader = "Team leader";
			leaderStyle = "style='display: none'";
		}
		let noClass;
		let yesClass;
		if(campers[sortedCampers[i].index].isParticipating){
			noClass = 'unselected'
			yesClass = 'selected'
		}else{
			yesClass = 'unselected'
			noClass = 'selected'
		}
		$("#camperTable").append(`<tr>
			<td style="width: 40%">
				<div>
					${sortedCampers[i].name}
				</div>
			</td>
			<td style="width: 15%">
				<div>
					${sortedCampers[i].unit}
				</div>
			</td>
			<td style="width: 15%">
				<div style="text-align: center;">
					${sortedCampers[i].cabin}
				</div>
			</td>
			<td style="width: 30%">
				<div class="yesnoCont">
					<div id="tlIndicator${sortedCampers[i].index}">${teamLeader} </div>
					<div ${leaderStyle} id="camperYes${sortedCampers[i].index}" class="toggle yes ${yesClass}" onclick="changeCamperPart(${sortedCampers[i].index}, true)">Yes</div>
					<div ${leaderStyle} id="camperNo${sortedCampers[i].index}" class="toggle no ${noClass}" onclick="changeCamperPart(${sortedCampers[i].index}, false)">No</div>
				</div>
			</td>
		</tr>`)
	}
}
function sortCampers(sortOpt){
	sortedCampers.sort(function(a,b) {
		let nameIndex = 0;
		if(sortOpt==='lastName') nameIndex = 1;
		const nameA = a['name'].toUpperCase().split(' ')[nameIndex];
		const nameB = b['name'].toUpperCase().split(' ')[nameIndex];
		if(sortOpt==='cabin'){
			com = a.cabin - b.cabin;
			if(com!=0){
				return com;
			}
		}else if(sortOpt==='unit'){
			a.unit.toUpperCase();
			b.unit.toUpperCase();
			if(a.unit > b.unit){
				return 1;
			}else if(a.unit < b.unit){
				return -1;
			}
		}
		if(nameA > nameB){
			return 1;
		}else{
			return -1;
		}
	});
	fillCabins();
}
function changeUnitPart(index, state){
	if(state!==units[index].isParticipating){
		units[index].isParticipating = state;
		toggleYesNo(index, 'unit', state);
		for(let i=0; i<units[index].cabinsInUnit.length; i++){
			let ind = units[index].cabinsInUnit[i];
			if(cabins[ind].isParticipating !== state){
				changeCabinPart(ind, state);
			}
		}
	}
	setInfo();
}
function changeCabinPart(index, state){
	if(state!==cabins[index].isParticipating){
		cabins[index].isParticipating = state;
		toggleYesNo(index, 'cabin', state);
		for(let i=0; i<cabins[index].campers.length; i++){
			let ind = cabins[index].campers[i];
			if(campers[ind].isParticipating !== state){
				changeCamperPart(ind, state);
			}
		}
	}
	setInfo();
}
function changeCamperPart(index, state){
	if(!campers[index].isLeader){
		campers[index].isParticipating = state;
		toggleYesNo(index, 'camper', state);
		setInfo();
	}
}
function toggleYesNo(index, type, state){
	if(state){
		document.getElementById(type+'No'+index).setAttribute('class', 'toggle no unselected');
		document.getElementById(type+'Yes'+index).setAttribute('class', 'toggle yes selected');
	}else{
		document.getElementById(type+'No'+index).setAttribute('class', 'toggle no selected');
		document.getElementById(type+'Yes'+index).setAttribute('class', 'toggle yes unselected');
	}
}
//////////////////////////////////////////////////////////////////////



//////////////////////////////////////Information preview section //////////////////////////////////////
function setInfo(){
	let isTls = teamLeaders ? 'yes' : 'no';
	let campersParticipating =0;
	for(let i=0; i<campers.length; i++){
		if(campers[i].isParticipating){
			campersParticipating++;
		}
	}
	let campersPerTeam = Math.floor(campersParticipating/teams.length);
	document.getElementById('numberOfTeams').innerHTML = "Number of teams: "+teams.length;
	document.getElementById('isTeamLeaders').innerHTML = "Team leaders: "+isTls;
	document.getElementById('numCampPart').innerHTML = "Campers participating: "+campersParticipating;
	document.getElementById('perTeam').innerHTML = "Campers per team: "+campersPerTeam;

}
function generateTeams(){
	sortedCampers.sort((a,b) => a.cabin - b.cabin);
	const teamNums = parseInt(document.getElementById('numTeams').innerHTML);
	let teamCounter = [];
	let teamNum;
	let refreshCount = 0;
	let ind;
	for(let i=0; i<teams.length; i++){
		teams[i].campers = [];
	}
	for(let i=0; i<campers.length; i++){
		ind = sortedCampers[i].index;
		if(campers[ind].isParticipating){
	  		teamNum = Math.ceil(Math.random()*teamNums);
	  		while(teamCounter[teamNum] === true){
	    		teamNum = Math.ceil(Math.random()*teamNums);
	  		}
	  		teamCounter[teamNum] = true;
	  		refreshCount++;
	  		campers[ind].team = teamNum;
	  		for(let j=0; j<teams.length; j++){
	  			if(teams[j].number === teamNum && !campers[ind].isLeader){
	  				teams[j].campers.push(ind);
	  				break;
	  			}
	  		}
	  		if(refreshCount === teamNums){
	    		refreshCount = 0;
	    		teamCounter = [];
	  		}
		}
	}  
	document.getElementById('viewCabinDocs').style.display = "inline-block";
	document.getElementById('viewTeamDocs').style.display = "inline-block";
}
function viewLists(type){
	console.log(type);
	$('#downloadAll').unbind('click');
	$('#downloadOne').unbind('click');
	$('#downloadAll').click(function() {
		downloadDocs(type, 'all');
	});
	$('#downloadOne').click(function() {
		downloadDocs(type, 'inone');
	});
	document.getElementsByTagName("BODY")[0].style.overflow = 'hidden';
	document.getElementById('viewDocsScreen').style.display = 'block';
	document.getElementById('docHeader').innerHTML = type+' lists';
	$(`#docsCont`).empty();
	let array;
	if(type==='Team'){
		array = teams;
	}else if(type==='Cabin'){
		array = cabins;
	}
	console.log(type)
	for(let i=0; i<array.length; i++){
		$('#docsCont').append(
			`	
			<div class="doc">
				<div style="padding-left: 10px; font-size: 12px">
					${type} ${array[i].number}
				</div>
				<img style="margin-left: 10px; width="60" height="70" src="document.png" onclick="viewSingle('${type}', ${i})">
				<div>
					<a onclick="downloadDocs('${type}', ${i})">Download</a>
					<a onclick="viewSingle('${type}', ${i})" style="display: inline-block; margin-left: 3px">View</a>
				</div>
			</div>
			`
		);
	}
}
function downloadDocs(type, option){
	let pdf = new jsPDF('p', 'pt', 'letter');
	let generateFunc;
	let array;
	if(type === 'Cabin'){
		generateFunc = generateCabinPDF;
		array = cabins;
	}else if(type === 'Team'){
		generateFunc = generateTeamPDF;
		array = teams;
	}
	if(typeof option === 'string'){
		for(let i=0; i<array.length; i++){
			generateFunc(pdf, i);
			if(option === 'inone' && i<array.length-1){
				pdf.addPage();
			}else if(option === "all"){
				pdf.save();
				pdf = new jsPDF('p', 'pt', 'letter');
			}
		}
		if(option === 'inone'){
			pdf.save();
		}
	}else{
		generateFunc(pdf, option);
		pdf.save();
	}
}
// function downloadOne(type){
// 	let pdf = new jsPDF('p', 'pt', 'letter');
// 	let generateFunc;
// 	let array;
// 	if(type === 'Cabin'){
// 		generateFunc = generateCabinPDF;
// 		array = cabins;
// 	}else if(type === 'Team'){
// 		generateFunc = generateTeamPDF;
// 		array = teams;
// 	}
// 	for(let i = 0; i < array.length; i++){
// 		generateFunc(pdf, i);
// 		pdf.addPage();
// 	}
// 	pdf.save();
// }
function viewSingle(type, index){
	let pdf = new jsPDF('p', 'pt', 'letter');
	if(type === 'Cabin'){
		generateCabinPDF(pdf, index);
	}else if(type === 'Team'){
		generateTeamPDF(pdf, index);
	}
	var string = pdf.output('datauristring');
	var iframe = "<iframe width='100%' height='100%' src='" + string + "'></iframe>"
	var x = window.open();
	x.document.open();
	x.document.write(iframe);
	x.document.close();
}
function downloadSingle(type, index){
	let pdf = new jsPDF('p', 'pt', 'letter');
}
// function downloadAll(type){
// 	let array;
// 	let makeList;
// 	if(type==='Team'){
// 		array = teams;
// 		makeList = makeTeamList;
// 	}else if(type==='Cabin'){
// 		array = cabins;
// 		makeList = makeCabinList;
// 	}
// 	console.log(makeList)
// 	for(let i=0; i<array.length; i++){
// 		makeList(i, 'd')
// 	}
// }
// function downloadOne(type){
// 	$('#listTable').empty();
// 	document.getElementById('num').innerHTML = '';
// 	let array;
// 	let makeList;
// 	if(type==='Team'){
// 		array = teams;
// 		makeList = makeTeamList;
// 	}else if(type==='Cabin'){
// 		array = cabins;
// 		makeList = makeCabinList;
// 	}
// 	for(let i=0; i<array.length; i++){
// 		$('#listTable').append(
// 			`
// 			<div style="font-size: 20px;">
// 				${type+" "} ${array[i].number}
// 			</div>
// 			`
// 		)
// 		makeList(i, 'd', true)
// 	}
// 	HTMLtoPDF(`Full${type}sList.pdf`);
// }
// function makeCabinList(index, type, one){
// 	if(!one){
// 		document.getElementById('num').innerHTML = 'Cabin '+cabins[index].number;
// 		$('#listTable').empty();
// 	}
// 	let dots = "";
// 	let leader = "";
// 	let team = "";
// 	for(let i=0; i<cabins[index].campers.length; i++){
// 		dots ="";
// 		leader = "";
// 		team = "";
// 		if(campers[cabins[index].campers[i]].isParticipating){
// 			team = 'Team '+ campers[cabins[index].campers[i]].team;
// 		}else{
// 			team = 'not participating'
// 		}
// 		if(campers[cabins[index].campers[i]].isLeader){
// 			leader = '(leader)'
// 		}
// 		for(let j=campers[cabins[index].campers[i]].name.length; j<50; j++){
// 			dots+='.';
// 		}
// 		$('#listTable').append(
// 			`
// 			<div>
// 					${campers[cabins[index].campers[i]].name}${dots}
// 					${team}${leader}
// 			</div>
// 			`
// 		);
// 	}
// 	if(one){
// 		for(let i=0; i< 64-cabins[index].campers.length; i++){
// 			$('#listTable').append(
// 				`
// 				<div style="font-size: 1px">.</div>
// 				`
// 			);
// 		}
// 	}
// 	if(type==='v'){
// 		document.getElementById("HTMLtoPDFcont").style.display = 'block';
// 	}else if(type==='d' && !one){
// 		HTMLtoPDF(`Cabin${cabins[index].number}List.pdf`);
// 	}
// }
// function makeTeamList(index, type, one){
// 	console.log('hello')
// 	if(!one){
// 		document.getElementById('num').innerHTML = 'Team '+teams[index].number;
// 		$('#listTable').empty();
// 	}
// 	let leaders = "";
// 	if(teamLeaders){
// 		for(let i=0; i<teams[index].teamLeaders.length; i++){
// 			leaders+=campers[teams[index].teamLeaders[i]].name+", ";
// 		}
// 	}
// 	if(!leaders) leaders = 'none  ';
// 	leaders = leaders.slice(0, leaders.length-2);
// 	$('#listTable').append(
// 		`	
// 		<div style="font-weight: bold;">
// 			Team leaders: ${leaders}
// 		</div>
// 		`
// 	);
// 	for(let i=0; i<teams[index].campers.length; i++){
// 		$('#listTable').append(
// 			`
// 			<div>
// 					${campers[teams[index].campers[i]].name}
// 			</div>
// 			`
// 		);
// 	}
// 	if(one){
// 		for(let i=0; i< 5; i++){
// 			$('#listTable').append(
// 				`
// 				<div style="font-size: 1px">.</div>
// 				`
// 			);
// 		}
// 	}
// 	if(type==='v'){
// 		document.getElementById("HTMLtoPDFcont").style.display = 'block';
// 	}else if(type==='d' && !one){
// 		HTMLtoPDF(`Team${teams[index].number}List.pdf`);
// 	}
// }
//pdf is jspdf object, index is the index of teams
function generateCabinPDF(pdf, index){
	pdf.setFont('courier');
	pdf.setFontSize(24);
	pdf.setTextColor(0,128,0);
	pdf.text(55, 80, 'Cabin'+" "+cabins[index].number);
	pdf.setFontSize(16);
	pdf.setTextColor(0,0,0);
	let camper;
	let spacing = "";
	for(let i=0; i < cabins[index].campers.length; i++){
		spacing = "";
		camper = campers[cabins[index].campers[i]];
		leader = camper.isLeader? '(leader)' : "";
		for(let j=0; j<34-camper.name.length; j++){
			spacing += ' ';
		}
		if(camper.isParticipating){
			pdf.text(55, 115+(i*20), camper.name + spacing + 'Team '+camper.team + leader);
		}else{
			pdf.text(55, 115+(i*20), camper.name + spacing + 'Not participating');
		}
	}
}
function generateTeamPDF(pdf, index){
	pdf.setFont('courier');
	pdf.setFontSize(20);
	pdf.setTextColor(0,128,0);
	pdf.text(55, 80, 'Team'+" "+teams[index].number);
	pdf.setFontSize(16);
	pdf.setTextColor(0,0,0);
	let camper;
	let leaders = "";
	if(teamLeaders) {
		leaders = "Leaders: "
		for(let i = 0; i < teams[index].teamLeaders.length; i++){
			leaders += campers[teams[index].teamLeaders[i]].name+", ";
		}
		if(teams[index].teamLeaders.length == 0){
			leaders += 'none..';
		}
		leaders = leaders.slice(0, leaders.length-2);
	}
	pdf.text(55, 98, leaders);
	for(let i=0; i < teams[index].campers.length; i++){
		if(i > 0 && i%33 === 0){
			pdf.addPage();
		}
		camper = campers[teams[index].campers[i]];
		pdf.text(55, 115+(i%33)*20, camper.name);
	}
}
function closeViewDocs(){
	document.getElementById('viewDocsScreen').style.display = 'none'; 
	document.getElementsByTagName('BODY')[0].style.overflow = 'auto';
}

function showMessage(){
	document.getElementsByTagName("BODY")[0].style.overflow = 'hidden';
	document.getElementById('messageScreen').style.display = 'block';
}
function closeMessage(){
	document.getElementById('messageScreen').style.display = 'none';
	document.getElementsByTagName("BODY")[0].style.overflow = 'auto';
}
////////////////////////////////////////////////////////////////////////////







