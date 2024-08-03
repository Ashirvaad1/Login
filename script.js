let emails=["gargi68757@gmail.com", "laxman67884@gmail.com", "roshni55758@gmail.com", "sanjana58578@gmail.com", "uma685785@gmail.com", "zulfiqar66476@gmail.com"];
let passwords=["{ Gargi@1}", "{ Laxman@1}", "{ Roshni@1}", "{ Sanjana@1}", "{ Uma@1}", "{ Zulfiqar@1}"];
let pos=0;
document.getElementById('cemail').addEventListener('click', function()
{
	let index=document.getElementById('iemail');
	index.value=(pos+2);
	let email=document.getElementById('email');
	navigator.clipboard.writeText(email.value)
	pos++;
	email.value=emails[pos];
	if(pos===6)
	{
		pos=0;
		index.value=(pos+1);
		email.value=emails[pos];
	}
});
pos=0;
document.getElementById('cpassword').addEventListener('click', function()
{
	let index=document.getElementById('ipassword');
	index.value=(pos+2);
	let password=document.getElementById('password');
	navigator.clipboard.writeText(password.value)
	pos++;
	password.value=passwords[pos];
	if(pos===6)
	{
		pos=0;
		index.value=(pos+1);
		password.value=passwords[pos];
	}
});
