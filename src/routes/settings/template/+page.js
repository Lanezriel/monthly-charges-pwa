import { base } from "$app/paths";

export function load() {
  return {
    title: 'Template',
    type: 'sub',
    backURL: `${base}/settings/`,
  };
}
