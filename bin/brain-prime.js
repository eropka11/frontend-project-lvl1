#!/usr/bin/env node
/* eslint-disable import/extensions */

import { greetings } from '../src/index.js';
import gamePrime from '../src/games/prime.js';

const name = greetings();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
gamePrime(name);
