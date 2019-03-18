import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
    wrapperCard: {
        height: '239px',
        width: '386px',
        margin: '50px auto',
        backgroundColor: '#2B2C3B',
        margin: '8px'
    },
    card__text: {
        height: '300px',
        width: '200px',
        textAlign: 'left'
    },
    card__img: {
        float: 'left',
        height: '260px',
        width: '173px',
    },
    vote_average: {
        color: '#64D899',
        borderBottom: '1.5px solid #64D899',
        float: 'right',
        fontSize: '10px'
    },
    card__subtitle: {
        color: '#BBB',
        fontFamily: 'Roboto',
        fontSize: '12px',
        fontWeight: '300',
        lineHeight: '14px',
        textAlign: 'left',
        margin: '0 0 0 26px'
    },
    card__info: {
        float: 'left',
        height: '260px',
        width: '202px'
    },
    card__title: {
        color: '#FFF',
        fontSize: '20px',
        lineHeight: '28px'
    },
    card__description: {
        height: '120px',
        margin: '17px 0 0 26px',
        textAlign: 'left',
        color: '#8d8d8d',
        lineHeight: '1.7em',
        fontSize: '15px',
        fontWeight: 'lighter',
        overflow: 'hidden'
    }
});