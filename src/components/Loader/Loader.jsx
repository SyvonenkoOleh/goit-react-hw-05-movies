import { RotatingTriangles } from 'react-loader-spinner';

import { LoaderOverlay } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderOverlay>
      <RotatingTriangles type="Puff" color="#00BFFF" height={300} width={300} />
    </LoaderOverlay>
  );
};
