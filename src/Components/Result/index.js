import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { calculateScore } from "../../api";


function Result({player1,player2}) {
    const [scores,setScores] = useState({
        player1: 0,
        player2: 0
    });

    useEffect(async () => {
        const scores = await calculateScore(player1,player2);
        console.log('scores',scores);
        setScores({
            player1: scores[0],
            player2: scores[1]
        })
    },[player1,player2])

    return (
        <>
            <p>{scores.player1}  {scores.player2}</p>
        </>
    )
}

export default Result;