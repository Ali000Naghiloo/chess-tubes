import { memo } from 'react';
// @mui
import { Box, BoxProps, useTheme } from '@mui/material';
//
// ----------------------------------------------------------------------

function ChessCourseIcon({ ...other }: BoxProps) {
  //
  const { palette } = useTheme();

  const isDark = palette.mode === 'dark';

  return (
    <Box {...other}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 67 57"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_12_28866)">
          <path
            d="M24.2999 13.7H10.8C9.3319 13.6998 7.92247 14.276 6.87509 15.3047C5.82772 16.3334 5.22617 17.7322 5.19995 19.2V51.6H61.7V19.2C61.6737 17.7322 61.0722 16.3334 60.0248 15.3047C58.9774 14.276 57.568 13.6998 56.0999 13.7H39.2999"
            stroke={isDark ? palette.primary.lighter : palette.primary.darker}
            stroke-miterlimit="10"
          />
          <path
            d="M25.5001 18.1H10.8001C10.6475 18.0861 10.4936 18.1042 10.3484 18.1532C10.2032 18.2022 10.0698 18.281 9.9568 18.3846C9.84382 18.4882 9.75372 18.6142 9.6923 18.7546C9.63087 18.895 9.59947 19.0467 9.60011 19.2V46C9.60011 46.3183 9.72654 46.6235 9.95158 46.8485C10.1766 47.0736 10.4818 47.2 10.8001 47.2H56.1001C56.4184 47.2 56.7236 47.0736 56.9486 46.8485C57.1737 46.6235 57.3001 46.3183 57.3001 46V19.2C57.3007 19.0467 57.2693 18.895 57.2079 18.7546C57.1465 18.6142 57.0564 18.4882 56.9434 18.3846C56.8304 18.281 56.6971 18.2022 56.5518 18.1532C56.4066 18.1042 56.2527 18.0861 56.1001 18.1H38.7001"
            stroke={isDark ? palette.primary.lighter : palette.primary.darker}
            stroke-miterlimit="10"
          />
          <path
            d="M1 51.6H65.9C65.9 52.7139 65.4575 53.7822 64.6698 54.5699C63.8822 55.3575 62.8139 55.8 61.7 55.8H5.2C4.08609 55.8 3.0178 55.3575 2.23015 54.5699C1.4425 53.7822 1 52.7139 1 51.6Z"
            stroke={isDark ? palette.primary.lighter : palette.primary.darker}
            stroke-miterlimit="10"
          />
          <path
            d="M41 51.6H25.3C24.7478 51.6 24.3 52.0478 24.3 52.6V52.7C24.3 53.2523 24.7478 53.7 25.3 53.7H41C41.5523 53.7 42 53.2523 42 52.7V52.6C42 52.0478 41.5523 51.6 41 51.6Z"
            fill={isDark ? palette.primary.lighter : palette.primary.darker}
          />
          <path
            d="M42.6001 22.6C41.9249 24.9711 40.5689 27.092 38.7001 28.7C37.749 28.488 36.7714 28.4206 35.8001 28.5C32.811 28.8189 29.8004 28.8858 26.8001 28.7C24.9314 27.092 23.5754 24.9711 22.9001 22.6C22.3039 20.3501 22.2466 17.9913 22.7332 15.7151C23.2197 13.4389 24.2362 11.3096 25.7001 9.5C27.1174 7.7159 28.8043 6.1639 30.7001 4.9C30.1884 4.31973 29.9042 3.57369 29.9001 2.8C29.9251 2.06532 30.2281 1.36752 30.7479 0.847723C31.2677 0.327926 31.9655 0.0249257 32.7001 0C33.301 0.013474 33.8876 0.186 34.4001 0.5C34.903 0.884179 35.2849 1.40487 35.5001 2C34.9699 2.7961 34.5018 3.63191 34.1001 4.5C33.9001 4.8 33.8001 5.2 33.6001 5.5C31.8809 9.82492 31.0314 14.4464 31.1001 19.1H34.4001C34.3386 14.771 35.1905 10.4776 36.9001 6.5C37.9088 7.39096 38.8451 8.36068 39.7001 9.4H39.8001C41.2382 11.2434 42.2377 13.3899 42.7228 15.677C43.208 17.9641 43.166 20.3316 42.6001 22.6Z"
            fill={isDark ? palette.primary.lighter : palette.primary.darker}
          />
          <path
            d="M42.6 22.6C41.9248 24.9711 40.5688 27.092 38.7001 28.7C37.7372 28.9486 36.7197 28.8784 35.8 28.5C46.4 21.6 39.8001 9.60002 39.7001 9.40002H39.8C41.2381 11.2434 42.2376 13.39 42.7228 15.677C43.2079 17.9641 43.1659 20.3316 42.6 22.6Z"
            fill={isDark ? palette.primary.light : palette.primary.dark}
          />
          <path
            d="M35.5001 2C34.9698 2.7961 34.5018 3.63191 34.1001 4.5C33.9001 4.8 33.8001 5.2 33.6001 5.5C31.8808 9.82492 31.0313 14.4464 31.1001 19.1C27.7001 13 32.5001 7.5 33.9001 4.4C34.5158 3.19787 34.6926 1.81856 34.4001 0.5C34.903 0.884179 35.2848 1.40487 35.5001 2Z"
            fill={isDark ? palette.primary.light : palette.primary.dark}
          />
          <path
            d="M32.2 1.20002L32 1.00002C31.7 0.600021 31.2 1.20002 31 1.50002C30.8096 1.65078 30.6694 1.85576 30.598 2.08788C30.5266 2.31999 30.5273 2.56831 30.6 2.80002C30.6749 3.00602 30.8154 3.1817 31 3.30002C31.0709 3.35682 31.1591 3.38777 31.25 3.38777C31.3408 3.38777 31.429 3.35682 31.5 3.30002L31.7 3.10002C31.8768 2.75065 32.0111 2.38135 32.1 2.00002C32.1 1.80002 32.2 1.50002 32.2 1.20002Z"
            fill={isDark ? palette.primary.light : palette.primary.dark}
          />
          <path
            d="M43.8 30.7L43.5 30.5C43.2891 30.1548 43.0181 29.85 42.7001 29.6C41.9999 29.0649 41.173 28.7204 40.3 28.6H38.7001L35.8 28.4C32.7997 28.2165 29.7893 28.2834 26.8 28.6H25.1C23.8388 28.8257 22.702 29.5007 21.9 30.5C21.9 30.6 21.8001 30.6 21.7001 30.7C21.164 31.5033 20.8532 32.4357 20.8 33.4V35.1H44.7001V33.4C44.6469 32.4357 44.3361 31.5033 43.8 30.7Z"
            fill={isDark ? palette.primary.lighter : palette.primary.darker}
          />
          <path
            d="M43.5001 30.5C29.3001 29.5 22.2001 30.5 21.9001 30.5C22.7021 29.5007 23.8389 28.8257 25.1001 28.6H26.8001C29.7894 28.2834 32.7998 28.2165 35.8001 28.4L38.7001 28.6H33.3001C34.1731 28.7204 35 29.0649 35.7001 29.6C36.0001 29.9 43.3001 30.1 43.5001 30.5Z"
            fill={isDark ? palette.primary.light : palette.primary.dark}
          />
          <path
            d="M23.9001 19C23.8861 20.1609 24.0896 21.3141 24.5001 22.4C24.7996 23.2151 25.2029 23.9881 25.7001 24.7C26.0806 25.3325 26.5523 25.9053 27.1001 26.4C27.2235 26.5476 27.376 26.6681 27.548 26.7542C27.7201 26.8402 27.908 26.8898 28.1001 26.9L29.0001 26.4C29.2039 26.1222 29.3719 25.8198 29.5001 25.5C29.559 25.0129 29.4534 24.5202 29.2001 24.1L28.2001 23C27.2361 22.0792 26.3957 21.0372 25.7001 19.9C25.4062 19.2467 25.0722 18.6122 24.7001 18C24.6001 17.9 24.5001 17.7 24.4001 17.7C24.3001 17.7 24.1001 17.8 24.0001 18C24.0103 18.2703 23.9765 18.5405 23.9001 18.8V19Z"
            fill={isDark ? palette.primary.light : palette.primary.dark}
          />
        </g>
        <defs>
          <clipPath id="clip0_12_28866">
            <rect width="65.9" height="56.3" fill="white" transform="translate(0.5)" />
          </clipPath>
        </defs>
      </svg>
    </Box>
  );
}

export default memo(ChessCourseIcon);