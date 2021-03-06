import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTexts1615034077735 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
               name: 'texts',
               columns: [
                   {
                       name:'id',
                       type: 'uuid',
                       isPrimary: true,
                       generationStrategy: 'uuid',
                       default: 'uuid_generate_v4()'
                   },   
                   {
                       name: 'dsc_text',
                       type: 'varchar',
                       isUnique: true
                   },
                   {
                       name:'created_at',
                       type:'timestamp',
                       default:'now()'
                   },
                   {
                       name:'updated_at',
                       type:'timestamp',
                       default:'now()'
                   }
               ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('texts')
    }

}
