#!/usr/bin/env node
import {version, parse} from 'commander';
import {TuringMachine} from './turing';


version('1.0.0')
  .usage('<input>')
  .arguments('<input>')
  .action((input: string, cmd: any) => {
    const machine = new TuringMachine();
    const result = machine.run(input);
    console.log(`result: ${result}`);
  });


parse(process.argv);