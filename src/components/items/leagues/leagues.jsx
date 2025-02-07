import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getLeagues } from '../../../actions/indexAction';

const Leagues = () => {
    const { sport } = useParams();
    const leaguesList = useSelector(state => state.leagues);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLeagues());
    }, [dispatch]);

    const filteredLeagues = leaguesList.filter(league => league.strSport === sport);

    return (
        <div className="sports-container">
            <p>{sport} leagues</p>
            {filteredLeagues.map((league, index) => (
                <div key={index} className="sport-card">
                    <p>{league.strLeague}</p>
                </div>
            ))}
        </div>
    );
};
export default Leagues;