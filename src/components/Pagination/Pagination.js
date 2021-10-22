import React from 'react'
import './Pagination.css'
import { useState, useEffect} from 'react'

const Pagination =({totalPage}) =>{
    const [pages, setPages] = useState([])
    
    useEffect(() => {
        let temp = []
        for(let i = 1;i <= totalPage; i++ ) temp.push(i)
        console.log(temp)
        setPages(temp)
    }, [])
    return (
        <nav>
            <ul className="pagination">
                  {
                      pages.map((page) => (
                          <li key={page}><a>{page}</a></li>
                      ))
                  }
            </ul>
        </nav>
    )
}

export default Pagination
