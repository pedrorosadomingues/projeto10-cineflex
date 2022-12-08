export default function Footer({selectedFilm}) {
    console.log(selectedFilm)
    return (
        <>
            <img src={selectedFilm.posterURL} alt={selectedFilm.title} />
            <h1>
                {selectedFilm.title}
            </h1>
            <h2>{selectedFilm.showTime}</h2>
        </>
)}

