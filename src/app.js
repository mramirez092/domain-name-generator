var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
var extension = [".com", ".net", ".io", ".es"];

function generateDomain() {
  var domainNames = [];
  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        for (let e = 0; e < extension.length; e++) {
          var domainName = pronoun[p] + adj[a] + noun[n] + extension[e];
          domainNames.push(domainName);
        }
      }
    }
  }
  return domainNames;
}

console.log(generateDomain());
