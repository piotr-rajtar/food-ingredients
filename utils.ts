import { ImageSize } from './typings';

export const createQueryString = (params: Record<string, unknown>): string => {
  let query = new URLSearchParams();
  Object.keys(params).forEach(param => query.append(param, String(params[param])));
  return query.toString();
}

export const createImageUrl = (imageName: string, imageSize: ImageSize): string => {
  return `https://spoonacular.com/cdn/ingredients_${imageSize}/${imageName}`;
}