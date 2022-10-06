import "./chart.css";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function Chart({title, data, dataKey}) {

  return (
	<div className='chart'>
		<h3 className="chartTitle">{title}</h3>
		<ResponsiveContainer width="100%" aspect={4/1}>
			<AreaChart data={data}>
				<XAxis dataKey="name" stroke="grey"/>
				<Tooltip />
				<Area type="monotone" dataKey={dataKey} stroke="#8884d8" fill="#8884d8" />
			</AreaChart>
		</ResponsiveContainer>
	</div>
  )
}

export default Chart