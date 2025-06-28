import * as React from "react";

type HomeImageBlobProps = {
  fill: string;
  image: string;
};

export default function HomeImageBlob({ fill, image }: HomeImageBlobProps): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 400 450"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill={fill}
      style={{ margin: 16 }}
    >
      <mask
        id="mask0"
        mask-type="alpha"
      >
        <path
          d="
            M150 0
            L290 87.5
            L290 262.5
            L150 350
            L10 262.5
            L10 87.5
            Z
          "
        />
      </mask>
      <g mask="url(#mask0)">
        <path
          d="
            M150 0
            L290 87.5
            L290 262.5
            L150 350
            L10 262.5
            L10 87.5
            Z
          "
        />
        <image
          x="30"
          y="20"
          href={image}
          width="270"
          height="390"
        />
      </g>
    </svg>
  );
}