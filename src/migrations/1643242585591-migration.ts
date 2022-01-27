import { MigrationInterface, QueryRunner } from 'typeorm';

export class migration1643242585591 implements MigrationInterface {
  name = 'migration1643242585591';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "Transactions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                                    "title" character varying NOT NULL,
                                    "amount" character varying NOT NULL,
                                    "category" character varying NOT NULL,
                                    "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                                     CONSTRAINT "PK_7761bf9766670b894ff2fdb3700" PRIMARY KEY ("id")
                                   )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "Transactions"`);
  }
}
