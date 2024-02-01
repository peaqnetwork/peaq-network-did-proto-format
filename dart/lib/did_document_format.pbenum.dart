//
//  Generated code. Do not modify.
//  source: did_document_format.proto
//
// @dart = 2.12

// ignore_for_file: annotate_overrides, camel_case_types, comment_references
// ignore_for_file: constant_identifier_names, library_prefixes
// ignore_for_file: non_constant_identifier_names, prefer_final_fields
// ignore_for_file: unnecessary_import, unnecessary_this, unused_import

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

class VerificationType extends $pb.ProtobufEnum {
  static const VerificationType Ed25519VerificationKey2020 = VerificationType._(0, _omitEnumNames ? '' : 'Ed25519VerificationKey2020');
  static const VerificationType Sr25519VerificationKey2020 = VerificationType._(1, _omitEnumNames ? '' : 'Sr25519VerificationKey2020');

  static const $core.List<VerificationType> values = <VerificationType> [
    Ed25519VerificationKey2020,
    Sr25519VerificationKey2020,
  ];

  static final $core.Map<$core.int, VerificationType> _byValue = $pb.ProtobufEnum.initByValue(values);
  static VerificationType? valueOf($core.int value) => _byValue[value];

  const VerificationType._($core.int v, $core.String n) : super(v, n);
}


const _omitEnumNames = $core.bool.fromEnvironment('protobuf.omit_enum_names');
