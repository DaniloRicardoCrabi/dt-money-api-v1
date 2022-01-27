import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1643245994821 implements MigrationInterface {
    name = 'migration1643245994821'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Transactions" DROP COLUMN "amount"`);
        await queryRunner.query(`ALTER TABLE "Transactions" ADD "amount" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Transactions" DROP COLUMN "amount"`);
        await queryRunner.query(`ALTER TABLE "Transactions" ADD "amount" character varying NOT NULL`);
    }

}
