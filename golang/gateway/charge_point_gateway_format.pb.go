// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.26.0
// 	protoc        v3.19.4
// source: charge_point_gateway_format.proto

package gateway

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type EventType int32

const (
	EventType_BootNotificationRequest EventType = 0
	EventType_HeartbeatRequest        EventType = 3
	EventType_Log                     EventType = 5
)

// Enum value maps for EventType.
var (
	EventType_name = map[int32]string{
		0: "BootNotificationRequest",
		3: "HeartbeatRequest",
		5: "Log",
	}
	EventType_value = map[string]int32{
		"BootNotificationRequest": 0,
		"HeartbeatRequest":        3,
		"Log":                     5,
	}
)

func (x EventType) Enum() *EventType {
	p := new(EventType)
	*p = x
	return p
}

func (x EventType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (EventType) Descriptor() protoreflect.EnumDescriptor {
	return file_charge_point_gateway_format_proto_enumTypes[0].Descriptor()
}

func (EventType) Type() protoreflect.EnumType {
	return &file_charge_point_gateway_format_proto_enumTypes[0]
}

func (x EventType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use EventType.Descriptor instead.
func (EventType) EnumDescriptor() ([]byte, []int) {
	return file_charge_point_gateway_format_proto_rawDescGZIP(), []int{0}
}

type Event struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	EventId EventType `protobuf:"varint,1,opt,name=event_id,json=eventId,proto3,enum=gateway.EventType" json:"event_id,omitempty"`
	// Types that are assignable to Data:
	//	*Event_BootNotificationRequestData
	//	*Event_LogData
	Data isEvent_Data `protobuf_oneof:"data"`
}

func (x *Event) Reset() {
	*x = Event{}
	if protoimpl.UnsafeEnabled {
		mi := &file_charge_point_gateway_format_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Event) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Event) ProtoMessage() {}

func (x *Event) ProtoReflect() protoreflect.Message {
	mi := &file_charge_point_gateway_format_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Event.ProtoReflect.Descriptor instead.
func (*Event) Descriptor() ([]byte, []int) {
	return file_charge_point_gateway_format_proto_rawDescGZIP(), []int{0}
}

func (x *Event) GetEventId() EventType {
	if x != nil {
		return x.EventId
	}
	return EventType_BootNotificationRequest
}

func (m *Event) GetData() isEvent_Data {
	if m != nil {
		return m.Data
	}
	return nil
}

func (x *Event) GetBootNotificationRequestData() *BootNotificationRequestData {
	if x, ok := x.GetData().(*Event_BootNotificationRequestData); ok {
		return x.BootNotificationRequestData
	}
	return nil
}

func (x *Event) GetLogData() *LogData {
	if x, ok := x.GetData().(*Event_LogData); ok {
		return x.LogData
	}
	return nil
}

type isEvent_Data interface {
	isEvent_Data()
}

type Event_BootNotificationRequestData struct {
	BootNotificationRequestData *BootNotificationRequestData `protobuf:"bytes,2,opt,name=boot_notification_request_data,json=bootNotificationRequestData,proto3,oneof"`
}

type Event_LogData struct {
	LogData *LogData `protobuf:"bytes,4,opt,name=log_data,json=logData,proto3,oneof"`
}

func (*Event_BootNotificationRequestData) isEvent_Data() {}

func (*Event_LogData) isEvent_Data() {}

type BootNotificationRequestData struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ChargeBoxSerialNumber   string `protobuf:"bytes,1,opt,name=charge_box_serial_number,json=chargeBoxSerialNumber,proto3" json:"charge_box_serial_number,omitempty"`
	ChargePointModel        string `protobuf:"bytes,2,opt,name=charge_point_model,json=chargePointModel,proto3" json:"charge_point_model,omitempty"`
	ChargePointSerialNumber string `protobuf:"bytes,3,opt,name=Charge_point_serial_number,json=ChargePointSerialNumber,proto3" json:"Charge_point_serial_number,omitempty"`
	ChargePointVendor       string `protobuf:"bytes,4,opt,name=Charge_point_vendor,json=ChargePointVendor,proto3" json:"Charge_point_vendor,omitempty"`
	FirmwareVersion         string `protobuf:"bytes,5,opt,name=firmware_version,json=firmwareVersion,proto3" json:"firmware_version,omitempty"`
	Iccid                   string `protobuf:"bytes,6,opt,name=iccid,proto3" json:"iccid,omitempty"`
	Imsi                    string `protobuf:"bytes,7,opt,name=imsi,proto3" json:"imsi,omitempty"`
	MeterSerialNumber       string `protobuf:"bytes,8,opt,name=meter_serial_number,json=meterSerialNumber,proto3" json:"meter_serial_number,omitempty"`
	MeterType               string `protobuf:"bytes,9,opt,name=meter_type,json=meterType,proto3" json:"meter_type,omitempty"`
}

func (x *BootNotificationRequestData) Reset() {
	*x = BootNotificationRequestData{}
	if protoimpl.UnsafeEnabled {
		mi := &file_charge_point_gateway_format_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *BootNotificationRequestData) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*BootNotificationRequestData) ProtoMessage() {}

func (x *BootNotificationRequestData) ProtoReflect() protoreflect.Message {
	mi := &file_charge_point_gateway_format_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use BootNotificationRequestData.ProtoReflect.Descriptor instead.
func (*BootNotificationRequestData) Descriptor() ([]byte, []int) {
	return file_charge_point_gateway_format_proto_rawDescGZIP(), []int{1}
}

func (x *BootNotificationRequestData) GetChargeBoxSerialNumber() string {
	if x != nil {
		return x.ChargeBoxSerialNumber
	}
	return ""
}

func (x *BootNotificationRequestData) GetChargePointModel() string {
	if x != nil {
		return x.ChargePointModel
	}
	return ""
}

func (x *BootNotificationRequestData) GetChargePointSerialNumber() string {
	if x != nil {
		return x.ChargePointSerialNumber
	}
	return ""
}

func (x *BootNotificationRequestData) GetChargePointVendor() string {
	if x != nil {
		return x.ChargePointVendor
	}
	return ""
}

func (x *BootNotificationRequestData) GetFirmwareVersion() string {
	if x != nil {
		return x.FirmwareVersion
	}
	return ""
}

func (x *BootNotificationRequestData) GetIccid() string {
	if x != nil {
		return x.Iccid
	}
	return ""
}

func (x *BootNotificationRequestData) GetImsi() string {
	if x != nil {
		return x.Imsi
	}
	return ""
}

func (x *BootNotificationRequestData) GetMeterSerialNumber() string {
	if x != nil {
		return x.MeterSerialNumber
	}
	return ""
}

func (x *BootNotificationRequestData) GetMeterType() string {
	if x != nil {
		return x.MeterType
	}
	return ""
}

type LogData struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	CurrentTime string `protobuf:"bytes,1,opt,name=current_time,json=currentTime,proto3" json:"current_time,omitempty"`
	Message     string `protobuf:"bytes,2,opt,name=message,proto3" json:"message,omitempty"`
	Error       bool   `protobuf:"varint,3,opt,name=error,proto3" json:"error,omitempty"`
}

func (x *LogData) Reset() {
	*x = LogData{}
	if protoimpl.UnsafeEnabled {
		mi := &file_charge_point_gateway_format_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *LogData) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*LogData) ProtoMessage() {}

func (x *LogData) ProtoReflect() protoreflect.Message {
	mi := &file_charge_point_gateway_format_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use LogData.ProtoReflect.Descriptor instead.
func (*LogData) Descriptor() ([]byte, []int) {
	return file_charge_point_gateway_format_proto_rawDescGZIP(), []int{2}
}

func (x *LogData) GetCurrentTime() string {
	if x != nil {
		return x.CurrentTime
	}
	return ""
}

func (x *LogData) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

func (x *LogData) GetError() bool {
	if x != nil {
		return x.Error
	}
	return false
}

var File_charge_point_gateway_format_proto protoreflect.FileDescriptor

var file_charge_point_gateway_format_proto_rawDesc = []byte{
	0x0a, 0x21, 0x63, 0x68, 0x61, 0x72, 0x67, 0x65, 0x5f, 0x70, 0x6f, 0x69, 0x6e, 0x74, 0x5f, 0x67,
	0x61, 0x74, 0x65, 0x77, 0x61, 0x79, 0x5f, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x74, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x12, 0x07, 0x67, 0x61, 0x74, 0x65, 0x77, 0x61, 0x79, 0x22, 0xda, 0x01, 0x0a,
	0x05, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x12, 0x2d, 0x0a, 0x08, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x5f,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x12, 0x2e, 0x67, 0x61, 0x74, 0x65, 0x77,
	0x61, 0x79, 0x2e, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x54, 0x79, 0x70, 0x65, 0x52, 0x07, 0x65, 0x76,
	0x65, 0x6e, 0x74, 0x49, 0x64, 0x12, 0x6b, 0x0a, 0x1e, 0x62, 0x6f, 0x6f, 0x74, 0x5f, 0x6e, 0x6f,
	0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x72, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x5f, 0x64, 0x61, 0x74, 0x61, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x24, 0x2e,
	0x67, 0x61, 0x74, 0x65, 0x77, 0x61, 0x79, 0x2e, 0x42, 0x6f, 0x6f, 0x74, 0x4e, 0x6f, 0x74, 0x69,
	0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x44,
	0x61, 0x74, 0x61, 0x48, 0x00, 0x52, 0x1b, 0x62, 0x6f, 0x6f, 0x74, 0x4e, 0x6f, 0x74, 0x69, 0x66,
	0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x44, 0x61,
	0x74, 0x61, 0x12, 0x2d, 0x0a, 0x08, 0x6c, 0x6f, 0x67, 0x5f, 0x64, 0x61, 0x74, 0x61, 0x18, 0x04,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x10, 0x2e, 0x67, 0x61, 0x74, 0x65, 0x77, 0x61, 0x79, 0x2e, 0x4c,
	0x6f, 0x67, 0x44, 0x61, 0x74, 0x61, 0x48, 0x00, 0x52, 0x07, 0x6c, 0x6f, 0x67, 0x44, 0x61, 0x74,
	0x61, 0x42, 0x06, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x61, 0x22, 0x95, 0x03, 0x0a, 0x1b, 0x42, 0x6f,
	0x6f, 0x74, 0x4e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x44, 0x61, 0x74, 0x61, 0x12, 0x37, 0x0a, 0x18, 0x63, 0x68, 0x61,
	0x72, 0x67, 0x65, 0x5f, 0x62, 0x6f, 0x78, 0x5f, 0x73, 0x65, 0x72, 0x69, 0x61, 0x6c, 0x5f, 0x6e,
	0x75, 0x6d, 0x62, 0x65, 0x72, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x15, 0x63, 0x68, 0x61,
	0x72, 0x67, 0x65, 0x42, 0x6f, 0x78, 0x53, 0x65, 0x72, 0x69, 0x61, 0x6c, 0x4e, 0x75, 0x6d, 0x62,
	0x65, 0x72, 0x12, 0x2c, 0x0a, 0x12, 0x63, 0x68, 0x61, 0x72, 0x67, 0x65, 0x5f, 0x70, 0x6f, 0x69,
	0x6e, 0x74, 0x5f, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x10,
	0x63, 0x68, 0x61, 0x72, 0x67, 0x65, 0x50, 0x6f, 0x69, 0x6e, 0x74, 0x4d, 0x6f, 0x64, 0x65, 0x6c,
	0x12, 0x3b, 0x0a, 0x1a, 0x43, 0x68, 0x61, 0x72, 0x67, 0x65, 0x5f, 0x70, 0x6f, 0x69, 0x6e, 0x74,
	0x5f, 0x73, 0x65, 0x72, 0x69, 0x61, 0x6c, 0x5f, 0x6e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x18, 0x03,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x17, 0x43, 0x68, 0x61, 0x72, 0x67, 0x65, 0x50, 0x6f, 0x69, 0x6e,
	0x74, 0x53, 0x65, 0x72, 0x69, 0x61, 0x6c, 0x4e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x12, 0x2e, 0x0a,
	0x13, 0x43, 0x68, 0x61, 0x72, 0x67, 0x65, 0x5f, 0x70, 0x6f, 0x69, 0x6e, 0x74, 0x5f, 0x76, 0x65,
	0x6e, 0x64, 0x6f, 0x72, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x11, 0x43, 0x68, 0x61, 0x72,
	0x67, 0x65, 0x50, 0x6f, 0x69, 0x6e, 0x74, 0x56, 0x65, 0x6e, 0x64, 0x6f, 0x72, 0x12, 0x29, 0x0a,
	0x10, 0x66, 0x69, 0x72, 0x6d, 0x77, 0x61, 0x72, 0x65, 0x5f, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f,
	0x6e, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0f, 0x66, 0x69, 0x72, 0x6d, 0x77, 0x61, 0x72,
	0x65, 0x56, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x12, 0x14, 0x0a, 0x05, 0x69, 0x63, 0x63, 0x69,
	0x64, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x69, 0x63, 0x63, 0x69, 0x64, 0x12, 0x12,
	0x0a, 0x04, 0x69, 0x6d, 0x73, 0x69, 0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x69, 0x6d,
	0x73, 0x69, 0x12, 0x2e, 0x0a, 0x13, 0x6d, 0x65, 0x74, 0x65, 0x72, 0x5f, 0x73, 0x65, 0x72, 0x69,
	0x61, 0x6c, 0x5f, 0x6e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x11, 0x6d, 0x65, 0x74, 0x65, 0x72, 0x53, 0x65, 0x72, 0x69, 0x61, 0x6c, 0x4e, 0x75, 0x6d, 0x62,
	0x65, 0x72, 0x12, 0x1d, 0x0a, 0x0a, 0x6d, 0x65, 0x74, 0x65, 0x72, 0x5f, 0x74, 0x79, 0x70, 0x65,
	0x18, 0x09, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x6d, 0x65, 0x74, 0x65, 0x72, 0x54, 0x79, 0x70,
	0x65, 0x22, 0x5c, 0x0a, 0x07, 0x4c, 0x6f, 0x67, 0x44, 0x61, 0x74, 0x61, 0x12, 0x21, 0x0a, 0x0c,
	0x63, 0x75, 0x72, 0x72, 0x65, 0x6e, 0x74, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x0b, 0x63, 0x75, 0x72, 0x72, 0x65, 0x6e, 0x74, 0x54, 0x69, 0x6d, 0x65, 0x12,
	0x18, 0x0a, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x65, 0x72, 0x72,
	0x6f, 0x72, 0x18, 0x03, 0x20, 0x01, 0x28, 0x08, 0x52, 0x05, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x2a,
	0x47, 0x0a, 0x09, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x54, 0x79, 0x70, 0x65, 0x12, 0x1b, 0x0a, 0x17,
	0x42, 0x6f, 0x6f, 0x74, 0x4e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x10, 0x00, 0x12, 0x14, 0x0a, 0x10, 0x48, 0x65, 0x61,
	0x72, 0x74, 0x62, 0x65, 0x61, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x10, 0x03, 0x12,
	0x07, 0x0a, 0x03, 0x4c, 0x6f, 0x67, 0x10, 0x05, 0x42, 0x57, 0x5a, 0x55, 0x67, 0x69, 0x74, 0x68,
	0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x70, 0x65, 0x61, 0x71, 0x6e, 0x65, 0x74, 0x77, 0x6f,
	0x72, 0x6b, 0x2f, 0x70, 0x65, 0x61, 0x71, 0x2d, 0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x2d,
	0x65, 0x76, 0x2d, 0x63, 0x68, 0x61, 0x72, 0x67, 0x69, 0x6e, 0x67, 0x2d, 0x6d, 0x65, 0x73, 0x73,
	0x61, 0x67, 0x65, 0x2d, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x74, 0x2f, 0x67, 0x6f, 0x6c, 0x61, 0x6e,
	0x67, 0x2f, 0x67, 0x61, 0x74, 0x65, 0x77, 0x61, 0x79, 0x3b, 0x67, 0x61, 0x74, 0x65, 0x77, 0x61,
	0x79, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_charge_point_gateway_format_proto_rawDescOnce sync.Once
	file_charge_point_gateway_format_proto_rawDescData = file_charge_point_gateway_format_proto_rawDesc
)

func file_charge_point_gateway_format_proto_rawDescGZIP() []byte {
	file_charge_point_gateway_format_proto_rawDescOnce.Do(func() {
		file_charge_point_gateway_format_proto_rawDescData = protoimpl.X.CompressGZIP(file_charge_point_gateway_format_proto_rawDescData)
	})
	return file_charge_point_gateway_format_proto_rawDescData
}

var file_charge_point_gateway_format_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_charge_point_gateway_format_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_charge_point_gateway_format_proto_goTypes = []interface{}{
	(EventType)(0),                      // 0: gateway.EventType
	(*Event)(nil),                       // 1: gateway.Event
	(*BootNotificationRequestData)(nil), // 2: gateway.BootNotificationRequestData
	(*LogData)(nil),                     // 3: gateway.LogData
}
var file_charge_point_gateway_format_proto_depIdxs = []int32{
	0, // 0: gateway.Event.event_id:type_name -> gateway.EventType
	2, // 1: gateway.Event.boot_notification_request_data:type_name -> gateway.BootNotificationRequestData
	3, // 2: gateway.Event.log_data:type_name -> gateway.LogData
	3, // [3:3] is the sub-list for method output_type
	3, // [3:3] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_charge_point_gateway_format_proto_init() }
func file_charge_point_gateway_format_proto_init() {
	if File_charge_point_gateway_format_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_charge_point_gateway_format_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Event); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_charge_point_gateway_format_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*BootNotificationRequestData); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_charge_point_gateway_format_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*LogData); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	file_charge_point_gateway_format_proto_msgTypes[0].OneofWrappers = []interface{}{
		(*Event_BootNotificationRequestData)(nil),
		(*Event_LogData)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_charge_point_gateway_format_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_charge_point_gateway_format_proto_goTypes,
		DependencyIndexes: file_charge_point_gateway_format_proto_depIdxs,
		EnumInfos:         file_charge_point_gateway_format_proto_enumTypes,
		MessageInfos:      file_charge_point_gateway_format_proto_msgTypes,
	}.Build()
	File_charge_point_gateway_format_proto = out.File
	file_charge_point_gateway_format_proto_rawDesc = nil
	file_charge_point_gateway_format_proto_goTypes = nil
	file_charge_point_gateway_format_proto_depIdxs = nil
}
