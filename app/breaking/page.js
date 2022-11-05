'use client';

import '../../styles/globals.css'
import styles from './breaking.module.css';
import Link from 'next/link'

export default function Page() {
  return (
    <div className={styles.component}>
      <div>BREAKING</div>
      <div>
        <Link href="/second">navigate to second</Link>
      </div>
    </div>
  );
}