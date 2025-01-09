import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CardComponent({ articolo, onRemove }) {
    const { titolo, immagine, contenuto, categoria, tags, stato, email } = articolo;

    return (
        <div className="card mb-2" style={{ width: "18rem" }}>
            {immagine && (
                <img
                    src={immagine}
                    className="card-img-top"
                    alt={`Immagine di ${titolo}`}
                />
            )}
            <div className="card-body">
                <h5 className="card-title">{titolo}</h5>
                <p className="card-text">{contenuto}</p>
                <p className="card-text">
                    <strong>Categoria:</strong> {categoria}
                </p>
                <p className="card-text">
                    <strong>Tags:</strong>{" "}
                    {Object.keys(tags)
                        .filter((key) => tags[key])
                        .join(", ")}
                </p>
                <p className="card-text">{email}</p>
                <p className="card-text">
                    <strong>Stato:</strong> {stato ? "Pubblicato" : "Bozza"}
                </p>
                <button className="btn btn-danger btn-sm" onClick={onRemove}>
                    Elimina
                </button>
            </div>
        </div>
    );
}
export default function CardListComponent() {
    const [articoli, setArticoli] = useState([]);

    // Chiamata API per ottenere gli articoli
    useEffect(() => {
        axios
            .get("http://localhost:3000/api/post")
            .then((response) => {
                setArticoli(response.data.post); // Imposta gli articoli nello stato
            })
            .catch((error) => {
                console.error("Errore durante il caricamento dei post:", error);
            });
    }, []);
    const handleRemove = (index) => {
        const nuoviArticoli = articoli.filter((_, i) => i !== index);
        setArticoli(nuoviArticoli);
    };
    return (
        <div>
            <h1>Lista Articoli</h1>
            <div className="card-list">
                {articoli.length > 0 ? (
                    articoli.map((articolo, index) => (
                        <CardComponent
                            key={index}
                            articolo={articolo}
                            onRemove={() => handleRemove(index)}
                        />
                    ))
                ) : (
                    <p>Nessun articolo disponibile.</p>
                )}
            </div>
        </div>
    );
}
