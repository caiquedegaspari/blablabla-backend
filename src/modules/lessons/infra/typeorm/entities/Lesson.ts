import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm'

@Entity('lessons')
class Lesson {
  
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column("text", { array: true })
  text_array: string[]

  @Column("text", { array: true })
  audio_array: string[]

  @Column()
  level_id: string;
  
  @Column()
  theme_id: string;
  
  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Lesson;