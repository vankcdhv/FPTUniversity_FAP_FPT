const http = require("http");
const https = require("https");
const request = require("request");
const { response } = require("express");
const cheerio = require("cheerio");

module.exports = {
  get: (req, res) => {
    let header = req.headers;

    request(
      {
        headers: header,
        uri:
          "http://fap.fpt.edu.vn/Grade/StudentGrade.aspx?rollNumber=HE130820&term=Summer2020&course=45172",
        method: "GET",
      },
      function (error, response, body) {
        if (error) {
          console.log(error);
        } else {
          $ = cheerio.load(body);
          var list = $(body).find("td");
          var object = {};
          object.title=$(list[20]).text();
          object.mark=$(list[22]).text();

          console.log(object);
          console.log($(list[26]).text());
          res.render("home", { html: body });
        }
      }
    );
  },
};
