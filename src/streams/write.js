import {createWriteStream} from "fs";
import {$dirname} from "../utils/globals.js";
import {resolve} from "path";

const write = async () => {
    const filePath = resolve($dirname(import.meta.url), 'files', 'fileToWrite.txt')
    const stream = createWriteStream(filePath, {encoding: 'utf-8'})

    process.stdin
        .on('data', (data) => {
            if (data) {
                stream.write(data)
            }
        })
        .on('close', () => {
            stream?.close()
        })
};

await write();