import React, { Component } from 'react'
import {
  ListView,
  ListViewSection,
  ListViewSectionHeader,
  ListViewRow,
  Text
} from 'react-desktop/macOs'

class OnlineList extends Component {
  render() {
    return (
      <ListView className="online-list">
        <ListViewSection>
          {this.props.users &&
            this.props.users.map((user, index) => {
              if (user.id === this.props.currentUser.id) {
                return this.renderItem(
                  `${user.name} (You)`,
                  user.id,
                  user.presence.state
                )
              }
              return this.renderItem(user.name, user.id, user.presence.state)
            })}
        </ListViewSection>
      </ListView>
    )
  }

  renderItem(name, id, status) {
    const itemStyle = {
      width: '10px',
      height: '10px',
      background: status === 'online' ? '#6BD761' : 'gray',
      borderRadius: '50%',
      marginRight: '5px'
    }
    return (
      <ListViewRow key={id}>
        <div style={itemStyle} />
        <Text color="#414141" size="13">
          {name}
        </Text>
      </ListViewRow>
    )
  }
}

export default OnlineList
