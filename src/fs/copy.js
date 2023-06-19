import {cp} from "fs/promises";
import {$dirname} from "../utils/globals.js";
import {resolve} from "path";
import {existOrError, notExistOrError} from '../utils/helpers.js'

const copy = async () => {
    const dirPath = $dirname(import.meta.url)
    const targetFolder = resolve(dirPath, 'files')
    const copyFolder = resolve(dirPath, 'files_copy')

    notExistOrError(targetFolder)
    existOrError(copyFolder)

    await cp(targetFolder, copyFolder, {
        recursive: true
    })
};

await copy();