import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCalls1611840950334 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    
        await queryRunner.createTable( new Table({
            name: 'calls',
            columns:[
                {
                    name:'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {   
                    name : 'price',
                    type: 'float',
                },
                {
                    name:'totalMinutes',
                    type: 'integer',
                },
                {
                    name:'user_id',
                    type: 'uuid',
                },
                {
                    name:'plan_id',
                    type: 'uuid',
                },
                {
                    name:'region_id',
                    type: 'uuid',
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
            ],
            foreignKeys:[
                {
                    name: 'user_id',
                    referencedTableName: 'users',
                    referencedColumnNames: ['id'],
                    columnNames: ['user_id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                },
                {
                    name: 'plan_id',
                    referencedTableName: 'plans',
                    referencedColumnNames: ['id'],
                    columnNames: ['plan_id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                },
                {
                    name: 'region_id',
                    referencedTableName: 'regions',
                    referencedColumnNames: ['id'],
                    columnNames: ['region_id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                }
            ]
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('calls')
    }

}
