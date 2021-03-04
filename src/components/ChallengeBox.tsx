import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext)
    const { resetCountdown } = useContext(CountdownContext)

    function handleChallengeSuccess(){
        completeChallenge()
        resetCountdown()
    }

    function handleChallengeFail(){
        resetChallenge()
        resetCountdown()
    }

    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Win {activeChallenge.amount}xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>New Challenge</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button 
                            type="button"
                            className={styles.challengeFailButton}
                            onClick={handleChallengeFail}
                        >
                            Fail
                        </button>
                        <button 
                            type="button"
                            className={styles.challengeSuccessButton}
                            onClick={handleChallengeSuccess}
                        >
                            Success
                        </button>
                    </footer>
                </div>
            ): (
                <div className={styles.challengeNotActive}>
                <strong>Finish a cycle to receive a challenge</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level up" />
                    Complete challenges to advance levels.
                </p>
            </div>
            )}
        </div>
    );
}
