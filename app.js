//創建
let xhr = new XMLHttpRequest();

//監聽
/* 當物件的onreadyState屬性發生改變，就會觸發
      readyState不同的意思:
        - 0：xhr物件已經創建，但還沒open
        - 1：xhr物件已經oprn
        - 2：xhr物件已經發出ajax請求
        - 3：部分數據已經返回
        - 4：數據已經全部返回 ⇒ http code 200~300為正常
*/

xhr.onreadystatechange = function () {
  if (xhr.readyState !== 4) {
    return;
  }
  if (xhr.status >= 200 && xhr.status <= 300) {
    document.querySelector("h1").innerHTML = xhr.responseText;
  } else {
    console.error("request fail");
  }
};

//開啟
xhr.open("GET", "ajax.txt", true);

//發送
xhr.send();
