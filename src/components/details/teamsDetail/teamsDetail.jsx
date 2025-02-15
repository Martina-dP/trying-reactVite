import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTeams } from '../../../actions/indexAction';

const TeamsDetail = () => {
    const { id, league } = useParams();
    const teamsList = useSelector(state => state.teams);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTeams(league));
    }, [dispatch]);

    const filteredById = teamsList.filter(t => t.idTeam === id);

    console.log(filteredById, "filteredById");

    return (
        <div>
            <img src={filteredById[0].strLogo} alt="team logo" />
            <h1>Teams Detail</h1>
            <p>Nombre del equipo : {filteredById[0].strTeamShort}</p>
            <p>abreviacion del nombre : {filteredById[0].strTeam}</p>
            <p>Año de fundacion : {filteredById[0].intFormedYear}</p>
            <p>Pais de origen : {filteredById[0].strCountry}</p>
            <p>Nombre del estadio : {filteredById[0].strStadium}</p>
            <p>Capacidad del estadio : {filteredById[0].intStadiumCapacity}</p>
            <p>Sito web : {filteredById[0].strWebsite}</p>
            <p>Descripcion : {filteredById[0].strDescriptionEN}</p>
        </div>
    );
};

export default TeamsDetail;