
import React from 'react';
import { useStyles } from './style';

function CustomCard() {
    const classes = useStyles();


    /* let data = this.props.data;
     let originalTitle = data.original_title,
         overview = data.overview,
         releaseDate = data.release_date,
         voteAverage = data.vote_average,
         posterIMG = 'https://image.tmdb.org/t/p/w500' + data.poster_path;*/

    return (
        <>
            <p>Test</p>
            <div className={classes.wrapperCard}>
                <div className={classes.card__img}>
                    <img src="https://imagenmix.net/wp-content/uploads/2016/10/frases-cortas.jpg" height="260" width="173" />
                </div>
                <div className={classes.card__info}>
                    <div className={classes.card__text}>
                        <span className={classes.card__title}>originalTitle</span><span className={classes.vote_average}>35%</span>
                        <p className={classes.card__subtitle}>releaseDate</p>
                        <p className={classes.card__description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  </p>
                    </div>
                </div>
            </div>
        </>



        /* <div class="wrapperCard">
             <div class="card__img">
                 <img src="https://imagenmix.net/wp-content/uploads/2016/10/frases-cortas.jpg" height="260" width="173" />
             </div>
             <div class="card__info">
                 <div class="card__text">
                     <span class="card__title">originalTitle</span><span className="vote_average">35%</span>
                     <p class="card__subtitle">releaseDate</p>
                     <p className="card__description">overview </p>
                 </div>
             </div>
         </div>*/
    );

}
export default CustomCard;