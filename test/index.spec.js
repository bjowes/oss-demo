const assert = require('assert');
const oss = require('../src/index');

describe('First tests', () => {
    it('validate string', () => {
        let result = oss.getOssInfo();
        assert.equal(result, 'OSS is great!');
    })
});