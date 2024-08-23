# # Golang code generator
# protoc -I=./ --go_opt=paths=source_relative --go_out golang/document $(find ./ -iname "did_document_format.proto")

# # Rust code generator
protoc -I=./  --rust_out rust/src $(find ./ -iname "*.proto")
protoc -I=./  --rust_out rust/src $(find ./ -iname "did_document_format.proto")
#rename the mod.rs to lib.rs
mv rust/src/mod.rs rust/src/lib.rs

# # Dart code generator
protoc -I=./ --dart_out=./dart/lib $(find ./ -iname "*.proto")
# protoc -I=./ --python_out python $(find ./ -iname "*.proto")

# Javascript code generator
# In the ./javascript directory there is a protc-gen-js which is built from the binary forked from the commit: https://github.com/surfingtomchen/protobuf-javascript/commit/b2b5f13b35634b8a297b3ef9ee36afddcd14cfd6
# This removes the 'List' which is automatically appended from the repeated keyword in the protoc doc. Below is the cmd to execute this binary to build with no "List".
protoc --plugin=protoc-gen-js=./javascript/protoc-gen-js --js_out=import_style=commonjs,binary:./javascript did_document_format.proto

# 'hotfix' to manually remove list from the protoc doc. Gives option to use default compiler, but a bsh script is used to remove the error.
# protoc --js_out=import_style=commonjs,binary:javascript did_document_format.proto && ./javascript/fix_js.bsh # fix to remove the 'List' keyword after generation
# Below is the original javascript compile cmd that uses protoc, but it automatically appends 'List' when the word "repeated" is used in the proto doc
# protoc --js_out=import_style=commonjs,binary:javascript did_document_format.proto # to generate for a did_document_format proto file

# # Golang code generator
# protoc -I=./ --go_opt=paths=source_relative --go_out golang/document $(find ./ -iname "did_document_format.proto")

# # Rust code generator
protoc -I=./  --rust_out rust/src $(find ./ -iname "*.proto")
protoc -I=./  --rust_out rust/src $(find ./ -iname "did_document_format.proto")
#rename the mod.rs to lib.rs
mv rust/src/mod.rs rust/src/lib.rs

# # Dart code generator
protoc -I=./ --dart_out=./dart/lib $(find ./ -iname "*.proto")
# protoc -I=./ --python_out python $(find ./ -iname "*.proto")

# Javascript code generator
# protoc -I=./ --js_out=import_style=commonjs,binary:javascript $(find ./ -iname "*.proto") # to generate for all proto files
protoc --js_out=import_style=commonjs,binary:javascript did_document_format.proto # to generate for a did_document_format proto file


# Swift code generator
protoc -I=./ --swift_out=./swift $(find ./ -iname "*.proto")

# Kotlin and Java code generator
protoc -I=./ --java_out=./java/lib/src/main/java --kotlin_out=./java/lib/src/main/kotlin  $(find ./ -iname "*.proto")