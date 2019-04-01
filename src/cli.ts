#!/usr/bin/env node
import {version, parse, help, outputHelp} from 'commander';
import {TuringMachine} from './turing';


version('1.0.0')
  .usage('<input>')
  .arguments('<input>')
  .action((input: string, cmd: any) => {

    if (!input) {
      outputHelp();
      return;
    }

    const machine = new TuringMachine();
    machine.run(input).then((result) => {
      console.log(`result: ${result}`);
    });
  });


parse(process.argv);