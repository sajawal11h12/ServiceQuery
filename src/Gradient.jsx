import gradient from '../src/assets/images/gradient.png'

export const Gradient = () => {
  return (
    <div className="absolute top-[18.25rem] -left-[30.375rem] w-[600px] opacity-60 mix-blend-color-dodge pointer-events-none">
      <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
        <img
          className="w-full"
          src={gradient}
          width={100}
          height={942}
          alt="Gradient"
        />
      </div>
    </div>
  );
};