import React from 'react';
import { connect } from 'react-redux';
import Checkbox from './Checkbox';

class PlaylistForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      description: props.playlist ? props.playlist.description : '',
      lists: props.playlist ? props.playlist.lists : [],
      error: ''
    }
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }))
  }
  onAddLists = (list) => {
    this.setState((prevState) => ({
      lists: prevState.lists.concat(list)
    }))
  }
  onRemoveLists = (list) => {
    this.setState((prevState) => ({
      lists: prevState.lists.filter((sl) =>
        sl !== list
      )
    }))
  }
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || this.state.lists.length === 0) {
      this.setState(() => ({
        error: 'กรุณาใส่ชื่อรายการและเลือกบทสวดมนต์'
      }))
    } else {
      this.setState(() => ({
        error: ''
      }))
      this.props.onSubmit({
        description: this.state.description,
        lists: this.state.lists
      })
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input 
            type="text"
            placeholder="ชื่อรายการ"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          {this.props.transPrayers.map((transPrayer, index) =>
            <Checkbox 
              key={index}
              {...transPrayer}
              lists={this.state.lists}
              onAddLists={this.onAddLists}
              onRemoveLists={this.onRemoveLists}
            />
          )}
          <button>เพิ่ม</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  transPrayers: state.transPrayers
})

export default connect(mapStateToProps)(PlaylistForm);