#!/usr/bin/env node
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk) {
	process.stdout.write(chunk.replace(/\\n/g, "\n").replace(/\\t/g, "\t"));
});
