/*
 * 添加京东助力码
 */
//log
console.log("开始添加京东助力码");

//http get params
// var params = {
//     url:"http://api.turinglabs.net/api/v1/jd/farm/create/bc1cd851e963492884852dc6119c33a6/",
//     header:{
//         Host:"api.example.com",
//         Content-Type: "application/json",
//     },
//     body:"string"
// }

!(async () => {
  await farm();
  await bean();
  await pet();
})()
  .catch((e) => {
    this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t);
  })
  .finally(() => {
    $notification.post('更新成功')
  });

//京东农场
function farm() {
  return new Promise((resolve, reject) => {
    $httpClient.get(
      "http://api.turinglabs.net/api/v1/jd/farm/create/bc1cd851e963492884852dc6119c33a6/",
      function (error, response, data) {
        console.log(response)
        if (response.status == 200) {
        } else {
        }
        console.log(response);
        resolve();
      }
    );
  });
}

function bean() {
  return new Promise((resolve, reject) => {
    $httpClient.get(
      "http://api.turinglabs.net/api/v1/jd/bean/create/75f7c7vrcm5zbfod5t26fp44fi/",
      function (error, response, data) {
        if (response.status == 200) {
          console.log('农场互助码添加成功')
        } else {
          console.log('农场互助码已存在')
        }
        resolve();
      }
    );
  });
}

function pet() {
  return new Promise((resolve, reject) => {
    $httpClient.get(
      "http://api.turinglabs.net/api/v1/jd/pet/create/MTAxODEyMjkyMDAwMDAwMDQwMzg4ODEz/",
      function (error, response, data) {
        if (response.status == 200) {
        } else {
        }
        resolve();
      }
    );
  });
}

function farm() {
  return new Promise((resolve, reject) => {
    $httpClient.get(
      "http://api.turinglabs.net/api/v1/jd/farm/create/bc1cd851e963492884852dc6119c33a6/",
      function (error, response, data) {
        if (response.code == 200) {
        } else {
        }
        resolve();
      }
    );
  });
}
