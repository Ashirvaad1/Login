let emails=["gargi68757@gmail.com", "laxman67884@gmail.com", "roshni55758@gmail.com", "sanjana58578@gmail.com", "uma685785@gmail.com", "zulfiqar66476@gmail.com", "rajesh728829@gmail.com", "uma738393@gmail.com", "abhi828886@gmail.com", "aditya010328@gmail.com", "advika292008@gmail.com", "akshat17112006@gmail.com", "aashi1382000@gmail.com”, "dhruv46674@gmail.com", "shishir85842@gmail.com", "suyash55573@gmail.com"];
let passwords=["{ Gargi@1}", "{ Laxman@1}", "{ Roshni@1}", "{ Sanjana@1}", "{ Uma@1}", "{ Zulfiqar@1}", "{ Rajesh@1}", "{ Uma@1}", "{ Abhi@1}", "{ Aditya@1}", "{ Advika@1}, "{ Akshat@1}", "{ Aashi@1}, "{ Dhruv@1}", "{ Shishir@1}", "{ Suyash@1}"];
let pos=0;
let check=1;
document.getElementById('copy').addEventListener('click', function()
{
	if(check===1)
	{
		navigator.clipboard.writeText(emails[pos]);
		check=2;
	}
	else if(check===2)
	{
		navigator.clipboard.writeText(passwords[pos]);
		check=1;
		pos=(pos+1)%emails.length;
		document.getElementById('index').value=pos+1;
		document.getElementById('email').value=emails[pos];
	}
});
