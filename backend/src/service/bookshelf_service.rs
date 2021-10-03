#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AddBookRequest {
    #[prost(string, tag = "1")]
    pub title: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub author_id: ::prost::alloc::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AddBookResponse {
    #[prost(string, tag = "1")]
    pub id: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub title: ::prost::alloc::string::String,
    #[prost(string, tag = "3")]
    pub author_id: ::prost::alloc::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RemoveBookRequest {
    #[prost(string, tag = "1")]
    pub id: ::prost::alloc::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RemoveBookResponse {
    #[prost(string, tag = "1")]
    pub id: ::prost::alloc::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UpdateBookRequest {
    #[prost(string, tag = "1")]
    pub id: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub title: ::prost::alloc::string::String,
    #[prost(string, tag = "3")]
    pub author_id: ::prost::alloc::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UpdateBookResponse {
    #[prost(string, tag = "1")]
    pub id: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub title: ::prost::alloc::string::String,
    #[prost(string, tag = "3")]
    pub author_id: ::prost::alloc::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListBooksRequest {}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListBooksResponse {
    #[prost(message, repeated, tag = "1")]
    pub books: ::prost::alloc::vec::Vec<list_books_response::Book>,
}
/// Nested message and enum types in `ListBooksResponse`.
pub mod list_books_response {
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct Book {
        #[prost(string, tag = "1")]
        pub id: ::prost::alloc::string::String,
        #[prost(string, tag = "2")]
        pub title: ::prost::alloc::string::String,
        #[prost(string, tag = "3")]
        pub author_id: ::prost::alloc::string::String,
    }
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AddAuthorRequest {
    #[prost(string, tag = "1")]
    pub first_name: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub second_name: ::prost::alloc::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AddAuthorResponse {
    #[prost(string, tag = "1")]
    pub id: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub first_name: ::prost::alloc::string::String,
    #[prost(string, tag = "3")]
    pub second_name: ::prost::alloc::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RemoveAuthorRequest {
    #[prost(string, tag = "1")]
    pub id: ::prost::alloc::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RemoveAuthorResponse {
    #[prost(string, tag = "1")]
    pub id: ::prost::alloc::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UpdateAuthorRequest {
    #[prost(string, tag = "1")]
    pub id: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub first_name: ::prost::alloc::string::String,
    #[prost(string, tag = "3")]
    pub second_name: ::prost::alloc::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UpdateAuthorResponse {
    #[prost(string, tag = "1")]
    pub id: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub first_name: ::prost::alloc::string::String,
    #[prost(string, tag = "3")]
    pub second_name: ::prost::alloc::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListAuthorsRequest {}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListAuthorsResponse {
    #[prost(message, repeated, tag = "1")]
    pub authors: ::prost::alloc::vec::Vec<list_authors_response::Author>,
}
/// Nested message and enum types in `ListAuthorsResponse`.
pub mod list_authors_response {
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct Author {
        #[prost(string, tag = "1")]
        pub id: ::prost::alloc::string::String,
        #[prost(string, tag = "2")]
        pub first_name: ::prost::alloc::string::String,
        #[prost(string, tag = "3")]
        pub second_name: ::prost::alloc::string::String,
    }
}
#[doc = r" Generated server implementations."]
pub mod bookshelf_service_server {
    #![allow(unused_variables, dead_code, missing_docs, clippy::let_unit_value)]
    use tonic::codegen::*;
    #[doc = "Generated trait containing gRPC methods that should be implemented for use with BookshelfServiceServer."]
    #[async_trait]
    pub trait BookshelfService: Send + Sync + 'static {
        #[doc = " Book"]
        async fn add_book(
            &self,
            request: tonic::Request<super::AddBookRequest>,
        ) -> Result<tonic::Response<super::AddBookResponse>, tonic::Status>;
        async fn remove_book(
            &self,
            request: tonic::Request<super::RemoveBookRequest>,
        ) -> Result<tonic::Response<super::RemoveBookResponse>, tonic::Status>;
        async fn update_book(
            &self,
            request: tonic::Request<super::UpdateBookRequest>,
        ) -> Result<tonic::Response<super::UpdateBookResponse>, tonic::Status>;
        async fn list_books(
            &self,
            request: tonic::Request<super::ListBooksRequest>,
        ) -> Result<tonic::Response<super::ListBooksResponse>, tonic::Status>;
        #[doc = " Author"]
        async fn add_author(
            &self,
            request: tonic::Request<super::AddAuthorRequest>,
        ) -> Result<tonic::Response<super::AddAuthorResponse>, tonic::Status>;
        async fn remove_author(
            &self,
            request: tonic::Request<super::RemoveAuthorRequest>,
        ) -> Result<tonic::Response<super::RemoveAuthorResponse>, tonic::Status>;
        async fn update_author(
            &self,
            request: tonic::Request<super::UpdateAuthorRequest>,
        ) -> Result<tonic::Response<super::UpdateAuthorResponse>, tonic::Status>;
        async fn list_authors(
            &self,
            request: tonic::Request<super::ListAuthorsRequest>,
        ) -> Result<tonic::Response<super::ListAuthorsResponse>, tonic::Status>;
    }
    #[derive(Debug)]
    pub struct BookshelfServiceServer<T: BookshelfService> {
        inner: _Inner<T>,
        accept_compression_encodings: (),
        send_compression_encodings: (),
    }
    struct _Inner<T>(Arc<T>);
    impl<T: BookshelfService> BookshelfServiceServer<T> {
        pub fn new(inner: T) -> Self {
            let inner = Arc::new(inner);
            let inner = _Inner(inner);
            Self {
                inner,
                accept_compression_encodings: Default::default(),
                send_compression_encodings: Default::default(),
            }
        }
        pub fn with_interceptor<F>(inner: T, interceptor: F) -> InterceptedService<Self, F>
        where
            F: tonic::service::Interceptor,
        {
            InterceptedService::new(Self::new(inner), interceptor)
        }
    }
    impl<T, B> tonic::codegen::Service<http::Request<B>> for BookshelfServiceServer<T>
    where
        T: BookshelfService,
        B: Body + Send + Sync + 'static,
        B::Error: Into<StdError> + Send + 'static,
    {
        type Response = http::Response<tonic::body::BoxBody>;
        type Error = Never;
        type Future = BoxFuture<Self::Response, Self::Error>;
        fn poll_ready(&mut self, _cx: &mut Context<'_>) -> Poll<Result<(), Self::Error>> {
            Poll::Ready(Ok(()))
        }
        fn call(&mut self, req: http::Request<B>) -> Self::Future {
            let inner = self.inner.clone();
            match req.uri().path() {
                "/bookshelf_service.BookshelfService/AddBook" => {
                    #[allow(non_camel_case_types)]
                    struct AddBookSvc<T: BookshelfService>(pub Arc<T>);
                    impl<T: BookshelfService> tonic::server::UnaryService<super::AddBookRequest> for AddBookSvc<T> {
                        type Response = super::AddBookResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::AddBookRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).add_book(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = AddBookSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec).apply_compression_config(
                            accept_compression_encodings,
                            send_compression_encodings,
                        );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/bookshelf_service.BookshelfService/RemoveBook" => {
                    #[allow(non_camel_case_types)]
                    struct RemoveBookSvc<T: BookshelfService>(pub Arc<T>);
                    impl<T: BookshelfService> tonic::server::UnaryService<super::RemoveBookRequest>
                        for RemoveBookSvc<T>
                    {
                        type Response = super::RemoveBookResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::RemoveBookRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).remove_book(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = RemoveBookSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec).apply_compression_config(
                            accept_compression_encodings,
                            send_compression_encodings,
                        );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/bookshelf_service.BookshelfService/UpdateBook" => {
                    #[allow(non_camel_case_types)]
                    struct UpdateBookSvc<T: BookshelfService>(pub Arc<T>);
                    impl<T: BookshelfService> tonic::server::UnaryService<super::UpdateBookRequest>
                        for UpdateBookSvc<T>
                    {
                        type Response = super::UpdateBookResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::UpdateBookRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).update_book(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = UpdateBookSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec).apply_compression_config(
                            accept_compression_encodings,
                            send_compression_encodings,
                        );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/bookshelf_service.BookshelfService/ListBooks" => {
                    #[allow(non_camel_case_types)]
                    struct ListBooksSvc<T: BookshelfService>(pub Arc<T>);
                    impl<T: BookshelfService> tonic::server::UnaryService<super::ListBooksRequest> for ListBooksSvc<T> {
                        type Response = super::ListBooksResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::ListBooksRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).list_books(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = ListBooksSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec).apply_compression_config(
                            accept_compression_encodings,
                            send_compression_encodings,
                        );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/bookshelf_service.BookshelfService/AddAuthor" => {
                    #[allow(non_camel_case_types)]
                    struct AddAuthorSvc<T: BookshelfService>(pub Arc<T>);
                    impl<T: BookshelfService> tonic::server::UnaryService<super::AddAuthorRequest> for AddAuthorSvc<T> {
                        type Response = super::AddAuthorResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::AddAuthorRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).add_author(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = AddAuthorSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec).apply_compression_config(
                            accept_compression_encodings,
                            send_compression_encodings,
                        );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/bookshelf_service.BookshelfService/RemoveAuthor" => {
                    #[allow(non_camel_case_types)]
                    struct RemoveAuthorSvc<T: BookshelfService>(pub Arc<T>);
                    impl<T: BookshelfService>
                        tonic::server::UnaryService<super::RemoveAuthorRequest>
                        for RemoveAuthorSvc<T>
                    {
                        type Response = super::RemoveAuthorResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::RemoveAuthorRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).remove_author(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = RemoveAuthorSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec).apply_compression_config(
                            accept_compression_encodings,
                            send_compression_encodings,
                        );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/bookshelf_service.BookshelfService/UpdateAuthor" => {
                    #[allow(non_camel_case_types)]
                    struct UpdateAuthorSvc<T: BookshelfService>(pub Arc<T>);
                    impl<T: BookshelfService>
                        tonic::server::UnaryService<super::UpdateAuthorRequest>
                        for UpdateAuthorSvc<T>
                    {
                        type Response = super::UpdateAuthorResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::UpdateAuthorRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).update_author(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = UpdateAuthorSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec).apply_compression_config(
                            accept_compression_encodings,
                            send_compression_encodings,
                        );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/bookshelf_service.BookshelfService/ListAuthors" => {
                    #[allow(non_camel_case_types)]
                    struct ListAuthorsSvc<T: BookshelfService>(pub Arc<T>);
                    impl<T: BookshelfService> tonic::server::UnaryService<super::ListAuthorsRequest>
                        for ListAuthorsSvc<T>
                    {
                        type Response = super::ListAuthorsResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::ListAuthorsRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).list_authors(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = ListAuthorsSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec).apply_compression_config(
                            accept_compression_encodings,
                            send_compression_encodings,
                        );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                _ => Box::pin(async move {
                    Ok(http::Response::builder()
                        .status(200)
                        .header("grpc-status", "12")
                        .header("content-type", "application/grpc")
                        .body(empty_body())
                        .unwrap())
                }),
            }
        }
    }
    impl<T: BookshelfService> Clone for BookshelfServiceServer<T> {
        fn clone(&self) -> Self {
            let inner = self.inner.clone();
            Self {
                inner,
                accept_compression_encodings: self.accept_compression_encodings,
                send_compression_encodings: self.send_compression_encodings,
            }
        }
    }
    impl<T: BookshelfService> Clone for _Inner<T> {
        fn clone(&self) -> Self {
            Self(self.0.clone())
        }
    }
    impl<T: std::fmt::Debug> std::fmt::Debug for _Inner<T> {
        fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
            write!(f, "{:?}", self.0)
        }
    }
    impl<T: BookshelfService> tonic::transport::NamedService for BookshelfServiceServer<T> {
        const NAME: &'static str = "bookshelf_service.BookshelfService";
    }
}
