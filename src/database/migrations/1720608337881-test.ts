import { MigrationInterface, QueryRunner } from 'typeorm';

export class Test1720608337881 implements MigrationInterface {
  name = 'Test1720608337881';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, 
      "firstName" character varying NOT NULL,
      "lastName" character varying NOT NULL,
      "email" character varying NOT NULL,
      "password" character varying NOT NULL,
      "refreshToken" character varying NOT NULL,
      "status" boolean NOT NULL DEFAULT true,
      "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
      "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
      CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
