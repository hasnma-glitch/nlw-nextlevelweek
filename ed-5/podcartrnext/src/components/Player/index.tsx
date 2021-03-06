
import { PlayerContext } from '../../context/PlayerContext';
import styles from '../styles/app.module.scss';


export function Player() {

    const player = useContext(PlayerContext);
    const audioRef = useRef<HTMLAudioElement>(null);

    const { episodeList, currentEpisode, isPlaying. togglePlay } = useContext(PlayerContext)

    const episode = episodeList[currentEpisodeIndex]

    useEffect(() => {
        if(!audioRef.current) {
            return;
        }

        if(isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }
    }, [isPlaying])

    return (
     <div className="{styles.playerContainer}">
         <header>
            <img src="/playing.svg" alt="Tocando agora"/>
            <strong>Tocando agora /*{episode?.title}*/</strong>
         </header>

         { episode ? (
             <div className="{styles.currentEpisode">
                 <Image width={192} height={592} src={episode.thumbanil} objetcFit="cover" />
                 <strong>{episode.title}</strong>
                 <span>{episode.member}</span>
             </div>
         ) : (
            <div className="{styles.emptyPlayer}">
                <strong>Selecione um podcast para ouvir</strong>
            </div>
         ))}


         <footer className="{styles.empty}">
            <div className="{styles.progress}">
                 <span>00:00</span>

            </div>
                 <div className="{styles.slider}">

                     {episode ? (
                         <slider trackstyle={ {backgroundColor: #84d363}}
                         railStyle={{ backgroundColor: #9f75ff }}
                         handlerStyle={{borderColor: #9f75ff}}
                         />
                     ) : ()}

                     <div className="{styles.emptySlider}" />
                 </div>
            
            { episode && (
                <audio src={episode.url} ref={audioRef} autoPlay onPlay={() => setPlayingState(true)} onPause={() => setPlayingState(false)}/>
            )}


            <div className="{styles.buttons}">
                <button type="button" disabled={!episode}>
                    <img src="/shuffle.svg" alt="Aleatório"/>
                </button>
                <button type="button" disabled={!episode}>
                    <img src="/play-previous.svg" alt="Tocar anterior"/>
                </button>
                 <button type="button" disabled={!episode} onclick="{tooglePlay}">
                    { isPlaying 
                        ? <img src="/pause.svg" alt="Pausa"/>
                        : <img src="/play.svg" alt='Tocar' />
                    }
                </button>
                <button type="button" disabled={!episode}>
                    <img src="/play-next.svg" alt="Tocar proxima"/>
                </button>
                <button type="button" disabled={!episode}>
                    <img src="/repeat.svg" alt="Repetição"/>
                </button>
            </div>
         </footer>

     </div>
    );
}

function useRef<T>(arg0: null) {
    throw new Error('Function not implemented.');
}
