module.exports = {
	buildUrl: function ({ branch, release, plataform, architecture }) {
		return `https://storage.googleapis.com/dart-archive/channels/${branch}/release/${release}/sdk/dartsdk-${plataform}-${architecture}-release.zip`;
	}
};