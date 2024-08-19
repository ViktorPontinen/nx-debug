import { LibAConst } from 'lib-a'

export const LibBComponent = () => {
  return (
    <div>
      <h1>{LibAConst.objectA.name}</h1>
      <img src={LibAConst.objectA.logo} alt={LibAConst.objectA.name} />
    </div>
  );
}
