// source: did_document_format.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

goog.exportSymbol('proto.document.Document', null, global);
goog.exportSymbol('proto.document.Service', null, global);
goog.exportSymbol('proto.document.Signature', null, global);
goog.exportSymbol('proto.document.VerificationMethod', null, global);
goog.exportSymbol('proto.document.VerificationType', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.document.VerificationMethod = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.document.VerificationMethod, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.document.VerificationMethod.displayName = 'proto.document.VerificationMethod';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.document.Signature = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.document.Signature, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.document.Signature.displayName = 'proto.document.Signature';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.document.Service = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.document.Service, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.document.Service.displayName = 'proto.document.Service';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.document.Document = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.document.Document.repeatedFields_, null);
};
goog.inherits(proto.document.Document, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.document.Document.displayName = 'proto.document.Document';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.document.VerificationMethod.prototype.toObject = function(opt_includeInstance) {
  return proto.document.VerificationMethod.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.document.VerificationMethod} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.document.VerificationMethod.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, undefined),
    type: jspb.Message.getFieldWithDefault(msg, 2, undefined),
    controller: jspb.Message.getFieldWithDefault(msg, 3, undefined),
    publicKeyMultibase: jspb.Message.getFieldWithDefault(msg, 4, undefined)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.document.VerificationMethod}
 */
proto.document.VerificationMethod.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.document.VerificationMethod;
  return proto.document.VerificationMethod.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.document.VerificationMethod} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.document.VerificationMethod}
 */
proto.document.VerificationMethod.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setController(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublicKeyMultibase(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.document.VerificationMethod.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.document.VerificationMethod.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.document.VerificationMethod} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.document.VerificationMethod.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getController();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPublicKeyMultibase();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.document.VerificationMethod.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, undefined));
};


/**
 * @param {string} value
 * @return {!proto.document.VerificationMethod} returns this
 */
proto.document.VerificationMethod.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.document.VerificationMethod.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, undefined));
};


/**
 * @param {string} value
 * @return {!proto.document.VerificationMethod} returns this
 */
proto.document.VerificationMethod.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string controller = 3;
 * @return {string}
 */
proto.document.VerificationMethod.prototype.getController = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, undefined));
};


/**
 * @param {string} value
 * @return {!proto.document.VerificationMethod} returns this
 */
proto.document.VerificationMethod.prototype.setController = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string public_key_multibase = 4;
 * @return {string}
 */
proto.document.VerificationMethod.prototype.getPublicKeyMultibase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, undefined));
};


/**
 * @param {string} value
 * @return {!proto.document.VerificationMethod} returns this
 */
proto.document.VerificationMethod.prototype.setPublicKeyMultibase = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.document.Signature.prototype.toObject = function(opt_includeInstance) {
  return proto.document.Signature.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.document.Signature} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.document.Signature.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, undefined),
    issuer: jspb.Message.getFieldWithDefault(msg, 2, undefined),
    hash: jspb.Message.getFieldWithDefault(msg, 3, undefined)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.document.Signature}
 */
proto.document.Signature.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.document.Signature;
  return proto.document.Signature.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.document.Signature} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.document.Signature}
 */
proto.document.Signature.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIssuer(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setHash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.document.Signature.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.document.Signature.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.document.Signature} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.document.Signature.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIssuer();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.document.Signature.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, undefined));
};


/**
 * @param {string} value
 * @return {!proto.document.Signature} returns this
 */
proto.document.Signature.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string issuer = 2;
 * @return {string}
 */
proto.document.Signature.prototype.getIssuer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, undefined));
};


/**
 * @param {string} value
 * @return {!proto.document.Signature} returns this
 */
proto.document.Signature.prototype.setIssuer = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string hash = 3;
 * @return {string}
 */
proto.document.Signature.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, undefined));
};


/**
 * @param {string} value
 * @return {!proto.document.Signature} returns this
 */
proto.document.Signature.prototype.setHash = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.document.Service.prototype.toObject = function(opt_includeInstance) {
  return proto.document.Service.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.document.Service} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.document.Service.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, undefined),
    type: jspb.Message.getFieldWithDefault(msg, 2, undefined),
    serviceEndpoint: jspb.Message.getFieldWithDefault(msg, 3, undefined),
    data: jspb.Message.getFieldWithDefault(msg, 4, undefined)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.document.Service}
 */
proto.document.Service.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.document.Service;
  return proto.document.Service.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.document.Service} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.document.Service}
 */
proto.document.Service.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceEndpoint(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.document.Service.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.document.Service.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.document.Service} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.document.Service.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.document.Service.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, undefined));
};


/**
 * @param {string} value
 * @return {!proto.document.Service} returns this
 */
proto.document.Service.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.document.Service.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, undefined));
};


/**
 * @param {string} value
 * @return {!proto.document.Service} returns this
 */
proto.document.Service.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string service_endpoint = 3;
 * @return {string}
 */
proto.document.Service.prototype.getServiceEndpoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, undefined));
};


/**
 * @param {string} value
 * @return {!proto.document.Service} returns this
 */
proto.document.Service.prototype.setServiceEndpoint = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.document.Service} returns this
 */
proto.document.Service.prototype.clearServiceEndpoint = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.document.Service.prototype.hasServiceEndpoint = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string data = 4;
 * @return {string}
 */
proto.document.Service.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, undefined));
};


/**
 * @param {string} value
 * @return {!proto.document.Service} returns this
 */
proto.document.Service.prototype.setData = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.document.Service} returns this
 */
proto.document.Service.prototype.clearData = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.document.Service.prototype.hasData = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.document.Document.repeatedFields_ = [3,5,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.document.Document.prototype.toObject = function(opt_includeInstance) {
  return proto.document.Document.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.document.Document} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.document.Document.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, undefined),
    controller: jspb.Message.getFieldWithDefault(msg, 2, undefined),
    verificationMethods: jspb.Message.toObjectList(msg.getVerificationMethods(),
    proto.document.VerificationMethod.toObject, includeInstance),
    signature: (f = msg.getSignature()) && proto.document.Signature.toObject(includeInstance, f),
    services: jspb.Message.toObjectList(msg.getServices(),
    proto.document.Service.toObject, includeInstance),
    authentications: (f = jspb.Message.getRepeatedField(msg, 6, undefined)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.document.Document}
 */
proto.document.Document.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.document.Document;
  return proto.document.Document.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.document.Document} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.document.Document}
 */
proto.document.Document.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setController(value);
      break;
    case 3:
      var value = new proto.document.VerificationMethod;
      reader.readMessage(value,proto.document.VerificationMethod.deserializeBinaryFromReader);
      msg.addVerificationMethods(value);
      break;
    case 4:
      var value = new proto.document.Signature;
      reader.readMessage(value,proto.document.Signature.deserializeBinaryFromReader);
      msg.setSignature(value);
      break;
    case 5:
      var value = new proto.document.Service;
      reader.readMessage(value,proto.document.Service.deserializeBinaryFromReader);
      msg.addServices(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addAuthentications(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.document.Document.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.document.Document.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.document.Document} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.document.Document.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getController();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVerificationMethods();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.document.VerificationMethod.serializeBinaryToWriter
    );
  }
  f = message.getSignature();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.document.Signature.serializeBinaryToWriter
    );
  }
  f = message.getServices();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.document.Service.serializeBinaryToWriter
    );
  }
  f = message.getAuthentications();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.document.Document.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, undefined));
};


/**
 * @param {string} value
 * @return {!proto.document.Document} returns this
 */
proto.document.Document.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string controller = 2;
 * @return {string}
 */
proto.document.Document.prototype.getController = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, undefined));
};


/**
 * @param {string} value
 * @return {!proto.document.Document} returns this
 */
proto.document.Document.prototype.setController = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated VerificationMethod verification_methods = 3;
 * @return {!Array<!proto.document.VerificationMethod>}
 */
proto.document.Document.prototype.getVerificationMethods = function() {
  return /** @type{!Array<!proto.document.VerificationMethod>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.document.VerificationMethod, 3));
};


/**
 * @param {!Array<!proto.document.VerificationMethod>} value
 * @return {!proto.document.Document} returns this
*/
proto.document.Document.prototype.setVerificationMethods = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.document.VerificationMethod=} opt_value
 * @param {number=} opt_index
 * @return {!proto.document.VerificationMethod}
 */
proto.document.Document.prototype.addVerificationMethods = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.document.VerificationMethod, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.document.Document} returns this
 */
proto.document.Document.prototype.clearVerificationMethods = function() {
  return this.setVerificationMethods([]);
};


/**
 * optional Signature signature = 4;
 * @return {?proto.document.Signature}
 */
proto.document.Document.prototype.getSignature = function() {
  return /** @type{?proto.document.Signature} */ (
    jspb.Message.getWrapperField(this, proto.document.Signature, 4));
};


/**
 * @param {?proto.document.Signature|undefined} value
 * @return {!proto.document.Document} returns this
*/
proto.document.Document.prototype.setSignature = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.document.Document} returns this
 */
proto.document.Document.prototype.clearSignature = function() {
  return this.setSignature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.document.Document.prototype.hasSignature = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated Service services = 5;
 * @return {!Array<!proto.document.Service>}
 */
proto.document.Document.prototype.getServices = function() {
  return /** @type{!Array<!proto.document.Service>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.document.Service, 5));
};


/**
 * @param {!Array<!proto.document.Service>} value
 * @return {!proto.document.Document} returns this
*/
proto.document.Document.prototype.setServices = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.document.Service=} opt_value
 * @param {number=} opt_index
 * @return {!proto.document.Service}
 */
proto.document.Document.prototype.addServices = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.document.Service, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.document.Document} returns this
 */
proto.document.Document.prototype.clearServices = function() {
  return this.setServices([]);
};


/**
 * repeated string authentications = 6;
 * @return {!Array<string>}
 */
proto.document.Document.prototype.getAuthentications = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6, undefined));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.document.Document} returns this
 */
proto.document.Document.prototype.setAuthentications = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.document.Document} returns this
 */
proto.document.Document.prototype.addAuthentications = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.document.Document} returns this
 */
proto.document.Document.prototype.clearAuthentications = function() {
  return this.setAuthentications([]);
};


/**
 * @enum {number}
 */
proto.document.VerificationType = {
  ED25519VERIFICATIONKEY2020: 0,
  SR25519VERIFICATIONKEY2020: 1
};

goog.object.extend(exports, proto.document);
