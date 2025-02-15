import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getLeagues } from '../../../actions/indexAction';
import './leagues.css';

const Leagues = () => {

    const { sport } = useParams();
    const leaguesList = useSelector(state => state.leagues);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLeagues());
    }, [dispatch]);

    const filteredLeagues = leaguesList.filter(league => league.strSport === sport);

    console.log(filteredLeagues);

    return (
        <div className="leagues-container">
            <div>
                <p className="leagues-container-title">{sport} leagues</p>
            </div>
            <div className="leagues-container-links">
                {filteredLeagues.map((league, index) => (
                    <div key={index} className="leagues-card">
                        <Link key={index} to={`/${sport}/leagues/${league.strLeague}/teams`}>
                                <p className="leagues-name">{league.strLeague}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Leagues;