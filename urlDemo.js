import url, { fileURLToPath } from 'url';

const urlString = 'http://www.google.com/search?q=hello+world';
// URL object

const urlObj = new URL(urlString);
console.log(urlObj);


// format

console.log(url.format(urlObj));


// import.meta.url - file url
console.log(import.meta.url);

// fileurltopath

console.log(fileURLToPath(import.meta.url));
