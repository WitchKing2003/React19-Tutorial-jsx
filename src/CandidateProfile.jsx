export const CandidateProfile = () => {
    const name = "Peter Parker";
    const role = "Web developer";
    const yearsOfExperience = 5;
    const isAvaiable = true;

    return (
        <>
            <h2>{name}</h2>
            <p>{role} with {yearsOfExperience} years of experience</p>
            <p>Started in {2025 - yearsOfExperience}</p>
            <p>Satus: {isAvaiable ? "Avaiable for hire" : "Not available"}</p>
            <p>Contact: {name.toLocaleLowerCase().replace(" ", ".")}@email.com</p>
        </>
    )
}
