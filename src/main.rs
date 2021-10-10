pub mod handler;
pub mod service;
pub mod models;
pub mod helpers;

use std::sync::Arc;

use sqlx::PgPool;
use tonic::transport::server::Server;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    dotenv::dotenv()?;

    let conn = PgPool::connect(&dotenv::var("DATABASE_URL")?).await?;

    Server::builder()
        .add_service(
            service::bookshelf_service::bookshelf_service_server::BookshelfServiceServer::new(
                handler::BookshelfServiceImpl { pool: conn },
            ),
        )
        .serve(format!("127.0.0.1:{}", &dotenv::var("PORT")?).parse()?).await?;
    Ok(())
}
