import styles from './index.module.scss';
import WarMemberCard from './WarMemberCard';

export function WarDetails() {
  return (
    <div className={styles.warDetails}>
      <div>
        <WarMemberCard
          name="린드버그"
          bestOpponentAttack={{ opponentName: 'Foobar', stars: 2, destructionPercentage: 82.5 }}
          mapPosition={1}
          townhallLever={15}
          opponentAttacks={5}
        />
        <WarMemberCard
          name="린드버그"
          bestOpponentAttack={{ opponentName: 'Foobar', stars: 2, destructionPercentage: 82.5 }}
          mapPosition={1}
          townhallLever={15}
          opponentAttacks={5}
          reverse
        />
      </div>
    </div>
  );
}
