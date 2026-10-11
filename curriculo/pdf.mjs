import { chromium } from 'playwright';
const dir=process.argv[2]; const b=await chromium.launch(); const p=await b.newPage();
await p.goto(`file://${dir}/curriculo.html`); await p.waitForTimeout(300);
await p.pdf({ path:`${dir}/Ronan-Pinheiro-Curriculo.pdf`, format:'A4', printBackground:true, preferCSSPageSize:true });
await b.close();
