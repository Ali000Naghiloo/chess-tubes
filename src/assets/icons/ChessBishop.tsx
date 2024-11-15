import { memo } from 'react';
// @mui
import { Box, BoxProps, useTheme } from '@mui/material';
//
// ----------------------------------------------------------------------

function ChessBishop({ mode, ...other }: BoxProps & { mode?: 'light' | 'dark' }) {
  //
  const { palette } = useTheme();

  const isDark = mode == null ? palette.mode === 'dark' : mode === 'dark';

  return (
    <Box {...other}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 30 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_12_28862)">
          <path
            d="M29.5 69.3C29.5 69.3 28.4 71.8 14.8 71.8C1.2 71.8 0 69.3 0 69.3C0.00142505 67.8522 0.169192 66.4094 0.5 65C0.5 64.8 0.6 64.6 0.6 64.4H0.7V64.2L0.9 63.9V63.7L1.1 63.2L1.3 62.9C1.3 62.8 1.4 62.8 1.4 62.7C1.4 62.6 1.5 62.7 1.5 62.6V62.4H1.6L2 61.9H2.1L2.4 61.6H2.5C2.5 61.5735 2.51054 61.548 2.52929 61.5293C2.54804 61.5105 2.57348 61.5 2.6 61.5C2.7 61.4 2.7 61.3 2.8 61.3H3L3.2 61.1H3.3C3.3 61.0735 3.31054 61.048 3.32929 61.0293C3.34804 61.0105 3.37348 61 3.4 61H3.5L4 60H4.2L4.4 59.8H4.6C4.62652 59.8 4.65196 59.7895 4.67071 59.7707C4.68946 59.7519 4.7 59.7265 4.7 59.7H5L6.2 58.6L6.9 57.8C7 57.7 7.1 57.7 7.1 57.6L7.5 57.2C7.6 57.1 7.6 57 7.7 57L8 56L8.4 55.5L8.7 55.1C8.81112 54.8546 8.94504 54.6203 9.1 54.4C9.4 53.9 9.6 53.4 9.8 53C10 52.6 9.9 52.8 9.9 52.7C10.3582 51.7306 10.5972 50.6722 10.6 49.6V47.2L10.3 37.7V36.4H6.6L5.7 34.1L7 33.3H3.5V31.7C3.48939 30.7855 3.80894 29.8979 4.4 29.2L4.6 28.9C4.95982 28.4292 5.41102 28.036 5.92653 27.7439C6.44204 27.4518 7.01125 27.2668 7.6 27.2L9.2 27C7.37455 25.5575 6.07437 23.5546 5.5 21.3C4.94448 19.189 4.89028 16.9774 5.34172 14.8417C5.79316 12.7061 6.73773 10.7056 8.1 8.99999C9.45022 7.28219 11.0715 5.79602 12.9 4.59999C12.3925 4.0974 12.1049 3.41421 12.1 2.69999C12.108 2.21488 12.2466 1.74091 12.5012 1.3279C12.7558 0.914892 13.117 0.578119 13.5468 0.352994C13.9766 0.12787 14.4591 0.022712 14.9436 0.0485797C15.4281 0.0744473 15.8966 0.230384 16.3 0.499993C16.7949 0.827041 17.1511 1.32578 17.3 1.89999C16.9 2.49999 16.5 3.29999 16 4.19999L15.6 5.19999C13.9283 9.25623 13.1113 13.6137 13.2 18H16.3C16.233 13.9067 17.0517 9.84732 18.7 6.09999C19.6177 6.98458 20.4857 7.91935 21.3 8.89999H21.4C22.7778 10.6169 23.7312 12.6345 24.183 14.789C24.6347 16.9436 24.572 19.1742 24 21.3C23.4262 23.53 22.167 25.5236 20.4 27L21.9 27.2C22.7033 27.2873 23.4658 27.5992 24.1 28.1L24.9 28.9L25.1 29.2C25.6911 29.8979 26.0106 30.7855 26 31.7V33.3H22.5L23.8 34.1L22.9 36.4H19.5L18.9 47.2V49.6C18.9 49.6 18.6 54 24.5 59.2C24.5 59.2 28.4 61.7 29 65C29.4022 66.396 29.5711 67.8489 29.5 69.3Z"
            fill={isDark ? palette.primary.lighter : palette.primary.darker}
          />
          <path
            d="M16.9999 35.4L16.6999 36.4H6.5999L5.6999 34.1L6.9999 33.3H16.6999C16.8947 33.6093 17.0221 33.9562 17.0738 34.318C17.1255 34.6799 17.1003 35.0485 16.9999 35.4ZM21.3999 9H21.2999C21.3999 9.2 27.5999 20.5 17.5999 26.9L20.3999 27.1C22.144 25.5852 23.4263 23.6098 24.0999 21.4C24.6346 19.2647 24.6691 17.0349 24.2008 14.8841C23.7325 12.7333 22.7739 10.7197 21.3999 9ZM16.2999 0.5C16.5843 1.74335 16.4434 3.04616 15.8999 4.2C14.5999 7.1 9.9999 12.2 13.1999 18C13.1112 13.6137 13.9282 9.25624 15.5999 5.2C15.7262 4.84796 15.894 4.51225 16.0999 4.2C16.4374 3.4023 16.8387 2.63314 17.2999 1.9C17.2415 1.60927 17.1222 1.3342 16.9499 1.09289C16.7775 0.851588 16.556 0.649525 16.2999 0.5ZM24.0999 28.1C23.4657 27.5992 22.7032 27.2873 21.8999 27.2L20.3999 27L17.5999 26.8C14.7983 26.7167 11.9943 26.7834 9.1999 27L7.5999 27.2C7.01115 27.2668 6.44195 27.4518 5.92643 27.7439C5.41092 28.036 4.95972 28.4292 4.5999 28.9C11.3607 28.5001 18.1391 28.5001 24.8999 28.9L24.0999 28.1ZM15.7999 39.3C14.4999 38.2 11.3999 37.7 10.2999 37.7L10.5999 47.2V49.6C10.5971 50.6722 10.3581 51.7306 9.8999 52.7C9.8999 52.8 9.7999 52.9 9.7999 53C9.60565 53.4533 9.37139 53.8883 9.0999 54.3C8.9999 54.6 8.7999 54.8 8.6999 55.1L8.3999 55.5L8.0999 55.9L7.6999 56.4L7.4999 56.7L7.1999 57.1L6.8999 57.3L6.1999 58.1L4.9999 59.2H4.3999L4.1999 59.4H3.9999L3.4999 59.8H3.3999C3.37338 59.8 3.34795 59.8105 3.32919 59.8293C3.31044 59.848 3.2999 59.8735 3.2999 59.9H3.1999L2.9999 60.1H2.7999C2.7999 60.2 2.6999 60.2 2.6999 60.3H2.5999L2.2999 60.6H2.1999L1.7999 61.1H1.6999C1.69359 61.1771 1.65776 61.2487 1.5999 61.3C1.5999 61.4 1.5999 61.4 1.4999 61.4V61.6L1.2999 61.9C1.1999 62 1.1999 62.2 1.0999 62.4V62.6L0.899902 62.9V63.1L1.5999 63.5H1.9999L2.6999 63.9H3.0999L3.6999 64.1H4.5999L5.9999 64.4L10.3999 64.2C11.4324 64.1705 12.4234 63.7866 13.2063 63.1129C13.9893 62.4392 14.5167 61.5166 14.6999 60.5L16.4999 50.4C16.4999 50 16.6999 47.9 16.6999 45.5C16.6999 43.1 16.5999 39.9 15.7999 39.3ZM14.1999 1.2C14.2045 1.14582 14.198 1.09128 14.1808 1.0397C14.1636 0.988118 14.1361 0.940584 14.0999 0.9C13.7999 0.6 13.2999 1.2 13.1999 1.4C13.0095 1.55076 12.8694 1.75574 12.7979 1.98786C12.7265 2.21997 12.7272 2.46829 12.7999 2.7L13.1999 3.1C13.2549 3.1492 13.3261 3.17639 13.3999 3.17639C13.4737 3.17639 13.5449 3.1492 13.5999 3.1L13.7999 2.9C13.9454 2.58206 14.0464 2.24555 14.0999 1.9C14.163 1.79612 14.2043 1.68054 14.2215 1.56023C14.2387 1.43993 14.2314 1.31739 14.1999 1.2ZM6.4999 17.9C6.41412 18.9911 6.58537 20.0871 6.9999 21.1C7.30613 21.862 7.67402 22.5978 8.0999 23.3C8.47753 23.8763 8.91313 24.4124 9.3999 24.9C9.6846 25.1323 10.0336 25.2719 10.3999 25.3C10.7082 25.2747 10.9947 25.1314 11.1999 24.9C11.4037 24.6222 11.5717 24.3198 11.6999 24C11.7439 23.5456 11.6386 23.0892 11.3999 22.7C11.1542 22.3215 10.8505 21.984 10.4999 21.7C9.59678 20.8499 8.82202 19.873 8.1999 18.8C7.7999 18.2 7.5999 17.5 7.1999 16.9L6.8999 16.7C6.6999 16.6 6.5999 16.8 6.5999 16.9C6.51757 17.1582 6.48367 17.4295 6.4999 17.7V17.9Z"
            fill={isDark ? palette.primary.light : palette.primary.dark}
          />
        </g>
        <defs>
          <clipPath id="clip0_12_28862">
            <rect width="29.5" height="71.8" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Box>
  );
}

export default memo(ChessBishop);