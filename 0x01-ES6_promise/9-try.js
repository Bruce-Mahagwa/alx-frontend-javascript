export default function guardrail(mathFunction) {
  let queue = [];
  let str = "Guardrail was processed";
  try {
    let res = mathFunction();
    queue.push(res);
    queue.push(str);
  }
  catch(err) {
    queue.push(err.toString());
    queue.push(str);
  }
 return queue; 
}
