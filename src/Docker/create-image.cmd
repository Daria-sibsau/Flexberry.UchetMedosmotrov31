docker build --no-cache -f SQL\Dockerfile.PostgreSql -t uchetmedosmotrov3/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t uchetmedosmotrov3/app ../..
