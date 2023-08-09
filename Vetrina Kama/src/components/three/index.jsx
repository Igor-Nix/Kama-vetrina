import { angleToRadians } from "../../utils/angle";

export default function Three() {
  return (
    <>
      <mesh>
        <sohereGeometry args={[1, 32, 32]} />
      </mesh>

      <ambientLight args={["#ffffff, 1"]} />
    </>
  );
}
