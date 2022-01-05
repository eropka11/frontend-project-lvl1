#!/usr/bin/env node
/* eslint-disable import/extensions */

import { greetings } from '../src/index.js';
import gameCalc from '../src/games/calc.js';

const name = greetings();
console.log('What is the result of the expression?');
gameCalc(name);
