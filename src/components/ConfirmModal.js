import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { startRemovePlaylist } from '../actions/playlists';

export class ConfirmModal extends React.Component {
  onRemove = () => {
    this.props.startRemovePlaylist({ id: this.props.playlist.id });
    this.props.history.push('/playlists');
  };
  render() {
    return (
      <Modal
        isOpen={!!this.props.showConfirmModal}
        contentLabel="confirm-delete"
        onRequestClose={this.props.handleCloseModal}
        ariaHideApp={false}
        closeTimeoutMS={200}
        className="Modal"
      >
        <div>
          <h3>ลบรายการ ?</h3>
          <h3>
            {this.props.playlist.description}
          </h3>
        <div>
          <button
            onClick={this.onRemove}
          >
            ตกลง
          </button>
          <button
            onClick={this.props.handleCloseModal}
          >
            ยกเลิก
          </button>
          </div>
        </div>
      </Modal>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  startRemovePlaylist: id => dispatch(startRemovePlaylist(id))
});

export default connect(undefined, mapDispatchToProps)(ConfirmModal);
