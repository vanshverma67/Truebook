
document.getElementById('btnCompany').addEventListener('click',()=>{
 let mainDiv = document.getElementById('main');
 mainDiv.innerHTML =`
   <div class="company-header">
        <h2 id="selectedCompanyName">No Company Selected</h2>
        <span id="lastUpdate">Last Update: --</span>
      </div>

      <!-- Sub Header -->
      <div class="company-sub-header">
        <span>Company Name</span>
        <span>Last Updated</span>
      </div>

      <!-- Company List -->
      <div class="company-list" id="companyList">
        <!-- companies yahan aayengi -->
      </div>
 `
});