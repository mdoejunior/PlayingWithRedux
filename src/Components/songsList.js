import React from "react";
import { connect } from "react-redux";
import {selectedSongs} from '../Actions'

class SongList extends React.Component{

    renderListOfSongs(){
        return this.props.songs.map((song)=>{
            return (
                <div key={song.tittle}>
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">{song.tittle}</div>
                                The Singer of Song is: <b>{song.singer}</b>
                            </div>
                            
                            <span className="btn btn-primary btn-sm rounded-pill"
                            onClick={()=>this.props.selectedSongs(song)}>Select Song</span>
                        </li>
                    </ul>
                </div>
            )
        })
    }
    render(){
        // console.log(this.props)
        return (
            <div>
                <h3 className="text-center text-primary">Managing State Using Redux</h3>
                {this.renderListOfSongs()}
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    console.log(state)
    return {songs:state.songs}
   
}
export default connect(mapStateToProps,{selectedSongs:selectedSongs})(SongList)