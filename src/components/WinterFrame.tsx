import { asset } from '../site';

export default function WinterFrame() {
  return (
    <img
      src={asset('images/lobby-concert-banner.jpg?v=3')}
      alt=""
      className="pointer-events-none block w-full h-56 object-cover object-top select-none sm:h-auto sm:object-fill"
    />
  );
}
