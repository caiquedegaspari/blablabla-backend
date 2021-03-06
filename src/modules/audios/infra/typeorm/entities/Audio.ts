import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm'

@Entity('audios')
class Audio {
  
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  audio_url: string;

  
  @Column()
  dsc_audio: string;
  
  
  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Audio;