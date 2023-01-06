let initialValue = 0;
const arr =  [
    {
        name: "Ha",
        gender: 'female',
        poin: 8
    },
    {
        name: "Huy",
        gender: 'male',
        poin: 9
    },
    {
        name: "Hung",
        gender: 'male',
        poin: 7
    },
    {
        name: "Phuong",
        gender: 'female',
        poin: 6
    },
    {
        name: "Huyen",
        gender: 'female',
        poin: 10
    },
    {
        name: "Long",
        gender: 'male',
        poin: 5
    },
    {
        name: "Luan",
        gender: 'male',
        poin: 10
    },
    {
        name: "Linh",
        gender: 'female',
        poin: 8
    }

];

let sinhVienNam = arr.filter(function(e) {
    return e.gender === 'male';
});

let sinhVienNu = arr.filter(function(e) {
    return e.gender === 'female';
});


let totalNam = sinhVienNam.reduce(function (totalNam, currentValue,){
    return totalNam + currentValue.poin;
}, initialValue);
let totalTbNam = totalNam/arr.length
console.log("Điểm trung bình của các bạn Nam là: "+totalTbNam);

let totalNu = sinhVienNu.reduce(function (totalNu, currentValue,){
    return totalNu + currentValue.poin;
}, initialValue);
let totalTbNu = totalNu/arr.length
console.log("Điểm trung bình của các bạn Nữ là: "+ totalTbNu);



