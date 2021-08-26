#!/usr/bin/env node
/* eslint-disable import/extensions */

import { greetings } from '../src/index.js';
import { gameProgression } from '../src/games/progression.js';

const name = greetings();
console.log('What number is missing in the progression?');
gameProgression(name);
