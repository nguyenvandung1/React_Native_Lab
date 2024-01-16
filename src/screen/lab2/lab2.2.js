// function fetchData() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const data = fetch('https://docs.google.com/spreadsheets/d/1CEEkA-_Vogsv3lD6AY3ew4G0Us0L3Nqt2RnS-qZ6eDM/edit#gid=0');
//         if (data) {
//           resolve(data);
//         } else {
//           reject('Lỗi khi tải dữ liệu');
//         }
//       }, 2000);
//     });
//   }
  
//   fetchData()
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });



// Yêu cầu thứ nhất: Dừng các promise khác nếu một promise thất bại và log ra lỗi của promise đó.
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => { reject("Lỗi promise 1"); }, 2000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => { resolve("Hoàn thành promise 2"); }, 3000);
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Lỗi promise 3");
    }, 4000);
  });
  
  Promise.all([promise1, promise2, promise3])
    .then((results) => {
      console.log("Tất cả các promise đã hoàn thành thành công");
    })
    .catch((error) => {
      console.log("Promise thất bại:", error);
    });
  