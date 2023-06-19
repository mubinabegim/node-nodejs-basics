import { pipeline } from "stream/promises";
import { Transform } from "stream";
import { stdin, stdout } from "process";

const transform = async () => {
    const stream = new Transform({
        transform(chunk, encoding, cb) {

            cb(null, chunk.toString().split('').reverse().join('') + '\n')
        }
    })

    await pipeline(stdin, stream,stdout)
};

await transform();