import { get } from "idb-keyval";

export const prerender = false;
export const ssr = false;
export const trailingSlash = 'always';

export async function load({ url }) {
  const { pathname } = url;

  const test = await get('test');
  const preferences = await get('preferences');

  return { pathname, test, preferences };
} 