import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateThemes1614981988815 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( 
            new Table({
            name: 'themes',
            columns:[
                {
                    name:'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name:'dsc_theme',
                    type: 'varchar',
                },
                {
                    name:'level_id',
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
                    name: 'LevelID',
                    referencedTableName: 'levels',
                    referencedColumnNames: ['id'],
                    columnNames: ['level_id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                }
            ]
        }))
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('themes')
    }

}
