export const isUndefined = (arg: unknown): arg is undefined =>
  arg === undefined;

export const isNumber = (arg: unknown): arg is number =>
  typeof arg === 'number' && !Number.isNaN(arg);

export const isString = (arg: unknown): arg is string =>
  typeof arg === 'string';
