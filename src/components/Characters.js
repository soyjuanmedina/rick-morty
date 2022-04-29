import { useState } from 'react';

export default function Characters(props) {
  const { characters, setCharacters, reqCharacters, info } = props;
  const [character, setCharacter] = useState(null);
  const resetCharacters = () => {
    setCharacter(null);
  };
  const returnHome = () => {
    setCharacters(null);
  };
  const reqCharacter = (character) => {
    setCharacter(character);
  }
  return (
    <>
      {character ?
        <>
          <h1>{character.name}</h1>


          <div className="character-container">
            <div>
              <img src={character.image} alt={character.name} />
            </div>
            <div>
              <h3></h3>
              <h6>{character.status === "Alive" ? (
                <>
                  <span className="alive" />
                  Alive
                </>
              ) : (
                <>
                  <span className="dead" />
                  Dead
                </>
              )}</h6>
              <p>
                <span className="text-grey">
                  Creado: {new Intl.DateTimeFormat('es-ES').format(new Date(character.created))}
                </span>
              </p>
              <p>
                <span className="text-grey">
                  Género: {character.gender}
                </span>
              </p>
              <p>
                <span className="text-grey">
                  Localización: {character.location.name}
                </span>
              </p>
              <p>
                <span className="text-grey">
                  Origen: {character.origin.name}
                </span>
              </p>
              <p>
                <span className="text-grey">
                  Episodios: {character.episode.length}
                </span>
              </p>
              <p>
                <span className="text-grey">
                  Especie: {character.species}
                </span>
              </p>
              <p>
                <button type="button" class="btn btn-info" onClick={() => resetCharacters()}>Volver</button>
              </p>
            </div>
          </div>
        </>
        :



        <div className="characters">
          <h1>Personajes</h1>
          <div class="container">
            <div class="row">
              <div class="col">
                {info.prev ? <span onClick={() => reqCharacters(info.prev)} className="back-home">Anterior</span> : <span></span>}

              </div>
              <div class="col">
                <span className="back-home" onClick={returnHome}>Volver a la home</span>
              </div>
              <div class="col">
                <span onClick={() => reqCharacters(info.next)} className="back-home">Siguiente</span>
              </div>
            </div>
          </div>
          <div className="container-characters">
            {
              characters.map((character, index) =>
                <div className="character-container" key={index}>
                  <div>
                    <img src={character.image} alt={character.name} />
                  </div>
                  <div>
                    <h3>{character.name}</h3>
                    <h6>{character.status === "Alive" ? (
                      <>
                        <span className="alive" />
                        Alive
                      </>
                    ) : (
                      <>
                        <span className="dead" />
                        Dead
                      </>
                    )}</h6>
                    <p>
                      <span className="text-grey">
                        Episodios: {character.episode.length}
                      </span>
                    </p>
                    <p>
                      <span className="text-grey">
                        Especie: {character.species}
                      </span>
                    </p>
                    <p>
                      <button type="button" class="btn btn-info" onClick={() => reqCharacter(character)}>Más información</button>
                    </p>
                  </div>
                </div>
              )
            }
          </div>

          <div class="container">
            <div class="row">
              <div class="col">
                {info.prev ? <span onClick={() => reqCharacters(info.prev)} className="back-home">Anterior</span> : <span></span>}

              </div>
              <div class="col">
                <span className="back-home" onClick={returnHome}>Volver a la home</span>
              </div>
              <div class="col">
                <span onClick={() => reqCharacters(info.next)} className="back-home">Siguiente</span>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )

}