async function saveData(){

const btn = document.getElementById("submitBtn");

// change color immediately
btn.style.backgroundColor = "orange";
btn.innerText = "Saving...";


const name = document.getElementById("name").value;

const email = document.getElementById("email").value;

const phone = document.getElementById("phone").value;


const res = await fetch("http://localhost:5000/save",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body: JSON.stringify({
name,
email,
phone
})

});


// change color after save success

btn.style.backgroundColor = "green";

btn.innerText = "Saved ✅";


document.getElementById("msg").innerText="Saved Successfully";

}