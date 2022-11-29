import "./payments.css"

import React from 'react'

export default function Payments() {
  return (
	<div className="payments">
	  <div className="paymentsWrapper">
		<div className="paymentsWrapper">
			<table className="paymentTable" >
					<tr>
						<th>Particular</th>
						<th>Amount</th>
						<th>Query</th>
						<th>Status</th>
					</tr>
					<tr>
						<td>UTME Admission payment</td>
						<td>N2500</td>
						<td><button className="paymentBtn">Pay Now</button></td>
						<td>Pending</td>
					</tr>
			</table>
		</div>
	  </div>
	</div>
  )
}
