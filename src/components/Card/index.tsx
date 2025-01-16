
import './styles.css';
import carImg from '../../assets/car.png';
import Button from '../Button';

export default function Card(){
    return(

        <div className="ct-card">
            <img src={carImg} alt="carro" />
            <h3>Audi Supra TT</h3>
            <p>Lorem jvblalalallalllala</p>
            <Button/>
        </div>

    );
}