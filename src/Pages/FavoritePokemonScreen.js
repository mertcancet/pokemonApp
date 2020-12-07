import React from 'react';
import ScreenLayout from '../Components/ScreenLayout';
import { useSelector } from 'react-redux';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import FavPokemon from '../Components/FavPokemon';
import { LinkContainer } from 'react-router-bootstrap';

const FavoritePokemonScreen = () => {
  const catchedPokemons = useSelector((state) => state.catchedPokemon);
  const favPokemons = useSelector((state) => state.favPokemon);
  console.log(favPokemons);
  console.log({ catchedPokemons });
  return (
    <ScreenLayout>
      {favPokemons.length === 0 ? (
        <h1>Fav pokemon yok</h1>
      ) : (
        <Container>
          <h1>Favorites Pokemons</h1>
          <Row className='m-2'>
            {favPokemons.map((favPokemon) => (
              <div>
                {catchedPokemons.map(
                  (catchPokemon) =>
                    catchPokemon.pokemonId === favPokemon.favPokemonId && (
                      <Col
                        xs={12}
                        md={6}
                        lg={4}
                        key={catchPokemon.pokemonId}
                        className='mt-3 '
                      >
                        <Card
                          style={{
                            width: '18rem',
                            height: '31rem',
                            backgroundImage: 'url(/images/background2.png)',
                          }}
                          className='homescreen-card'
                        >
                          <div>
                            <h1 className=' text-white text-center my-3 text-dark'>
                              {catchPokemon.pokemon.name}
                            </h1>
                            <Card.Img
                              variant='top'
                              src={`https://pokeres.bastionbot.org/images/pokemon/${catchPokemon.pokemonId}.png`}
                            />
                            <FavPokemon pokeId={catchPokemon.pokemonId} />
                          </div>

                          <Card.Body>
                            <div className='text-center '>
                              <LinkContainer
                                to={`/details/${catchPokemon.pokemonId}`}
                              >
                                <Button size='lg'>More Info</Button>
                              </LinkContainer>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    )
                )}
              </div>
            ))}
          </Row>
        </Container>
      )}
    </ScreenLayout>
  );
};

export default FavoritePokemonScreen;