import React,{useState ,useEffect} from 'react'


function IntervalClass() {
    const [count,setCount] = useState(0)


    


    return (
        <div>
            {setCount(count+1)}
        </div>
    )
}

export default IntervalClass
