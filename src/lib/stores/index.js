import { writable } from 'svelte/store';
import defaultTemplate from '$lib/utils/defaultTemplate.js';

export const utils = writable({ isDesktop: true });

export const settings = writable({ isDark: true, currency: '€', template: defaultTemplate });

export const entries = writable([]);

export const edition = writable(false);
