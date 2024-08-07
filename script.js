let emails=["gargi68757@gmail.com", "laxman67884@gmail.com", "roshni55758@gmail.com", "sanjana58578@gmail.com", "uma685785@gmail.com", "zulfiqar66476@gmail.com"];
let passwords=["{ Gargi@1}", "{ Laxman@1}", "{ Roshni@1}", "{ Sanjana@1}", "{ Uma@1}", "{ Zulfiqar@1}"];
let pos=0;
document.getElementById('copy').addEventListener('click', function()
{
	navigator.clipboard.writeText(emails[pos]);
	navigator.clipboard.writeText(passwords[pos]);
	pos=(pos+1)%emails.length;
	document.getElementById('index').value=pos+1;
	document.getElementById('email').value=emails[pos];
});
