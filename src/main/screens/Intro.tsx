
import { useContext } from 'react';
import { ILevelProvider, LevelContext, levels } from 'renderer/App';

export const Hello = () => {
    const { setCurrentLevel } = useContext(LevelContext) as ILevelProvider

    return (
        <div className='mainScreen' >
            <p className='mainScreen--title mainScreen--title-shadow'>The Big Day</p>
            <div className='mainScreen--arrow' />
            <div className='mainScreen--door' onClick={() => setCurrentLevel(levels.test)} />
            {/* <div className="Hello">
                <img width="200px" alt="icon" src={icon} />
                <button onClick={() => setCurrentLevel(levels.test)}>Click</button>
            </div>
            <h1>electron-react-boilerplate</h1> */}
        </div>
    );
};