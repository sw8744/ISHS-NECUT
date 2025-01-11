import logo from '../../assets/ishs-necut.png';
import './main.css';
import { useNavigate } from 'react-router-dom';

function Main() {
    const navigate = useNavigate();
    const goToSelect = () => {
        navigate("/select");
    };
    return (
        <div>
            <div className='mainRoot' onClick={() => {goToSelect()}}>
                <img src={logo} alt="ISHS NECUT" id='mainLogo' />
                <div id='pressToStart'>화면을 터치해주세요</div>
            </div>
        </div>
    );
}

export default Main;