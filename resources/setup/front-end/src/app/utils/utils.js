// front-end/src/app/utils/utils.js
export function parseUrl() {
    // ... parseUrl implementation
    var url = window.location;
    var query = url.href.split("?")[1] || "";
    var delimiter = "&";
    var result = {};

    var parts = query.split(delimiter);
    // Done Step 3.3: Use Array.map() & Array.reduce()
    return parts
      .map(item => item.split("="))
      .reduce((acc, cur) => {
          acc[cur[0]] = cur[1]
          return acc
      }, {});
  }

 