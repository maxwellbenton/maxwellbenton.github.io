import GnomeChat from "../../experiments/GnomeChat";
import { Experiment } from "../../types";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "gc-gnome": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & { gnome?: string; facing?: string };
      "gc-chest": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & { opened?: boolean; closed?: boolean };
      "gc-mushroom": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

function Chest({ opened, closed }: { opened?: boolean; closed?: boolean }) {
  return (
    <>
      {opened && <gc-chest opened></gc-chest>}
      {closed && <gc-chest closed></gc-chest>}
    </>
  );
}

export default function SecretSection({
  addExperiment,
  experiments,
}: {
  addExperiment: ({ experiment }: { experiment: Experiment }) => void;
  experiments: Experiment[];
}) {
  return (
    <>
      <div
        onClick={() =>
          addExperiment({
            experiment: { id: crypto.randomUUID(), name: "secret" },
          })
        }
        className="hidden flex flex-col justify-center items-center sm:hidden md:block lg:hidden md:mt-24 text-gray-300 hover:cursor-pointer hover:font-bold"
      >
        {experiments?.find((exp) => exp.name === "secret") ? (
          <Chest opened></Chest>
        ) : (
          <Chest closed></Chest>
        )}
        {experiments?.find((exp) => exp.name === "secret")
          ? "Secrets activated!"
          : "Activate secrets"}
      </div>
      {experiments?.find((exp) => exp.name === "secret") && (
        <div className="block sm:block md:hidden flex flex-row justify-center items-center my-2">
          <GnomeChat></GnomeChat>
        </div>
      )}
    </>
  );
}
