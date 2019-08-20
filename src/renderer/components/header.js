const React = require('react')

const { dispatcher } = require('../lib/dispatcher')

class Header extends React.Component {
  render () {
    const loc = this.props.state.location
    return (
      <div
        className='header'
        onMouseMove={dispatcher('mediaMouseMoved')}
        onMouseEnter={dispatcher('mediaControlsMouseEnter')}
        onMouseLeave={dispatcher('mediaControlsMouseLeave')}
      >
        {this.getTitle()}
<<<<<<< HEAD
=======
        <div className='nav left float-left'>
          <i
            className={'icon back ' + (loc.hasBack() ? '' : 'disabled')}
            title='Back'
            onClick={dispatcher('back')}
          >
            chevron_left
          </i>
          <i
            className={'icon forward ' + (loc.hasForward() ? '' : 'disabled')}
            title='Forward'
            onClick={dispatcher('forward')}
          >
            chevron_right
          </i>
        </div>
>>>>>>> 5eec89cd423eedc61303b46b4a01303efacd1339
        <div className='nav right float-right'>
          {this.getAddButton()}
        </div>
      </div>
    )
  }

  getTitle () {
    if (process.platform !== 'darwin') return null
    const state = this.props.state
    return (<div className='title ellipsis'>{state.window.title}</div>)
  }

  getAddButton () {
    const state = this.props.state
    if (state.location.url() !== 'home') return null
    return (
<<<<<<< HEAD
      <div onClick={dispatcher('openFiles')}>
        <span>Add torrent or playlist</span>
        <i
          className='icon add'
          title='Add torrent or playlist'>
          add
        </i>
      </div>
      
=======
      <i
        className='icon add'
        title='Add torrent'
        onClick={dispatcher('openFiles')}
      >
        add
      </i>
>>>>>>> 5eec89cd423eedc61303b46b4a01303efacd1339
    )
  }
}

module.exports = Header
