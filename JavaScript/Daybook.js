document.getElementById('btnDaybook').addEventListener('click',()=>{
 let mainDiv = document.getElementById('main');
 mainDiv.innerHTML =`
<div class="bokhead">
                <h2>Day Book</h2>
                <div class="bookdate">
                    <p>From</p>
                    <input type="date">
                    <p>to</p>
                    <input type="date">
                </div>
            </div>
           
            <div class="booktitle">
                <p>Date</p>
                <p>particular</p>
                <select  id="voucher">
                    <option >voucher-types</option>
                    <option>Contra</option>
                    <option>Payment</option>
                    <option>Recipt</option>
                    <option>Journal</option>
                    <option>Purchases</option>
                    <option>Sales</option>
                </select>
                <p>cv-no</p>
                <p>Inward CR</p>
                <p>Inward DR</p>
            </div>
            <hr>
            <div class="enterys">
            </div>
 `
});
