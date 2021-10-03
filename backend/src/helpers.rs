use std::error::Error;

use sqlx::types::Uuid;
use tonic::{Code, Status};

pub fn convert_uuid(uuid: &str) -> Result<Uuid, Status> {
    match Uuid::parse_str(uuid) {
        Ok(uuid) => Ok(uuid),
        Err(err) => Err(Status::new(Code::InvalidArgument, format!("cannot decode uuid: {}", err))),
    }
}