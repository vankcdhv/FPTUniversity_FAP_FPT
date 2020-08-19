const http = require("http");
const https = require("https");
const request = require("request");
const { response } = require("express");
const cheerio = require("cheerio");
const { lstat } = require("fs");

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

          var listTerm = [];
          for (var i = 3; i < 12; i++) {
            listTerm.push($(list[i]).text());
          }
          var listCourse = [];
          for (var i = 13; i < 18; i++) {
            listCourse.push($(list[i]).text());
          }
          console.log(listTerm);
          console.log(listCourse);

          for (var i = 18; i < list.length; i++) {
            console.log(i);
            console.log($(list[i]).text());
          }

          res.render("home", { html: body });
        }
      }
    );
  },
};
