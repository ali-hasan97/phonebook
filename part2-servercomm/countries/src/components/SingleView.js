const SingleView = ({ country }) => {
    return (
        <div>
            <h2>{country.name.common}</h2>
            <p>
                capital {country.capital}<br />
                area {country.area}
            </p>
            <p><strong>languages:</strong></p>
            <ul>
                {Object.values(country.languages).map(language => {
                    return (
                        <li key={language}>{language}</li>
                    )
                })}
            </ul>
            <img src={country.flags.svg} alt="country flag" width={500} height={400} />
        </div>
        );    
}

export default SingleView