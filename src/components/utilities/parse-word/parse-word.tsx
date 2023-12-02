import { Fragment, ReactNode } from "react";

interface ParseWordProps {
  elements: string[] | ReactNode[];
  text: string;
  wordKeys: string[];
}

const ParseWord = ({ elements, text, wordKeys }: ParseWordProps) => {
  const parseWord = (word: string, index: number, lastIndex: number, key: string) => {
    if (wordKeys.includes(word)) {
      const matchWordIndex = wordKeys.indexOf(word);
      return (
        <Fragment key={key}>
          {`${0 === index ? "" : " "}`}
          {elements[matchWordIndex] as ReactNode[]}
        </Fragment>
      );
    }

    return <Fragment key={key}>{`${0 === index || word === "," || word === "." ? "" : " "}${word}`}</Fragment>;
  };

  return (
    <Fragment>
      {text
        .replaceAll(",", " ,")
        .replaceAll(".", " .")
        .split(" ")
        .map((item) => {
          if (item === " ,") {
            return ",";
          } else if (item === " .") {
            return ".";
          } else {
            return item;
          }
        })
        .reduce((previousValue: any[], word, index, wordArray) => [...previousValue, parseWord(word, index, wordArray.length - 1, `${index}-${word}`)], [])}
    </Fragment>
  );
};

ParseWord.displayName = "ParseWord";

export default ParseWord;
