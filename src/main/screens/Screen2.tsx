
import { useContext } from "react";
import { ILevelProvider, LevelContext, levels } from "renderer/App";
// import sunny_day from '../../../assets/sounds/morning.mp3';

export const Test = () => {
    const { setCurrentLevel } = useContext(LevelContext) as ILevelProvider
    // const currentSound = new Audio(sunny_day);

    // useEffect(() => {
    //     currentSound.play();
    //     return function cleanup() { currentSound.pause() }
    // }, [currentSound])

    return (
        <div>
            <div className="Hello">
                <button onClick={() => setCurrentLevel(levels.hello)}>Go back</button>
            </div>
            <h1>electron-react-boilerplate</h1>
        </div>
    );
};