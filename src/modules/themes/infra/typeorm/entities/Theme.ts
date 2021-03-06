import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm'

@Entity('themes')
class Theme {
  
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  dsc_theme: string;
  
  
  @Column()
  level_id: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Theme;