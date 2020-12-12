/*
 * 添加京东助力码
 */
console.log("=========开始重新添加京东助力码=========");

// const dict = [
//   {
//     "name":"农场",
//     "url":"http://api.turinglabs.net/api/v1/jd/farm/create/bc1cd851e963492884852dc6119c33a6/"
//   },
//   {
//     "name":"种豆",
//     "url":"http://api.turinglabs.net/api/v1/jd/bean/create/75f7c7vrcm5zbfod5t26fp44fi/"
//   },
//   {
//     "name":"宠萌",
//     "url":"http://api.turinglabs.net/api/v1/jd/pet/create/MTAxODEyMjkyMDAwMDAwMDQwMzg4ODEz/"
//   },
//   {
//     "name":"惊喜工厂",
//     "url":"http://api.turinglabs.net/api/v1/jd/jxfactory/create/Hz0ItUK3zR6NCRVu-ajkGg==/"
//   },
//   {
//     "name":"东东工厂",
//     "url":"http://api.turinglabs.net/api/v1/jd/ddfactory/create/P04z54XCjVWnYaS5uK2s7ZWeqXuLg/"
//   },
// ]

!(async () => {
  await farm();
  // await bean();
  // await pet();
  // await jxfactory();
  // await ddfactory();
})()
  .catch((e) => {
    this.log("=========fail=========");
  })
  .finally(() => {
    console.log("=========添加互助码success========");
    $notification.post("重新添加互助码结束");
  });

//京东农场
function farm() {
  return new Promise((resolve, reject) => {
    $httpClient.get(
      "http://api.turinglabs.net/api/v1/jd/farm/create/bc1cd851e963492884852dc6119c33a6/",
      function (error, response, data) {
        let res = JSON.parse(data);
        console.log('=======' + data['message'])
        console.log(res.message)
        // console.log(`农场=> ${res["massage"]}`);
        resolve();
      }
    );
  });
}

// function bean() {
//   return new Promise((resolve, reject) => {
//     $httpClient.get(
//       "http://api.turinglabs.net/api/v1/jd/bean/create/75f7c7vrcm5zbfod5t26fp44fi/",
//       function (error, response, data) {
//         let res = JSON.parse(data);
//         console.log("种豆=>"+res.massage);
//         resolve();
//       }
//     );
//   });
// }

// function pet() {
//   return new Promise((resolve, reject) => {
//     $httpClient.get(
//       "http://api.turinglabs.net/api/v1/jd/pet/create/MTAxODEyMjkyMDAwMDAwMDQwMzg4ODEz/",
//       function (error, response, data) {
//         let res = JSON.parse(data);
//         console.log("宠萌=>"+res.massage);
//         resolve();
//       }
//     );
//   });
// }

// function jxfactory() {
//   return new Promise((resolve, reject) => {
//     $httpClient.get(
//       "http://api.turinglabs.net/api/v1/jd/jxfactory/create/Hz0ItUK3zR6NCRVu-ajkGg==/",
//       function (error, response, data) {
//         let res = JSON.parse(data);
//         console.log("惊喜工厂=>"+res.massage);
//         resolve();
//       }
//     );
//   });
// }

// function ddfactory() {
//   return new Promise((resolve, reject) => {
//     $httpClient.get(
//       "http://api.turinglabs.net/api/v1/jd/ddfactory/create/P04z54XCjVWnYaS5uK2s7ZWeqXuLg/",
//       function (error, response, data) {
//         let res = JSON.parse(data);
//         console.log("东东工厂=>"+res.massage);
//         resolve();
//       }
//     );
//   });
// }
