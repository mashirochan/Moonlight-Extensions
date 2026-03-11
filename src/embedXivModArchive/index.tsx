import { ExtensionWebExports } from "@moonlight-mod/types";

// https://moonlight-mod.github.io/ext-dev/webpack/#webpack-module-insertion
export const webpackModules: ExtensionWebExports["webpackModules"] = {
   embedXivModArchive: {
      dependencies: [
         {
            id: "react"
         }
      ],
      entrypoint: true
   },

   someLibrary: {
      // Keep this object, even if it's empty! It's required for the module to be loaded.
   }
};
