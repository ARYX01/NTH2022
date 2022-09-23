//const url = "https://httpbin.org/post" //TEST

const testArrayA = [
    2075,
    -597,
    -1965,
    832,
    1939,
    -959,
    -1796,
    1181,
    1737,
    -1275
]
//console.log(calculate(testArrayA))

export default async function liberaApi() {

    const url = "http://192.168.1.66/api"

    const data = {
        cmd : "signal",
        path: "application.signals.adc",
        size: 100,
        offset: 8
    }
    const res = await postData(url, data)
    let point = {}
    if(res?.value?.A && res?.value?.B && res?.value?.C && res?.value?.D) {
        const a = calculate(res.value.A)
        const c = calculate(res.value.C)
        const b = calculate(res.value.B)
        const d = calculate(res.value.D)
        const x = calcX(a,c)
        const y = calcY(b,d)
        point = {x: x>2?2:x<-2?-2:x, y: y>=2?2:y<-2?-2:y}
    }

    console.log(point)
    //testCalculate()

    return point
}

async function postData(url = '', data = {}) {
    // Default options are marked with *
    console.log(url)
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        //mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
    //console.log(response)
    return response.json(); // parses JSON response into native JavaScript objects
}

function testCalculate() {
    postData(url, data)
    .then((res) => {
        if(res?.value?.A && res?.value?.B && res?.value?.C && res?.value?.D) {
            const a = calculate(res.value.A)
            console.log("A",a)
            const c = calculate(res.value.C)
            console.log("C",c)
            console.log("AC-X", calcX(a,c))
            //console.log("K", calcOffset(a,c))

            const b = calculate(res.value.B)
            console.log("B",b)
            const d = calculate(res.value.D)
            console.log("D",d)

            console.log("BD-Y", calcY(b,d))
        }
        console.log(res); // JSON data parsed by `data.json()` call
    });
}

function calculate(array) {
    let result=0
    array.forEach( el => {
        result += el * el
    })
    return Math.sqrt(result)
}

function calcX(val1,val2) {
    return 7.542*((val2-val1)/(val1+val2))
    //return 6.76*((val1-val2)/(val1+val2))
}

function calcY(val1,val2) {
    return 7.533*((val1-val2)/(val1+val2))
}

function calcOffset(val1,val2) {
    return 16/(val1-val2)
}