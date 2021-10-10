protoc --proto_path=proto \
       --js_out=import_style=commonjs,binary:js-client proto/bookshelf_service.proto \
       --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:./js-client