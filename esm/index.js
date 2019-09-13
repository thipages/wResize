export const wDimension=()=> ({w:window.innerWidth,h:window.innerHeight});
export const wResize=(callback)=> window.onresize=()=>callback(wDimension());