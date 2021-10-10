import * as grpcWeb from 'grpc-web';

import * as bookshelf_service_pb from './bookshelf_service_pb';


export class BookshelfServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  addBook(
    request: bookshelf_service_pb.AddBookRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: bookshelf_service_pb.AddBookResponse) => void
  ): grpcWeb.ClientReadableStream<bookshelf_service_pb.AddBookResponse>;

  removeBook(
    request: bookshelf_service_pb.RemoveBookRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: bookshelf_service_pb.RemoveBookResponse) => void
  ): grpcWeb.ClientReadableStream<bookshelf_service_pb.RemoveBookResponse>;

  updateBook(
    request: bookshelf_service_pb.UpdateBookRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: bookshelf_service_pb.UpdateBookResponse) => void
  ): grpcWeb.ClientReadableStream<bookshelf_service_pb.UpdateBookResponse>;

  listBooks(
    request: bookshelf_service_pb.ListBooksRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: bookshelf_service_pb.ListBooksResponse) => void
  ): grpcWeb.ClientReadableStream<bookshelf_service_pb.ListBooksResponse>;

  addAuthor(
    request: bookshelf_service_pb.AddAuthorRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: bookshelf_service_pb.AddAuthorResponse) => void
  ): grpcWeb.ClientReadableStream<bookshelf_service_pb.AddAuthorResponse>;

  removeAuthor(
    request: bookshelf_service_pb.RemoveAuthorRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: bookshelf_service_pb.RemoveAuthorResponse) => void
  ): grpcWeb.ClientReadableStream<bookshelf_service_pb.RemoveAuthorResponse>;

  updateAuthor(
    request: bookshelf_service_pb.UpdateAuthorRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: bookshelf_service_pb.UpdateAuthorResponse) => void
  ): grpcWeb.ClientReadableStream<bookshelf_service_pb.UpdateAuthorResponse>;

  listAuthors(
    request: bookshelf_service_pb.ListAuthorsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: bookshelf_service_pb.ListAuthorsResponse) => void
  ): grpcWeb.ClientReadableStream<bookshelf_service_pb.ListAuthorsResponse>;

}

export class BookshelfServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  addBook(
    request: bookshelf_service_pb.AddBookRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<bookshelf_service_pb.AddBookResponse>;

  removeBook(
    request: bookshelf_service_pb.RemoveBookRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<bookshelf_service_pb.RemoveBookResponse>;

  updateBook(
    request: bookshelf_service_pb.UpdateBookRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<bookshelf_service_pb.UpdateBookResponse>;

  listBooks(
    request: bookshelf_service_pb.ListBooksRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<bookshelf_service_pb.ListBooksResponse>;

  addAuthor(
    request: bookshelf_service_pb.AddAuthorRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<bookshelf_service_pb.AddAuthorResponse>;

  removeAuthor(
    request: bookshelf_service_pb.RemoveAuthorRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<bookshelf_service_pb.RemoveAuthorResponse>;

  updateAuthor(
    request: bookshelf_service_pb.UpdateAuthorRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<bookshelf_service_pb.UpdateAuthorResponse>;

  listAuthors(
    request: bookshelf_service_pb.ListAuthorsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<bookshelf_service_pb.ListAuthorsResponse>;

}

