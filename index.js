fetch("applist.json")
  .then((response) => response.json())
  .then((data) => {
    let tab = "";
    for (i = 0; i < data.length; i++) {
      let r = data[i];
      tab += `
           <div class="card">
           <div class="appname">
             <a href="page2.html" target ="_blank" id = "aref">
               <button class="arrow" id = ${r.id}>&#8594;</button>
             </a>
             <div class="color"></div>
             <h3>${r.appName}</h3>
             <p class="publisher">${r.publisherName}</p>
           </div>
           <div class="contents">
             <div id="revenue" class="parts">Revenue
             <div class="val">1</div>
             </div>
             <div id="adrequest"class="parts">Adrequest</div>
             <div id="adresponse"class="parts">Adresponse</div>
             <div id="impression"class="parts">Impression</div>
           </div>
         </div>
           `;
    }

    localStorage.clear();
    let cards = document.getElementById("cards");
    cards.innerHTML = tab;

    let ct = 0;
    let fg = 0;

    document.getElementById(1).addEventListener("click", function setdata() {
      localStorage.setItem("id", 1);
    });

    document.getElementById(2).addEventListener("click", function setdata() {
      localStorage.setItem("id", 2);
    });

    document.getElementById(3).addEventListener("click", function setdata() {
      localStorage.setItem("id", 3);
    });

    document.getElementById(4).addEventListener("click", function setdata() {
      localStorage.setItem("id", 4);
    });

    document.getElementById(5).addEventListener("click", function setdata() {
      localStorage.setItem("id", 5);
    });

    document.getElementById(6).addEventListener("click", function setdata() {
      localStorage.setItem("id", 6);
    });

    document.getElementById(7).addEventListener("click", function setdata() {
      localStorage.setItem("id", 7);
    });

    document.getElementById(8).addEventListener("click", function setdata() {
      localStorage.setItem("id", 8);
    });

    document.getElementById(9).addEventListener("click", function setdata() {
      localStorage.setItem("id", 9);
    });

    document.getElementById(10).addEventListener("click", function setdata() {
      localStorage.setItem("id", 10);
    });
  });

fetch("appstats.json")
  .then((response) => response.json())
  .then((data) => {
    let len = data[1];
    // console.log(len)
    let Revenue1 = new Array(11);
    let Adrequest = new Array(11);
    let Adresponse = new Array(11);
    let Impression = new Array(11);

    for (j = 0; j < 11; j++) {
      Revenue1[j] = 0;
      Adrequest[j] = 0;
      Adresponse[j] = 0;
      Impression[j] = 0;
    }

    for (i = 1; i <= 10; i++) {
      let datas = data[i];
      // console.log(datas)

      for (r of data[i]) {
        Revenue1[i] += r.revenue;
        Adrequest[i] += r.adRequest;
        Adresponse[i] += r.adResponse;
        Impression[i] += r.impressions;
      }

      // console.log(Impression,Revenue1,Adresponse,Adrequest)
    }
    // console.log(Impression,Revenue1,Adresponse,Adrequest)

    fetch("applist.json")
      .then((response) => response.json())
      .then((data) => {
        let tab = "";
        for (i = 0; i < data.length; i++) {
          let r = data[i];
          let rev = Revenue1[r.id];
          let addrs = Adresponse[r.id];
          let addreq = Adrequest[r.id];
          let imp = Impression[r.id];
          console.log(rev);
          tab += `
           <div class="card">
  <div class="appname">
    <a href="page2.html" target ="_blank" id = "aref">
      <button class="arrow" id = ${r.id}>&#8594;</button>
    </a>
    <div class="color"></div>
    <h3>${r.appName}</h3>
    <p class="publisher">${r.publisherName}</p>
  </div>
  <div class="contents">
    <div id="revenue" class="parts">Revenue
    <div class="val"> $ ${rev}</div>
    </div>
    <div id="adrequest"class="parts">Adrequest
    <div class="val"> ${addreq}M</div>
    </div>

    <div id="adresponse"class="parts">Adresponse
      <div class="val"> ${addrs}M</div>
      </div>
      <div id="impression"class="parts">Impression
      <div class="val"> ${imp}M</div>
      </div>
    </div>
  </div>
</div>
           `;
        }

        localStorage.clear();
        let cards = document.getElementById("cards");
        cards.innerHTML = tab;

        let ct = 0;
        let fg = 0;

        document
          .getElementById(1)
          .addEventListener("click", function setdata() {
            localStorage.setItem("id", 1);
          });

        document
          .getElementById(2)
          .addEventListener("click", function setdata() {
            localStorage.setItem("id", 2);
          });

        document
          .getElementById(3)
          .addEventListener("click", function setdata() {
            localStorage.setItem("id", 3);
          });

        document
          .getElementById(4)
          .addEventListener("click", function setdata() {
            localStorage.setItem("id", 4);
          });

        document
          .getElementById(5)
          .addEventListener("click", function setdata() {
            localStorage.setItem("id", 5);
          });

        document
          .getElementById(6)
          .addEventListener("click", function setdata() {
            localStorage.setItem("id", 6);
          });

        document
          .getElementById(7)
          .addEventListener("click", function setdata() {
            localStorage.setItem("id", 7);
          });

        document
          .getElementById(8)
          .addEventListener("click", function setdata() {
            localStorage.setItem("id", 8);
          });

        document
          .getElementById(9)
          .addEventListener("click", function setdata() {
            localStorage.setItem("id", 9);
          });

        document
          .getElementById(10)
          .addEventListener("click", function setdata() {
            localStorage.setItem("id", 10);
          });
      });

    console.log(document.getElementsByClassName("contents"));
  });
