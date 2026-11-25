## fixed

| Workload | base ms | base G instr | candidate ms | candidate G instr | candidate / base time | candidate / base instr |
|---|---|---|---|---|---|---|
| numeric_local_loop | 206 | 6.19 | 195 | 5.85 | 0.95 | 0.9449 |
| numeric_coercion_loop | 247 | 6.03 | 230 | 5.77 | 0.93 | 0.9566 |
| local_read_with_setup | 253 | 5.97 | 195 | 5.50 | 0.77 | 0.9220 |
| local_read | 252 | 5.97 | 191 | 5.50 | 0.76 | 0.9220 |
| bigint_32 | 274 | 5.85 | 272 | 5.77 | 0.99 | 0.9859 |
| bigint_64 | 270 | 5.79 | 268 | 5.71 | 0.99 | 0.9859 |
| bigint_256 | 266 | 5.61 | 259 | 5.53 | 0.97 | 0.9861 |
| prop_read | 204 | 6.03 | 170 | 5.55 | 0.84 | 0.9208 |
| prop_write | 202 | 6.28 | 186 | 5.83 | 0.92 | 0.9286 |
| array_read | 224 | 6.70 | 183 | 5.67 | 0.82 | 0.8462 |
| array_write | 238 | 6.93 | 177 | 5.78 | 0.74 | 0.8330 |
| call0 | 241 | 5.71 | 167 | 3.99 | 0.69 | 0.6993 |
| string_bridge | 260 | 4.97 | 238 | 4.79 | 0.92 | 0.9632 |
| type_error | 274 | 5.36 | 279 | 5.33 | 1.02 | 0.9944 |
| tdz | 297 | 5.59 | 304 | 5.57 | 1.02 | 0.9964 |
| local_move | 171 | 5.36 | 156 | 4.64 | 0.91 | 0.8658 |
| argument_move | 174 | 5.41 | 158 | 4.85 | 0.91 | 0.8963 |
| number_owner_fallback | 161 | 4.94 | 143 | 4.28 | 0.89 | 0.8658 |
| object_move | 168 | 5.18 | 150 | 4.64 | 0.89 | 0.8963 |
| empty_loop | 209 | 6.14 | 176 | 5.80 | 0.84 | 0.9446 |

candidate / base time, geometric mean over 20 workloads: 0.88
candidate / base instructions, geometric mean over 20 workloads: 0.9148

## v8

| Workload | base ms | base G instr | candidate ms | candidate G instr | candidate / base time | candidate / base instr |
|---|---|---|---|---|---|---|
| v8-v7-richards | 855 | 18.57 | 663 | 14.33 | 0.78 | 0.7716 |
| v8-v7-deltablue | 809 | 18.42 | 524 | 10.99 | 0.65 | 0.5970 |
| v8-v7-crypto | 605 | 15.12 | 453 | 11.97 | 0.75 | 0.7915 |
| v8-v7-raytrace | 776 | 15.81 | 756 | 14.94 | 0.97 | 0.9455 |
| v8-v7-earley-boyer | 639 | 13.16 | 636 | 12.10 | 1.00 | 0.9201 |
| v8-v7-regexp | 715 | 15.13 | 347 | 6.44 | 0.48 | 0.4254 |
| v8-v7-splay | 1203 | 19.10 | 1163 | 16.26 | 0.97 | 0.8513 |
| v8-v7-navier-stokes | 861 | 22.59 | 776 | 18.67 | 0.90 | 0.8264 |

candidate / base time, geometric mean over 8 workloads: 0.79
candidate / base instructions, geometric mean over 8 workloads: 0.7450

## Gates

- Instruction gate (eight V8 v7 programs, at most ×1.02): pass
- Loop-size gate (run_at below 16384 bytes): 15598 bytes, pass
- Samples: all passed
