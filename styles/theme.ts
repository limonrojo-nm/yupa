import { C } from './colors'

type TColor = string;

interface ITheme {
  colors: {
    mainBackground: TColor;
    elementBackground: TColor;
    text: TColor;
    elementText: TColor;
  };
  borderRadius: number;
}


const lightTheme: ITheme = {
  colors: {
    mainBackground: C.white,
    elementBackground: C.darker,
    text: C.darker,
    elementText: C.white,
  },
  borderRadius: 20,
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
