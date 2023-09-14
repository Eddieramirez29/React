import React, { useState } from "react";
import Episode from "./Episode";

export default function EpisodeBrowser() {
    const episodes = [
        {
            name: "Winter Is Coming",
            episode: 1,
            cover: "https://static.hbo.com/content/dam/hbodata/series/game-of-thrones/video-stills/season-01/game-of-thrones-season-1-episode-1-full-stitched-607175_PRO35_10-1920.jpg"
        },
        {
            name: "The Kingsroad",
            episode: 2,
            cover: "https://api.time.com/wp-content/uploads/2017/08/game-of-thrones-spoils-od-war-daenerys-03.jpg?quality=85&w=2560"
        },
        {
            name: "Lord Snow",
            episode: 3,
            cover: "https://static.hbo.com/content/dam/hbodata/series/game-of-thrones/episodes/5/49/ep49-ss05-1920.jpg?w=1200"
        },
    ];

    const [episode, setEpisode] = useState(0);//Posición 0
    const [activeEpisode, setActiveEpisode] = useState(episodes[0]);//Episodios. Estos son arreglos

    function nextEpisode() {
        if(episode > episodes.length - 1)
    {
 	    alert("No more episodes");
	    return;
    }
        setEpisode(episode + 1);
        refreshEpisode();
    }

    function previousEpisode() {

        if(episode == 0)
    {
 	    alert("No more episodes");
	    return;
    }

        setEpisode(episode - 1);
        refreshEpisode();
    }

    function refreshEpisode() {
        setActiveEpisode(episodes[episode]);
    }

    return (
        <div className="EpisodeBrowser">
            <h1>Episode Browser</h1>
            <Episode name={activeEpisode.name} episode={activeEpisode.episode} cover={activeEpisode.cover} />
            <button onClick={previousEpisode}>Previous</button>
            <button onClick={nextEpisode}>Next</button>
        </div>
    );
}