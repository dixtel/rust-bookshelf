use sqlx::types::uuid::Uuid;

#[derive(Debug, Clone, Copy)]
pub struct Book<'a> {
    pub id: Uuid,
    pub title: &'a str,
    pub author_id: Uuid,
}

#[derive(Debug, Clone, Copy)]
pub struct Author<'a> {
    pub id: Uuid,
    pub first_name: &'a str,
    pub second_name: &'a str,
}
