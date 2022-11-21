import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import { depositMoney, withdrawMoney } from '../state/action-creators';


export default function Shop() {

  const dispatch = useDispatch() ;
  const actions = bindActionCreators(actionCreators, dispatch) ;

  return (
    <div>
        <h4>Deposit / Withdraw Money</h4>
        {/* <button type="button" className="btn btn-primary mx-2" onClick={() => dispatch(actionCreators.withdrawMoney(100))}> - </button>
        Update Balance
        <button type="button" className="btn btn-primary mx-2" onClick={() =>dispatch(actionCreators.depositMoney(100))}> + </button> */}
        <button type="button" className="btn btn-primary mx-2" onClick={() => actions.withdrawMoney(100)}> - </button>
        Update Balance
        <button type="button" className="btn btn-primary mx-2" onClick={() => actions.depositMoney(100)}> + </button>
    </div>
  )
}
