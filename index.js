#!/usr/bin/env node
process.stdin.setEncoding('utf8');

process.stdin.on('readable', function(chunk) {
	(chunk = process.stdin.read()) &&
		process.stdout.write(chunk.replace(/\\n/g, "\n").replace(/\\t/, "\t"));
});
