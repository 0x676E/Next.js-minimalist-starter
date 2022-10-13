/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
	disable: process.env.NODE_ENV === "development",
	dest: "public",
	runtimeCaching
});

module.exports = withPWA({
	reactStrictMode: true,
	swcMinify: true,
	output: "standalone",
	i18n: {
		locales: ["en"],
		defaultLocale: "en"
	}
});
