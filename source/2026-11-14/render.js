const {chromium}=require('playwright');
(async()=>{const W=process.argv[2];const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920}});
await p.goto('file://'+W+'/reel.html');await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(800);
const fps=30,N=24*fps,only=process.argv[3];
const list=only?only.split(',').map(Number):[...Array(N).keys()];
for(const i of list){await p.evaluate(t=>R(t),i/fps);
await p.screenshot({path:only?`${W}/snap-${i}.png`:`${W}/frames/f${String(i).padStart(4,'0')}.jpg`,type:only?'png':'jpeg',quality:only?undefined:92});}
await b.close()})();
