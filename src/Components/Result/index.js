import { useEffect, useReducer } from "react";
import { useState } from "react/cjs/react.development";
import { calculateScore } from "../../api";


function resultReducer(state,action) {
    switch(action.type) {
        case 'sucess' :
            return {
                winner: action.payload.winner,
                loser: action.payload.loser,
                err: null,
                loading: false
            }
        case 'failure' :
            return {
                winner: null,
                loser: null,
                err: action.payload.message,
                loading: false
            }
        default : 
            throw new Error(`Action isn't supported`);
    }
}

function Result({player1,player2}) {
    const [state,dispatch] = useReducer(
        resultReducer, 
        {winner: null, loser: null,err: null, loading: true})
 
    useEffect(async () => {
        try {
            const res = await calculateScore(player1,player2);
            dispatch({
                type: 'sucess',
                payload: {
                    winner: res[0].profile,
                    loser: res[1].profile
                }
            })
        }
        catch(err) {
            dispatch({
                type: 'failure',
                payload: {
                    err: err
                }
            })
        }
    },[player1,player2])

    const {winner, loser, err, loading} = state;

    return (
        <>
            {err && <p>{err}</p>}
            {loading && <p>Loading...</p>}
            {(winner && loser) && <p>{JSON.stringify(winner)} </p>}
        </>
    )
}

export default Result;