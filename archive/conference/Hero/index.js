import React from 'react';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import {addDarkToFileName} from '../../../util/util';
import {SliderButton} from '@typeform/embed-react';
export default function ConferenceHero() {
  const communication = '/conf/codey-surfing-small.png';

  return (
    <div className={styles.center}>
      <div className={styles.mainCard}>
        <div>
            <div className={styles.conferenceText}>Developer Days</div>
          <div className={styles.comingSoonText}>March 7th-9th, 2023</div>
          <div className={styles.descriptionText}>
            The conference for developers on SailPoint platforms.
          </div>
          <SliderButton id="gVCODdMc" className={styles.button}>
            Register today!
          </SliderButton>
        </div>
      </div>
    </div>
  );
}
