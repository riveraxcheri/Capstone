import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';


const Transactions = () => {
    const [user, token] = useAuth();

    return ( 
        <ul className="transaction-page">
            <h3>Transaction History</h3>
            <p>{user.username}</p>
            <div className="student-carts">
                <button> Get Active Cart </button>
                <button> Get Past Transactions </button>

            </div>
        </ul>
     );
}
 
export default Transactions;