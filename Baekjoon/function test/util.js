const util = require('util');
const crypto = require('crypto');

const randomBytesPromise = util.promisify(crypto.randomBytes);
const pbkdf2Promise = util.promisify(crypto.pbkdf2);
const dontuseme = util.deprecate((x, y) => {
    console.log(x + y);
}, '이 함수는 2018년 12월 부로 지원하지 않습니다.');

dontuseme(1, 2);

randomBytesPromise(64)
    .then((buf) => {
        const salt = buf.toString('base64');
        return pbkdf2Promise('qjatjs12!', salt, 651395, 64, 'sha512');
    })
    .then((key) => {
        console.log('password', key.toString('base64'));
    })
    .catch((err) => {
        console.error(err);
    });