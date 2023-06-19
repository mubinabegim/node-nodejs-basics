import {cpus} from 'os'
import {resolve} from 'path';
import {Worker, isMainThread} from 'worker_threads';
import {$dirname} from '../utils/globals.js'

const performCalculations = async () => {
    // Write your code here
    if (isMainThread) {
        const cpu = cpus()
        const workers = []
        const results = []

        for (let i = 0; i < cpu.length; i++) {
            const wt = new Promise((res, rej) => {
                const worker = new Worker(resolve($dirname(import.meta.url), 'worker.js'), {workerData: i})

                worker.on('message', (data) => {
                    results.push({status: 'resolved', value: data})
                    res()
                })
                worker.on('error', (err) => {
                    results.push({status: 'error', value: null})
                    rej(err)
                })
                worker.on('exit', (code) => {
                    console.log(code, `worker ${i} exit`)
                })
            })

            workers.push(wt)
        }

        await Promise.all(workers)

        console.log('results', results)

    }

};

await performCalculations();