 export default function iterateThroughObject(reportWithIterator) {
	 const value = "";
	 for (let i in reportWithIterator) {
    for (j in reportWithIterator[i]) {
    reportWithIterator[i][j].map((item) => {
        value += `${item} |`

    })
}}
value[value.length - 1] = ""
value[value.length - 2] = ""
return value;
 }
