import { Link } from "react-router-dom";
import "./Card.scss";

interface CardInterface {
  id: string;
  imgSrc?: string;
  surname: string;
  name: string;
  street: string;
  postCode: string;
  city: string;
  region?: string;
  phoneNumber: string;
}

const Card = ({
  name,
  surname,
  imgSrc,
  phoneNumber,
  postCode,
  street,
  region,
  city,
  id,
}: CardInterface) => {
  return (
    <div className="card__container">
      <Link to={`/clients/${id}`}>
        <div className="card__avatar-container">
          <img src={imgSrc} alt={`Avatar of ${name} ${surname}`} />
        </div>
        <div className="card__data-container">
          <div className="data-name-surname">
            <h1>
              {name} {surname}
            </h1>
          </div>
          <div className="data-address">
            <h2>Address</h2>
            <span>{city}</span>
            <span>{region}</span>
            <div className="address-street-postCode">
              <p>{street}</p>
              <p>{postCode}</p>
            </div>
          </div>
          <div className="data-phoneNumber">
            <p>{phoneNumber}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
