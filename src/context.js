import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext();

const reducer = (state,action) => {
    switch (action.type){
        case "SEARCH_TRACKS": 
        return {
            ...state, //spreading
            track_list: action.payload, 
            heading : "Search Results"
        }
        default : return state
    }
}

export class Provider extends Component {

    // state = {
    //     track_list : [
    //         {track: {track_name:'abc'}},
    //         {track: {track_name:'123'}}
    //     ],
    //     heading: 'top 10 Teacks'
    // }

    state = {
        track_list : [
        ],
        heading: 'top 10 tracks',
        dispatch : action => this.setState(state => reducer(state, action))
    }

    componentDidMount(){
        var url = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=uk&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`
        //console.log(url)
        axios.get(url)
        .then(res=> {
            //console.log(res.data)
            this.setState({track_list: res.data.message.body.track_list})
        })
        .catch(err=> console.log(err))
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                    {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer