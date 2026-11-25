## fixed

| Workload | base ms | base G instr | candidate ms | candidate G instr | candidate / base time | candidate / base instr |
|---|---|---|---|---|---|---|
| numeric_local_loop | 208 | 6.19 | 196 | 5.85 | 0.94 | 0.9449 |
| numeric_coercion_loop | 248 | 6.03 | 231 | 5.77 | 0.93 | 0.9566 |
| local_read_with_setup | 254 | 5.97 | 200 | 5.50 | 0.79 | 0.9220 |
| local_read | 253 | 5.97 | 201 | 5.50 | 0.79 | 0.9220 |
| bigint_32 | 274 | 5.85 | 272 | 5.77 | 0.99 | 0.9859 |
| bigint_64 | 272 | 5.79 | 269 | 5.71 | 0.99 | 0.9859 |
| bigint_256 | 282 | 5.61 | 261 | 5.53 | 0.92 | 0.9861 |
| prop_read | 205 | 6.03 | 173 | 5.55 | 0.84 | 0.9208 |
| prop_write | 204 | 6.28 | 189 | 5.83 | 0.93 | 0.9286 |
| array_read | 225 | 6.70 | 184 | 5.67 | 0.82 | 0.8462 |
| array_write | 239 | 6.93 | 177 | 5.78 | 0.74 | 0.8330 |
| call0 | 239 | 5.71 | 168 | 3.99 | 0.70 | 0.6993 |
| string_bridge | 262 | 4.97 | 238 | 4.79 | 0.91 | 0.9632 |
| type_error | 272 | 5.34 | 284 | 5.34 | 1.04 | 0.9986 |
| tdz | 299 | 5.60 | 315 | 5.57 | 1.05 | 0.9952 |
| local_move | 174 | 5.36 | 156 | 4.64 | 0.89 | 0.8658 |
| argument_move | 173 | 5.41 | 156 | 4.85 | 0.90 | 0.8963 |
| number_owner_fallback | 162 | 4.94 | 144 | 4.28 | 0.89 | 0.8658 |
| object_move | 169 | 5.18 | 150 | 4.64 | 0.89 | 0.8963 |
| empty_loop | 209 | 6.14 | 179 | 5.80 | 0.86 | 0.9446 |

candidate / base time, geometric mean over 20 workloads: 0.89
candidate / base instructions, geometric mean over 20 workloads: 0.9149

## v8

| Workload | base ms | base G instr | candidate ms | candidate G instr | candidate / base time | candidate / base instr |
|---|---|---|---|---|---|---|
| v8-v7-richards | 854 | 18.57 | 653 | 14.33 | 0.76 | 0.7716 |
| v8-v7-deltablue | 838 | 18.42 | 527 | 10.99 | 0.63 | 0.5970 |
| v8-v7-crypto | 606 | 15.12 | 459 | 11.97 | 0.76 | 0.7915 |
| v8-v7-raytrace | 764 | 15.81 | 741 | 14.94 | 0.97 | 0.9455 |
| v8-v7-earley-boyer | 618 | 13.16 | 604 | 12.10 | 0.98 | 0.9201 |
| v8-v7-regexp | 714 | 15.13 | 346 | 6.42 | 0.48 | 0.4243 |
| v8-v7-splay | 1176 | 19.10 | 1145 | 16.26 | 0.97 | 0.8513 |
| v8-v7-navier-stokes | 829 | 22.59 | 736 | 18.67 | 0.89 | 0.8264 |

candidate / base time, geometric mean over 8 workloads: 0.79
candidate / base instructions, geometric mean over 8 workloads: 0.7448

## Gates

- Instruction gate (eight V8 v7 programs, at most ×1.02): pass
- Loop-size gate (run_at below 16384 bytes): 15598 bytes, pass
- Samples: all passed
