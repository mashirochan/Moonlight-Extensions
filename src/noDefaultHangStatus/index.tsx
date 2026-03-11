import { ExtensionWebExports } from "@moonlight-mod/types";

export const patches: ExtensionWebExports["patches"] = [
   {
      find: ".CHILLING)",
      replace: {
         match: /{enableHangStatus:(\i),/,
         replacement: "{_enableHangStatus:$1=false,"
      }
   }
];
