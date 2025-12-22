document.querySelector(".btn-save").addEventListener('click', () => {

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

  if (companyName === "") {
    alert("Please enter Company Name ❗");
    return;
  }

  let company = {
    companyName,
    mailingName,
    address,
    country,
    state,
    pincode,
    mobile,
    email,
    finacialyearstart,
    finacialyearend,
    currancy,
    createdAt: new Date().toLocaleString()
  };

  let companies = JSON.parse(localStorage.getItem("companies"));
  if (!Array.isArray(companies)) {
    companies = [];
  }

  companies.push(company);
  localStorage.setItem("companies", JSON.stringify(companies));

  alert("Company successfully saved ✅");

  // 🔹 redirect to home page (company.js yahin load hoga)
  window.location = "index.html";
});

// cancel button
document.querySelector('.btn-cancel').addEventListener('click', () => {
  window.location = "index.html";
});
