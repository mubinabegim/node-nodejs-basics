import {resolve} from 'path';
import {$dirname} from '../utils/globals.js'
import {notExistOrError} from '../utils/helpers.js'
import {readFile} from 'fs/promises';

const read = async () => {
    const filePath = resolve($dirname(import.meta.url), 'files', 'fileToRead.txt')

    notExistOrError(filePath)

    const fileBody = await readFile(filePath, {encoding: 'utf-8'})
    console.log(fileBody)
};

await read();