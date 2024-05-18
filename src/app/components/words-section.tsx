import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
    const words = ["selling", "protea", "and", "fynbos"];
  
    return (
      <div className="h-[20rem] flex justify-center items-center px-4">
        <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          Florist <FlipWords words={words} /> <br />
          fresh flowers every day
        </div>
      </div>
    );
  }
  