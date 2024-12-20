// next
import { useRouter } from 'next/router';

// ----------------------------------------------------------------------

type ReturnType = {
  active: boolean;
  isExternalLink: boolean;
};

export default function useActiveLink(path: string, deep = path !== '/'): ReturnType {
  const { pathname, asPath } = useRouter();

  const checkPath = path.startsWith('#');

  const currentPath = path === '/' ? '/' : `${path}`;

  const normalActive =
    (!checkPath && pathname === currentPath) || (!checkPath && asPath === currentPath);

  const deepActive =
    (!checkPath && pathname.includes(currentPath) && path !== '/') ||
    (!checkPath && asPath.includes(currentPath) && path !== '/');

  return {
    active: deep ? deepActive : normalActive,
    isExternalLink: path.includes('http'),
  };
}
