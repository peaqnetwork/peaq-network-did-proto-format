import PackageDescription

let package = Package(name: "peaqDidProto",
    dependencies: [
        .package(name: "SwiftProtobuf", url: "https://github.com/apple/swift-protobuf.git", from: "1.25.2"),
    ]
)