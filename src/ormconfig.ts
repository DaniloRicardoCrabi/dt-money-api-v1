/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as path from 'path';

 const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'dt-money',
  entities: [`${__dirname}/**/*.entity{.ts,.js}`],
  migrations: [path.join(__dirname, '/migrations/*{.ts,.js}')],
  keepConnectionAlive: false,
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export = typeormConfig;
