// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'GetCertificates.today',
			description: 'Self-learning app for ISTQB certification built',
			sidebar: [
				{
					label: 'Welcome',
					items: [
						{ label: 'Start Here', link: 'welcome' },
						{ label: 'Modes', link: 'modes' },
						{ label: 'Dashboard', link: 'dashboard' },
						{ label: 'Unlock Pro', link: 'pricing' },
					],
				},
				{
					label: 'Learn: CTFL',
					autogenerate: { directory: 'learn/foundation/ctfl' },
				},
			],
			social: [{ icon: 'seti:shell', label: '☕ Invítame a un café', href: 'https://buymeacoffee.com' }],
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en', // lang is required for root locales
				  },
			  pl: {
				label: 'Polski',
				lang: 'pl-PL',
			  }
			}
		}),
	],
});
