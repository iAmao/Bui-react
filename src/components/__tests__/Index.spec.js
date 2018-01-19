describe('BUI REACT Components', () => {
    test('should export Button component', () => {
        const Index = require('../index');
        expect(Index).toHaveProperty('Button');
    });
});
