
import React from 'react';
import './CustomCard.scss';

class CustomCard extends React.Component {

    render() {
        let data = this.props.data;
        let originalTitle = data.original_title,
            overview = data.overview,
            releaseDate = data.release_date,
            voteAverage = data.vote_average,
            posterIMG = 'https://image.tmdb.org/t/p/w500' + data.poster_path;

        return (

            <div class="wrapperCard">
                <div class="card__img">
                    <img src={posterIMG} height="260" width="173" />
                </div>
                <div class="card__info">
                    <div class="product-text">
                        <span class="card__title">{originalTitle}</span><span className="vote_average">{voteAverage}%</span>
                        <p class="card__subtitle">{releaseDate}</p>
                        <p className="card__description">{overview} </p>
                    </div>
                </div>
            </div>

            /* 
               <article className="articleShort articleMain">
                    <div className="card">
                        <div className="card-image">
                            <a href="#" title="title here">
                                <img src={posterIMG} alt="alt here" />
                            </a>
                        </div>
                        <div className="card-content">
                            <h3 className="card_tittle">{originalTitle}</h3><span className="vote_average">{voteAverage}%</span>
                            <p className="card_date">{releaseDate}</p>
                            <p className="card_overview">{overview} </p>
                        </div>
                    </div>
                </article>
            
            
            */
        );
    }
}
export default CustomCard;