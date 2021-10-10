fn main() -> std::io::Result<()> {
    tonic_build::configure()
        .build_server(true)
        .build_client(false)
        .out_dir("src/service")
        .compile(&["proto/bookshelf_service.proto"], &["."])?;
    Ok(())
}