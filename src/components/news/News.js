import React from 'react';
import { connect } from 'react-redux';

import { filterNews, addNewsPending, getNewsPending,succsesNewsShow, deletePandingNews } from '../../redux/news-reduce';
import AddNewsReduxForm from './AddNews';
import NewsPending from './NewsPending';
import SearchForm from './SearchForm';


const News = ({ showNews,
                filterNews, 
                deletePandingNews, 
                setHandleInput, 
                handleInput, 
                searchShowNews,
                succsesNewsShow, 
                userLoggedIn,
                adminLoggedIn, 
                newsPending,
                getNewsPending }) => {



    const showNewsArr = handleInput ? searchShowNews : showNews

    const listShowNews = showNewsArr.map(el => {
        const { title, body, date, id } = el
        return (
            <div key={id} className="card">
                <div className="card-header">
                    {title}
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>{body}</p>
                        <footer className="blockquote-footer">{date}</footer>
                    </blockquote>
                </div>
            </div>
        )
    })

    const myPedingNews = <NewsPending
         newsPending={newsPending}
         succsesNewsShow={succsesNewsShow}
         deletePandingNews={deletePandingNews}
         adminLoggedIn={adminLoggedIn} />

    const onSubmit = (formData) => {
        getNewsPending(formData)
    }
    const addNews = (userLoggedIn || adminLoggedIn) &&  <AddNewsReduxForm onSubmit={onSubmit} />
    return (
        <>
            {addNews}
            {<SearchForm showNews={showNews} setHandleInput={setHandleInput} filterNews={filterNews} />}
            {userLoggedIn || adminLoggedIn ? myPedingNews : null}
            {listShowNews}
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        userLoggedIn: state.app.userLoggedIn,
        adminLoggedIn: state.app.adminLoggedIn,
        showNews: state.news.showNews,
        searchShowNews: state.news.searchShowNews,
        handleInput: state.news.handleInput,
        newsPending: state.news.newsPending
    }
}

export default connect(mapStateToProps, { filterNews, addNewsPending, getNewsPending, succsesNewsShow, deletePandingNews })(News)