declare module "*.png";
declare module "*.gif";
// declare module "*.gif" {
//   const content: string;
//   export default content;
// }
// declare module "*.png" {
//   const content: string;
//   export default content;
// }
// declare module "*.svg" {
//   import React = require("react");
//   const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
//   export default ReactComponent;
// }

declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: any;
  export default src;
}
