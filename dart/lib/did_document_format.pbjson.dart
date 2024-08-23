//
//  Generated code. Do not modify.
//  source: did_document_format.proto
//
// @dart = 2.12

// ignore_for_file: annotate_overrides, camel_case_types, comment_references
// ignore_for_file: constant_identifier_names, library_prefixes
// ignore_for_file: non_constant_identifier_names, prefer_final_fields
// ignore_for_file: unnecessary_import, unnecessary_this, unused_import

import 'dart:convert' as $convert;
import 'dart:core' as $core;
import 'dart:typed_data' as $typed_data;

@$core.Deprecated('Use verificationTypeDescriptor instead')
const VerificationType$json = {
  '1': 'VerificationType',
  '2': [
    {'1': 'Ed25519VerificationKey2020', '2': 0},
    {'1': 'Sr25519VerificationKey2020', '2': 1},
  ],
};

/// Descriptor for `VerificationType`. Decode as a `google.protobuf.EnumDescriptorProto`.
final $typed_data.Uint8List verificationTypeDescriptor = $convert.base64Decode(
    'ChBWZXJpZmljYXRpb25UeXBlEh4KGkVkMjU1MTlWZXJpZmljYXRpb25LZXkyMDIwEAASHgoaU3'
    'IyNTUxOVZlcmlmaWNhdGlvbktleTIwMjAQAQ==');

@$core.Deprecated('Use verificationMethodDescriptor instead')
const VerificationMethod$json = {
  '1': 'VerificationMethod',
  '2': [
    {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
    {'1': 'type', '3': 2, '4': 1, '5': 14, '6': '.document.VerificationType', '10': 'type'},
    {'1': 'controller', '3': 3, '4': 1, '5': 9, '10': 'controller'},
    {'1': 'publicKeyMultibase', '3': 4, '4': 1, '5': 9, '10': 'publicKeyMultibase'},
  ],
};

/// Descriptor for `VerificationMethod`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List verificationMethodDescriptor = $convert.base64Decode(
    'ChJWZXJpZmljYXRpb25NZXRob2QSDgoCaWQYASABKAlSAmlkEi4KBHR5cGUYAiABKA4yGi5kb2'
    'N1bWVudC5WZXJpZmljYXRpb25UeXBlUgR0eXBlEh4KCmNvbnRyb2xsZXIYAyABKAlSCmNvbnRy'
    'b2xsZXISLgoScHVibGljS2V5TXVsdGliYXNlGAQgASgJUhJwdWJsaWNLZXlNdWx0aWJhc2U=');

@$core.Deprecated('Use signatureDescriptor instead')
const Signature$json = {
  '1': 'Signature',
  '2': [
    {'1': 'type', '3': 1, '4': 1, '5': 14, '6': '.document.VerificationType', '10': 'type'},
    {'1': 'issuer', '3': 2, '4': 1, '5': 9, '10': 'issuer'},
    {'1': 'hash', '3': 3, '4': 1, '5': 9, '10': 'hash'},
  ],
};

/// Descriptor for `Signature`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List signatureDescriptor = $convert.base64Decode(
    'CglTaWduYXR1cmUSLgoEdHlwZRgBIAEoDjIaLmRvY3VtZW50LlZlcmlmaWNhdGlvblR5cGVSBH'
    'R5cGUSFgoGaXNzdWVyGAIgASgJUgZpc3N1ZXISEgoEaGFzaBgDIAEoCVIEaGFzaA==');

@$core.Deprecated('Use serviceDescriptor instead')
const Service$json = {
  '1': 'Service',
  '2': [
    {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
    {'1': 'type', '3': 2, '4': 1, '5': 9, '10': 'type'},
    {'1': 'serviceEndpoint', '3': 3, '4': 1, '5': 9, '10': 'serviceEndpoint'},
    {'1': 'data', '3': 4, '4': 1, '5': 9, '10': 'data'},
  ],
};

/// Descriptor for `Service`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List serviceDescriptor = $convert.base64Decode(
    'CgdTZXJ2aWNlEg4KAmlkGAEgASgJUgJpZBISCgR0eXBlGAIgASgJUgR0eXBlEigKD3NlcnZpY2'
    'VFbmRwb2ludBgDIAEoCVIPc2VydmljZUVuZHBvaW50EhIKBGRhdGEYBCABKAlSBGRhdGE=');

@$core.Deprecated('Use documentDescriptor instead')
const Document$json = {
  '1': 'Document',
  '2': [
    {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
    {'1': 'controller', '3': 2, '4': 1, '5': 9, '10': 'controller'},
    {'1': 'verificationMethods', '3': 3, '4': 3, '5': 11, '6': '.document.VerificationMethod', '10': 'verificationMethods'},
    {'1': 'signature', '3': 4, '4': 1, '5': 11, '6': '.document.Signature', '10': 'signature'},
    {'1': 'services', '3': 5, '4': 3, '5': 11, '6': '.document.Service', '10': 'services'},
    {'1': 'authentications', '3': 6, '4': 3, '5': 9, '10': 'authentications'},
  ],
};

/// Descriptor for `Document`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List documentDescriptor = $convert.base64Decode(
    'CghEb2N1bWVudBIOCgJpZBgBIAEoCVICaWQSHgoKY29udHJvbGxlchgCIAEoCVIKY29udHJvbG'
    'xlchJOChN2ZXJpZmljYXRpb25NZXRob2RzGAMgAygLMhwuZG9jdW1lbnQuVmVyaWZpY2F0aW9u'
    'TWV0aG9kUhN2ZXJpZmljYXRpb25NZXRob2RzEjEKCXNpZ25hdHVyZRgEIAEoCzITLmRvY3VtZW'
    '50LlNpZ25hdHVyZVIJc2lnbmF0dXJlEi0KCHNlcnZpY2VzGAUgAygLMhEuZG9jdW1lbnQuU2Vy'
    'dmljZVIIc2VydmljZXMSKAoPYXV0aGVudGljYXRpb25zGAYgAygJUg9hdXRoZW50aWNhdGlvbn'
    'M=');

