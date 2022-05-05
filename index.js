// Import stuffy stuff
import chalk from 'chalk';
import randomColor from 'randomcolor';

// Declare variables
const color = randomColor();
const message = `###############################
###############################
###############################
####                       ####
####        ${color}        ####
####                       ####
###############################
###############################
###############################`;

// Log message block - if/else not required (if nothing else is entered into command line, "undefined" will not be printed)
console.log(
  chalk.hex(
    randomColor({
      luminosity: process.argv[3],
      hue: process.argv[2],
    }),
  )(message),
);
