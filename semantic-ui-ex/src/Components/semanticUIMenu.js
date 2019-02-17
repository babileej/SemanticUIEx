import React, { Component } from 'react'
import { Menu, } from 'semantic-ui-react'

export default class SemanticUIMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name='Home'
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Calendar'
            active={activeItem === 'Calendar'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Gallery'
            active={activeItem === 'Gallery'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='Login'
              active={activeItem === 'Login'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}