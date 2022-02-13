import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDataStart } from '../redux/actions'
import SingleTodo from './SingleTodo'

import ReactPaginate from 'react-paginate'

const TodosList = () => {
    const [currentPage, setCurrentPage] = useState(() => 1)
    const {isDataFetching, todos, isError, error} = useSelector(state => state?.todos)

    const dispatch = useDispatch()
    const handlePageClick = (page) => {
        setCurrentPage(page.selected+1)
    }

    useEffect(() => {
        dispatch(fetchDataStart(currentPage))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage])


    if(isError){
        if(error.status === 404){
            return <div>Something went Wrong!</div>
        }else{
            return <div>Server is Down!</div>
        }
    }

    return (
        <div>
            <header>Todos</header>
            <main>
                {
                    isDataFetching? 
                        <div>Loading...!</div>
                        :
                        todos?.data?.map(todo => (
                                <SingleTodo key={todo.id} data={todo} />
                            )
                        )
                }
            </main>
            <footer>
                <ReactPaginate 
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    pageCount={todos.totalPageCount || 0}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination justify-content-center'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}
                    nextLinkClassName={'page-link'}
                    activeClassName={'active'}
                />
            </footer>
        </div>
    )
}

export default TodosList
