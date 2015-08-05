var fs = require("fs"),
  csv = require("fast-csv"),
  stream = fs.createReadStream("data/alm_export_urls_shtml.csv");

csv
 .fromStream(stream, {headers : ["id", "category", "univ", "firstCrawl", "lastCrawl", "lastHttpStatus", "url", "totalCrawl", "totalView", "firstView", "lastView"], delimiter: ';'})
 .on("data", function(data){
     console.log(data);
 })
 .on("end", function(){
     console.log("done");
 });
