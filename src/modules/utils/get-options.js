const getOptions = ({ input, language, textcleaner, outputType, outputFile }) => {
  const defaultOptions = {
    language: 'eng',
    textcleaner: false,
    outputType: 'TEXT'
  };
  return {
    input,
    language: language || defaultOptions.language,
    textcleaner: textcleaner || defaultOptions.textcleaner,
    outputType: outputType || defaultOptions.outputType,
    outputFile,
  };
};

export default getOptions;
