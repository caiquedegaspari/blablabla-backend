import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm'

@Entity('levels')
class Level {
  
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  dsc_level: string;
  
  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Level;