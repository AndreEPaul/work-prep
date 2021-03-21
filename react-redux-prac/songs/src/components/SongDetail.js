import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ selectedSong }) => {
  if (!selectedSong) {
    return <div>Select a song</div>;
  }
  return (
    <div>
      <div>Title: {selectedSong.title}</div>
      <div>Duration: {selectedSong.duration}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
