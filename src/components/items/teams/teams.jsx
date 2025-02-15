import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getTeams } from '../../../actions/indexAction';
import './teams.css';

const Teams = () => {
    const { league, sport } = useParams();
    const teamsList = useSelector(state => state.teams);

    console.log(teamsList, "teamsList");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTeams(league));
    }, [dispatch]);

    return (
        <div className="teams-container">
            <div>
                <h3>Teams</h3>
            </div>
            <div className="teams-container-list">
                {teamsList.map((team, index) => (
                    <div className="teams-card" key={index}>
                        <Link key={index} to={`/${sport}/leagues/${team.strLeague}/teams/${team.idTeam}/details`}> 
                            <p>{team.strTeam}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Teams;