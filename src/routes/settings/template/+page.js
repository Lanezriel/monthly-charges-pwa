import { base } from "$app/paths";

export function load({ url }) {
  const home = url.searchParams.get('home');
  return {
    title: 'Template',
    type: 'sub',
    backURL: home ? `${base}/` : `${base}/settings/`,
  };
}
