use std::str::FromStr;

use super::helpers;
use super::service::bookshelf_service::bookshelf_service_server::BookshelfService;
use crate::service::bookshelf_service::{
    list_authors_response::Author, list_books_response::Book, *,
};
use tonic::{Code, Request, Response, Status};

pub struct BookshelfServiceImpl {
    pub pool: sqlx::PgPool,
}

#[async_trait::async_trait]
impl BookshelfService for BookshelfServiceImpl {
    async fn add_book(
        &self,
        request: Request<AddBookRequest>,
    ) -> Result<Response<AddBookResponse>, Status> {
        let res = sqlx::query!(
            "INSERT INTO books(title, author_id) VALUES($1, $2) RETURNING *",
            request.get_ref().title,
            helpers::convert_uuid(&request.get_ref().author_id)?,
        )
        .fetch_one(&self.pool)
        .await
        .map_err(|err| Status::new(Code::Internal, format!("query error: {}", err)))?;

        return Ok(Response::new(AddBookResponse {
            id: res.id.to_string(),
            title: res.title,
            author_id: res.author_id.to_string(),
        }));
    }

    async fn remove_book(
        &self,
        request: Request<RemoveBookRequest>,
    ) -> Result<Response<RemoveBookResponse>, Status> {
        let res = sqlx::query!(
            "DELETE FROM books WHERE id = $1 RETURNING *",
            helpers::convert_uuid(&request.get_ref().id)?,
        )
        .fetch_one(&self.pool)
        .await
        .map_err(|err| Status::new(Code::Internal, format!("query error: {}", err)))?;

        return Ok(Response::new(RemoveBookResponse {
            id: res.id.to_string(),
        }));
    }

    async fn update_book(
        &self,
        request: Request<UpdateBookRequest>,
    ) -> Result<Response<UpdateBookResponse>, Status> {
        let res = sqlx::query!(
            "UPDATE books SET title = $1, author_id = $2 WHERE id = $3 RETURNING *",
            request.get_ref().title,
            helpers::convert_uuid(&request.get_ref().author_id)?,
            helpers::convert_uuid(&request.get_ref().id)?,
        )
        .fetch_one(&self.pool)
        .await
        .map_err(|err| Status::new(Code::Internal, format!("query error: {}", err)))?;

        return Ok(Response::new(UpdateBookResponse {
            id: res.id.to_string(),
            title: res.title,
            author_id: res.author_id.to_string(),
        }));
    }

    async fn list_books(
        &self,
        request: Request<ListBooksRequest>,
    ) -> Result<Response<ListBooksResponse>, Status> {
        let res = sqlx::query!("SELECT * FROM books",)
            .fetch_all(&self.pool)
            .await
            .map_err(|err| Status::new(Code::Internal, format!("query error: {}", err)))?;

        let mut books = vec![];

        for book in res {
            books.push(Book {
                id: book.id.to_string(),
                title: book.title,
                author_id: book.author_id.to_string(),
            })
        }

        return Ok(Response::new(ListBooksResponse { books }));
    }

    async fn add_author(
        &self,
        request: tonic::Request<AddAuthorRequest>,
    ) -> Result<tonic::Response<AddAuthorResponse>, tonic::Status> {
        let res = sqlx::query!(
            "INSERT INTO authors(first_name, second_name) VALUES($1, $2) RETURNING *",
            request.get_ref().first_name,
            request.get_ref().second_name,
        )
        .fetch_one(&self.pool)
        .await
        .map_err(|err| Status::new(Code::Internal, format!("query error: {}", err)))?;

        return Ok(Response::new(AddAuthorResponse {
            id: res.id.to_string(),
            first_name: res.first_name,
            second_name: res.second_name,
        }));
    }

    async fn remove_author(
        &self,
        request: tonic::Request<RemoveAuthorRequest>,
    ) -> Result<tonic::Response<RemoveAuthorResponse>, tonic::Status> {
        let res = sqlx::query!(
            "DELETE FROM authors WHERE id = $1 RETURNING *",
            helpers::convert_uuid(&request.get_ref().id)?,
        )
        .fetch_one(&self.pool)
        .await
        .map_err(|err| Status::new(Code::Internal, format!("query error: {}", err)))?;

        return Ok(Response::new(RemoveAuthorResponse {
            id: res.id.to_string(),
        }));
    }

    async fn update_author(
        &self,
        request: tonic::Request<UpdateAuthorRequest>,
    ) -> Result<tonic::Response<UpdateAuthorResponse>, tonic::Status> {
        let res = sqlx::query!(
            "UPDATE authors SET first_name = $1, second_name = $2 WHERE id = $3 RETURNING *",
            request.get_ref().first_name,
            request.get_ref().second_name,
            helpers::convert_uuid(&request.get_ref().id)?,
        )
        .fetch_one(&self.pool)
        .await
        .map_err(|err| Status::new(Code::Internal, format!("query error: {}", err)))?;

        return Ok(Response::new(UpdateAuthorResponse {
            id: res.id.to_string(),
            first_name: res.first_name,
            second_name: res.second_name,
        }));
    }

    async fn list_authors(
        &self,
        request: tonic::Request<ListAuthorsRequest>,
    ) -> Result<tonic::Response<ListAuthorsResponse>, tonic::Status> {
        let res = sqlx::query!("SELECT * FROM authors",)
            .fetch_all(&self.pool)
            .await
            .map_err(|err| Status::new(Code::Internal, format!("query error: {}", err)))?;

        return Ok(Response::new(ListAuthorsResponse {
            authors: res
                .iter()
                .map(|b| Author {
                    id: b.id.to_string(),
                    first_name: b.first_name.clone(),
                    second_name: b.second_name.clone(),
                })
                .collect(),
        }));
    }
}
