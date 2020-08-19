Blockly.defineBlocksWithJsonArray(
[{
  "type": "http_request",
  "message0": "HTTP Request %1 Method: %2 %3 URL: %4 Data: %5 Header: %6",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "method",
      "options": [
        [
          "GET",
          "GET"
        ],
        [
          "POST",
          "POST"
        ],
        [
          "PUT",
          "PUT"
        ],
        [
          "PATCH",
          "PATCH"
        ],
        [
          "DELETE",
          "DELETE"
        ],
        [
          "HEAD",
          "HEAD"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "url",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "data"
    },
    {
      "type": "input_value",
      "name": "header",
      "check": "Array"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2ECC71",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "http_get_status_code",
  "message0": "HTTP get response status code",
  "inputsInline": false,
  "output": "Number",
  "colour": "#2ECC71",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "http_get_data_text",
  "message0": "HTTP get response data as text",
  "inputsInline": false,
  "output": "String",
  "colour": "#2ECC71",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "http_get_data_number",
  "message0": "HTTP get response data as number",
  "inputsInline": false,
  "output": "Number",
  "colour": "#2ECC71",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "http_is_ok",
  "message0": "HTTP response is OK ?",
  "inputsInline": false,
  "output": [
    "Number",
    "Boolean"
  ],
  "colour": "#2ECC71",
  "tooltip": "",
  "helpUrl": ""
}]
);
