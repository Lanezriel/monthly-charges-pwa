import { get } from "idb-keyval";

export const prerender = false;
export const ssr = false;
export const trailingSlash = 'always';

export async function load() {
  const test = await get('test');
  return { test };
} 