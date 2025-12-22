document.getElementById('btnCompany').addEventListener('click', () => {

  let mainDiv = document.getElementById('main');

  mainDiv.innerHTML = `
    <div class="company-header">
      <h2 id="selectedCompanyName">No Company Selected</h2>
      <span id="lastUpdate">Last Update: --</span>
    </div>

    <div class="company-sub-header">
      <span>Company Name</span>
      <span>Last Updated</span>
    </div>

    <div class="company-list" id="companyList"></div>
  `;

  loadCompanies();
});

function loadCompanies() {
  let companies = JSON.parse(localStorage.getItem("companies"));
  let companyList = document.getElementById("companyList");

  if (!Array.isArray(companies) || companies.length === 0) {
    companyList.innerHTML = "<p>No company found</p>";
    return;
  }

  companyList.innerHTML = "";

  companies.forEach((company, index) => {
    let div = document.createElement("div");
    div.className = "company-item";

    div.innerHTML = `
      <span>${company.companyName}</span>
     
      <hr>
    `;

    // 👇 click pe company select hogi
    div.addEventListener("click", () => {
      document.getElementById("selectedCompanyName").innerText =
        company.companyName;

      document.getElementById("lastUpdate").innerText =
        "Last Update: " + company.createdAt;
    });

    companyList.appendChild(div);
  });
}
