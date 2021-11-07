import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SingleContent from '../../components/SingleContent/SingleContent'
import CustomPagination from '../../components/Pagination/CustomPagination'
import Genres from '../../components/Genres'
import useGenres from '../../Hooks/useGenre'

const TvShows = () => {
    const [page, setPage] = useState(1)
    const [content, setContent] = useState([])
    const [numOfPages, setNumOfPages] = useState()
    const [selectedGenres, setSelectedGenres] = useState([])
    const [genres, setGenres] = useState([])
    const genreforURL  = useGenres(selectedGenres)


    const fetchTvShows = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&page=${page}&with_genres=${genreforURL}`)

        setContent(data.results)
        setNumOfPages(data.total_pages);
    };

    useEffect(() => {
        window.scroll(0,0);
        fetchTvShows()
        // eslint-disable-next-line
    }, [page, genreforURL])



    return (
        <div>
            <span className='pageTitle'>TvShows</span>
            <Genres
            type='tv'
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
            genres={genres}
            setGenres={setGenres}
            setPage={setPage}
            />
            <div className="trending">
                {
                    content && content.map((c) => (<SingleContent
                        key={c.id}
                        id={c.id}
                        poster={c.poster_path}
                        title={c.title || c.name}
                        date={c.first_air_date || c.release_date}
                        media_type="tv"
                        vote_average={c.vote_average} />))
                }
            </div>
            {numOfPages > 1 &&
                (<CustomPagination setPage={setPage} numOfPages={numOfPages} />)
            }

        </div>
    )
}

export default TvShows
