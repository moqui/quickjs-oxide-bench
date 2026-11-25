const $esc = (v) => String(v).replace(/[&<>"']/g, (c) => c === "&" ? "&amp;" : c === "<" ? "&lt;" : c === ">" ? "&gt;" : c === '"' ? "&quot;" : "&#39;");
const list = []; for (let i = 0; i < 100; i++) list.push(i % 10 === 0 ? 'a <b> & "c" ' + i : 'plain text number ' + i);
let n = 0; for (let k = 0; k < 2000; k++) for (const s of list) n += $esc(s).length; print(n);
