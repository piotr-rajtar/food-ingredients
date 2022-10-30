import { createQueryString, createImageUrl } from '../utils';
import { ImageSize } from '../typings';

describe('createQueryString function', () => {
  it('should return correct query string with 2 params given', () => {
    const params = {
      param1: 1,
      param2: '2'
    };
    const generatedQueryString = createQueryString(params);
    const expectedQueryString = 'param1=1&param2=2';
    expect(generatedQueryString).toBe(expectedQueryString);
  });

  it('should return correct query string with 1 param given', () => {
    const params = {
      param1: 1,
    };
    const generatedQueryString = createQueryString(params);
    const expectedQueryString = 'param1=1';
    
    expect(generatedQueryString).toBe(expectedQueryString);
  });
});

describe('createImageUrl function', () => {
    it('generate correct image url', () => {
      const imageName = 'apple.jpg';
      const generatedImageUrl = createImageUrl(imageName, ImageSize.SMALL);
      const expectedImageUrl = 'https://spoonacular.com/cdn/ingredients_100x100/apple.jpg';
  
      expect(generatedImageUrl).toBe(expectedImageUrl);
    });
  });