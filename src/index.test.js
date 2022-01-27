import { getMonth } from './index.js';

describe('Check month', () => {
        it('first month', () => {
        expect(getMonth(1)).toBe('январь');
    }),
    it('fifth month', () => {
        expect(getMonth(5)).toBe('май');
    }),
    it('unknown', () => {
        expect(getMonth(13)).toBe('неизвестно');
    });
});

xdescribe('Check month', () => {
    it('first month, fifth month and unknown number', () => {
    expect(getMonth(1)).toBe('январь');
    expect(getMonth(5)).toBe('май');
    expect(getMonth(13)).toBe('неизвестно');
});
});