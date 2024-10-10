export const H1 = ({ text, className = "" }) => (
  <h1
    className={`text-[36px] font-bold text-black ${className}`}
  >
    {text}
  </h1>
);

export const H2 = ({ text, className = "" }) => (
  <h2
    className={`text-[33px] font-bold leading-[33px]  text-black ${className}`}
  >
    {text}
  </h2>
);

export const H3 = ({ text, className = "" }) => (
  <h3
    className={`text-[30px] font-bold leading-[30px]  text-black ${className}`}
  >
    {text}
  </h3>
);

export const H4 = ({ text, className = "" }) => (
  <h4
    className={`text-[25px] font-bold leading-[25px]  text-black ${className}`}
  >
    {text}
  </h4>
)

export const H5 = ({ text, className = "" }) => (
  <h5
    className={`text-[18px] font-bold leading-[20px] text-black ${className}`}
  >
    {text}
  </h5>
)

export const H6 = ({ text, className = "" }) => (
  <h6
    className={`text-[16px] font-bold leading-[18px] text-black ${className}`}
  >
    {text}
  </h6>
);

export const P = ({ text, className = "" }) => (
  <p className={`text-[14px] leading-[14px] text-gray ${className}`}>{text}</p>
);
