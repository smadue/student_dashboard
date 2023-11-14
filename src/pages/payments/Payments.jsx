import "./payments.css"

import React from 'react'

export default function Payments() {
  return (
	<div className="payments">
	  <div className="paymentsWrapper">
		<div className="paymentsWrapper">
			<div className="homeTop">
			<h2 className="homeTitle">Payment Page</h2>
			<span className="homeWelcome">
				Make Payment | Saturday, 27th Aug. 2022
			</span>
			</div>
			<table className="paymentTable" >
					<tr>
						<th>Payment ID</th>
						<th>Particular</th>
						<th>Amount</th>
						<th>Query</th>
						<th>Status</th>
					</tr>
					<tr>
						<td>023456</td>
						<td>UTME Admission payment</td>
						<td>N2500</td>
						<td><button className="paymentBtn">Pay Now</button></td>
						<td>Pending</td>
					</tr>
					<tr>
						<td>023456</td>
						<td>UTME Admission payment</td>
						<td>N2500</td>
						<td><button className="paymentBtn">Pay Now</button></td>
						<td>Pending</td>
					</tr>
					<tr>
						<td>023456</td>
						<td>UTME Admission payment</td>
						<td>N2500</td>
						<td><button className="paymentBtn">Pay Now</button></td>
						<td>Pending</td>
					</tr>
					<tr>
						<td>023456</td>
						<td>UTME Admission payment</td>
						<td>N2500</td>
						<td><button className="paymentBtn active">Pay Now</button></td>
						<td >Paid</td>
					</tr>
			</table>
		</div>
	  </div>
	</div>
  )
}
