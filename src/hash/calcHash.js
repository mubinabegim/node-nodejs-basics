import {resolve} from 'node:path';
import {createHash} from 'node:crypto';
import {$dirname} from '../utils/globals.js'
import {readFile} from 'node:fs/promises';

const calculateHash = async () => {
    const hash = createHash('sha256');

    const filePath = resolve($dirname(import.meta.url), 'files', 'fileToCalculateHashFor.txt');
    const input = await readFile(filePath)

    hash.on('readable', () => {
        const data = hash.read()
        if (data) {
            console.log(data.toString('hex'))
        }
    })

    hash.write(input)
    hash.end()
};

await calculateHash();