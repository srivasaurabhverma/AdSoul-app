 


const id = localStorage.getItem("id")
// console.log(id);
console.log(id);
fetch("appstats.json")
.then(response => response.json())
.then(data=>{
  console.log(data[id])
  let tab = `
 
  <tr id="Table">
  <th class="Table_data" id="date"> Date </th>
  <th class="clicks"> Clicks </th>
  <th class="Table_data"> Revenue </th>
  <th class="Table_data"> AdRequest </th>
  <th class="Table_data"> AdResponse </th>
  <th class="Table_data"> Render Rate </th>
</tr>`;

   let datas = data[id];

   for (let r of datas) {
        let render_rate = (r.impressions / r.adResponse) * 100;
        render_rate = parseInt(render_rate);
        tab += `<tr id="Table">
        <td class="table_data"> ${r.date} </td>
        <td class="table_data"> ${r.clicks} </td>
        <td class="table_data">$ ${r.revenue} </td>
        <td class="table_data"> ${r.adRequest} </td>
        <td class="table_data"> ${r.adResponse} </td>
        <td class="table_data"> ${render_rate}%</td>
      </tr>`;
      // Setting innerHTML as tab variable
      document.getElementById("data_app").innerHTML = tab;
    }
  })



  fetch("applist.json")
  .then((response) => response.json())
  .then((data) => {
    let tab = "";
    let r = data[id-1];
    tab = `
    <a href="index.html" target ="_blank" id = "aref">
      <button class="arrow">&larr;</button>
    </a>
    <div class="color"></div>
    <h3>${r.appName}</h3>
    <p class="publisher">${r.publisherName}</p>
   
    `

    document.getElementById('appname').innerHTML = tab;
  } )


 