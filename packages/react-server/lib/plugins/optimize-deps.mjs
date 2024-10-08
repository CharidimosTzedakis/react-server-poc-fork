import { moduleAliases } from "../loader/module-alias.mjs";
import { applyAlias } from "../loader/utils.mjs";
import { bareImportRE, isModule, tryStat } from "../utils/module.mjs";

const alias = moduleAliases();

export default function optimizeDeps() {
  return {
    name: "react-server:optimize-deps",
    enforce: "pre",
    async resolveId(specifier, importer, resolveOptions) {
      try {
        const resolved = await this.resolve(
          specifier,
          importer,
          resolveOptions
        );
        const path = resolved?.id?.split("?")[0];
        if (
          this.environment.name === "client" &&
          !this.environment.depsOptimizer?.isOptimizedDepFile(specifier) &&
          path &&
          /\.[cm]?js$/.test(path) &&
          (bareImportRE.test(specifier) ||
            (specifier[0] !== "." && specifier[0] !== "/")) &&
          applyAlias(alias, specifier) === specifier &&
          !isModule(path) &&
          tryStat(path)?.isFile()
        ) {
          try {
            const optimizedInfo =
              this.environment.depsOptimizer.registerMissingImport(
                specifier,
                path
              );
            return {
              id: this.environment.depsOptimizer.getOptimizedDepId(
                optimizedInfo
              ),
            };
          } catch {
            // ignore
          }
        }
        return resolved || { externalize: specifier };
      } catch {
        return { externalize: specifier };
        // ignore
      }
    },
  };
}
