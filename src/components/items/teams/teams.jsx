import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTeams } from '../../../actions/indexAction';

const Teams = () => {
    const { league } = useParams();
    const teamsList = useSelector(state => state.teams);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTeams(league));
    }, [dispatch]);

    console.log(teamsList, "soy lista de equipos");

    return (
        <div>
            {teamsList.map(team => (
                <div key={team.idTeam}>
                    <h3>{team.strTeam}</h3>
                    <p>{team.strDescriptionEN}</p>
                </div>
            ))}
        </div>
    );
};

export default Teams;