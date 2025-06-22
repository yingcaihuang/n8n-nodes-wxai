const { src, dest, parallel } = require('gulp');

function buildNodeIcons() {
	return src('nodes/**/*.{png,svg}').pipe(dest('dist/nodes'));
}

function buildCredentialIcons() {
	return src('credentials/**/*.{png,svg}').pipe(dest('dist/credentials'));
}

const buildIcons = parallel(buildNodeIcons, buildCredentialIcons);

exports['build:icons'] = buildIcons;
