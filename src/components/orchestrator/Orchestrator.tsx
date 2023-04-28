import * as lunatic from "@inseefr/lunatic";
import type {
  LunaticSource,
  ComponentType,
} from "../../typeLunatic/type-source";

import type { LunaticData } from "../../typeLunatic/type-data";

export type OrchestratorProps = {
  source?: LunaticSource;
  data?: LunaticData;
};

export function Orchestrator({ source, data }: OrchestratorProps) {
  const { getComponents } = lunatic.useLunatic(source, data, {});
  const components = getComponents();

  return (
    <div className="container">
      {components.map(function (component: ComponentType) {
        const Component = lunatic[component.componentType];
        return <Component key={component.id} {...component} />;
      })}
    </div>
  );
}
