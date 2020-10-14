import React from 'react';

const NewsPending =({newsPending,succsesNewsShow,deletePandingNews,adminLoggedIn})=> {

    const news = newsPending.map(el => {

        const { title, body, date, id } = el

        const adminButton = (
            <div className="btn-group mt-4" role="group" aria-label="Basic example">
                <button onClick={()=>succsesNewsShow(newsPending,id)} type="button" className="btn btn-secondary">Одобрить</button>
                <button onClick={()=>deletePandingNews(id)} type="button" className="btn btn-secondary">Удалить</button>
            </div>
        )
        return (
            <div key={id} className="card border-danger mb-4">
                <div className="card-header border-danger">
                    {title}
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>{body}</p>
                        <footer className="blockquote-footer">{date}</footer>
                        {!adminLoggedIn && <footer className="blockquote-footer">На рассмотрении Администратора</footer>}
                    </blockquote>
                    {adminLoggedIn && adminButton}
                </div>
            </div>
        )
    })
    return(
        <>
            {news}
        </>
    )
}


export default NewsPending;
