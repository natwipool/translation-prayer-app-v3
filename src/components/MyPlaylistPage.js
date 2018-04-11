import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MyPlaylistList from './MyPlaylistList';
import ConfirmModal from './ConfirmModal';

export class MyPlaylistPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showConfirmModal: false
    }
  }
  handleShowModal = () => {
    this.setState(() => ({ showConfirmModal: true }));
  };
  handleCloseModal = () => {
    this.setState(() => ({ showConfirmModal: false }));
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <h2>{this.props.playlist.description}</h2>
            
            <Link to={`/edit/${this.props.playlist.id}`}>
              <button>แก้ไข</button>
            </Link>
            <button onClick={this.handleShowModal}>ลบ</button>
          </div>
        </div>
        <MyPlaylistList {...this.props.playlist}/>
        <ConfirmModal
          playlist={this.props.playlist}
          showConfirmModal={this.state.showConfirmModal}
          handleCloseModal={this.handleCloseModal}
          history={this.props.history}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  playlist: state.playlists.find(
    playlist => playlist.id === props.match.params.id
  )
});

export default connect(mapStateToProps)(MyPlaylistPage);