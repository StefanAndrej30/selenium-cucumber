const { argv } = require('yargs');
const fs = require('fs');
const env = require('../config/environment')
class Environment {

    constructor() {
        this.environmentPrefix = this.readFile()
        this.environment
        // Should automatically populate .env file from console using argv nodejs functionality
        this.writeFile()
        this.setEnvironment()
    }
    setEnvironment() {
        let envPrefix = this.getEnvPrefix()

        switch (envPrefix) {
            case 'uat':
                this.enviornment = env.uat
                break;
            case 'qa':
                this.enviornment = env.qa
                break;
            case 'development':
                this.enviornment = env.development
            default:
                break

        }

    }

    writeFile() {
        if (this.readFile() === 'undefined' || !this.readFile() || argv.env) {
            fs.writeFileSync('.env', argv.env, (err) => {
                if (err) throw err;
            });
        }
    }

    clearFile() {
        fs.writeFileSync('.env', '', (err) => {
            if (err) throw err;
        });
    }

    readFile() {
        const rawdata = fs.readFileSync('.env');
        return String(rawdata);
    }

    getEnvPrefix() {
        return this.environmentPrefix;
    }

    getEnvironment() {
        return this.enviornment;
    }

}
module.exports = new Environment()

