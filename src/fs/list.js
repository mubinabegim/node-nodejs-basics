import {resolve} from 'path';
import {$dirname} from '../utils/globals.js'
import {notExistOrError} from '../utils/helpers.js'
import {readdir} from 'fs/promises';

const list = async () => {
    const dirPath = resolve($dirname(import.meta.url), 'files')

    notExistOrError(dirPath);

    (await readdir(dirPath, {withFileTypes: true}))
        .filter(fileOrDir => !fileOrDir.isDirectory())
        .forEach((file) => {
            console.log(file.name)
        })
};

await list();