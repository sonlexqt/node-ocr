const getOptions = ({ inputFile, language, textcleaner, outputType, outputFile }) => {
  const defaultOptions = {
    language: 'eng',
    textcleaner: false,
    outputType: 'TXT',
  };
  return {
    inputFile,
    language: language || defaultOptions.language,
    textcleaner: textcleaner || defaultOptions.textcleaner,
    outputType: outputType || defaultOptions.outputType,
    outputFile,
  };
};

export default getOptions;
