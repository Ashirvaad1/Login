let emails=["laxman67884@gmail.com", "roshni55758@gmail.com", "sanjana58578@gmail.com", "uma685785@gmail.com", "zulfiqar66476@gmail.com", "rajesh728829@gmail.com", "uma738393@gmail.com"];
let passwords=["{ Laxman@1}", "{ Roshni@1}", "{ Sanjana@1}", "{ Uma@1}", "{ Zulfiqar@1}", "{ Rajesh@1}", "{ Uma@1}"];
let pos;
let check=1;
window.onload=function()
{
	if(localStorage.getItem('pos')!=null)
		pos=parseInt(localStorage.getItem('pos'), 10);
	else
		pos=0;
	document.getElementById('index').value=pos+1;
	document.getElementById('email').value=emails[pos];
}
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
		localStorage.setItem('pos', pos);
		document.getElementById('index').value=pos+1;
		document.getElementById('email').value=emails[pos];
	}
});
