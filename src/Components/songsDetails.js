import React from "react";
import { connect } from "react-redux/es/exports";

const SongsDetails=({selectedSongs})=>{
    if(!selectedSongs){
        return (
           <div>
                <h3 className="text-center text-primary">Details Of Selected Song</h3>
                <h4>Please Select a Song</h4>
           </div>
        )
    }
    return(
        <div>
            <h3 className="text-center text-primary">Details Of Selected Song</h3>
            <div>The Name of The Songs is: <b>{selectedSongs.tittle}</b></div>
            <div>The Singer of The Song is: <b>{selectedSongs.singer}</b></div>
            <div>The Duration of The Songs is: <b>{selectedSongs.duration}</b></div>
        </div>
    )

}
const mapsPropsToState=(state)=>{
    return {selectedSongs:state.selectedSongs}
}


export default connect(mapsPropsToState)(SongsDetails)