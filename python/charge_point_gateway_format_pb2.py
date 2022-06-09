# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: charge_point_gateway_format.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n!charge_point_gateway_format.proto\x12\x07gateway\"\xbc\x06\n\x05\x45vent\x12$\n\x08\x65vent_id\x18\x01 \x01(\x0e\x32\x12.gateway.EventType\x12N\n\x1e\x62oot_notification_request_data\x18\x02 \x01(\x0b\x32$.gateway.BootNotificationRequestDataH\x00\x12$\n\x08log_data\x18\x03 \x01(\x0b\x32\x10.gateway.LogDataH\x00\x12?\n\x16\x61uthorize_request_data\x18\x04 \x01(\x0b\x32\x1d.gateway.AuthorizeRequestDataH\x00\x12\x46\n\x1a\x61uthorize_request_ack_data\x18\x05 \x01(\x0b\x32 .gateway.AuthorizeRequestAckDataH\x00\x12P\n\x1f\x63heck_availability_request_data\x18\x06 \x01(\x0b\x32%.gateway.CheckAvailabilityRequestDataH\x00\x12W\n#check_availability_request_ack_data\x18\x07 \x01(\x0b\x32(.gateway.CheckAvailabilityRequestAckDataH\x00\x12\x44\n\x19start_charge_request_data\x18\x08 \x01(\x0b\x32\x1f.gateway.StartChargeRequestDataH\x00\x12K\n\x1dstart_charge_request_ack_data\x18\t \x01(\x0b\x32\".gateway.StartChargeRequestAckDataH\x00\x12\x39\n\x12\x63harge_status_data\x18\n \x01(\x0b\x32\x1b.gateway.ChargingStatusDataH\x00\x12\x42\n\x18stop_charge_request_data\x18\x0b \x01(\x0b\x32\x1e.gateway.StopChargeRequestDataH\x00\x12I\n\x1cstop_charge_request_ack_data\x18\x0c \x01(\x0b\x32!.gateway.StopChargeRequestAckDataH\x00\x42\x06\n\x04\x64\x61ta\"\x84\x02\n\x1b\x42ootNotificationRequestData\x12 \n\x18\x63harge_box_serial_number\x18\x01 \x01(\t\x12\x1a\n\x12\x63harge_point_model\x18\x02 \x01(\t\x12\"\n\x1a\x43harge_point_serial_number\x18\x03 \x01(\t\x12\x1b\n\x13\x43harge_point_vendor\x18\x04 \x01(\t\x12\x18\n\x10\x66irmware_version\x18\x05 \x01(\t\x12\r\n\x05iccid\x18\x06 \x01(\t\x12\x0c\n\x04imsi\x18\x07 \x01(\t\x12\x1b\n\x13meter_serial_number\x18\x08 \x01(\t\x12\x12\n\nmeter_type\x18\t \x01(\t\"@\n\x07LogData\x12\x14\n\x0c\x63urrent_time\x18\x01 \x01(\t\x12\x1f\n\x04resp\x18\x02 \x01(\x0b\x32\x11.gateway.Response\"S\n\x14\x41uthorizeRequestData\x12\x1e\n\x16\x63harge_point_client_id\x18\x01 \x01(\t\x12\x1b\n\x13\x63onsumer_public_key\x18\x02 \x01(\t\"W\n\x17\x41uthorizeRequestAckData\x12\x1b\n\x13\x63onsumer_public_key\x18\x01 \x01(\t\x12\x1f\n\x04resp\x18\x02 \x01(\x0b\x32\x11.gateway.Response\"T\n\x1c\x43heckAvailabilityRequestData\x12\x1e\n\x16\x63harge_point_client_id\x18\x01 \x01(\t\x12\x14\n\x0c\x63onnector_id\x18\x02 \x01(\x05\"B\n\x1f\x43heckAvailabilityRequestAckData\x12\x1f\n\x04resp\x18\x01 \x01(\x0b\x32\x11.gateway.Response\"k\n\x16StartChargeRequestData\x12\x1e\n\x16\x63harge_point_client_id\x18\x01 \x01(\t\x12\x14\n\x0c\x63onnector_id\x18\x02 \x01(\x05\x12\x1b\n\x13\x63onsumer_public_key\x18\x03 \x01(\t\"Y\n\x19StartChargeRequestAckData\x12\x1b\n\x13\x63onsumer_public_key\x18\x01 \x01(\t\x12\x1f\n\x04resp\x18\x02 \x01(\x0b\x32\x11.gateway.Response\"*\n\x08Response\x12\r\n\x05\x65rror\x18\x01 \x01(\x08\x12\x0f\n\x07message\x18\x02 \x01(\t\"\x8f\x01\n\x12\x43hargingStatusData\x12\x1d\n\x15initial_battery_level\x18\x01 \x01(\x02\x12\x15\n\rbattery_level\x18\x02 \x01(\x02\x12\x17\n\x0f\x63urrent_offered\x18\x03 \x01(\x02\x12\x14\n\x0c\x62\x61ttery_unit\x18\x04 \x01(\t\x12\x14\n\x0c\x63urrent_unit\x18\x05 \x01(\t\"j\n\x15StopChargeRequestData\x12\x1e\n\x16\x63harge_point_client_id\x18\x01 \x01(\t\x12\x14\n\x0c\x63onnector_id\x18\x02 \x01(\x05\x12\x1b\n\x13\x63onsumer_public_key\x18\x03 \x01(\t\"\x8c\x01\n\x18StopChargeRequestAckData\x12\x1b\n\x13\x63onsumer_public_key\x18\x01 \x01(\t\x12\x32\n\x10transaction_info\x18\x02 \x01(\x0b\x32\x18.gateway.TransactionInfo\x12\x1f\n\x04resp\x18\x03 \x01(\x0b\x32\x11.gateway.Response\"\x95\x04\n\x10\x43hargePointState\x12\n\n\x02id\x18\x01 \x01(\t\x12\x0e\n\x06status\x18\x02 \x01(\t\x12=\n\nconnectors\x18\x03 \x03(\x0b\x32).gateway.ChargePointState.ConnectorsEntry\x12\x41\n\x0ctransactions\x18\x04 \x03(\x0b\x32+.gateway.ChargePointState.TransactionsEntry\x12:\n\tauth_list\x18\x05 \x03(\x0b\x32\'.gateway.ChargePointState.AuthListEntry\x12!\n\x19\x63urrent_auth_list_version\x18\x06 \x01(\x05\x12\x1e\n\x16\x63urrent_transaction_id\x18\x07 \x01(\x05\x1aI\n\x0f\x43onnectorsEntry\x12\x0b\n\x03key\x18\x01 \x01(\x05\x12%\n\x05value\x18\x02 \x01(\x0b\x32\x16.gateway.ConnectorInfo:\x02\x38\x01\x1aM\n\x11TransactionsEntry\x12\x0b\n\x03key\x18\x01 \x01(\x05\x12\'\n\x05value\x18\x02 \x01(\x0b\x32\x18.gateway.TransactionInfo:\x02\x38\x01\x1aJ\n\rAuthListEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12(\n\x05value\x18\x02 \x01(\x0b\x32\x19.gateway.ConsumerAuthData:\x02\x38\x01\"H\n\rConnectorInfo\x12\n\n\x02id\x18\x01 \x01(\x05\x12\x0e\n\x06status\x18\x02 \x01(\t\x12\x1b\n\x13\x63urrent_transaction\x18\x03 \x01(\x05\"\xc0\x01\n\x0fTransactionInfo\x12\n\n\x02id\x18\x01 \x01(\x05\x12\x0e\n\x06id_tag\x18\x02 \x01(\t\x12\x14\n\x0c\x63onnector_id\x18\x03 \x01(\x05\x12\x12\n\nstart_time\x18\x04 \x01(\t\x12\x10\n\x08\x65nd_time\x18\x05 \x01(\t\x12\x13\n\x0bstart_meter\x18\x06 \x01(\x05\x12\x11\n\tend_meter\x18\x07 \x01(\x05\x12-\n\x08progress\x18\x08 \x01(\x0b\x32\x1b.gateway.ChargingStatusData\"r\n\x10\x43onsumerAuthData\x12\x12\n\npublic_key\x18\x01 \x01(\t\x12\x16\n\x0etransaction_id\x18\x02 \x01(\x05\x12\x32\n\tauth_data\x18\x03 \x01(\x0b\x32\x1f.gateway.LocalAuthorizationData\"Q\n\x16LocalAuthorizationData\x12\x0e\n\x06id_tag\x18\x01 \x01(\t\x12\'\n\x0bid_tag_info\x18\x02 \x01(\x0b\x32\x12.gateway.IdTagInfo\"S\n\tIdTagInfo\x12\x13\n\x0b\x65xpiry_date\x18\x01 \x01(\t\x12\x13\n\x0bparentIdTag\x18\x02 \x01(\t\x12\x1c\n\x14\x61uthorization_status\x18\x03 \x01(\t*\xc1\x02\n\tEventType\x12\x1d\n\x19\x42OOT_NOTIFICATION_REQUEST\x10\x00\x12\x15\n\x11HEARTBEAT_REQUEST\x10\x01\x12\x07\n\x03LOG\x10\x02\x12\x15\n\x11\x41UTHORIZE_REQUEST\x10\x03\x12\x19\n\x15\x41UTHORIZE_REQUEST_ACK\x10\x04\x12\x1e\n\x1a\x43HECK_AVAILABILITY_REQUEST\x10\x05\x12\"\n\x1e\x43HECK_AVAILABILITY_REQUEST_ACK\x10\x06\x12\x18\n\x14START_CHARGE_REQUEST\x10\x07\x12\x1c\n\x18START_CHARGE_REQUEST_ACK\x10\x08\x12\x11\n\rCHARGE_STATUS\x10\t\x12\x17\n\x13STOP_CHARGE_REQUEST\x10\n\x12\x1b\n\x17STOP_CHARGE_REQUEST_ACK\x10\x0b\x42WZUgithub.com/peaqnetwork/peaq-network-ev-charging-message-format/golang/gateway;gatewayb\x06proto3')

_EVENTTYPE = DESCRIPTOR.enum_types_by_name['EventType']
EventType = enum_type_wrapper.EnumTypeWrapper(_EVENTTYPE)
BOOT_NOTIFICATION_REQUEST = 0
HEARTBEAT_REQUEST = 1
LOG = 2
AUTHORIZE_REQUEST = 3
AUTHORIZE_REQUEST_ACK = 4
CHECK_AVAILABILITY_REQUEST = 5
CHECK_AVAILABILITY_REQUEST_ACK = 6
START_CHARGE_REQUEST = 7
START_CHARGE_REQUEST_ACK = 8
CHARGE_STATUS = 9
STOP_CHARGE_REQUEST = 10
STOP_CHARGE_REQUEST_ACK = 11


_EVENT = DESCRIPTOR.message_types_by_name['Event']
_BOOTNOTIFICATIONREQUESTDATA = DESCRIPTOR.message_types_by_name['BootNotificationRequestData']
_LOGDATA = DESCRIPTOR.message_types_by_name['LogData']
_AUTHORIZEREQUESTDATA = DESCRIPTOR.message_types_by_name['AuthorizeRequestData']
_AUTHORIZEREQUESTACKDATA = DESCRIPTOR.message_types_by_name['AuthorizeRequestAckData']
_CHECKAVAILABILITYREQUESTDATA = DESCRIPTOR.message_types_by_name['CheckAvailabilityRequestData']
_CHECKAVAILABILITYREQUESTACKDATA = DESCRIPTOR.message_types_by_name['CheckAvailabilityRequestAckData']
_STARTCHARGEREQUESTDATA = DESCRIPTOR.message_types_by_name['StartChargeRequestData']
_STARTCHARGEREQUESTACKDATA = DESCRIPTOR.message_types_by_name['StartChargeRequestAckData']
_RESPONSE = DESCRIPTOR.message_types_by_name['Response']
_CHARGINGSTATUSDATA = DESCRIPTOR.message_types_by_name['ChargingStatusData']
_STOPCHARGEREQUESTDATA = DESCRIPTOR.message_types_by_name['StopChargeRequestData']
_STOPCHARGEREQUESTACKDATA = DESCRIPTOR.message_types_by_name['StopChargeRequestAckData']
_CHARGEPOINTSTATE = DESCRIPTOR.message_types_by_name['ChargePointState']
_CHARGEPOINTSTATE_CONNECTORSENTRY = _CHARGEPOINTSTATE.nested_types_by_name['ConnectorsEntry']
_CHARGEPOINTSTATE_TRANSACTIONSENTRY = _CHARGEPOINTSTATE.nested_types_by_name['TransactionsEntry']
_CHARGEPOINTSTATE_AUTHLISTENTRY = _CHARGEPOINTSTATE.nested_types_by_name['AuthListEntry']
_CONNECTORINFO = DESCRIPTOR.message_types_by_name['ConnectorInfo']
_TRANSACTIONINFO = DESCRIPTOR.message_types_by_name['TransactionInfo']
_CONSUMERAUTHDATA = DESCRIPTOR.message_types_by_name['ConsumerAuthData']
_LOCALAUTHORIZATIONDATA = DESCRIPTOR.message_types_by_name['LocalAuthorizationData']
_IDTAGINFO = DESCRIPTOR.message_types_by_name['IdTagInfo']
Event = _reflection.GeneratedProtocolMessageType('Event', (_message.Message,), {
  'DESCRIPTOR' : _EVENT,
  '__module__' : 'charge_point_gateway_format_pb2'
  # @@protoc_insertion_point(class_scope:gateway.Event)
  })
_sym_db.RegisterMessage(Event)

BootNotificationRequestData = _reflection.GeneratedProtocolMessageType('BootNotificationRequestData', (_message.Message,), {
  'DESCRIPTOR' : _BOOTNOTIFICATIONREQUESTDATA,
  '__module__' : 'charge_point_gateway_format_pb2'
  # @@protoc_insertion_point(class_scope:gateway.BootNotificationRequestData)
  })
_sym_db.RegisterMessage(BootNotificationRequestData)

LogData = _reflection.GeneratedProtocolMessageType('LogData', (_message.Message,), {
  'DESCRIPTOR' : _LOGDATA,
  '__module__' : 'charge_point_gateway_format_pb2'
  # @@protoc_insertion_point(class_scope:gateway.LogData)
  })
_sym_db.RegisterMessage(LogData)

AuthorizeRequestData = _reflection.GeneratedProtocolMessageType('AuthorizeRequestData', (_message.Message,), {
  'DESCRIPTOR' : _AUTHORIZEREQUESTDATA,
  '__module__' : 'charge_point_gateway_format_pb2'
  # @@protoc_insertion_point(class_scope:gateway.AuthorizeRequestData)
  })
_sym_db.RegisterMessage(AuthorizeRequestData)

AuthorizeRequestAckData = _reflection.GeneratedProtocolMessageType('AuthorizeRequestAckData', (_message.Message,), {
  'DESCRIPTOR' : _AUTHORIZEREQUESTACKDATA,
  '__module__' : 'charge_point_gateway_format_pb2'
  # @@protoc_insertion_point(class_scope:gateway.AuthorizeRequestAckData)
  })
_sym_db.RegisterMessage(AuthorizeRequestAckData)

CheckAvailabilityRequestData = _reflection.GeneratedProtocolMessageType('CheckAvailabilityRequestData', (_message.Message,), {
  'DESCRIPTOR' : _CHECKAVAILABILITYREQUESTDATA,
  '__module__' : 'charge_point_gateway_format_pb2'
  # @@protoc_insertion_point(class_scope:gateway.CheckAvailabilityRequestData)
  })
_sym_db.RegisterMessage(CheckAvailabilityRequestData)

CheckAvailabilityRequestAckData = _reflection.GeneratedProtocolMessageType('CheckAvailabilityRequestAckData', (_message.Message,), {
  'DESCRIPTOR' : _CHECKAVAILABILITYREQUESTACKDATA,
  '__module__' : 'charge_point_gateway_format_pb2'
  # @@protoc_insertion_point(class_scope:gateway.CheckAvailabilityRequestAckData)
  })
_sym_db.RegisterMessage(CheckAvailabilityRequestAckData)

StartChargeRequestData = _reflection.GeneratedProtocolMessageType('StartChargeRequestData', (_message.Message,), {
  'DESCRIPTOR' : _STARTCHARGEREQUESTDATA,
  '__module__' : 'charge_point_gateway_format_pb2'
  # @@protoc_insertion_point(class_scope:gateway.StartChargeRequestData)
  })
_sym_db.RegisterMessage(StartChargeRequestData)

StartChargeRequestAckData = _reflection.GeneratedProtocolMessageType('StartChargeRequestAckData', (_message.Message,), {
  'DESCRIPTOR' : _STARTCHARGEREQUESTACKDATA,
  '__module__' : 'charge_point_gateway_format_pb2'
  # @@protoc_insertion_point(class_scope:gateway.StartChargeRequestAckData)
  })
_sym_db.RegisterMessage(StartChargeRequestAckData)

Response = _reflection.GeneratedProtocolMessageType('Response', (_message.Message,), {
  'DESCRIPTOR' : _RESPONSE,
  '__module__' : 'charge_point_gateway_format_pb2'
  # @@protoc_insertion_point(class_scope:gateway.Response)
  })
_sym_db.RegisterMessage(Response)

ChargingStatusData = _reflection.GeneratedProtocolMessageType('ChargingStatusData', (_message.Message,), {
  'DESCRIPTOR' : _CHARGINGSTATUSDATA,
  '__module__' : 'charge_point_gateway_format_pb2'
  # @@protoc_insertion_point(class_scope:gateway.ChargingStatusData)
  })
_sym_db.RegisterMessage(ChargingStatusData)

StopChargeRequestData = _reflection.GeneratedProtocolMessageType('StopChargeRequestData', (_message.Message,), {
  'DESCRIPTOR' : _STOPCHARGEREQUESTDATA,
  '__module__' : 'charge_point_gateway_format_pb2'
  # @@protoc_insertion_point(class_scope:gateway.StopChargeRequestData)
  })
_sym_db.RegisterMessage(StopChargeRequestData)

StopChargeRequestAckData = _reflection.GeneratedProtocolMessageType('StopChargeRequestAckData', (_message.Message,), {
  'DESCRIPTOR' : _STOPCHARGEREQUESTACKDATA,
  '__module__' : 'charge_point_gateway_format_pb2'
  # @@protoc_insertion_point(class_scope:gateway.StopChargeRequestAckData)
  })
_sym_db.RegisterMessage(StopChargeRequestAckData)

ChargePointState = _reflection.GeneratedProtocolMessageType('ChargePointState', (_message.Message,), {

  'ConnectorsEntry' : _reflection.GeneratedProtocolMessageType('ConnectorsEntry', (_message.Message,), {
    'DESCRIPTOR' : _CHARGEPOINTSTATE_CONNECTORSENTRY,
    '__module__' : 'charge_point_gateway_format_pb2'
    # @@protoc_insertion_point(class_scope:gateway.ChargePointState.ConnectorsEntry)
    })
  ,

  'TransactionsEntry' : _reflection.GeneratedProtocolMessageType('TransactionsEntry', (_message.Message,), {
    'DESCRIPTOR' : _CHARGEPOINTSTATE_TRANSACTIONSENTRY,
    '__module__' : 'charge_point_gateway_format_pb2'
    # @@protoc_insertion_point(class_scope:gateway.ChargePointState.TransactionsEntry)
    })
  ,

  'AuthListEntry' : _reflection.GeneratedProtocolMessageType('AuthListEntry', (_message.Message,), {
    'DESCRIPTOR' : _CHARGEPOINTSTATE_AUTHLISTENTRY,
    '__module__' : 'charge_point_gateway_format_pb2'
    # @@protoc_insertion_point(class_scope:gateway.ChargePointState.AuthListEntry)
    })
  ,
  'DESCRIPTOR' : _CHARGEPOINTSTATE,
  '__module__' : 'charge_point_gateway_format_pb2'
  # @@protoc_insertion_point(class_scope:gateway.ChargePointState)
  })
_sym_db.RegisterMessage(ChargePointState)
_sym_db.RegisterMessage(ChargePointState.ConnectorsEntry)
_sym_db.RegisterMessage(ChargePointState.TransactionsEntry)
_sym_db.RegisterMessage(ChargePointState.AuthListEntry)

ConnectorInfo = _reflection.GeneratedProtocolMessageType('ConnectorInfo', (_message.Message,), {
  'DESCRIPTOR' : _CONNECTORINFO,
  '__module__' : 'charge_point_gateway_format_pb2'
  # @@protoc_insertion_point(class_scope:gateway.ConnectorInfo)
  })
_sym_db.RegisterMessage(ConnectorInfo)

TransactionInfo = _reflection.GeneratedProtocolMessageType('TransactionInfo', (_message.Message,), {
  'DESCRIPTOR' : _TRANSACTIONINFO,
  '__module__' : 'charge_point_gateway_format_pb2'
  # @@protoc_insertion_point(class_scope:gateway.TransactionInfo)
  })
_sym_db.RegisterMessage(TransactionInfo)

ConsumerAuthData = _reflection.GeneratedProtocolMessageType('ConsumerAuthData', (_message.Message,), {
  'DESCRIPTOR' : _CONSUMERAUTHDATA,
  '__module__' : 'charge_point_gateway_format_pb2'
  # @@protoc_insertion_point(class_scope:gateway.ConsumerAuthData)
  })
_sym_db.RegisterMessage(ConsumerAuthData)

LocalAuthorizationData = _reflection.GeneratedProtocolMessageType('LocalAuthorizationData', (_message.Message,), {
  'DESCRIPTOR' : _LOCALAUTHORIZATIONDATA,
  '__module__' : 'charge_point_gateway_format_pb2'
  # @@protoc_insertion_point(class_scope:gateway.LocalAuthorizationData)
  })
_sym_db.RegisterMessage(LocalAuthorizationData)

IdTagInfo = _reflection.GeneratedProtocolMessageType('IdTagInfo', (_message.Message,), {
  'DESCRIPTOR' : _IDTAGINFO,
  '__module__' : 'charge_point_gateway_format_pb2'
  # @@protoc_insertion_point(class_scope:gateway.IdTagInfo)
  })
_sym_db.RegisterMessage(IdTagInfo)

if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'ZUgithub.com/peaqnetwork/peaq-network-ev-charging-message-format/golang/gateway;gateway'
  _CHARGEPOINTSTATE_CONNECTORSENTRY._options = None
  _CHARGEPOINTSTATE_CONNECTORSENTRY._serialized_options = b'8\001'
  _CHARGEPOINTSTATE_TRANSACTIONSENTRY._options = None
  _CHARGEPOINTSTATE_TRANSACTIONSENTRY._serialized_options = b'8\001'
  _CHARGEPOINTSTATE_AUTHLISTENTRY._options = None
  _CHARGEPOINTSTATE_AUTHLISTENTRY._serialized_options = b'8\001'
  _EVENTTYPE._serialized_start=3265
  _EVENTTYPE._serialized_end=3586
  _EVENT._serialized_start=47
  _EVENT._serialized_end=875
  _BOOTNOTIFICATIONREQUESTDATA._serialized_start=878
  _BOOTNOTIFICATIONREQUESTDATA._serialized_end=1138
  _LOGDATA._serialized_start=1140
  _LOGDATA._serialized_end=1204
  _AUTHORIZEREQUESTDATA._serialized_start=1206
  _AUTHORIZEREQUESTDATA._serialized_end=1289
  _AUTHORIZEREQUESTACKDATA._serialized_start=1291
  _AUTHORIZEREQUESTACKDATA._serialized_end=1378
  _CHECKAVAILABILITYREQUESTDATA._serialized_start=1380
  _CHECKAVAILABILITYREQUESTDATA._serialized_end=1464
  _CHECKAVAILABILITYREQUESTACKDATA._serialized_start=1466
  _CHECKAVAILABILITYREQUESTACKDATA._serialized_end=1532
  _STARTCHARGEREQUESTDATA._serialized_start=1534
  _STARTCHARGEREQUESTDATA._serialized_end=1641
  _STARTCHARGEREQUESTACKDATA._serialized_start=1643
  _STARTCHARGEREQUESTACKDATA._serialized_end=1732
  _RESPONSE._serialized_start=1734
  _RESPONSE._serialized_end=1776
  _CHARGINGSTATUSDATA._serialized_start=1779
  _CHARGINGSTATUSDATA._serialized_end=1922
  _STOPCHARGEREQUESTDATA._serialized_start=1924
  _STOPCHARGEREQUESTDATA._serialized_end=2030
  _STOPCHARGEREQUESTACKDATA._serialized_start=2033
  _STOPCHARGEREQUESTACKDATA._serialized_end=2173
  _CHARGEPOINTSTATE._serialized_start=2176
  _CHARGEPOINTSTATE._serialized_end=2709
  _CHARGEPOINTSTATE_CONNECTORSENTRY._serialized_start=2481
  _CHARGEPOINTSTATE_CONNECTORSENTRY._serialized_end=2554
  _CHARGEPOINTSTATE_TRANSACTIONSENTRY._serialized_start=2556
  _CHARGEPOINTSTATE_TRANSACTIONSENTRY._serialized_end=2633
  _CHARGEPOINTSTATE_AUTHLISTENTRY._serialized_start=2635
  _CHARGEPOINTSTATE_AUTHLISTENTRY._serialized_end=2709
  _CONNECTORINFO._serialized_start=2711
  _CONNECTORINFO._serialized_end=2783
  _TRANSACTIONINFO._serialized_start=2786
  _TRANSACTIONINFO._serialized_end=2978
  _CONSUMERAUTHDATA._serialized_start=2980
  _CONSUMERAUTHDATA._serialized_end=3094
  _LOCALAUTHORIZATIONDATA._serialized_start=3096
  _LOCALAUTHORIZATIONDATA._serialized_end=3177
  _IDTAGINFO._serialized_start=3179
  _IDTAGINFO._serialized_end=3262
# @@protoc_insertion_point(module_scope)
