// import { Component } from 'react';

import { IMonster } from '../../App';

import './card.styles.css';

interface ICardProps {
    monster: IMonster;
}

const Card = ({monster}: ICardProps) => {
    const {name, email, id } = monster;

    return (
        <div className='card-container' key={id}>
            <img src={`https://robohash.org/${id}/?set=set2&size=180x180`} alt={`monster ${name}`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
};

// class Card extends Component {
//     render() {
//         const {name, email, id } = this.props.monster;

//         return (
//             <div className='card-container' key={id}>
//                 <img src={`https://robohash.org/${id}/?set=set2&size=180x180`} alt={`monster ${name}`} />
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         )
//     }
// }

export default Card;
