const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);
const numbers1 = [1, 2, 3, 4, 5];

const sum = numbers1.reduce((total, number) => {
  return total + number;
}, 0);
console.log(sum);

const class1 = [
  {
    code: "PS0000",
    name: "Nguyễn Văn A",
    avgPoint: 8.9,
    avgTPoin: 9,
    status: "pass",
  },
  {
    code: "PS0001",
    name: "Nguyễn Văn B",
    avgPoint: 4.9,
    avgTPoin: 44,
    status: "pass",
  },
];

const class2 = [
  {
    code: "PS0002",
    name: "Nguyễn Văn C",
    avgPoint: 4.1,
    avgTPoin: 10,
    status: "failed",
  },
  {
    code: "PS0003",
    name: "Nguyễn Văn D",
    avgPoint: 10,
    avgTPoin: 5,
    status: "pass",
  },
  {
    code: "PS0004",
    name: "Nguyễn Văn E",
    avgPoint: 10,
    avgTPoin: 2,
    status: "pass",
  },
];
let sortByAvgPoint = [...class1, ...class2].sort(
  (a, b) => b.avgPoint - a.avgPoint
);
console.log(sortByAvgPoint);

let sortBytAvgPoint = [...class1, ...class2].sort(
    (a, b) => b.avgTPoin - a.avgTPoin
  );
  console.log(sortBytAvgPoint);


let allStudents = class1.concat(class2);
let maxAvgPoint = allStudents.reduce((max, student) =>
  student.avgPoint > max.avgPoint ? student : max
);
console.log(" top1 avg point", maxAvgPoint);



function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = fetch('https://api.example.com/data');
        if (data) {
          resolve(data);
        } else {
          reject('Lỗi khi tải dữ liệu');
        }
      }, 2000);
    });
  }
  
  fetchData()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });