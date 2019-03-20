
import React from 'react';
import { useStyles } from './style';

const CustomCard = (props) => {
    console.log(props)
    const classes = useStyles();
    debugger
    //let data = props.data;
    /* let originalTitle = data.original_title,
        overview = data.overview,
        releaseDate = data.release_date,
        voteAverage = data.vote_average,
        posterIMG = poster_path + data.poster_path;*/
    if (props.poster_path) {
        return (
            <>
                <div className={classes.wrapperCard}>
                    <div >
                        <img className={classes.card__img} src={'https://image.tmdb.org/t/p/w500' + props.poster_path} alt="alt here" />
                    </div>
                    <div className={classes.card__info}>
                        <div className={classes.card__text}>
                            <span className={classes.card__title}>{props.title}</span><span className={classes.vote_average}>{props.vote_average}%</span>
                            <p className={classes.card__subtitle}>{props.release_date}</p>
                            <p className={classes.card__description}>{props.overview}</p>
                        </div>
                    </div>
                </div>
            </>
        );

    }else{
        return (<></>)
    }


}
export default CustomCard;