import { get } from "idb-keyval";

export const prerender = false;
export const ssr = false;
export const trailingSlash = 'always';

export async function load({ url }) {
  const { pathname } = url;

  const settings = await get('settings');
  const entries = await get('entries');

  return { pathname, settings, entries };
} 