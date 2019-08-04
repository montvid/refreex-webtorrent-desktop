<h1 align="center">
  <br>
  <a href="https://github.com/refreex/">
    <img src="/static/WebTorrent.png" alt="Refreex" width="200">
  </a>
  <br>
  Refreex Desktop
  <br>
  <br>
</h1>

<h4 align="center">The streaming torrent app, focused in music and shared playlists. For Mac, Windows, and Linux.</h4>

<p align="center">
  <a href="https://gitter.im/webtorrent/webtorrent"><img src="https://img.shields.io/badge/gitter-join%20chat%20%E2%86%92-brightgreen.svg" alt="gitter"></a>
  <a href="https://travis-ci.org/webtorrent/webtorrent-desktop"><img src="https://img.shields.io/travis/webtorrent/webtorrent-desktop/master.svg" alt="travis"></a>
  <a href="https://github.com/webtorrent/webtorrent-desktop/releases"><img src="https://img.shields.io/github/release/webtorrent/webtorrent-desktop.svg" alt="github release version"></a>
  <a href="https://github.com/webtorrent/webtorrent-desktop/releases"><img src="https://img.shields.io/github/downloads/webtorrent/webtorrent-desktop/total.svg" alt="github release downloads"></a>
  <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide"></a>
</p>

## Install
### [✨ Download Refreex Desktop ✨]

### Advanced Install

- Download specific installer files from the [GitHub releases](https://github.com/refreex/refreex-webtorrent-desktop/releases) page.

- Try the (unstable) development version by cloning the Git repository. See the
  ["How to Contribute"](#how-to-contribute) instructions.

## Refreex Playlists

The difference between this torrent client and many others including the same WebTorrent is that this app was specially for music. Creating, modifying and then share playlists, giving the chance to the people to get modern ways of sharing culture in a easy way without restrictions.
I created a format for this playlists in JSON, to keep it easy and not get confused with other kind of playlists the name of this kind of list is *Refreex Playlist*

The *Refreex Playlists* are created in JSON format like this:

```
{
  "id": "NameOfThePlaylist",
  "torrents": [
    {
      "infoHash": "a80fda124873fa7d93937d9c607f206e00559269",
      "files": [
        "Dexter_Britain_-_03_-_In_The_Electric_Fields.mp3",
        "Dexter_Britain_-_01_-_The_Time_To_Run_Finale.ogg"
      ]
    },
    {
      "infoHash": "4b53bd8f85a653adcc9cc66aaa7500b946ab06b9",
      "files": [
        "Cloudkicker_-_10_-_You_and_yours.ogg",
        "Cloudkicker_-_10_-_You_and_yours.mp3",
        "NeZoomie_-_04_-_Heavy_Phat_Gun.mp3"
      ]
    },
    {
      "infoHash": "1c4bfb44845f584fc0cf343edb4fc67bc177bb1b",
      "files": [
        "art_of_war_01-02_sun_tzu.mp3"
      ]
    },
    {
      "infoHash": "a88fda5954e89178c372716a6a78b8180ed4dad3",
      "files": [
        "05 - Spoon - Revenge!.mp3",
        "16 - Matmos - Action At A Distance.mp3"
      ]
    }
  ]
}
```

As we can see the idea is simple but effective. The *Refreex Playlist* (JSON) has a just two propertie.

* The first one is `id` this one must be unique and we cannot have two *Refreex Playlist* with the same `id`. Is the name of the playlist.

* The second one is `torrents` this one is an array of objects. 
Those objects are the torrents indeed and they are composed by two properties the `infoHash` of a torrent (you can get it from the magnet link) and the `files` that you want to add to the playlist



## How to Contribute

### Get the code

```
$ git clone https://github.com/refreex/refreex-webtorrent-desktop.git
$ cd webtorrent-desktop
$ npm install
```

### Run the app

```
$ npm start
```

### Watch the code

Restart the app automatically every time code changes. Useful during development.

```
$ npm run watch
```

### Run linters

```
$ npm test
```


### Run integration tests

```
$ npm run test-integration
```

The integration tests use Spectron and Tape. They click through the app, taking screenshots and
comparing each one to a reference. Why screenshots?

* Ad-hoc checking makes the tests a lot more work to write
* Even diffing the whole HTML is not as thorough as screenshot diffing. For example, it wouldn't
  catch an bug where hitting ESC from a video doesn't correctly restore window size.
* Chrome's own integration tests use screenshot diffing iirc
* Small UI changes will break a few tests, but the fix is as easy as deleting the offending
  screenshots and running the tests, which will recreate them with the new look.
* The resulting Github PR will then show, pixel by pixel, the exact UI changes that were made! See
  https://github.com/blog/817-behold-image-view-modes

For MacOS, you'll need a Retina screen for the integration tests to pass. Your screen should have
the same resolution as a 2016 12" Macbook.

For Windows, you'll need Windows 10 with a 1366x768 screen.

When running integration tests, keep the mouse on the edge of the screen and don't touch the mouse
or keyboard while the tests are running.

### Package the app

Builds app binaries for Mac, Linux, and Windows.

```
$ npm run package
```

To build for one platform:

```
$ npm run package -- [platform] [options]
```

Where `[platform]` is `darwin`, `linux`, `win32`, or `all` (default).

The following optional arguments are available:

- `--sign` - Sign the application (Mac, Windows)
- `--package=[type]` - Package single output type.
   - `deb` - Debian package
   - `zip` - Linux zip file
   - `dmg` - Mac disk image
   - `exe` - Windows installer
   - `portable` - Windows portable app
   - `all` - All platforms (default)

Note: Even with the `--package` option, the auto-update files (.nupkg for Windows,
-darwin.zip for Mac) will always be produced.

#### Windows build notes

The Windows app can be packaged from **any** platform.

Note: Windows code signing only works from **Windows**, for now.

Note: To package the Windows app from non-Windows platforms,
[Wine](https://www.winehq.org/) needs to be installed. For example on Mac, first
install [XQuartz](http://www.xquartz.org/), then run:

```
brew install wine
```

(Requires the [Homebrew](http://brew.sh/) package manager.)

#### Mac build notes

The Mac app can only be packaged from **macOS**.

#### Linux build notes

The Linux app can be packaged from **any** platform.


#### Recommended readings to start working in the app

Electron (Framework to make native apps for Windows, OSX and Linux in Javascript):
https://electronjs.org/docs/tutorial/quick-start

React.js (Framework to work with Frontend UI):
https://reactjs.org/docs/getting-started.html

Material UI (React components that implement Google's Material Design.):
https://material-ui.com/getting-started
https://material.io/tools/icons/?style=baseline

### Privacy

WebTorrent Desktop collects some basic usage stats to help us make the app better.
For example, we track how well the play button works. How often does it succeed?
Time out? Show a missing codec error?

The app never sends any personally identifying information, nor does it track which
torrents you add.

## License

MIT. Copyright (c) [WebTorrent, LLC](https://webtorrent.io).
