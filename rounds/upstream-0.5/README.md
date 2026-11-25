# Upstream v0.5.0 merge (2026-11-24)

The fork merged pocket-nexus/quickjs-oxide v0.5.0 (65 commits) onto b7e34e04, in two merges and two fixes:
- 03678962: upstream through v0.4.3;
- f8e2f601: #191, the always-no_std core, with shared atoms by host injection;
- bad77bc6: inline cache compaction moves a polymorphic site's row;
- 54357611: possessive class repeats;
- ad56ffec: the merge into `main`.

The Sweep is in `sweeps/upstream-0.5` (bad77bc6) and `sweeps/upstream-0.5-final` (54357611), each with its memory run;
`memory-upstream-0.5-stage1` is 03678962's memory run. The stage 1 Sweep itself was lost to `perf_event_paranoid=4`.

The probes here run the regexp rows of mr-moqui's `js_speed` (2000 calls each) on a `qjs`:
`perf stat -e instructions:u -- taskset -c 2 qjs logscan.js`.

| probe | b7e34e04 | bad77bc6 | 54357611 |
|---|---|---|---|
| logscan.js (the 200-line log row) | 5.326 G | 7.039 G | 5.615 G |
| ls-a.js (`/ERROR (\w+): (\d+)/g`) | 1.507 G | 1.615 G | 1.584 G |
| ls-b.js (`/\d*:/g`) | 3.746 G | 5.348 G | 3.955 G |
| esc.js (`$esc` over 100 strings) | 1.428 G | 1.403 G | 1.403 G |
| v8-v7-regexp | 15.13 G | 6.436 G | 6.420 G |
| octane-regexp | 16.42 G | 7.565 G | 7.548 G |

The +5% left on logscan.js is upstream's per-step regexp polling.
