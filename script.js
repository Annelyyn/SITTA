const form = document.getElementById("orderForm");
const tableBody = document.getElementById("tableBody");

const nama = document.getElementById("nama");
const nim = document.getElementById("nim");
const matkul = document.getElementById("matkul");
const jumlah = document.getElementById("jumlah");

/* PAGE SWITCH */
function showKatalog(){
document.getElementById("page-katalog").style.display="block";
document.getElementById("page-form").style.display="none";
}

function showForm(){
document.getElementById("page-katalog").style.display="none";
document.getElementById("page-form").style.display="block";
}

/* PILIH BUKU */
function pilihBuku(buku){
matkul.value=buku;
showForm();
}

/* ADD DATA */
form.addEventListener("submit",function(e){
e.preventDefault();

let row=document.createElement("tr");

row.innerHTML=`
<td>${nama.value}</td>
<td>${nim.value}</td>
<td>${matkul.value}</td>
<td>${jumlah.value}</td>
<td><button onclick="this.parentElement.parentElement.remove()">Hapus</button></td>
`;

tableBody.appendChild(row);
form.reset();
});

/* SEARCH */
document.getElementById("searchInput").addEventListener("keyup",function(){
let val=this.value.toLowerCase();

document.querySelectorAll("#tableBody tr").forEach(row=>{
row.style.display=row.innerText.toLowerCase().includes(val)?"":"none";
});
});

/* DARK MODE */
document.getElementById("darkModeBtn").onclick=function(){
document.body.classList.toggle("dark-mode");
};