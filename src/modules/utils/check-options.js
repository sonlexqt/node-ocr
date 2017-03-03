import { ensure, oneOf } from 'simplecheck';

const checkOptions = ({ input, language, textcleaner, outputType, outputFile }) => {
  ensure(input, String);
  ensure(language, String);
  ensure(textcleaner, oneOf(true, false, undefined, null));
  ensure(outputType, String);
  ensure(outputType.toLowerCase(), oneOf('text', 'pdf'));
  ensure(outputFile, String);
  return true;
};

export default checkOptions;