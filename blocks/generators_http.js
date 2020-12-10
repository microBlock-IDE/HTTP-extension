Blockly.Python['http_request'] = function(block) {
  var dropdown_method = block.getFieldValue('method');
  var value_url = Blockly.Python.valueToCode(block, 'url', Blockly.Python.ORDER_ATOMIC);
  var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
  var value_header = Blockly.Python.valueToCode(block, 'header', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_urequests'] = 'import urequests';

  var code = `http_response = urequests.request("${dropdown_method}", ${value_url}, ${value_data}, None, ${value_header})\n`;
  return code;
};

Blockly.Python['http_get_status_code'] = function(block) {
  var code = 'http_response.status_code';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['http_get_data_text'] = function(block) {
  var code = 'http_response.text';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['http_get_data_number'] = function(block) {
  var code = 'float(http_response.text)';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['http_is_ok'] = function(block) {
  var code = '(True if http_response.status_code == 200 else False)';
  return [code, Blockly.Python.ORDER_NONE];
};
