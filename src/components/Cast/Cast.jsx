import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ImSad } from 'react-icons/im';

import { fetchMovie } from '../../Api/fetchAPI';
import {
  CastList,
  CastConteiner,
  CastItem,
  ActorImg,
  ActorImgWrapper,
  ActorDataWrapper,
  NoCastText,
} from './Cast.styled';

const Cast = () => {
  const { id } = useParams();
  const [castList, setCastList] = useState(null);

  useEffect(() => {
    fetchMovie.getMovieCast(id).then(setCastList);
  }, [id]);

  if (!castList) {
    return null;
  }

  return (
    <CastConteiner>
      {castList.length !== 0 ? (
        <CastList>
          {castList.map(el => (
            <CastItem key={el.id}>
              <ActorImgWrapper>
                <ActorImg
                  src={
                    el.profile_path
                      ? `${fetchMovie.BASE_URL}${el.profile_path}`
                      : fetchMovie.defaultImg
                  }
                  alt={el.name}
                />
              </ActorImgWrapper>
              <ActorDataWrapper>
                <h4>{el.name}</h4>
                <p>Character: {el.character}</p>
              </ActorDataWrapper>
            </CastItem>
          ))}
        </CastList>
      ) : (
        <NoCastText>
          {' '}
          No cast info available for this movie <ImSad />
        </NoCastText>
      )}
    </CastConteiner>
  );
};

export default Cast;
