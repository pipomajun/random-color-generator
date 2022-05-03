// Import stuffy stuff
import chalk from 'chalk';
import randomColor from 'randomcolor';

// Generate random color

let color = randomColor();
if (process.argv.length < 2) {
  const messageBlock = `###############################
###############################
###############################
####                       ####
####        ${color}        ####
####                       ####
###############################
###############################
###############################`;
  console.log(chalk.hex(color)(messageBlock));
} else {
  console.log(
    chalk.hex(
      randomColor({
        luminosity: process.argv[3],
        hue: process.argv[2],
      }),
    )(`###############################
###############################
###############################
####                       ####
####        ${color}        ####
####                       ####
###############################
###############################
###############################`),
  );
}
