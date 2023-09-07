import { get } from 'idb-keyval';
import { base } from '$app/paths';

export async function load({ params }) {
  // Directly reading IDB as if we acces the URL directly, layout is not loaded yet
  const entries = await get('entries');
  const entry = entries.find((item) => item.id === params.id);

  return {
    title: entry ? entry.name : '404 Not Found',
    type: 'sub',
    backURL: `${base}/`,
    editable: true,
    entry,
  };
}
