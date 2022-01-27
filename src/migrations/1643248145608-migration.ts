import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1643248145608 implements MigrationInterface {
    name = 'migration1643248145608'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Transactions" ADD "type" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Transactions" DROP COLUMN "type"`);
    }

}
