# # Golang code generator
# protoc -I=./ --go_opt=paths=source_relative --go_out golang/document $(find ./ -iname "did_document_format.proto")

# # Rust code generator
protoc -I=./  --rust_out rust/src $(find ./ -iname "*.proto")
protoc -I=./  --rust_out rust/src $(find ./ -iname "did_document_format.proto")
#rename the mod.rs to lib.rs
mv rust/src/mod.rs rust/src/lib.rs

# # Dart code generator
# protoc -I=./ --dart_out=./dart/lib $(find ./ -iname "*.proto")
# protoc -I=./ --python_out python $(find ./ -iname "*.proto")

# Javascript code generator
# protoc -I=./ --js_out=import_style=commonjs,binary:javascript $(find ./ -iname "*.proto") # to generate for all proto files
protoc --js_out=import_style=commonjs,binary:javascript did_document_format.proto # to generate for a did_document_format proto file
