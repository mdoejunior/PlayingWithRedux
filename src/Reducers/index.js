import { combineReducers } from "redux"

 const songsReducers=()=>{
    return [
        {tittle:"Nakupenda",singer:"Jay_Melody",duration:3.10},
        {tittle:"Sambaloketo",singer:"Jay_Melody",duration:4.10},
        {tittle:"I miss You",singer:"Diamond_Plutnumz",duration:3.50},
        {tittle:"Naogopa",singer:"Marioo ft Harmonize",duration:3.40},
        {tittle:"I wish",singer:"Kusah",duration:3.20},
        {tittle:"Fire",singer:"Zuchu",duration:3.38},  
        {tittle:"Jaro",singer:"Jay_Melody",duration:2.50},
        {tittle:"Sugar",singer:"Jay_Melody",duration:3.20},
        {tittle:"Utu",singer:"Alikiba",duration:4.05},
        {tittle:"Amour",singer:"Alikiba",duration:2.53},
        {tittle:"Oya Oya",singer:"Alikiba",duration:3.27},
        {tittle:"Siamini",singer:"TID",duration:4.43},   
    ]
}

 const selectedSongsReducer=(selectedSong=null, action)=>{
    if(action.type==="SELECTED_SONG"){
        return action.payload
    }

    return selectedSong
    
}

export default combineReducers({
    songs:songsReducers,
    selectedSongs:selectedSongsReducer
})