/**
 * @fileoverview gRPC-Web generated client stub for bookshelf_service
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.bookshelf_service = require('./bookshelf_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.bookshelf_service.BookshelfServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.bookshelf_service.BookshelfServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bookshelf_service.AddBookRequest,
 *   !proto.bookshelf_service.AddBookResponse>}
 */
const methodDescriptor_BookshelfService_AddBook = new grpc.web.MethodDescriptor(
  '/bookshelf_service.BookshelfService/AddBook',
  grpc.web.MethodType.UNARY,
  proto.bookshelf_service.AddBookRequest,
  proto.bookshelf_service.AddBookResponse,
  /**
   * @param {!proto.bookshelf_service.AddBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bookshelf_service.AddBookResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bookshelf_service.AddBookRequest,
 *   !proto.bookshelf_service.AddBookResponse>}
 */
const methodInfo_BookshelfService_AddBook = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bookshelf_service.AddBookResponse,
  /**
   * @param {!proto.bookshelf_service.AddBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bookshelf_service.AddBookResponse.deserializeBinary
);


/**
 * @param {!proto.bookshelf_service.AddBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bookshelf_service.AddBookResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bookshelf_service.AddBookResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bookshelf_service.BookshelfServiceClient.prototype.addBook =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bookshelf_service.BookshelfService/AddBook',
      request,
      metadata || {},
      methodDescriptor_BookshelfService_AddBook,
      callback);
};


/**
 * @param {!proto.bookshelf_service.AddBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bookshelf_service.AddBookResponse>}
 *     Promise that resolves to the response
 */
proto.bookshelf_service.BookshelfServicePromiseClient.prototype.addBook =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bookshelf_service.BookshelfService/AddBook',
      request,
      metadata || {},
      methodDescriptor_BookshelfService_AddBook);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bookshelf_service.RemoveBookRequest,
 *   !proto.bookshelf_service.RemoveBookResponse>}
 */
const methodDescriptor_BookshelfService_RemoveBook = new grpc.web.MethodDescriptor(
  '/bookshelf_service.BookshelfService/RemoveBook',
  grpc.web.MethodType.UNARY,
  proto.bookshelf_service.RemoveBookRequest,
  proto.bookshelf_service.RemoveBookResponse,
  /**
   * @param {!proto.bookshelf_service.RemoveBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bookshelf_service.RemoveBookResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bookshelf_service.RemoveBookRequest,
 *   !proto.bookshelf_service.RemoveBookResponse>}
 */
const methodInfo_BookshelfService_RemoveBook = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bookshelf_service.RemoveBookResponse,
  /**
   * @param {!proto.bookshelf_service.RemoveBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bookshelf_service.RemoveBookResponse.deserializeBinary
);


/**
 * @param {!proto.bookshelf_service.RemoveBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bookshelf_service.RemoveBookResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bookshelf_service.RemoveBookResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bookshelf_service.BookshelfServiceClient.prototype.removeBook =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bookshelf_service.BookshelfService/RemoveBook',
      request,
      metadata || {},
      methodDescriptor_BookshelfService_RemoveBook,
      callback);
};


/**
 * @param {!proto.bookshelf_service.RemoveBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bookshelf_service.RemoveBookResponse>}
 *     Promise that resolves to the response
 */
proto.bookshelf_service.BookshelfServicePromiseClient.prototype.removeBook =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bookshelf_service.BookshelfService/RemoveBook',
      request,
      metadata || {},
      methodDescriptor_BookshelfService_RemoveBook);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bookshelf_service.UpdateBookRequest,
 *   !proto.bookshelf_service.UpdateBookResponse>}
 */
const methodDescriptor_BookshelfService_UpdateBook = new grpc.web.MethodDescriptor(
  '/bookshelf_service.BookshelfService/UpdateBook',
  grpc.web.MethodType.UNARY,
  proto.bookshelf_service.UpdateBookRequest,
  proto.bookshelf_service.UpdateBookResponse,
  /**
   * @param {!proto.bookshelf_service.UpdateBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bookshelf_service.UpdateBookResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bookshelf_service.UpdateBookRequest,
 *   !proto.bookshelf_service.UpdateBookResponse>}
 */
const methodInfo_BookshelfService_UpdateBook = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bookshelf_service.UpdateBookResponse,
  /**
   * @param {!proto.bookshelf_service.UpdateBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bookshelf_service.UpdateBookResponse.deserializeBinary
);


/**
 * @param {!proto.bookshelf_service.UpdateBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bookshelf_service.UpdateBookResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bookshelf_service.UpdateBookResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bookshelf_service.BookshelfServiceClient.prototype.updateBook =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bookshelf_service.BookshelfService/UpdateBook',
      request,
      metadata || {},
      methodDescriptor_BookshelfService_UpdateBook,
      callback);
};


/**
 * @param {!proto.bookshelf_service.UpdateBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bookshelf_service.UpdateBookResponse>}
 *     Promise that resolves to the response
 */
proto.bookshelf_service.BookshelfServicePromiseClient.prototype.updateBook =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bookshelf_service.BookshelfService/UpdateBook',
      request,
      metadata || {},
      methodDescriptor_BookshelfService_UpdateBook);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bookshelf_service.ListBooksRequest,
 *   !proto.bookshelf_service.ListBooksResponse>}
 */
const methodDescriptor_BookshelfService_ListBooks = new grpc.web.MethodDescriptor(
  '/bookshelf_service.BookshelfService/ListBooks',
  grpc.web.MethodType.UNARY,
  proto.bookshelf_service.ListBooksRequest,
  proto.bookshelf_service.ListBooksResponse,
  /**
   * @param {!proto.bookshelf_service.ListBooksRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bookshelf_service.ListBooksResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bookshelf_service.ListBooksRequest,
 *   !proto.bookshelf_service.ListBooksResponse>}
 */
const methodInfo_BookshelfService_ListBooks = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bookshelf_service.ListBooksResponse,
  /**
   * @param {!proto.bookshelf_service.ListBooksRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bookshelf_service.ListBooksResponse.deserializeBinary
);


/**
 * @param {!proto.bookshelf_service.ListBooksRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bookshelf_service.ListBooksResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bookshelf_service.ListBooksResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bookshelf_service.BookshelfServiceClient.prototype.listBooks =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bookshelf_service.BookshelfService/ListBooks',
      request,
      metadata || {},
      methodDescriptor_BookshelfService_ListBooks,
      callback);
};


/**
 * @param {!proto.bookshelf_service.ListBooksRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bookshelf_service.ListBooksResponse>}
 *     Promise that resolves to the response
 */
proto.bookshelf_service.BookshelfServicePromiseClient.prototype.listBooks =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bookshelf_service.BookshelfService/ListBooks',
      request,
      metadata || {},
      methodDescriptor_BookshelfService_ListBooks);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bookshelf_service.AddAuthorRequest,
 *   !proto.bookshelf_service.AddAuthorResponse>}
 */
const methodDescriptor_BookshelfService_AddAuthor = new grpc.web.MethodDescriptor(
  '/bookshelf_service.BookshelfService/AddAuthor',
  grpc.web.MethodType.UNARY,
  proto.bookshelf_service.AddAuthorRequest,
  proto.bookshelf_service.AddAuthorResponse,
  /**
   * @param {!proto.bookshelf_service.AddAuthorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bookshelf_service.AddAuthorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bookshelf_service.AddAuthorRequest,
 *   !proto.bookshelf_service.AddAuthorResponse>}
 */
const methodInfo_BookshelfService_AddAuthor = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bookshelf_service.AddAuthorResponse,
  /**
   * @param {!proto.bookshelf_service.AddAuthorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bookshelf_service.AddAuthorResponse.deserializeBinary
);


/**
 * @param {!proto.bookshelf_service.AddAuthorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bookshelf_service.AddAuthorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bookshelf_service.AddAuthorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bookshelf_service.BookshelfServiceClient.prototype.addAuthor =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bookshelf_service.BookshelfService/AddAuthor',
      request,
      metadata || {},
      methodDescriptor_BookshelfService_AddAuthor,
      callback);
};


/**
 * @param {!proto.bookshelf_service.AddAuthorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bookshelf_service.AddAuthorResponse>}
 *     Promise that resolves to the response
 */
proto.bookshelf_service.BookshelfServicePromiseClient.prototype.addAuthor =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bookshelf_service.BookshelfService/AddAuthor',
      request,
      metadata || {},
      methodDescriptor_BookshelfService_AddAuthor);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bookshelf_service.RemoveAuthorRequest,
 *   !proto.bookshelf_service.RemoveAuthorResponse>}
 */
const methodDescriptor_BookshelfService_RemoveAuthor = new grpc.web.MethodDescriptor(
  '/bookshelf_service.BookshelfService/RemoveAuthor',
  grpc.web.MethodType.UNARY,
  proto.bookshelf_service.RemoveAuthorRequest,
  proto.bookshelf_service.RemoveAuthorResponse,
  /**
   * @param {!proto.bookshelf_service.RemoveAuthorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bookshelf_service.RemoveAuthorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bookshelf_service.RemoveAuthorRequest,
 *   !proto.bookshelf_service.RemoveAuthorResponse>}
 */
const methodInfo_BookshelfService_RemoveAuthor = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bookshelf_service.RemoveAuthorResponse,
  /**
   * @param {!proto.bookshelf_service.RemoveAuthorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bookshelf_service.RemoveAuthorResponse.deserializeBinary
);


/**
 * @param {!proto.bookshelf_service.RemoveAuthorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bookshelf_service.RemoveAuthorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bookshelf_service.RemoveAuthorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bookshelf_service.BookshelfServiceClient.prototype.removeAuthor =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bookshelf_service.BookshelfService/RemoveAuthor',
      request,
      metadata || {},
      methodDescriptor_BookshelfService_RemoveAuthor,
      callback);
};


/**
 * @param {!proto.bookshelf_service.RemoveAuthorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bookshelf_service.RemoveAuthorResponse>}
 *     Promise that resolves to the response
 */
proto.bookshelf_service.BookshelfServicePromiseClient.prototype.removeAuthor =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bookshelf_service.BookshelfService/RemoveAuthor',
      request,
      metadata || {},
      methodDescriptor_BookshelfService_RemoveAuthor);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bookshelf_service.UpdateAuthorRequest,
 *   !proto.bookshelf_service.UpdateAuthorResponse>}
 */
const methodDescriptor_BookshelfService_UpdateAuthor = new grpc.web.MethodDescriptor(
  '/bookshelf_service.BookshelfService/UpdateAuthor',
  grpc.web.MethodType.UNARY,
  proto.bookshelf_service.UpdateAuthorRequest,
  proto.bookshelf_service.UpdateAuthorResponse,
  /**
   * @param {!proto.bookshelf_service.UpdateAuthorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bookshelf_service.UpdateAuthorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bookshelf_service.UpdateAuthorRequest,
 *   !proto.bookshelf_service.UpdateAuthorResponse>}
 */
const methodInfo_BookshelfService_UpdateAuthor = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bookshelf_service.UpdateAuthorResponse,
  /**
   * @param {!proto.bookshelf_service.UpdateAuthorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bookshelf_service.UpdateAuthorResponse.deserializeBinary
);


/**
 * @param {!proto.bookshelf_service.UpdateAuthorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bookshelf_service.UpdateAuthorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bookshelf_service.UpdateAuthorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bookshelf_service.BookshelfServiceClient.prototype.updateAuthor =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bookshelf_service.BookshelfService/UpdateAuthor',
      request,
      metadata || {},
      methodDescriptor_BookshelfService_UpdateAuthor,
      callback);
};


/**
 * @param {!proto.bookshelf_service.UpdateAuthorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bookshelf_service.UpdateAuthorResponse>}
 *     Promise that resolves to the response
 */
proto.bookshelf_service.BookshelfServicePromiseClient.prototype.updateAuthor =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bookshelf_service.BookshelfService/UpdateAuthor',
      request,
      metadata || {},
      methodDescriptor_BookshelfService_UpdateAuthor);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bookshelf_service.ListAuthorsRequest,
 *   !proto.bookshelf_service.ListAuthorsResponse>}
 */
const methodDescriptor_BookshelfService_ListAuthors = new grpc.web.MethodDescriptor(
  '/bookshelf_service.BookshelfService/ListAuthors',
  grpc.web.MethodType.UNARY,
  proto.bookshelf_service.ListAuthorsRequest,
  proto.bookshelf_service.ListAuthorsResponse,
  /**
   * @param {!proto.bookshelf_service.ListAuthorsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bookshelf_service.ListAuthorsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bookshelf_service.ListAuthorsRequest,
 *   !proto.bookshelf_service.ListAuthorsResponse>}
 */
const methodInfo_BookshelfService_ListAuthors = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bookshelf_service.ListAuthorsResponse,
  /**
   * @param {!proto.bookshelf_service.ListAuthorsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bookshelf_service.ListAuthorsResponse.deserializeBinary
);


/**
 * @param {!proto.bookshelf_service.ListAuthorsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bookshelf_service.ListAuthorsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bookshelf_service.ListAuthorsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bookshelf_service.BookshelfServiceClient.prototype.listAuthors =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bookshelf_service.BookshelfService/ListAuthors',
      request,
      metadata || {},
      methodDescriptor_BookshelfService_ListAuthors,
      callback);
};


/**
 * @param {!proto.bookshelf_service.ListAuthorsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bookshelf_service.ListAuthorsResponse>}
 *     Promise that resolves to the response
 */
proto.bookshelf_service.BookshelfServicePromiseClient.prototype.listAuthors =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bookshelf_service.BookshelfService/ListAuthors',
      request,
      metadata || {},
      methodDescriptor_BookshelfService_ListAuthors);
};


module.exports = proto.bookshelf_service;

