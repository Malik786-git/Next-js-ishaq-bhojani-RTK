import React from 'react'
import styles from '../../styles/Product.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from '@/redux/slices/accountSlice';
import { incrementBonus} from '@/redux/slices/bonusSlice';
import { incrementReward } from '@/redux/customReducer/rewardReducer';

const index = () => {
  
  const amount = useSelector(state=> state.account.amount);
  const points = useSelector(state=> state.bonuss.points);
  const reward = useSelector(state=> state.reward.value);
  const dispatch  = useDispatch();


  return (
    <div className={styles.product}>
      <h1>
      Redux toolkit
      </h1>

      <h2>Amount: {amount}</h2>
      <button onClick={()=>dispatch(increment())}>Amount Increment</button>
      <button onClick={()=>dispatch(decrement())}>Amount decrement</button>
      <button onClick={()=>dispatch(incrementByAmount(10))}>Amount add 10</button>
      <br />
      <hr />
      <hr />
      <h2>Bonus Points: {points}</h2>
      <button onClick={()=>dispatch(incrementBonus())}>Bonus Increment</button>
      <br />
      <hr />
      <hr />
      <h2>Reward Points: {reward}</h2>
      <button onClick={()=>dispatch(incrementReward())}>Bonus Increment</button>

    </div>
  )
}

export default index
