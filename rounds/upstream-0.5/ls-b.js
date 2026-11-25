const t = ('2026-11-08 10:00:01 INFO ServiceRun: 12\n' + '2026-11-08 10:00:02 ERROR EntityFind: 404\n' + '2026-11-08 10:00:03 DEBUG Cache hit for key: 7\n' + '2026-11-08 10:00:04 WARN SlowQuery: 1500\n' + '2026-11-08 10:00:05 ERROR ServiceCall: 500\n').repeat(40);
let n = 0; for (let i = 0; i < 2000; i++) { n += t.match(/\d*:/g).length; } print(n);
