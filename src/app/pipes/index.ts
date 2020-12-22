import {TransformAddressPipe} from './transform-address.pipe';
import {TransformWebsitePipe} from './transform-website.pipe';

export const appPipes = [
  TransformAddressPipe,
  TransformWebsitePipe,
];

export * from './transform-address.pipe';
export * from './transform-website.pipe';
