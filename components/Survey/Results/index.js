import React from 'react'

import Coin from '../Coin'
import styles from './Results.module.css'

const Results = ({ result, isActive }) => (
  <div className={styles.content}>
    <h1 className={styles.title}>
      {isActive ? 'Thanks for your input' : 'Survey is closed'}
    </h1>
    <h2 className={styles.subtitle}>Here are the results {isActive ? 'so far' : ''}:</h2>

    {Object.values(result)
      .sort((a, b) => b.rate - a.rate)
      .map((t, i) => (
        <Result {...t} index={i} key={t.topicId} />
      ))}
  </div>
)

const Result = ({ name, rate, index }) => (
  <div className={styles.result}>
    <div className={styles.topicName}>
      {index + 1}. {name}
    </div>
    <div className={styles.topicRate}>
      {rate} <Coin />
    </div>
  </div>
)

export default Results
