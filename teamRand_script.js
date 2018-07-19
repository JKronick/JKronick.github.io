window.onload = setUp;
const campers = [

	{
		name: 'Eva Abadi',
		cabin: 6,
		unit: 'gib',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Gabriella Azoulay',
		cabin: 6,
		unit: 'gib',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Simone Ballon',
		cabin: 6,
		unit: 'gib',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Eva Benhaim',
		cabin: 6,
		unit: 'gib',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Carla Bouganim',
		cabin: 6,
		unit: 'gib',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Mikayla Garfield',
		cabin: 6,
		unit: 'gib',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Mia Garzon',
		cabin: 6,
		unit: 'gib',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Ella Ohayon',
		cabin: 6,
		unit: 'gib',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Sarah Salis',
		cabin: 6,
		unit: 'gib',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Grace Shtern',
		cabin: 6,
		unit: 'gib',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Arielle Vadish',
		cabin: 6,
		unit: 'gib',
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
		name: 'Alexander Bultz',
		cabin: 7,
		unit: 'gib',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Shane Kirzner',
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
		name: 'Justin Salis',
		cabin: 7,
		unit: 'gib',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Daniel Shlien',
		cabin: 7,
		unit: 'gib',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Jake Szamosi',
		cabin: 7,
		unit: 'gib',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Jonas Wolfensohn',
		cabin: 7,
		unit: 'gib',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Nathan Yarmush',
		cabin: 7,
		unit: 'gib',
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
		name: 'sophie cobrin',
		cabin: 4,
		unit: 'gosh',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Skye Esar',
		cabin: 4,
		unit: 'gosh',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Lilah Goodman',
		cabin: 4,
		unit: 'gosh',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Mia Korngold',
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
		name: 'Matthew Erdelyi',
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
		name: 'Jordan Levy-Ajzenkopf',
		cabin: 5,
		unit: 'gosh',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Mark Sebag',
		cabin: 5,
		unit: 'gosh',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Alexander Segal',
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
		name: 'Samson Weber',
		cabin: 5,
		unit: 'gosh',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Sofia Ballon',
		cabin: 1,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Rachel Bass',
		cabin: 1,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

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
		name: 'Emily Haupt',
		cabin: 1,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Ariella Morgan',
		cabin: 1,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Abby Shmorgun',
		cabin: 1,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Nora Jin Sokoloff',
		cabin: 1,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Jory Szirt',
		cabin: 1,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Jonathan-Bram Gordon',
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
		name: 'Felix Sebag',
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
		name: 'William Wall',
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
		name: 'Dylan Zimmer',
		cabin: 3,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Sophie Attias',
		cabin: 8,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Maya Azoulay',
		cabin: 8,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Maia Bouganim',
		cabin: 8,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Yaïl Brennan-Touaty',
		cabin: 8,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Kaitlin Chankowsky',
		cabin: 8,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Audrey Krackovitch',
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
		name: 'Jessica Salis',
		cabin: 8,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Yohanna Sochaczevski',
		cabin: 8,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Dalia Vadish',
		cabin: 8,
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
		name: 'Gabriel Betito',
		cabin: 9,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Aiden Elharrar',
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
		name: 'Tyler Mendel',
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
		name: 'Dylan Savelson',
		cabin: 9,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Tyler Schwartz',
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
		name: 'Elan Vigderhous',
		cabin: 9,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Eli Williams',
		cabin: 9,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Ezra Williams',
		cabin: 9,
		unit: 'kochot',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Ruben Amar',
		cabin: 10,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Dylan Attias',
		cabin: 10,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Ryan Cohen',
		cabin: 10,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Jeremy Gordon',
		cabin: 10,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Atley Gringorten',
		cabin: 10,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Jacob Krackovitch',
		cabin: 10,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Aiden Lang',
		cabin: 10,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Ryan Malek',
		cabin: 10,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Max Moghrabi',
		cabin: 10,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Liam Pariente',
		cabin: 10,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Logan Salpeter',
		cabin: 10,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Kyle Taylor',
		cabin: 10,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Asher Zand',
		cabin: 10,
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
		name: 'Ashley Bloom',
		cabin: 13,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Megan Boyer',
		cabin: 13,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Nehama Brennan-Touaty',
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
		name: 'Maya Conway',
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
		name: 'Gabrielle Harroch',
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
		name: 'Eden Masliah',
		cabin: 13,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Amanda Rosenthal',
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
		name: 'Ella Shlien',
		cabin: 13,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Madison Silber',
		cabin: 13,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Matthew Anzarouth',
		cabin: 11,
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
		name: 'Ethan Elharrar',
		cabin: 11,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Jonathan Jagermann',
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
		name: 'Jacob Rubin-Strudwick',
		cabin: 11,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Connor Salpeter',
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
		name: 'David Tendler',
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
		name: 'Charlie Dallaire',
		cabin: 12,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Lia Garshowitz',
		cabin: 12,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Fay Gomberg',
		cabin: 12,
		unit: 'lits',
		isParticipating: true,
		isLeader: false,
	},

	{
		name: 'Erin Gould',
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
		name: 'Allison Segal',
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
		name: 'Sarah Qin Sokoloff',
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
];

let cabins = [];
let units = [];
let sortedCampers = [];
window.onbeforeunload = function() {
  return "Are you sure you want to navigate away?";
}

function setUp(){
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
	if(teamNums===1 && change===-1) change = 0;
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
	for(let i=0; i<array.length; i++){
		$('#docsCont').append(
			`	
			<div class="doc">
				<div style="padding-left: 10px; font-size: 12px">
					${type} ${array[i].number}
				</div>
				<img style="margin-left: 10px; width="60" height="70" src="document.png" onclick="make${type}List(${i}, 'v')">
				<div>
					<a onclick="make${type}List(${i}, 'd')">Download</a>
					<a onclick="make${type}List(${i}, 'v')" style="display: inline-block; margin-left: 3px">View</a>
				</div>
			</div>
			`
		);
	}
}
function makeCabinList(index, type){
	document.getElementById('num').innerHTML = 'Cabin '+cabins[index].number;
	$('#listTable').empty();
	let dots = "";
	let leader = "";
	let team = "";
	for(let i=0; i<cabins[index].campers.length; i++){
		dots ="";
		leader = "";
		team = "";
		if(campers[cabins[index].campers[i]].isParticipating){
			team = 'Team '+ campers[cabins[index].campers[i]].team;
		}else{
			team = 'not participating'
		}
		if(campers[cabins[index].campers[i]].isLeader){
			leader = '(leader)'
		}
		for(let j=campers[cabins[index].campers[i]].name.length; j<50; j++){
			dots+='.';
		}
		$('#listTable').append(
			`
			<div>
					${campers[cabins[index].campers[i]].name}${dots}
					${team}${leader}
			</div>
			`
		);
	}
	if(type==='v'){
		document.getElementById("HTMLtoPDFcont").style.display = 'block';
	}else if(type==='d'){
		HTMLtoPDF(`Cabin${cabins[index].number}List.pdf`);
	}
}
function makeTeamList(index, type){
	document.getElementById('num').innerHTML = 'Team '+teams[index].number;
	$('#listTable').empty();
	let leaders = "";
	if(teamLeaders){
		for(let i=0; i<teams[index].teamLeaders.length; i++){
			leaders+=campers[teams[index].teamLeaders[i]].name+", ";
		}
	}
	if(!leaders) leaders = 'none  ';
	leaders = leaders.slice(0, leaders.length-2);
	$('#listTable').append(
		`	
		<div style="font-weight: bold;">
			Team leaders: ${leaders}
		</div>
		`
	);
	for(let i=0; i<teams[index].campers.length; i++){
		$('#listTable').append(
			`
			<div>
					${campers[teams[index].campers[i]].name}
			</div>
			`
		);
	}
	if(type==='v'){
		document.getElementById("HTMLtoPDFcont").style.display = 'block';
	}else if(type==='d'){
		HTMLtoPDF(`Cabin${cabins[index].number}List.pdf`);
	}
}
function closeViewDocs(){
	document.getElementById('viewDocsScreen').style.display = 'none'; 
	document.getElementsByTagName('BODY')[0].style.overflow = 'auto';
}
////////////////////////////////////////////////////////////////////////////







