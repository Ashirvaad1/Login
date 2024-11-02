let emails=["akritimishra336@gmail.com", "ankitagond290@gmail.com", "ankitchaurasia8282@gmail.com", "chaturdwivedi678@gmail.com", "diyabaati07@gmail.com", "durgeshdubey4519@gmail.com", "jacobthomas9808@gmail.com", "jayasaini932@gmail.com", "kalluseth127@gmail.com", "krishnakashyap6820@gmail.com", "laxman67884@gmail.com", "princeverma4736@gmail.com", "rajesh728829@gmail.com", "roshni55758@gmail.com", "samarpandey964@gmail.com", "sanjana58578@gmail.com", "uma685785@gmail.com", "uma738393@gmail.com", "vandanakumari28921@gmail.com", "yashchaurasia533@gmail.com", "yashipatel127@gmail.com", "zulfiqar66476@gmail.com"];
let passwords=["{ Akriti@1}", "{ Ankita@1}", "{ Ankit@1}", "{ Chatur@1}", "{ Diya@1}", "{ Durgesh@1}", "{ Jacob@1}", "{ Jaya@1}", "{ Kallu@1}", "{ Krishna@1}", "{ Laxman@1}", "{ Prince@1}", "{ Rajesh@1}", "{ Roshni@1}", "{ Samar@1}", "{ Sanjana@1}", "{ Uma@1}", "{ Uma@1}", "{ Vandana@1}", "{ Yash@1}", "{ Yashi@1}", "{ Zulfiqar@1}"];
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
