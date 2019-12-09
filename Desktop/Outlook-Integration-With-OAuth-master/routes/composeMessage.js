var express = require('express');
var router = express.Router();
var authHelper = require('../helpers/auth');
var graph = require('@microsoft/microsoft-graph-client');
require('isomorphic-fetch');

router.post('/', async function (req, res, next) {

  let toEmails=req.body.to;
  let emailSubject = req.body.subject;
  let emailBody = req.body.message;

  let multipleEmails=toEmails.split(',');
  let recipientData=[];

  if(multipleEmails && multipleEmails.length>0)
  {
    multipleEmails.forEach(ele => {
        ele=ele.trim();
        if(ele)
        {
          recipientData.push({
            "EmailAddress":{
              "Address":ele
            }
          })
        }
    });    
  
  }

  const accessToken = await authHelper.getAccessToken(req.cookies, res);
  const userName = req.cookies.graph_user_name;

  let parms = { title: 'Inbox', active: { inbox: true } };
  if (accessToken && userName) {
    parms.user = userName;

    // Initialize Graph client
    const client = graph.Client.init({
      authProvider: (done) => {
        done(null, accessToken);
      }
    });

    try {
      let mailOptions = {
        "Message": {
          "Subject": emailSubject,
          "Body":
          {
            "ContentType": "Text",
            "Content": emailBody
          },
          "ToRecipients": recipientData,
          "Attachments": [
            {
              "@odata.type": "#Microsoft.OutlookServices.FileAttachment",
              "Name": "attachment.txt",
              "ContentBytes": "bWFjIGFuZCBjaGVlc2UgdG9kYXk="
            }
          ]
        },
        "SaveToSentItems": "true"
      };
      try {
        let response = await client.api("/me/sendMail").post(mailOptions, (err, res) => {
          console.log("Message Sent -- " + res);
        });
      } catch (error) {
        throw error;
      }

    } catch (err) {
      console.log("Error Occured -- ", err)
      parms.message = 'Error retrieving messages';
      parms.error = { status: `${err.code}: ${err.message}` };
      parms.debug = JSON.stringify(err.body, null, 2);
      res.render('error', parms);
    }

    res.send("Done")

  } else {
    // Redirect to home
    res.redirect('/');
  }

});

module.exports = router;