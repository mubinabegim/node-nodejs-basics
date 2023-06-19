import { spawn } from 'child_process';
import { $dirname } from '../utils/globals.js'
import { resolve } from 'path';
import { stdin } from 'process';

const spawnChildProcess = async (args) => {
    const filePath = resolve($dirname(import.meta.url), 'files', 'script.js')
    const child = spawn('node', [filePath, ...args], { stdio: 'pipe' });

    stdin.setDefaultEncoding('utf-8')
    child.stdin.setDefaultEncoding("utf-8");

    child.stdout.pipe(process.stdin);
    child.stdin.pipe(process.stdout);

    child.stdin.end();
    child.stdout.end();

    return child
}

spawnChildProcess(['someArgument1', 'someArgument2'])