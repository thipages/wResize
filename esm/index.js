let running=false;
const refresh=(delay,c)=> {
    if (window.requestAnimationFrame) {
        window.requestAnimationFrame(()=>c());
    } else {
        setTimeout(()=>c(), delay);
    }
};
const call=(c,inner)=> {
    c(winDimension(inner));
    running=false;
};
const d=(inner)=>inner
    ? ({w:window.innerWidth,h:window.innerHeight})
    : ({w:window.outerWidth,h:window.outerHeight});
export const winDimension=(inner=true)=> d(inner);
export const winResize=(c, inner=true,delay=true)=> window.onresize=()=>{
    // https://github.com/freaksauce/window-resize/
    if (!running) {
        running = true;
        if (delay) refresh(60,()=>call(c,inner)); else call(c,inner);
    }
};