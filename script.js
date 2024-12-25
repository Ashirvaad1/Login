let emails = [
    "bhupendrasrivastava99@gmail.com",
    "gunjantripathi143@gmail.com",
    "harmanpreetsingh9397@gmail.com",
    "vikalpverma92@gmail.com",
    "yusufkhan72829@gmail.com",
    "lavpandey809@gmail.com",
    "namanverma4544@gmail.com",
    "deepaliverma7583@gmail.com"
];
let passwords = [
    "{ Bhupendra@1}", "{ Gunjan@1}", "{ Harmanpreet@1}", 
    "{ Vikalp@1}", "{ Yusuf@1}", "{ Lav@1}", 
    "{ Naman@1}", "{ Deepali@1}"
];
let pos, check = 1;
 document.addEventListener("DOMContentLoaded", function() {
            const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
            document.body.style.backgroundColor = randomColor;
        });
window.onload = function() {
    if (localStorage.getItem('pos') != null) {
        pos = parseInt(localStorage.getItem('pos'), 10);
    } else {
        pos = 0;
    }
    document.getElementById('index').value = pos + 1;
    document.getElementById('email').value = emails[pos];
};

document.getElementById('copy').addEventListener('click', function() {
    if (check === 1) {
        navigator.clipboard.writeText(emails[pos]);
        check = 2;
    } else if (check === 2) {
        navigator.clipboard.writeText(passwords[pos]);
        check = 1;
        pos = (pos + 1) % emails.length;
        localStorage.setItem('pos', pos);
        document.getElementById('index').value = pos + 1;
        document.getElementById('email').value = emails[pos];
    }
});
