import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const sampleRate = 22_050;
const durationSeconds = 24;
const sampleCount = sampleRate * durationSeconds;
const outputPath = resolve("public/assets/music/bright-notes.wav");
const pcm = new Int16Array(sampleCount);

const chords = [
	[261.63, 329.63, 392],
	[174.61, 220, 261.63],
	[196, 246.94, 293.66],
	[261.63, 329.63, 392],
];
const roots = [130.81, 87.31, 98, 130.81];
const melody = [523.25, 659.25, 783.99, 659.25, 698.46, 783.99, 880, 783.99];
const beatSeconds = 0.5;

for (let index = 0; index < sampleCount; index += 1) {
	const time = index / sampleRate;
	const section = Math.floor(time / 2) % chords.length;
	const chord = chords[section];
	const root = roots[section];
	const beat = Math.floor(time / beatSeconds);
	const beatTime = time % beatSeconds;
	const pluckEnvelope = Math.exp(-7 * beatTime);

	let value = 0;
	for (const frequency of chord) {
		value += Math.sin(2 * Math.PI * frequency * time) * 0.025;
		value += Math.sin(2 * Math.PI * frequency * 2 * time) * 0.008;
	}

	value += Math.sin(2 * Math.PI * root * time) * 0.045;

	const melodyFrequency = melody[beat % melody.length];
	value +=
		Math.sin(2 * Math.PI * melodyFrequency * beatTime) * pluckEnvelope * 0.13;
	value +=
		Math.sin(2 * Math.PI * melodyFrequency * 2 * beatTime) *
		pluckEnvelope *
		0.035;

	const kickEnvelope = Math.exp(-18 * beatTime);
	value +=
		Math.sin(2 * Math.PI * (72 - beatTime * 28) * beatTime) *
		kickEnvelope *
		0.09;

	const fade = Math.min(1, time / 0.6, (durationSeconds - time) / 0.8);
	pcm[index] = Math.round(Math.max(-1, Math.min(1, value * fade)) * 32767);
}

const dataSize = pcm.byteLength;
const wav = Buffer.alloc(44 + dataSize);
wav.write("RIFF", 0);
wav.writeUInt32LE(36 + dataSize, 4);
wav.write("WAVE", 8);
wav.write("fmt ", 12);
wav.writeUInt32LE(16, 16);
wav.writeUInt16LE(1, 20);
wav.writeUInt16LE(1, 22);
wav.writeUInt32LE(sampleRate, 24);
wav.writeUInt32LE(sampleRate * 2, 28);
wav.writeUInt16LE(2, 32);
wav.writeUInt16LE(16, 34);
wav.write("data", 36);
wav.writeUInt32LE(dataSize, 40);

for (let index = 0; index < pcm.length; index += 1) {
	wav.writeInt16LE(pcm[index], 44 + index * 2);
}

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, wav);
console.log(`Generated ${outputPath}`);
