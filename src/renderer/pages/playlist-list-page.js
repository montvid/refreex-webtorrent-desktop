const React = require('react')
const { dispatcher } = require('../lib/dispatcher')

const List = require('material-ui/List').default
const ListItem = require('material-ui/List').default

module.exports = class PlaylistList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { createPlaylistNameInput: '' };
    this.handleChange = this.handleChange.bind(this)
  }

  render() {
    const state = this.props.state
    const createPlaylist = this.renderCreatePlaylistInput()
    const playlistList = this.renderPlaylistsLists()

    return (
      <div class="toolbar" key='playlists'>
        {createPlaylist}
        {playlistList}
      </div>
    )
  }

  renderCreatePlaylistInput() {
    return (
      <div>
        <input
          value={this.state.createPlaylistNameInput}
          onChange={this.handleChange}
          placeholder="playlist's name">
        </input>
        <br/>
        <button
          disabled={!this.state.createPlaylistNameInput}
          onClick={dispatcher('createPlaylist', this.state.createPlaylistNameInput)}>
          Create new playlist
        </button>
      </div>
    )
  }

  renderPlaylistsLists() {
    // state.saved.allPlaylists = null
    if (!state.saved.allPlaylists) return

    const content = []
    state.saved.allPlaylists.forEach((id) => {
      let rowClass = ''
      if (state.saved.playlistSelected.id === id) {
        rowClass = 'playlist-selected'
      }

      content.push(
        <div key={id} className={rowClass} onClick={id && dispatcher('setPlaylist', id)}>
          {id}
          <i
            key='delete-playlist-button'
            className='icon delete'
            title='Remove playlist'
            onClick={dispatcher('confirmDeletePlaylist', id, false)}>
            close
          </i>
          <i
            key='share-playlist-button'
            className='icon share'
            title='Share playlist'
            onClick={dispatcher('sharePlaylist', id, false)}>
            share
          </i>
        </div>
      )
    })

    return (
      <div key="playlist-list">
        {content}
      </div>
    )
  }

  handleChange(event) {
    this.setState({ createPlaylistNameInput: event.target.value });
  }
}