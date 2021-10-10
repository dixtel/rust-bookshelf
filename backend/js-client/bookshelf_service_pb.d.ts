import * as jspb from 'google-protobuf'



export class AddBookRequest extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): AddBookRequest;

  getAuthorId(): string;
  setAuthorId(value: string): AddBookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddBookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddBookRequest): AddBookRequest.AsObject;
  static serializeBinaryToWriter(message: AddBookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddBookRequest;
  static deserializeBinaryFromReader(message: AddBookRequest, reader: jspb.BinaryReader): AddBookRequest;
}

export namespace AddBookRequest {
  export type AsObject = {
    title: string,
    authorId: string,
  }
}

export class AddBookResponse extends jspb.Message {
  getId(): string;
  setId(value: string): AddBookResponse;

  getTitle(): string;
  setTitle(value: string): AddBookResponse;

  getAuthorId(): string;
  setAuthorId(value: string): AddBookResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddBookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddBookResponse): AddBookResponse.AsObject;
  static serializeBinaryToWriter(message: AddBookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddBookResponse;
  static deserializeBinaryFromReader(message: AddBookResponse, reader: jspb.BinaryReader): AddBookResponse;
}

export namespace AddBookResponse {
  export type AsObject = {
    id: string,
    title: string,
    authorId: string,
  }
}

export class RemoveBookRequest extends jspb.Message {
  getId(): string;
  setId(value: string): RemoveBookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveBookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveBookRequest): RemoveBookRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveBookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveBookRequest;
  static deserializeBinaryFromReader(message: RemoveBookRequest, reader: jspb.BinaryReader): RemoveBookRequest;
}

export namespace RemoveBookRequest {
  export type AsObject = {
    id: string,
  }
}

export class RemoveBookResponse extends jspb.Message {
  getId(): string;
  setId(value: string): RemoveBookResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveBookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveBookResponse): RemoveBookResponse.AsObject;
  static serializeBinaryToWriter(message: RemoveBookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveBookResponse;
  static deserializeBinaryFromReader(message: RemoveBookResponse, reader: jspb.BinaryReader): RemoveBookResponse;
}

export namespace RemoveBookResponse {
  export type AsObject = {
    id: string,
  }
}

export class UpdateBookRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateBookRequest;

  getTitle(): string;
  setTitle(value: string): UpdateBookRequest;

  getAuthorId(): string;
  setAuthorId(value: string): UpdateBookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBookRequest): UpdateBookRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateBookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBookRequest;
  static deserializeBinaryFromReader(message: UpdateBookRequest, reader: jspb.BinaryReader): UpdateBookRequest;
}

export namespace UpdateBookRequest {
  export type AsObject = {
    id: string,
    title: string,
    authorId: string,
  }
}

export class UpdateBookResponse extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateBookResponse;

  getTitle(): string;
  setTitle(value: string): UpdateBookResponse;

  getAuthorId(): string;
  setAuthorId(value: string): UpdateBookResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBookResponse): UpdateBookResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateBookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBookResponse;
  static deserializeBinaryFromReader(message: UpdateBookResponse, reader: jspb.BinaryReader): UpdateBookResponse;
}

export namespace UpdateBookResponse {
  export type AsObject = {
    id: string,
    title: string,
    authorId: string,
  }
}

export class ListBooksRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBooksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBooksRequest): ListBooksRequest.AsObject;
  static serializeBinaryToWriter(message: ListBooksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBooksRequest;
  static deserializeBinaryFromReader(message: ListBooksRequest, reader: jspb.BinaryReader): ListBooksRequest;
}

export namespace ListBooksRequest {
  export type AsObject = {
  }
}

export class ListBooksResponse extends jspb.Message {
  getBooksList(): Array<ListBooksResponse.Book>;
  setBooksList(value: Array<ListBooksResponse.Book>): ListBooksResponse;
  clearBooksList(): ListBooksResponse;
  addBooks(value?: ListBooksResponse.Book, index?: number): ListBooksResponse.Book;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBooksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBooksResponse): ListBooksResponse.AsObject;
  static serializeBinaryToWriter(message: ListBooksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBooksResponse;
  static deserializeBinaryFromReader(message: ListBooksResponse, reader: jspb.BinaryReader): ListBooksResponse;
}

export namespace ListBooksResponse {
  export type AsObject = {
    booksList: Array<ListBooksResponse.Book.AsObject>,
  }

  export class Book extends jspb.Message {
    getId(): string;
    setId(value: string): Book;

    getTitle(): string;
    setTitle(value: string): Book;

    getAuthorId(): string;
    setAuthorId(value: string): Book;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Book.AsObject;
    static toObject(includeInstance: boolean, msg: Book): Book.AsObject;
    static serializeBinaryToWriter(message: Book, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Book;
    static deserializeBinaryFromReader(message: Book, reader: jspb.BinaryReader): Book;
  }

  export namespace Book {
    export type AsObject = {
      id: string,
      title: string,
      authorId: string,
    }
  }

}

export class AddAuthorRequest extends jspb.Message {
  getFirstName(): string;
  setFirstName(value: string): AddAuthorRequest;

  getSecondName(): string;
  setSecondName(value: string): AddAuthorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddAuthorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddAuthorRequest): AddAuthorRequest.AsObject;
  static serializeBinaryToWriter(message: AddAuthorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddAuthorRequest;
  static deserializeBinaryFromReader(message: AddAuthorRequest, reader: jspb.BinaryReader): AddAuthorRequest;
}

export namespace AddAuthorRequest {
  export type AsObject = {
    firstName: string,
    secondName: string,
  }
}

export class AddAuthorResponse extends jspb.Message {
  getId(): string;
  setId(value: string): AddAuthorResponse;

  getFirstName(): string;
  setFirstName(value: string): AddAuthorResponse;

  getSecondName(): string;
  setSecondName(value: string): AddAuthorResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddAuthorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddAuthorResponse): AddAuthorResponse.AsObject;
  static serializeBinaryToWriter(message: AddAuthorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddAuthorResponse;
  static deserializeBinaryFromReader(message: AddAuthorResponse, reader: jspb.BinaryReader): AddAuthorResponse;
}

export namespace AddAuthorResponse {
  export type AsObject = {
    id: string,
    firstName: string,
    secondName: string,
  }
}

export class RemoveAuthorRequest extends jspb.Message {
  getId(): string;
  setId(value: string): RemoveAuthorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveAuthorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveAuthorRequest): RemoveAuthorRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveAuthorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveAuthorRequest;
  static deserializeBinaryFromReader(message: RemoveAuthorRequest, reader: jspb.BinaryReader): RemoveAuthorRequest;
}

export namespace RemoveAuthorRequest {
  export type AsObject = {
    id: string,
  }
}

export class RemoveAuthorResponse extends jspb.Message {
  getId(): string;
  setId(value: string): RemoveAuthorResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveAuthorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveAuthorResponse): RemoveAuthorResponse.AsObject;
  static serializeBinaryToWriter(message: RemoveAuthorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveAuthorResponse;
  static deserializeBinaryFromReader(message: RemoveAuthorResponse, reader: jspb.BinaryReader): RemoveAuthorResponse;
}

export namespace RemoveAuthorResponse {
  export type AsObject = {
    id: string,
  }
}

export class UpdateAuthorRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateAuthorRequest;

  getFirstName(): string;
  setFirstName(value: string): UpdateAuthorRequest;

  getSecondName(): string;
  setSecondName(value: string): UpdateAuthorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAuthorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAuthorRequest): UpdateAuthorRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateAuthorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAuthorRequest;
  static deserializeBinaryFromReader(message: UpdateAuthorRequest, reader: jspb.BinaryReader): UpdateAuthorRequest;
}

export namespace UpdateAuthorRequest {
  export type AsObject = {
    id: string,
    firstName: string,
    secondName: string,
  }
}

export class UpdateAuthorResponse extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateAuthorResponse;

  getFirstName(): string;
  setFirstName(value: string): UpdateAuthorResponse;

  getSecondName(): string;
  setSecondName(value: string): UpdateAuthorResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAuthorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAuthorResponse): UpdateAuthorResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateAuthorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAuthorResponse;
  static deserializeBinaryFromReader(message: UpdateAuthorResponse, reader: jspb.BinaryReader): UpdateAuthorResponse;
}

export namespace UpdateAuthorResponse {
  export type AsObject = {
    id: string,
    firstName: string,
    secondName: string,
  }
}

export class ListAuthorsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAuthorsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAuthorsRequest): ListAuthorsRequest.AsObject;
  static serializeBinaryToWriter(message: ListAuthorsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAuthorsRequest;
  static deserializeBinaryFromReader(message: ListAuthorsRequest, reader: jspb.BinaryReader): ListAuthorsRequest;
}

export namespace ListAuthorsRequest {
  export type AsObject = {
  }
}

export class ListAuthorsResponse extends jspb.Message {
  getAuthorsList(): Array<ListAuthorsResponse.Author>;
  setAuthorsList(value: Array<ListAuthorsResponse.Author>): ListAuthorsResponse;
  clearAuthorsList(): ListAuthorsResponse;
  addAuthors(value?: ListAuthorsResponse.Author, index?: number): ListAuthorsResponse.Author;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAuthorsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAuthorsResponse): ListAuthorsResponse.AsObject;
  static serializeBinaryToWriter(message: ListAuthorsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAuthorsResponse;
  static deserializeBinaryFromReader(message: ListAuthorsResponse, reader: jspb.BinaryReader): ListAuthorsResponse;
}

export namespace ListAuthorsResponse {
  export type AsObject = {
    authorsList: Array<ListAuthorsResponse.Author.AsObject>,
  }

  export class Author extends jspb.Message {
    getId(): string;
    setId(value: string): Author;

    getFirstName(): string;
    setFirstName(value: string): Author;

    getSecondName(): string;
    setSecondName(value: string): Author;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Author.AsObject;
    static toObject(includeInstance: boolean, msg: Author): Author.AsObject;
    static serializeBinaryToWriter(message: Author, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Author;
    static deserializeBinaryFromReader(message: Author, reader: jspb.BinaryReader): Author;
  }

  export namespace Author {
    export type AsObject = {
      id: string,
      firstName: string,
      secondName: string,
    }
  }

}

