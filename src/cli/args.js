const parseArgs = () => {
    const argsList = process.argv.slice(2);

    for (let i = 0; i < argsList.length; i += 2) {
        const propName = argsList[i].substring(2);
        const value = argsList[i + 1];

        console.log(`${propName} is ${value}`);
    }
};

parseArgs();