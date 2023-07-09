import React , {useEffect, useState} from 'react'
import Block from './Block'

const Board = () => {
    const shapeMapping = {
        0 : "",
        1 : "cross",
        2 : "circle"
    }
    const [shapeState, setshapeState] = useState([0,0,0,0,0,0,0,0,0])
    const [player, setPlayer] = useState(1)

    const gameResult = ()=>{
        const combination = [
            [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
        ];

        combination.forEach((c , i) =>{
            if(shapeState[c[0]] === 1 && shapeState[c[1]] === 1 && shapeState[c[2]] === 1){
                console.log('player 1 wins');
                setshapeState([0,0,0,0,0,0,0,0,0])
            }
            else if(shapeState[c[0]] === 2 && shapeState[c[1]] === 2 && shapeState[c[2]] === 2){
                console.log('player 2 wins');
                setshapeState([0,0,0,0,0,0,0,0,0]);
            }
        })
    }

    useEffect(() => {
      gameResult();
      // eslint-disable-next-line
    }, [shapeState])
    
    const changeState = (id)=>{
        const m = [...shapeState];
        m[id] = player;
        setshapeState(m);
        setPlayer( (player === 1 ? 2 : 1) );
    }
    return (
        <div className='board'>
            <div>
                <Block id = {0}   shapeState = {shapeState} shapeMapping = {shapeMapping} changeState = {changeState}/>
                <Block id = {1}  shapeState = {shapeState} shapeMapping = {shapeMapping} changeState = {changeState}/>
                <Block id = {2}  shapeState = {shapeState} shapeMapping = {shapeMapping} changeState = {changeState}/>
            </div>
            <div>
                <Block id = {3}  shapeState = {shapeState} shapeMapping = {shapeMapping} changeState = {changeState}/>
                <Block id = {4}  shapeState = {shapeState} shapeMapping = {shapeMapping} changeState = {changeState}/>
                <Block id = {5}  shapeState = {shapeState} shapeMapping = {shapeMapping} changeState = {changeState}/>
            </div>
            <div>
                <Block id = {6}  shapeState = {shapeState} shapeMapping = {shapeMapping} changeState = {changeState}/>
                <Block id = {7}  shapeState = {shapeState} shapeMapping = {shapeMapping} changeState = {changeState}/>
                <Block id = {8}  shapeState = {shapeState} shapeMapping = {shapeMapping} changeState = {changeState}/>
            </div>
        </div>
    )
}

export default Board
