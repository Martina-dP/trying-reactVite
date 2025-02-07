import { useEffect, useState } from 'react';
import { useNavigate, Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSports, } from '../../../actions/indexAction';
import './sports.css';

const Sports = () => {

    const [sports, setSports] = useState("");

    const sportsList = useSelector(state => state.sports);
    const uniqueValues = [...new Set(sportsList)];

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getSports());
        if (sports) {
            navigate(`/${sports}/leagues`);
        }
    }, [dispatch]);

    const handleClick = (valueSport) => {
        console.log(valueSport);
        setSports(valueSport);
    }

    console.log(sports, "soy el deoprte");

    return (
        <div className="sports-container">
            {uniqueValues.map((valueSport, index) => (
                <div key={index} className="sport-card">
                    <Link 
                        to={`/${valueSport}/leagues`}
                        onClick={() => handleClick(valueSport)} 
                        className="sport-card-name"
                    >
                        {valueSport}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Sports;