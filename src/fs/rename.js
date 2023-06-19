import {resolve} from 'path';
import {$dirname} from '../utils/globals.js'
import {rename as asyncRename} from 'fs/promises';
import {existOrError, notExistOrError} from '../utils/helpers.js'

const rename = async () => {
    const dirPath = resolve($dirname(import.meta.url), 'files')
    const targetFilePath = resolve(dirPath, 'wrongFilename.txt')
    const newFilePath = resolve(dirPath, 'properFilename.md')

    notExistOrError(targetFilePath)
    existOrError(newFilePath)

    await asyncRename(targetFilePath, newFilePath)
};

await rename();