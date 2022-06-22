interface IEncodeHTMLRules {
  '&': string;
  '<': string;
  '>': string;
  "'": string;
  '"': string;
}

const encodeHTMLRules: IEncodeHTMLRules = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  "'": '&#39;',
  '"': '&quot;'
  };

const matchHTML = /[&<>'"]/g;

function escapeHTML (str: string): string {
  return str.replace(matchHTML, (substring: string): string => {
    if (encodeHTMLRules[substring as keyof IEncodeHTMLRules]) {
      return encodeHTMLRules[substring as keyof IEncodeHTMLRules];
    }
    return substring;
  });
}

export const filterXss = (inputStr: string): string => escapeHTML(inputStr)