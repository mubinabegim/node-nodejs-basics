import {writeFile} from 'fs/promises';
import {exists} from 'fs';
import {join} from 'path';

const folderRoute = 'src/fs/files';
const fileName = 'fresh.txt';
const filePath = join(folderRoute, fileName);
const fileContent = 'I am fresh and young';

const createFile = async () => {
    try {
        await writeFile(filePath, fileContent);
        console.log(`The file ${fileName} has been created.`);
    } catch (e) {
        console.log(e);
    }
}

const create = async () => {
    await exists(filePath, (e) => {
        if (e) {
            throw new Error("FS operation failed");
        } else {
            createFile();
        }
    })
}

await create();