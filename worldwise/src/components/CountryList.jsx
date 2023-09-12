import CountryItem from "./CountryItem";
import Spinner from "./Spinner";
import Message from "./Message";
import styles from "./CountryList.module.css";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message message="Starting add your Country" />;

  const countries = cities.reduce((countries, city) => {
    if (countries.map((el) => el.country).includes(city.country)) {
      return [...countries];
    } else {
      return [...countries, { country: city.country, emoji: city.emoji }];
    }
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country, index) => (
        <CountryItem country={country} key={index} />
      ))}
    </ul>
  );
}

export default CountryList;
