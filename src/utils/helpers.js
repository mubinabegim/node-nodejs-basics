import {existsSync} from 'fs';

export function existOrError(filePath, humanMessage = 'File exist') {
    if (existsSync(filePath)) {
        throw new Error(`FS operation failed; ${humanMessage}`)
    }
}

export function notExistOrError(filePath, humanMessage = 'File not exist') {
    if (!existsSync(filePath)) {
        throw new Error(`FS operation failed; ${humanMessage}`)
    }
}