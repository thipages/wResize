const d1=(inner)=>inner
    ? ({w:window.innerWidth,h:window.innerHeight})
    : ({w:window.outerWidth,h:window.outerHeight});
export const wDimension=(inner=true)=> d1(inner);
export const wResize=(c,inner=true)=> window.onresize=()=>c(wDimension(inner));