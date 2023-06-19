import {resolve} from "path";
import {$dirname} from '../utils/globals.js';
import {notExistOrError} from '../utils/helpers.js'
import {rm} from "fs/promises";

const remove = async () => {
    const filePath = resolve($dirname(import.meta.url), 'files', 'fileToRemove.txt')

    notExistOrError(filePath)

    await rm(filePath)
};

await remove();