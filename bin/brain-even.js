#!/usr/bin/env node
/* eslint-disable import/extensions */

import { greetings } from '../src/index.js';
import { gameEven } from '../src/games/even.js';

const name = greetings();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
gameEven(name);
