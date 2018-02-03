import stylesheet from '../style';


describe('Button stylesheet', () => {
    test('should return an object of styles', () => {
        expect(Object.keys(stylesheet.base)).toHaveLength(7);
        expect(Object.keys(stylesheet.primary)).toHaveLength(2);
        expect(Object.keys(stylesheet.secondary)).toHaveLength(2);
        expect(Object.keys(stylesheet.block)).toHaveLength(1);
        expect(Object.keys(stylesheet.iconContainer)).toHaveLength(1);
        expect(stylesheet.rounded(20)).toEqual({ borderRadius: 20 });
        expect(stylesheet.rounded()).toEqual({ borderRadius: 60 });
    });
})