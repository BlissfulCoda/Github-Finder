declare module "*.png";
declare module "*.gif";
declare module "url:*" {
  export default string;
}

declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}
