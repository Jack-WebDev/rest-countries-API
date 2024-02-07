type CardProps = {
  imgSrc?: string;
  title: string;
  population: number;
  region: string;
  capital?: string;
};

const Card = ({ imgSrc, title, population, region, capital }: CardProps) => {
  return (
    <div className="card__container">
      <img src={imgSrc} alt={`${title}'s flag`} />
      <div className="card__content">
        <h2>{title}</h2>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
      </div>
    </div>
  );
};

export default Card;
