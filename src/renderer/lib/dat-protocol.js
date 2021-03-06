const config = require('../../config')
const fs = require('fs')
const Dat = require('dat-node')
const parse = require('url').parse

function connectMyOwnPlaylistFolderInDatNetwork() {
    if (!fs.existsSync(config.DAT_PLAYLIST_PATH)) {
        fs.mkdirSync(config.DAT_PLAYLIST_PATH);
    }

    if (!fs.existsSync(config.PLAYLIST_PATH)) {
        fs.mkdirSync(config.PLAYLIST_PATH);
    }
    // 1. We select our playlist folder to share all our playlist created by us in the Dat Network.
    Dat(config.PLAYLIST_PATH, function (err, dat) {
        if (err) throw err

        // 2. Import the files
        dat.importFiles()

        // 3. Share the files on the network!
        dat.joinNetwork()

        // (And share the link)
        console.log('My Dat link is: dat://' + dat.key.toString('hex'))
    })
}

// Checks if the argument is Dat uri format
function isDatProtocolUrl(urlString) {
    const url = new URL(urlString)
    return (url.protocol === "dat:")
}

function addDatProtocolUrl(datProtocolUrl) {
    const urlObject = parseDatURL(datProtocolUrl)

    // 1. Tell Dat where to download the files
    Dat(config.DAT_PLAYLIST_PATH, {
        // 2. Tell Dat what link I want
        key: urlObject.host, // (a 64 character hash from above)
        sparse: true
    }, function (err, dat) {
        if (err) throw err

        // 3. Join the network & download (files are automatically downloaded)
        dat.joinNetwork()

        // Manually download files via the hyperdrive API:
        dat.archive.readFile(urlObject.path, function (err, content) {
            console.log('A new playlist from a dat-protocol link was added', datProtocolUrl);
            console.log(content)
        })
    })
}

// To understand better this function read the first part of this https://datprotocol.github.io/how-dat-works/
// Also perhaps this can change with dat2 
// https://github.com/pfrazee/parse-dat-url/blob/faca2c9d129fce87f3c9460579cadbc1aa2f1599/index.js
function parseDatURL(str, parseQS) {
    //                   1          2      3        4
    const VERSION_REGEX = /^(dat:\/\/)?([^/]+)(\+[^/]+)(.*)$/i

    var parsed, version = null, match = VERSION_REGEX.exec(str)
    if (match) {
        // run typical parse with version segment removed
        parsed = parse((match[1] || '') + (match[2] || '') + (match[4] || ''), parseQS)
        version = match[3].slice(1)
    } else {
        parsed = parse(str, parseQS)
    }

    parsed.version = version // add version segment
    return parsed
}

module.exports = {
    isDatProtocolUrl,
    addDatProtocolUrl,
    connectMyOwnPlaylistFolderInDatNetwork
}