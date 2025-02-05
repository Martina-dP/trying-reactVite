import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSports } from '../../../actions/indexAction';
import './sports.css';

const Sports = () => {

    const sports = useSelector(state => state.sports);
    const uniqueValues = [...new Set(sports)];

    console.log(uniqueValues);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSports());
    }, [dispatch]);

    return (
        <div className="sports-container">
            {uniqueValues.map((sport, index) => (
                <div key={index} className="sport-card">
                    <h3 className="sport-card-name">{sport}</h3>
                </div>
            ))}
        </div>
    );
};

export default Sports;