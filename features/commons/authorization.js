class Authorization {

    constructor() {
        this.tokens = {
            userToken: '',
            clientToken: ''
        }
        this.defaultHeaders = {};
    }

    setToken(token, value) {
        this.tokens[token] = value
    }

    getToken(token) {
        return this.tokens[token]
    }

    setDefaultHeaders(defaultHeaders) {
        this.defaultHeaders = defaultHeaders;
    }

    getDefaultHeaders() {
        return this.defaultHeaders;
    }
}
module.exports = new Authorization();