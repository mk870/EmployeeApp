import React from "react";
import { TailSpin } from "react-loader-spinner";

type Props = {
  color: string
};

const Spinner: React.FC<Props> = ({color}) => {
  return (
    <TailSpin
      visible={true}
      height="20"
      width="20"
      color={color}
      ariaLabel="tail-spin-loading"
      radius={1}
    />
  );
};

export default Spinner;
