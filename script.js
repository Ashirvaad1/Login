let emails=["gargi68757@gmail.com", "laxman67884@gmail.com", "roshni55758@gmail.com", "sanjana58578@gmail.com", "uma685785@gmail.com", "zulfiqar66476@gmail.com"];
let pos=0;
document.getElementById('copy').addEventListener('click', function()
{
	const index=document.getElementById('index');
	index.value=(pos+2);
	const ta=document.getElementById('ta');
	navigator.clipboard.writeText(ta.value)
	pos++;
	if(pos===6)
	{
		pos=0;
		index.value=(pos+1);
	}
	ta.value=emails[pos];
});
