'use client';
export function Tabs({labels}:{labels:string[]}){return <div className="tabs">{labels.map((x,i)=><button key={x} className={`tab ${i===0?'active':''}`} onClick={(e)=>{const parent=(e.currentTarget.parentElement);parent?.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));e.currentTarget.classList.add('active')}}>{x}</button>)}</div>}
