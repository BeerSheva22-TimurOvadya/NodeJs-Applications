import fs from 'node:fs/promises';
import http from 'node:http';
//streams theory:
//writable stream(write) output tream
//readable stream(read) INtput tream
//duplex(write, read) TCP socket
//transform ZipLibrary
//Exaples:
//  <readable stream>.pipe (<writable stream>)
//  <socket stream>.map <request => protocol.getResponse(reques)>.pipe(<socket stream>)
//pipline(<readable stream>, <transform stream>, <writable stream>)
const isComments = process.argv[2] =='comments'
const fileInput = process.argv[3] || 'appl-streams.js';
const fileOutput = process.argv[4] || 'appl-streams-out';
const handlerInput = await fs.open(fileInput);
const handlerOutput = await fs.open(fileOutput, 'w');

const streamOutput = handlerOutput.createWriteStream();

getStreamWith(handlerInput, isComments).pipe(streamOutput);


function getStreamWith(handler, isComments) {
    let streamInput = handler.createReadStream();
    streamInput.setEncoding('utf-8');
    streamInput = streamInput
        .flatMap((chunk) => chunk.split('\n'))
        .filter((line) => {
            const result = line.trim().startsWith('//');
            return isComments ? result : !result;
        })
        .map((line) => (isComments ? line.substr('//') : line));
    return streamInput;
}
