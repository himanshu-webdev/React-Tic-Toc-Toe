import React, { useState } from 'react'
import Square from './Square'

function Board() {
    const [state, setState] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);

    //For Displaying "X" and "0"
    const handleClick = (index) => {

        //for when a user check box then other can't overwrite that box
        if(state[index] !== null) {
          return;
        } 

        const copyState = [...state];
        copyState[index] = isXTurn ? "X" : "0";
        setState(copyState);
        setIsXTurn(!isXTurn);
    }
    
    //For Finding Winner
    const checkWinner = () => {
        const winnerLogic =[
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for(let logic of winnerLogic) {
            const [a, b, c] = logic;
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
               return state[a];
            }
        }

        return false;
    }
    
    //For Displaying Winner
    const isWinner = checkWinner();

    //Reset functionality
    const handleReset = () => {
        setState(Array(9).fill(null));
    }


  return (
    <div className='flex flex-col justify-center items-center cursor-pointer pt-[3.45rem] relative'>    
      
       <h1 className='text-4xl text-[#26ffcb] tracking-widest font-medium flex justify-center absolute bottom-[31rem]'>Tic Tac Toe</h1>

       {isWinner ? (
        <>
         <h2 className='text-3xl text-white'>{isWinner} won the game</h2> 
         <button onClick={handleReset} 
          className='w-[250px] h-[60px] cursor-pointer text-2xl bg-[#1f3540] border-none outline-none text-[#26ffcb] rounded-3xl mt-8 mb-4'>Play Again</button>
        </>
       ) : (
        <> 
        <h4 className='text-3xl text-white mb-4'>Player { isXTurn ? "X" : "0"} please move</h4>
            <div className='flex'>
                <Square onClick={() => handleClick(0)} value={state[0]} />
                <Square onClick={() => handleClick(1)} value={state[1]} />
                <Square onClick={() => handleClick(2)} value={state[2]} />
            </div>

            <div className='flex'>
                <Square onClick={() => handleClick(3)} value={state[3]} />
                <Square onClick={() => handleClick(4)} value={state[4]} />
                <Square onClick={() => handleClick(5)} value={state[5]} />
            </div>

            <div className='flex'>
                <Square onClick={() => handleClick(6)} value={state[6]} />
                <Square onClick={() => handleClick(7)} value={state[7]} />
                <Square onClick={() => handleClick(8)} value={state[8]} />
            </div>

            <div>
               <button onClick={handleReset} 
               className='w-[250px] h-[60px] cursor-pointer text-2xl bg-[#1f3540] border-none outline-none text-[#26ffcb] rounded-3xl mt-8 mb-4'>Reset</button> 
            </div>
        </>
       )}

    </div>
  )
}

export default Board