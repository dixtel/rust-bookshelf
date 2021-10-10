FROM rust:1.55.0

WORKDIR /app

COPY . .

RUN rustup component add rustfmt

RUN cargo install --path .

CMD [ "backend" ]