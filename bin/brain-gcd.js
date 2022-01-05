#!/usr/bin/env node
/* eslint-disable import/extensions */

import { greetings } from '../src/index.js';
import gameGcd from '../src/games/gcd.js';

const name = greetings();
console.log('Find the greatest common divisor of given numbers.');
gameGcd(name);
