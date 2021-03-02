import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateRegions1611840912920 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
               name: 'regions',
               columns: [
                   {
                       name:'id',
                       type: 'uuid',
                       isPrimary: true,
                       generationStrategy: 'uuid',
                       default: 'uuid_generate_v4()'
                   },
                   {
                       name:'origin',
                       type: 'varchar',
                       isNullable:false
                   },
                   {
                       name: 'destination',
                       type: 'varchar',
                       isNullable: false
                   },
                   {
                    name: 'pricePerMinute',
                    type: 'float',
                    isNullable: false
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
        await queryRunner.dropTable('regions')
    }

}
