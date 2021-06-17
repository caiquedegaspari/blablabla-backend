/* import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterTableAudiosToCharacters1621725564433 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.dropColumn('audios', 'dsc_audio');
        await queryRunner.dropColumn('audios', 'audio_url');

        await queryRunner.renameTable('audios', 'characters')
        await queryRunner.addColumn('characters', new TableColumn({
            name: 'name',
            type:'varchar',
            isNullable: true
        }))
        await queryRunner.addColumn('characters', new TableColumn({
            name: 'avatar',
            type:'varchar',
            isNullable: true
        }))
        await queryRunner.addColumn('characters', new TableColumn({
            name: 'voice',
            type:'varchar',
            isNullable: true
        }))
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
 */