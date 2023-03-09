import "./curentWeather.css";
import Sunny from "../../assets/icons/01d.png";


const currentWeather = () => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">Edmonton</p>
                    <p className="weatherDesc">Sunny</p>
                </div>
                <img src={Sunny} alt="weather" className="weatherIcon" />
            </div>
            <div className="bottom">
                <p className="temperature">18°C</p>
                <div className="details">
                    <div className="parameterRow">
                        <span className="parameterLabel">Details</span>
                    </div>
                    <div className="parameterRow">
                        <span className="parameterLabel">Feels like</span>
                        <span className="parameterValue">22°C</span>
                    </div>
                    <div className="parameterRow">
                        <span className="parameterLabel">Wind</span>
                        <span className="parameterValue">2 m/s</span>
                    </div>
                    <div className="parameterRow">
                        <span className="parameterLabel">Humidity</span>
                        <span className="parameterValue">15</span>
                    </div>
                    <div className="parameterRow">
                        <span className="parameterLabel">Pressure</span>
                        <span className="parameterValue">22 hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default currentWeather;