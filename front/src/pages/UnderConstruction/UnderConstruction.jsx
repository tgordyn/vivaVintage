import './UnderConstruction.scss';

const UnderConstruction = () => {
  return (
    <div className="under-construction">
      <img src={'https://www.shutterstock.com/image-vector/under-construction-industrial-sign-vector-600w-333015377.jpg'} alt="Under Construction" className="construction-image" />
      <h1 className="construction-title">Página en construcción</h1>
      <p className="construction-message">¡Pronto estaremos de vuelta!</p>
    </div>
  );
};

export default UnderConstruction;
