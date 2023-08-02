
// Utility function to convert an input to URL format
const getUrlFormat = (input, site) => {
    let formattedInput = input;
  
    // Remove leading '@' symbol if present
    if (formattedInput.startsWith('@')) {
      formattedInput = formattedInput.substring(1);
    }
  
    // Check if the input starts with 'http' or 'https', if not, add 'https://'
    if (!formattedInput.startsWith('http') && !formattedInput.startsWith('https')) {
      formattedInput = `https://${site}/${formattedInput}`;
    }
  
    return formattedInput;
  };
  
  export default getUrlFormat