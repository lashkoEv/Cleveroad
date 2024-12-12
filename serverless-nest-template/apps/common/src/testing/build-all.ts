import * as util from 'util';
import * as fs from 'fs';
import * as childProcess from 'child_process';

const exec = util.promisify(childProcess.exec);
const readdir = util.promisify(fs.readdir);

const build = async () => {
    try {
        const names = await readdir('apps');
        for (let i = 0; i < names.length; ++i) {
            const name = names[i];
            await exec(`nest build ${name}`);
            console.log(`${name} is built`);
        }
    } catch (err) {
        console.log(err);
    }
};

build();
