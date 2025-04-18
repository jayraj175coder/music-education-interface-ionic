/**
 * This file is part of the Music Education Interface project.
 * Copyright (C) 2025 Alberto Acquilino
 *
 * Licensed under the GNU Affero General Public License v3.0.
 * See the LICENSE file for more details.
 */

export const MAXCYCLES = 12;
export const MAXNOTE = 44;
export const MINNOTE = 0;
export const MAXTEMPO = 180;
export const MINTEMPO = 40;
export const MINREFFREQUENCY = 430;
export const MAXREFFREQUENCY = 450;
export const INITIAL_NOTE = 13;

export const TRUMPET_NOTES = [
    ['F1s', 'G1f'],
    ['G1'],
    ['G1s', 'A1f'],
    ['A1'],
    ['B1f', 'A1s'],
    ['B1'],
    ['C2'],
    ['C2s', 'D2f'],
    ['D2'],
    ['E2f', 'D2s'],
    ['E2'],
    ['F2'],
    ['F2s', 'G2f'],
    ['G2'],
    ['G2s', 'A2f'],
    ['A2'],
    ['B2f', 'A2s'],
    ['B2'],
    ['C3'],
    ['C3s', 'D3f'],
    ['D3'],
    ['E3f', 'D3s'],
    ['E3'],
    ['F3'],
    ['F3s', 'G3f'],
    ['G3'],
    ['G3s', 'A3f'],
    ['A3'],
    ['B3f', 'A3s'],
    ['B3'],
    ['C4'],
    
];

export const POSITIONS = [
    'pos_7',
    'pos_6',
    'pos_5',
    'pos_4',
    'pos_3',
    'pos_2',
    'pos_1',
    'pos_7a',
    'pos_6a',
    'pos_5',
    'pos_4',
    'pos_3',
    'pos_2',
    'pos_1',
    'pos_5',
    'pos_4',
    'pos_3',
    'pos_2',
    'pos_1',
    'pos_4',
    'pos_3',
    'pos_2',
    'pos_1',
    'pos_3',
    'pos_2',
    'pos_1',
    'pos_5',
    'pos_4',
    'pos_3',
    'pos_2',
    'pos_1',
];

export const TRUMPET_BTN = [
    [1, 2, 3],
    [1, 3],
    [2, 3],
    [1, 2],
    [1],
    [2],
    [],

    [0, 1, 2, 3],
    [0, 1, 3],
    [2, 3],
    [1, 2],
    [1],
    [2],
    [],

    [2, 3],
    [1, 2],
    [1],
    [2],
    [],
    [1, 2],
    [1],
    [2],
    [],

    [1],
    [2],
    [],

    [2, 3],
    [1, 2],
    [1],
    [2],
    [],
];


export const DYNAMICS = [
    { label: 'p', volume: 0.15 },
    { label: 'mf', volume: 0.4 },
    { label: 'f', volume: 1.0 },
];
export const CLARINET_NOTES  = [
    ['E3'],
    ['F3'],
    ['F3s', 'G3f'],
    ['G3'],
    ['G3s', 'A3f'],
    ['A3'],
    ['A3s', 'B3f'],
    ['B3'],
    ['C4'],
    ['C4s', 'D4f'],
    ['D4'],
    ['D4s', 'E4f'],
    ['E4'],
    ['F4'],
    ['F4s', 'G4f'],
    ['G4'],
    ['G4s', 'A4f'],
    ['A4'],
    ['A4s', 'B4f'],
    ['B4'],
    ['C5'],
    ['C5s', 'D5f'],
    ['D5'],
    ['D5s', 'E5f'],
    ['E5'],
    ['F5'],
    ['F5s', 'G5f'],
    ['G5'],
    ['G5s', 'A5f'],
    ['A5'],
    ['A5s', 'B5f'],
    ['B5'],
    ['C6'],
    ['C6s', 'D6f'],
    ['D6'],
    ['D6s', 'E6f'],
    ['E6'],
    ['F6'],
    ['F6s', 'G6f'],
    ['G6'],
    ['G6s', 'A6f'],
    ['A6'],
    ['A6s', 'B6f'],
    ['B6'],
    ['C7'],
];
export const CLARINET_POSITIONS = [
    'E3',
    'F3',
    'F3s',
    'G3',
    'G3s',
    'A3',
    'B3f',
    'B3',
    'C4',
    'C4s',
    'D4',
    'E4f',
    'E4',
    'F4',
    'F4s',
    'G4',
    'G4s',
    'A4',
    'B4f',
    'B4',
    'C5',
    'C5s',
    'D5',
    'E5f',
    'E5',
    'F5',
    'F5s',
    'G5',
    'G5s',
    'A5',
    'B5f',
    'B5',
    'C6',
    'C6s',
    'D6',
    'E6f',
    'E6',
    'F6',
    'F6s',
    'G6',
    'G6s',
    'A6',
    'B6f',
    'B6',
    'C7',
];