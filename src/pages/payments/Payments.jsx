import "./payments.css"

import React from 'react'

export default function Payments() {
  return (
	<div className="payments">
	  <div className="paymentsWrapper">
		<div className="paymentsWrapper">
			<table>
				<thead>
					<th>Payments</th>
					<th>Query</th>
					<th>Status</th>
				</thead>
				<tbody>
					<td>UTME Payment</td>
					<td>Pay Now</td>
					<td>Paid</td>
				</tbody>
			</table>
		</div>
	  </div>
	</div>
  )
}
