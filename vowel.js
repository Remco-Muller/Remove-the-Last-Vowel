function removeLastVowel(str) {
    var v = ["a", "e", "o", "i", "u", "A", "E", "O", "I", "U"]
    var strArray = str.replace(/,/g, "=").split(" ")
    var intArray = strArray.map((e)=> Math.max.apply(Math, [...e].map((a,b)=> (v.includes(a) ? `${b}`:"")).filter((a)=> a != "").map((a)=> +a)))
    return strArray.map((a, b )=> [...a].filter((c,d)=> d != intArray[b]).join().replace(/,/g, "")).join().replace(/,/g, " ").replace(/=/g, ",")
}