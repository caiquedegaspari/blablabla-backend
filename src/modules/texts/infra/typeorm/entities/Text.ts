import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm'

@Entity('texts')
class Text {
  
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column()
  dsc_text: string;
  
  
  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Text;