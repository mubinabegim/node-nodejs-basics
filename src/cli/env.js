const parseEnv = () => {
    const env =
        process.env;
    const keysList = Object.keys(env);

    for(let k = 0; k < keysList.length; k++) {
        const elK = keysList[k];
        const nKey = `RSS_${elK}`;
        const result = `${nKey}=${env[elK]}`

        console.log(result);
    }
};

parseEnv();