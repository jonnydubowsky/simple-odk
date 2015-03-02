// All configuration variables are from environment variables
var path = require('path');

module.exports = {
    mediaStore: process.env.MEDIA_STORE ? process.env.MEDIA_STORE.toLowerCase() : "fs",
    formStore: process.env.FORM_STORE ? process.env.FORM_STORE.toLowerCase() : "fs",
    github: {
        user: process.env.GITHUB_USER,
        repo: process.env.GITHUB_REPO,
        branch: process.env.GITHUB_BRANCH || "master"
    },
    s3: {
        bucket: process.env.S3_BUCKET,
        key: process.env.S3_KEY,
        secret: process.env.S3_SECRET
    },
    filesystem: {
        path: process.env.FILE_PATH || [__dirname, "form_data"].join(path.sep)
    },
    http: {
        url: process.env.HTTP_SERVER || 'http://localhost:5984/form_data',
        content_type: process.env.HTTP_SERVER_CONTENT_TYPE || 'application/json'
    },
    formServer: process.env.FORM_SERVER || "https://raw.githubusercontent.com/" +
        process.env.GITHUB_USER + "/" +
        process.env.GITHUB_REPO + "/" +
        (process.env.GITHUB_BRANCH || "master") + "/forms/",
    acceptContentLength: process.env.ACCEPT_CONTENT_LENGTH || 10485760
};
