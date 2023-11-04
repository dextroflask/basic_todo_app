import React, {useState} from "react" ;

export default function Task(props){
	const [status, setStatus] = useState(0) ;
	const [grpclass, setGrpclass] = useState("list-group-item") ;
	const [compstyle, setCompstyle] = useState({}) ;

	const handleClick = (event)=>{
		// console.log("Status after change : "+event.target.value)
		if(status===0){
			setStatus(1) ;
			setCompstyle({textDecoration: "line-through",})
		}
		else{
			setStatus(0) ;
			setCompstyle({textDecoration: "None"})
		}
		// console.log("Status in change : "+event.target.value) ;
	}

	const handleMouseOver = ()=>{
		setGrpclass("list-group-item active") ;
	}

	const handleMouseLeave = ()=>{
		setGrpclass("list-group-item") ;
	}

	let today = new Date() ;
	let year = today.getFullYear() ;
	let month = today.getMonth()+1 ;
	let day = today.getDay() ;
	if(day<10){
		day='0'+day ;
	}
	if(month<10){
		month='0'+month ;
	}
	let date = day+'/'+month+'/'+year ;

	if(props.tag.length===0){
		return (
			props.view &&
		<li className={grpclass} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
			<div className="form-check">
				<input className="form-check-input" type="checkbox" value={status} onClick={handleClick} id="flexCheckDefault"/>
				  <label className="form-check-label" htmlFor="flexCheckDefault">
				    <p style={compstyle}>{props.task}</p>
				  </label>
			</div>
		</li>
		);
	}
	else{
		return (
			props.view &&
		<li className={grpclass} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
		<div class="col-4 justify-content-end">
			<p style={{fontSize:'6'}}>{date}</p>
		</div>
			<div className="form-check">
				<input className="form-check-input" type="checkbox" value={status} onClick={handleClick} id="flexCheckDefault"/>
				  <label className="form-check-label" htmlFor="flexCheckDefault">
				    <p style={compstyle}>{props.task}</p>
				  </label>
			</div>
			<div style={{float:"right"}}>
			<span className="badge badge-pill bg-primary">{props.tag}</span>
			</div>
		</li>
		);
	}
}