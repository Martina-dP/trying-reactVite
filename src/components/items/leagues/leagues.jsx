import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
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
                    <Link key={index} to={`/${sport}/leagues/${league.strLeague}/teams`}>
                            <p>{league.strLeague}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};
export default Leagues;