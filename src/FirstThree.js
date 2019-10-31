import React, { Component } from 'react';
import data from './data';

class FirstThree extends Component{

    render(){
        return(
            <div>
                <div className="firstthree-section">
                    <div className="firstthree-section_row">
                        <div className="firstthree-section_row-title"> Season 1</div>
                    </div>
                    <div className="firstthree-section_row">
                        <div className="firstthree-section_row-cardRow">
                            <div className="firstthree-section_row-cardRow--episodeCard">
                                <img className="firstthree-section_row-cardRow--episodeCard---img" src={data.episodes[0].episodeThumbnail} alt="Episode Thumbnail"></img>
                                <div className="firstthree-section_row-cardRow--episodeCard---number"> Episode: {data.episodes[0].episodeNumber}</div>
                                <div className="firstthree-section_row-cardRow--episodeCard---title"> {data.episodes[0].episodeTitle}</div>
                            </div>

                            <div className="firstthree-section_row-cardRow--episodeCard">
                                <img className="firstthree-section_row-cardRow--episodeCard---img" src={data.episodes[1].episodeThumbnail} alt="Episode Thumbnail"></img>
                                <div className="firstthree-section_row-cardRow--episodeCard---number"> Episode: {data.episodes[1].episodeNumber}</div>
                                <div className="firstthree-section_row-cardRow--episodeCard---title"> {data.episodes[1].episodeTitle}</div>
                            </div>

                            <div className="firstthree-section_row-cardRow--episodeCard">
                                <img className="firstthree-section_row-cardRow--episodeCard---img" src={data.episodes[2].episodeThumbnail} alt="Episode Thumbnail"></img>
                                <div className="firstthree-section_row-cardRow--episodeCard---number"> Episode: {data.episodes[2].episodeNumber}</div>
                                <div className="firstthree-section_row-cardRow--episodeCard---title"> {data.episodes[2].episodeTitle}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FirstThree;