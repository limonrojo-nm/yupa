import { C } from './colors'

type TColor = string;

interface ITheme {
  colors: {
    mainBackground: TColor;
    text: TColor;
  };
}


const lightTheme: ITheme = {
  colors: {
    mainBackground: C.white,
    text: C.darker,
  },
}

const useTheme = () => {
  return lightTheme
}

export {
  lightTheme,
  useTheme,
}

export type {
  ITheme,
}
