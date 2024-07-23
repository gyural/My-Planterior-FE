export const json = {
  "elements": [{
    "name": "username",
    "type": "text",
    "title": "Username",
    "maxLength": 25
  }, {
    "name": "email",
    "type": "text",
    "title": "E-mail address",
    "inputType": "email",
    "placeholder": "foobar@example.com",
    "isRequired": true,
    "autocomplete": "email"
  }, {
    "name": "password",
    "type": "text",
    "title": "Password",
    "description": "Enter 8 characters minimum.",
    "inputType": "password",
    "isRequired": true,
    "autocomplete": "password",
    "validators": [{
      "type": "text",
      "minLength": 8,
      "text": "Your password must be at least 8 characters long."
    }]
  }, {
    "name": "url",
    "type": "text",
    "title": "URL",
    "inputType": "url",
    "placeholder": "https://www.example.com",
    "validators": [{
      "type": "regex",
      "regex": "https://.*",
      "text": "Your answer must match the URL pattern."
    }]
  }],
  "showQuestionNumbers": false
};