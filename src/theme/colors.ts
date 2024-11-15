export const lightThemeToken = {
  primary: '#9B4500',
  onPrimary: '#FFFFFF',
  primaryContainer: '#FFDBC9',
  onPrimaryContainer: '#331200',
  primaryFixed: '#FFDBC9',
  onPrimaryFixed: '#331200',
  primaryFixedDim: '#FFB68E',
  onPrimaryFixedVariant: '#763300',
  secondary: '#765848',
  onSecondary: '#FFFFFF',
  secondaryContainer: '#FFDBC9',
  onSecondaryContainer: '#2B160A',
  secondaryFixed: '#FFDBC9',
  onSecondaryFixed: '#2B160A',
  secondaryFixedDim: '#E6BEAA',
  onSecondaryFixedVariant: '#5C4132',
  tertiary: '#636032',
  onTertiary: '#FFFFFF',
  tertiaryContainer: '#EAE5AB',
  onTertiaryContainer: '#1E1C00',
  tertiaryFixed: '#EAE5AB',
  onTertiaryFixed: '#1E1C00',
  tertiaryFixedDim: '#CDC991',
  onTertiaryFixedVariant: '#4B481D',
  error: '#BA1A1A',
  onError: '#FFFFFF',
  errorContainer: '#FFDAD6',
  onErrorContainer: '#410002',
  outline: '#85746B',
  background: '#FFFBFF',
  onBackground: '#201A17',
  surface: '#FFF8F6',
  onSurface: '#201A17',
  surfaceVariant: '#F4DED4',
  onSurfaceVariant: '#52443C',
  inverseSurface: '#362F2C',
  inverseOnSurface: '#FBEEE9',
  inversePrimary: '#FFB68E',
  shadow: '#000000',
  surfaceTint: '#9B4500',
  outlineVariant: '#D7C2B8',
  scrim: '#000000',
  surfaceContainerHighest: '#ECE0DB',
  surfaceContainerHigh: '#F2E6E0',
  surfaceContainer: '#F8EBE6',
  surfaceContainerLow: '#FEF1EC',
  surfaceContainerLowest: '#FFFFFF',
  surfaceBright: '#FFF8F6',
  surfaceDim: '#E4D8D2',
};

export const palette = {
  primary: {
    '0': '#000000',
    '5': '#220A00',
    '10': '#331200',
    '20': '#532200',
    '25': '#642A00',
    '30': '#763300',
    '35': '#883C00',
    '40': '#9B4500',
    '50': '#C25800',
    '60': '#EA6C00',
    '70': '#FF8D45',
    '80': '#FFB68E',
    '90': '#FFDBC9',
    '95': '#FFEDE5',
    '98': '#FFF8F6',
    '99': '#FFFBFF',
    '100': '#FFFFFF',
  },
  secondary: {
    '0': '#000000',
    '5': '#1F0C03',
    '10': '#2B160A',
    '20': '#432B1D',
    '25': '#4F3527',
    '30': '#5C4132',
    '35': '#694C3C',
    '40': '#765848',
    '50': '#91705F',
    '60': '#AC8977',
    '70': '#C9A490',
    '80': '#E6BEAA',
    '90': '#FFDBC9',
    '95': '#FFEDE5',
    '98': '#FFF8F6',
    '99': '#FFFBFF',
    '100': '#FFFFFF',
  },
  tertiary: {
    '0': '#000000',
    '5': '#131200',
    '10': '#1E1C00',
    '20': '#343208',
    '25': '#3F3D13',
    '30': '#4B481D',
    '35': '#575428',
    '40': '#636032',
    '50': '#7C7949',
    '60': '#969360',
    '70': '#B1AD78',
    '80': '#CDC991',
    '90': '#EAE5AB',
    '95': '#F8F3B8',
    '98': '#FFFADA',
    '99': '#FFFBFF',
    '100': '#FFFFFF',
  },
  error: {
    '0': '#000000',
    '5': '#2D0001',
    '10': '#410002',
    '20': '#690005',
    '25': '#7E0007',
    '30': '#93000A',
    '35': '#A80710',
    '40': '#BA1A1A',
    '50': '#DE3730',
    '60': '#FF5449',
    '70': '#FF897D',
    '80': '#FFB4AB',
    '90': '#FFDAD6',
    '95': '#FFEDEA',
    '98': '#FFF8F7',
    '99': '#FFFBFF',
    '100': '#FFFFFF',
  },
  neutral: {
    '0': '#000000',
    '5': '#15100D',
    '10': '#201A17',
    '20': '#362F2C',
    '25': '#413A36',
    '30': '#4D4542',
    '35': '#59514D',
    '40': '#655D59',
    '50': '#7E7571',
    '60': '#998F8A',
    '70': '#B4A9A4',
    '80': '#D0C4BF',
    '90': '#ECE0DB',
    '95': '#FBEEE9',
    '98': '#FFF8F6',
    '99': '#FFFBFF',
    '100': '#FFFFFF',
  },
  neutralVariant: {
    '0': '#000000',
    '5': '#190F09',
    '10': '#241913',
    '20': '#3B2E27',
    '25': '#463931',
    '30': '#52443C',
    '35': '#5E4F48',
    '40': '#6B5B53',
    '50': '#85746B',
    '60': '#9F8D84',
    '70': '#BBA79E',
    '80': '#D7C2B8',
    '90': '#F4DED4',
    '95': '#FFEDE5',
    '98': '#FFF8F6',
    '99': '#FFFBFF',
    '100': '#FFFFFF',
  },
};

type PaletteKey = keyof typeof palette;
type PaletteVariant = keyof (typeof palette)[PaletteKey];

type ColorKey = keyof typeof lightThemeToken;

export type Colors = `${PaletteKey}${PaletteVariant}` | ColorKey;
