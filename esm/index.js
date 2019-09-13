const d=(inner)=>inner
    ? ({w:window.innerWidth,h:window.innerHeight})
    : ({w:window.outerWidth,h:window.outerHeight});
export const winDimension=(inner=true)=> d(inner);
export const winResize=(c, inner=true)=> window.onresize=()=>c(winDimension(inner));