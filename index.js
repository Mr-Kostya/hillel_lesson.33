// 1.
function unique(arr) {
    return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) );




//2.
function volume1(l,w,h) {
    return l * w * h;
}

    const aCylinder = volume1(100, 20, 90)


alert(aCylinder);

function volume2(l) {
    return (w) => {
        return (h) => {
            return l * w * h
        }
    }
}

const bCylinder = volume2(100)(20)(90)

alert(bCylinder);