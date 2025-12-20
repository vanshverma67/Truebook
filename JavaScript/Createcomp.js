
document.querySelector(".btn-save").addEventListener('click',()=>{


let companyName = document.getElementById("Companyname").value;
let mailingName = document.getElementById("malingname").value;
let address = document.getElementById("Adress").value;
let state = document.getElementById("state").value;
let country = document.getElementById("Country").value;
let pincode = document.getElementById("Pincode").value;
let mobile = document.getElementById("phonenumber").value;
let email = document.getElementById("email").value;
let finacialyearstart = document.getElementById("finstartdate").value;
let finacialyearend = document.getElementById("finenddate").value;
let currancy = document.getElementById("Currency").value;
// ====btn select & store in variraybale====
 if(companyName === "") {
    alert("Please enter Company Name ❗");
    return; // code yahan se ruk jayega, save nahi hoga
  }
// === Craete object form  details convert in object====
let company = {
  companyName: companyName,
  mailingName: mailingName,
  address: address,
  country: country,
  state: state,
  pincode: pincode,
  mobile: mobile,
  email: email,
  finacialyearstart: finacialyearstart,
  finacialyearend: finacialyearend,
  currancy: currancy,
  createdAt: new Date().toISOString()
};

   // 🔹 Get old companies (array)
  let companies = JSON.parse(localStorage.getItem("companies"));

  // 🔹 If first company
  if (!Array.isArray(companies)) {
    companies = [];
  }
  
  // 🔹 Add new company
  companies.push(company);

  // 🔹 Save back to localStorage
  localStorage.setItem("companies", JSON.stringify(companies));

  alert("Company successfully saved ✅");

 
 });
// cancel btn work and back to home page
 document.querySelector('.btn-cancel').addEventListener('click',()=>{
  window.location="index.html";
 })
 
