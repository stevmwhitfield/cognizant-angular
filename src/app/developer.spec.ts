import { Developer } from './developer';

describe('Developer', () => {
    it('should create an instance', () => {
        const dev = new Developer(null, 'John', 'Doe', 'Java', 2020);
        expect(dev).toBeTruthy();
        expect(dev.firstName).toEqual('John');
    });
});
