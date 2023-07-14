export const Pick = <T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
) => {
  const finalObj: Partial<T> = {}; // Specify the type of `finalObj` as `Partial<T>`

  for (const key of keys) {
    if (obj && Object.hasOwnProperty.call(obj, key)) {
      finalObj[key] = obj[key];
    }
  }

  return finalObj;
};
